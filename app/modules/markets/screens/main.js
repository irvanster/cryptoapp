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
        <Icon name='ios-search' style={{ color : '#777', fontSize: 20 }} />
      </Right>
    </Header>
    {/* #UI001A1 remove tabs */}
    <List navigation={this.props.navigation} data={this.props.reducer.btcReducer.data} isDetail={true}></List>
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