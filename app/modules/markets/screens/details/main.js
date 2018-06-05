import React, { Component } from 'react';
import { View,Text, Dimensions} from 'react-native';
import { Row,Column as Col } from 'react-native-flexbox-grid'

import { Container, Content, Tabs, Tab, Button} from 'native-base';
import { primaryColor } from '../../../commons/const_style';


//Our Component
import { Status,Chart, Book, Market} from './components'
//

export default class Main extends Component {
    
    constructor(props) {
        super(props);

    }
  
    
    
  render() {

    return (
        <Container style={{ backgroundColor: '#fff' }}>
            <Content>
            <Status></Status>
            <Chart></Chart>
            <Tabs 
                lazy={false}
                tabContainerStyle={{
                    elevation:0
                }}
                style={style.tabs}
                initialPage={0} style={style.tab_header}
                tabBarUnderlineStyle={{backgroundColor:'#2B79C9'}} 
                onChangeTab={({i,ref,from})=>this.setState({currentIndexTab:i})}>
            <Tab heading = "Order Book"
                tabStyle={{backgroundColor: '#fff'}} 
                textStyle={{color: 'gray'}} 
                activeTabStyle={{backgroundColor: '#fff', borderBottomColor: '#2B79C7'}} 
                activeTextStyle={{color: '#2B79C7', fontWeight: 'normal'}}>
                <Book></Book>
            </Tab>
            <Tab heading="Aktifitas Transaksi"
                tabStyle={{backgroundColor: '#fff'}} 
                textStyle={{color: 'gray'}} 
                activeTabStyle={{backgroundColor: '#fff', borderBottomColor: '#2B79C7'}} 
                activeTextStyle={{color: '#2B79C7', fontWeight: 'normal'}}>
                <Market></Market>
            </Tab>
        </Tabs>
            </Content>
        </Container>
    )
  }
};
const style = {
    tab_header:{
      backgroundColor:'white'
    },
    tab_header_active:{
      backgroundColor:'white'
    },
    text_header:{
      color:'black',
      fontSize:12
    },
    header:{
      alignItems: 'center',
      backgroundColor:primaryColor
    },
    Mtable: {borderBottomColor:'#e7e7e7',borderBottomWidth:1, padding: 10},
    MtableRows:{borderBottomColor:'#e7e7e7',borderBottomWidth:0.5, padding: 5},
    MtableContent:{fontWeight: 'bold', padding : 3}
  }