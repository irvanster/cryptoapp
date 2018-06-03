import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import {View,FlatList,Text,Dimensions,StyleSheet,Image} from 'react-native'
import {primaryColor} from '../../commons/const_style'
export default class ImageSlider extends Component {
  render() {
    return (
        <Swiper autoplay={true} autoplayTimeout={3} showsButtons={false} style={{height:200}}
            renderPagination={(index, total, context) => {
                return (
                    <View style={styles.paginationStyle}>
                        <Text style={styles.paginationText}>{index + 1}</Text>
                    </View>
                )}}>
                <Image source={require('../../../../assets/header/1.jpg')} style={{width:'100%',height:200}}>

                </Image>
                <Image source={require('../../../../assets/header/1.jpg')} style={{width:'100%',height:200}}>

                </Image>
                <Image source={require('../../../../assets/header/1.jpg')} style={{width:'100%',height:200}}>

                </Image>
        </Swiper>
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
