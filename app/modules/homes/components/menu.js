import React, { Component } from 'react';
import { FlatList, View,Text } from 'react-native'

const menu_items =
[
    {
        title:'Support',
        icon:'',
        action:''
    },
    {
        title:'Favorites',
        icon:'',
        action:''
    },
    {
        title:'Deposites',
        icon:'',
        action:''
    },            {
        title:'Withdrawal',
        icon:'',
        action:''
    }
]
export default class Menu extends Component {
    constructor(props) {
        super(props);
      
    }
    

render() {
    return (
        
      <FlatList data={menu_items} renderItem={({item})=>
       <View style={{flex:1,height: 80,justifyContent:'center',alignItems:'center'}}>
            <View style={{borderRadius:15, borderWidth:0.8,borderColor:'#acacac' , height:30,width:30,backgroundColor:'white',alignContent:'center'}}>
 
            </View>
            <Text style={{color:'white'}}>{item.title}</Text>
        </View>
          } numColumns={4}>
      </FlatList>
    )
  }
  
};
