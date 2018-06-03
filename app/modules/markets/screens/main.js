import React, { Component } from 'react';
import { Container, Header, Tabs, Tab, TabHeading, Button } from 'native-base';
import { primaryColor } from '../../commons/const_style';
import { Text,View } from 'react-native'
import commonColor from 'native-base/dist/src/theme/variables/commonColor';
import { List } from './index';
import { connect } from 'react-redux'


// Actions
import { getAllData as getADXData } from '../adx/action'
import { getAllData as getBTCData } from '../btc/action'
// 

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      currentIndexTab: 0
    }

  }
  componentDidMount() {
    this.props.getBTCData()
    this.props.getADXData()
  }
  
  render() {
    console.log(this.props)
    return (
    <Container style={{backgroundColor:'black'}} >
        <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor:'yellow'}} onChangeTab={({i,ref,from})=>this.setState({currentIndexTab:i})}>
        <Tab heading="BTC" activeTextStyle={{color:'yellow'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
            <List navigation={this.props.navigation} data={this.props.reducer.btcReducer.data} isDetail={true}></List>
          </Tab>
          <Tab heading="ADX" activeTextStyle={{color:'yellow'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
            <List navigation={this.props.navigation} data={this.props.reducer.adxReducer.data} isDetail={true}></List>
          </Tab>
          <Tab heading="BNB"  activeTextStyle={{color:'yellow'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
          </Tab>
          <Tab heading="ASD" activeTextStyle={{color:'yellow'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
          </Tab>
          <Tab heading="DCT" activeTextStyle={{color:'yellow'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
          </Tab>
        </Tabs>
      </Container>
    )
  }
};

const style = {
  tab_header:{
    backgroundColor:primaryColor
  },
  tab_header_active:{
    backgroundColor:primaryColor
  },
  text_header:{
    color:'white',
    fontSize:12
  },
  header:{
    alignItems: 'center',
    backgroundColor:primaryColor
  }
}

function mapStateToProps(state){
  return{
    reducer: state
  }
}
function dispatchToProps(dispatch){
  return{
    getBTCData: () => dispatch(getBTCData()),
    getADXData : () => dispatch(getADXData())
  }
}
export default connect(mapStateToProps,dispatchToProps)(Main)