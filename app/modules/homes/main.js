import React, { Component } from 'react'
import { View, Text, Image } from "react-native"
import { Container, Header, Content, Card } from 'native-base'

import { Menu, Market,TopHeader, ImageHeader} from './components'

import {primaryColor} from './../commons/const_style'

import Swiper from 'react-native-swiper'
import TopBtcVolume from './components/topVolumeBTC'
 
export default class HomeMain extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true
    }
    
  render() {
    return (
        <Container style={{backgroundColor:'#12151C'}}>
            <Content>
            <View>
                <ImageHeader></ImageHeader>
            <View style={{backgroundColor:'#1a212a',height:140,paddingLeft:10,paddingRight:10}}>
                <TopHeader></TopHeader>
            </View>
            </View>
            <View style={[styles.item,{height:80}]}>
                <Menu></Menu>
            </View>
            <View style={{marginTop:10}}>
                <TopBtcVolume></TopBtcVolume>
            </View>
            <View style={{marginTop:10}}>
                <Market></Market>
            </View>
            </Content>
        </Container>
    )
  }
};

const styles = {
    item:{
        backgroundColor: primaryColor,
        marginTop: 10,
    },  
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        height:30,
        width:30,
        backgroundColor:'#FDD07D',
        borderRadius:35
      },
      paginationText: {
        textAlign:'center',
        color: 'black',
        fontSize: 20
      }
    
}
