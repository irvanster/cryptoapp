import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';

import RootNavigator from './app/navigators/RootNavigator';
import store from './app/redux/store';
import {
  createNavigationPropConstructor,       
  createNavigationReducer,               
  createReactNavigationReduxMiddleware, 
  initializeListeners,                  
} from 'react-navigation-redux-helpers';

import { AppNavigator } from 'react-native-navigation-actions';

const addListener = createReduxBoundAddListener("root");

const navigationPropConstructor = createNavigationPropConstructor("root");

class App extends Component {
  render() {
    return (
      <RootNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

// temp removed Navigator-Redux/
// Replace with AppWithNavigation to rollback
const AppNav = AppNavigator(RootNavigator)
//
const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNav></AppNav>
      </Provider>
    );
  }
}
