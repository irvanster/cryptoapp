import React, { Component } from 'react';
import { View,Text, Dimensions} from 'react-native';
import { Row,Column as Col } from 'react-native-flexbox-grid'

import { Container, Content, Tabs, Tab, Button} from 'native-base';
import { NavigationAction } from 'react-navigation'
import { Actions, navigatorRef } from 'react-native-navigation-actions';
//Our Component
//

export default class Book extends Component {
  render() {
    return (
            <View style={{flex:1,padding:5, backgroundColor: 'transparent'}}>
                <Row size={4}>
                    <Col sm={2} style={style.Mtable}>
                        <Text>Bid</Text>
                    </Col>
                    <Col sm={1.5} style={style.Mtable}>
                        <Text>Ask</Text>
                    </Col>
                    {/* <Col sm={.5} style={style.Mtable}>
                        <Text style={{padding: 10, fontSize: 5, backgroundColor: '#999'}}>4</Text>
                    </Col> */}
                </Row>
                    <Row size={4} style={[style.MtableRows]}>
                        <Col sm={1}>
                            <Text style={[style.MtableContent]}>2,334</Text>
                        </Col>
                        <Col sm={1}>
                        <Text style={[style.MtableContent, {color : '#00c087',textAlign: 'right'}]}>0.3432</Text>
                        </Col>
                        <Col sm={1}>    
                            <Text style={[style.MtableContent, {color : '#e50370'}]}>0,00005</Text>
                        </Col>
                        <Col sm={1}>
                            <Text style={[style.MtableContent, {textAlign: 'right'}]}>2,443</Text>
                        </Col>
                    </Row>
                    <Row size={4} style={[style.MtableRows]}>
                        <Col sm={1}>
                            <Text style={[style.MtableContent]}>2,334</Text>
                        </Col>
                        <Col sm={1}>
                        <Text style={[style.MtableContent, {color : '#00c087',textAlign: 'right'}]}>0.3432</Text>
                        </Col>
                        <Col sm={1}>    
                            <Text style={[style.MtableContent, {color : '#e50370'}]}>0,00005</Text>
                        </Col>
                        <Col sm={1}>
                            <Text style={[style.MtableContent, {textAlign: 'right'}]}>2,443</Text>
                        </Col>
                    </Row>
                    <Row size={4} style={[style.MtableRows]}>
                        <Col sm={1}>
                            <Text style={[style.MtableContent]}>2,334</Text>
                        </Col>
                        <Col sm={1}>
                        <Text style={[style.MtableContent, {color : '#00c087',textAlign: 'right'}]}>0.3432</Text>
                        </Col>
                        <Col sm={1}>    
                            <Text style={[style.MtableContent, {color : '#e50370'}]}>0,00005</Text>
                        </Col>
                        <Col sm={1}>
                            <Text style={[style.MtableContent, {textAlign: 'right'}]}>2,443</Text>
                        </Col>
                    </Row>
                <Row size={4}>
                    <Col sm={2} style={{ padding: 5 }}>
                        <Button block style={{backgroundColor: '#00c087'}} onPress={()=>Actions.navigate('Trades')}>
                            <Text style={{ color: '#fff' }}>BUY</Text>
                        </Button>
                    </Col>
                    <Col sm={2} style={{ padding: 5 }}>
                        <Button block style={{backgroundColor : '#e50370'}}>
                            <Text style={{ color: '#fff' }}>SELL</Text>
                        </Button>
                    </Col>
                </Row>
            </View>
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
    Mtable: {borderBottomColor:'#e7e7e7',borderBottomWidth:1, padding: 10},
    MtableRows:{borderBottomColor:'#e7e7e7',borderBottomWidth:0.5, padding: 5},
    MtableContent:{fontWeight: 'bold', padding : 3}
  }