import React, { Component } from 'react';
import { View,Text } from "react-native";
import { Row,Column as Col  } from "react-native-flexbox-grid";
export default class Status extends Component {
  render() {
    return (
        <View style={{padding:20}}>
            <Row size={4}>
                <Col sm={1}>
                    <Text style={{fontSize:24, fontWeight: 'bold', color : '#bbc2d0'}}>1,0111</Text>
                </Col>
                <Col sm={2}>
                    <Text style={{fontWeight: 'bold'}}>$ 14,56</Text>
                </Col>
            </Row>
            <Row size={12}>
                <Col sm={3}>
                    <Text style={{ color :'#00c087', fontWeight: 'bold' }}>+0,00081</Text>
                </Col>
                <Col sm={5}>
                    <Text style={{ color :'#00c087', fontWeight: 'bold' }}>+15,29</Text>
                </Col>
                <Col sm={2}>
                    <Text>Low</Text>
                </Col>
                <Col sm={2}>
                    <Text style={{ fontWeight :'bold' }}>0,8457</Text>
                </Col>
            </Row>
            <Row size={12}>
                <Col sm={8}>
                    <Text style={{fontWeight: 'bold'}}>Vol 130.645 BNB</Text>
                </Col>
                <Col sm={2}>
                    <Text>High</Text>
                </Col>
                <Col sm={2}>
                    <Text style={{ fontWeight :'bold' }}>1,8766</Text>
                </Col>
            </Row>
        </View>
    )
  }
};
