import React, { Component } from 'react';
import { Container, Header, Tabs, Tab, TabHeading, Button, Left, Right, Body, Title, Icon } from 'native-base';
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
    <Container style={{backgroundColor:'#fff'}} >
    <Header style={style.header} noShadow>
      <Left style={style.titleCentering}/>
      <Body style={style.titleCentering}>
        <Title style={style.headerTitle}>Markets</Title>
      </Body>
      <Right style={style.titleCentering}>
        <Icon name='ios-search' />
      </Right>
    </Header>
        <Tabs
          initialPage={0} 
          tabBarUnderlineStyle={{backgroundColor:'#2B79C9'}}
          onChangeTab={({i,ref,from})=>this.setState({currentIndexTab:i})}>
          <Tab heading="BTC" activeTextStyle={{color:'#2B79C9'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
            <List navigation={this.props.navigation} data={this.props.reducer.btcReducer.data} isDetail={true}></List>
          </Tab>
          <Tab heading="ADX" activeTextStyle={{color:'#2B79C9'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
            <List navigation={this.props.navigation} data={this.props.reducer.adxReducer.data} isDetail={true}></List>
          </Tab>
          <Tab heading="BNB"  activeTextStyle={{color:'#2B79C9'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
          <List navigation={this.props.navigation} data={this.props.reducer.btcReducer.data} isDetail={true}></List>
          </Tab>
          <Tab heading="ASD" activeTextStyle={{color:'#2B79C9'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
          <List navigation={this.props.navigation} data={this.props.reducer.btcReducer.data} isDetail={true}></List>
          </Tab>
          <Tab heading="DCT" activeTextStyle={{color:'#2B79C9'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
          <List navigation={this.props.navigation} data={this.props.reducer.btcReducer.data} isDetail={true}></List>
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
  header: {
    backgroundColor: 'white'
  },
  headerTitle:{
      textAlign: 'center',
      color: '#5a667c',
      marginLeft : 20,
  },
  titleCentering: {
      flex: 1
  },
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