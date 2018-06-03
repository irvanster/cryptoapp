import React, { Component } from 'react';
import {View,FlatList,Text,Dimensions,StyleSheet} from 'react-native'
import { Row, Column as Col } from 'react-native-flexbox-grid';
import Swiper from 'react-native-swiper';
import { Left, Right } from 'native-base';

export default class TopHeader extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: 
            [
                {
                    pairFrom :'BNB',
                    pairTo:'BTC',
                    lastPrice : 100000,
                    difference : 0.36
                },
                {
                    pairFrom :'BNB',
                    pairTo:'BTC',
                    lastPrice : 100000,
                    difference : 0.36
                },
                {
                    pairFrom :'BNB',
                    pairTo:'BTC',
                    lastPrice : 100000,
                    difference : 0.36
                },
                {
                    pairFrom :'BNB',
                    pairTo:'BTC',
                    lastPrice : 100000,
                    difference : 0.36
                },
                {
                    pairFrom :'BNB',
                    pairTo:'BTC',
                    lastPrice : 100000,
                    difference : 0.36
                }
            ]
        }
    }
    
  render() {
    return (
     <View style={styles.wrapper}  >
        <Swiper showsButtons={false} paginationStyle={{position:'absolute', bottom: 5}} activeDotColor={'yellow'} dotColor={'#58606c'}>
        <View style={styles.slide}>
            <Row size={3}>
                <Col sm={1} style={[styles.currency_parent_item]}>
            
                    <Text style={[styles.text_header]}>BNB / BTC</Text>
                    <Text style={[styles.text_lastPrice,{color:'#d8056c'}]}>0,00194056</Text>
                    <Text style={[styles.text_difference,{color:'#00c087'}]}>+12.27%</Text>
                </Col>
                <Col sm={1} style={[styles.currency_parent_item]}>
            
                    <Text style={[styles.text_header]}>BNB / BTC</Text>
                    <Text style={[styles.text_lastPrice,{color:'#00c087'}]}>0,00194056</Text>
                    <Text style={[styles.text_difference,{color:'#d8056c'}]}>-5.27%</Text>
                </Col>
                <Col sm={1} style={[styles.currency_parent_item]}>
            
                    <Text style={[styles.text_header]}>BNB / BTC</Text>
                    <Text style={[styles.text_lastPrice,]}>0,00194056</Text>
                    <Text style={[styles.text_difference,{color:'#00c087'}]}>+12.27%</Text>
                </Col>
            </Row>
        </View>
        <View style={styles.slide}>
            <Row size={3}>
                <Col sm={1} style={[styles.currency_parent_item]}>
            
                    <Text style={[styles.text_header]}>BNB / BTC</Text>
                    <Text style={[styles.text_lastPrice,{color:'#d8056c'}]}>0,00194056</Text>
                    <Text style={[styles.text_difference,{color:'#00c087'}]}>+12.27%</Text>
                </Col>
                <Col sm={1} style={[styles.currency_parent_item]}>
            
                    <Text style={[styles.text_header]}>BNB / BTC</Text>
                    <Text style={[styles.text_lastPrice,{color:'#00c087'}]}>0,00194056</Text>
                    <Text style={[styles.text_difference,{color:'#d8056c'}]}>-5.27%</Text>
                </Col>
                <Col sm={1} style={[styles.currency_parent_item]}>
            
                    <Text style={[styles.text_header]}>BNB / BTC</Text>
                    <Text style={[styles.text_lastPrice,]}>0,00194056</Text>
                    <Text style={[styles.text_difference,{color:'#00c087'}]}>+12.27%</Text>
                </Col>
            </Row>
        </View>
        <View style={styles.slide}>
            <Row size={3}>
                <Col sm={1} style={[styles.currency_parent_item]}>
            
                    <Text style={[styles.text_header]}>BNB / BTC</Text>
                    <Text style={[styles.text_lastPrice,{color:'#d8056c'}]}>0,00194056</Text>
                    <Text style={[styles.text_difference,{color:'#00c087'}]}>+12.27%</Text>
                </Col>
                <Col sm={1} style={[styles.currency_parent_item]}>
            
                    <Text style={[styles.text_header]}>BNB / BTC</Text>
                    <Text style={[styles.text_lastPrice,{color:'#00c087'}]}>0,00194056</Text>
                    <Text style={[styles.text_difference,{color:'#d8056c'}]}>-5.27%</Text>
                </Col>
                <Col sm={1} style={[styles.currency_parent_item]}>
            
                    <Text style={[styles.text_header]}>BNB / BTC</Text>
                    <Text style={[styles.text_lastPrice,]}>0,00194056</Text>
                    <Text style={[styles.text_difference,{color:'#00c087'}]}>+12.27%</Text>
                </Col>
            </Row>
        </View>
      </Swiper>
      <View style={{borderTopColor:'#323c45',borderTopWidth:1,backgroundColor:'#1a212a',paddingRight:10,paddingTop:10,paddingBottom:10}}>
          <Text style={{color:'white'}}>Binance Lists Theta Token</Text>
      </View>
      </View>
    )
  }
};
const styles = StyleSheet.create({
    wrapper: {
        flex:1,


    },
    currency_parent_item:{borderRightColor:'#323c45',borderRightWidth:0.3},
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    text_header:{
        fontSize:14,
        color:'#828a98',
        textAlign:'center'
    },
    text_lastPrice:{
        fontSize:18,
        color:'white',
        textAlign:'center'
    },text_difference:{
        fontSize:12,
        color:'white',
        textAlign:'center'
    }
  })