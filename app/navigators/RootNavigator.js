import { StackNavigator,TabNavigator} from 'react-navigation';

import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'

import { Main as MainMarket } from '../modules/markets/screens/index'
import { HomeMain } from '../modules/homes'
import DetailCoin from '../modules/markets/screens/details/main'
import Trades from '../modules/trades/main'
import { Account,Home } from '../main/screens'
import { Login } from '../modules/auth/screens'

import {primaryColor} from '../modules/commons/const_style'
import { Icon, Root } from 'native-base'
import React from 'react'

const tabOptions = {    
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  backBehavior: 'none',
  lazy : false,
  

navigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    let iconType;
    if (routeName === 'HomeMain') {
      iconName = `ios-bonfire${focused ? '' : '-outline'}`;
    } else if (routeName === 'Market') {
      iconName = 'line-graph';
      iconType = 'Entypo';
    }else if (routeName === 'Trades') {
        iconName = 'flow-tree';
        iconType = 'Entypo';
    }else if (routeName === 'Funds') {
      iconName = 'md-cash';
    }else if (routeName === 'Account') {
      iconName = `ios-contacts${focused ? '' : '-outline'}`;
    }

    // You can return any component that you like here! We usually use an
    // icon component from react-native-vector-icons
    return <Icon name={iconName} type={iconType} style={{ color : tintColor, fontSize: 15 }} />;
  },
}),
  tabBarOptions: {
    activeTintColor: '#2B79C9',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 10,
    },
    style: {
        backgroundColor: '#fff',
        padding: 0
    },
    showIcon: true,
    renderIndicator: () => null,
    allowFontScaling : false,

  },

}
const MainNavigator = StackNavigator({
  Home :{
    screen : Home,
    navigationOptions:{
      header:null
    }
  },DetailCoin:{
    screen : DetailCoin,
    navigationOptions:({navigation})=>({
      title : typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'Detail Market': navigation.state.params.title
    })
  }, Login: {
    screen : Login,
    navigationOptions: {
      header: null
    }
  }
})
const RootNavigator = TabNavigator({
  HomeMain: {
    screen : MainNavigator,
    navigationOptions:{
      title: 'Home',
      header: null,
    }
  },
  Market: {
    screen: MainMarket,
    navigationOptions: {
      title: 'Market',
    }
  },
  Trades: {
    screen: Trades,
    navigationOptions: {
      title: 'Trades',
      header: null,

    }
  },
  Funds: {
    screen: Account,
    navigationOptions: {
      title: 'Funds',
      header: null,
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      title: 'Account',
      header: null,
    }
  }
  },tabOptions)





export default RootNavigator