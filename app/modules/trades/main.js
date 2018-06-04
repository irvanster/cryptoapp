import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';
import { Order } from './components/index'
import { Container, Content, Form, Item, Input, Button, Header,Left,Right,Body,Title} from 'native-base';
import { Row,Column as Col } from 'react-native-flexbox-grid'
import ModalDropdown from 'react-native-modal-dropdown'
import {VictoryArea,VictoryChart,VictoryTheme} from 'victory-native'
export default class Main extends Component {
  render() {
    const navigationOptions = {
      header :null
    }
    return (
        // <View>
        //     <Order></Order>
        // </View>
        <Container style={{backgroundColor: '#fff'}}>
        <Header style={style.header} noShadow>
          <Left style={style.titleCentering}/>
          <Body style={style.titleCentering}>
            <Title style={style.headerTitle}>Trades</Title>
          </Body>
          <Right style={style.titleCentering}>
          </Right>
        </Header>
          <Content>
            <View>
              <Row size={2}>
                <Col sm={1}>
                  <Text>Limit Order</Text>
                  <Form>
                    <Item regular style={{ height:30, margin: 5}}>
                      <Input value='0,000234' style={{ fontSize: 13, color :'#999' }}/>
                    </Item>
                    <Item regular last style={{ height:30, margin: 5}}>
                      <Input value='0,000234' style={{ fontSize: 13, color :'#999' }}/>
                    </Item>
                    <Item regular last style={{ height:30, margin: 5}} disabled>
                      <Input value='Total (BTC)' style={{ fontSize: 13, color :'#999' }}/>
                    </Item>

                  </Form>
                  <Row size={2}>
                    <Col sm={1}><Text>Avbl</Text></Col>
                    <Col sm={1}><Text>0 BTC</Text></Col>
                  </Row>
                  <Button style={{ backgroundColor: '#00c087' }} block>
                    <Text style={{ color : '#fff' }}>Buy</Text>
                  </Button>
                <VictoryChart
                  theme={VictoryTheme.material}
                >
                  <VictoryArea
                    style={{ data: { fill: "#00c087" } }}
                    data={[
                      { x: 1, y: 2, y0: 0 },
                      { x: 2, y: 3, y0: 0},
                      { x: 3, y: 5, y0: 0 },
                      { x: 4, y: 4, y0: 0 },
                      { x: 5, y: 6, y0: 0 }
                    ]}
                  />
                </VictoryChart>
                </Col>
                <Col sm={1}>
                <Row size={2}>
                  <Col sm={1} style={style.Mtable}>
                      <Text style={{ fontSize: 11 }}>Price(BTC)</Text>
                  </Col>
                  <Col sm={1} style={style.Mtable}>
                      <Text style={{textAlign: 'right', fontSize: 11}}>Amount(BQX)</Text>
                  </Col>
                </Row>
                  <Row size={2} style={[style.MtableRows]}>
                    <Col sm={1}>
                        <Text style={[style.MtableContent,{ color: '#00c087' }]}>0,0000124125</Text>
                    </Col>
                    <Col sm={1}>
                        <Text style={[style.MtableContent, {textAlign: 'right'}]}>1654</Text>
                    </Col>
                  </Row>
                  <Row size={2} style={[style.MtableRows]}>
                    <Col sm={1}>
                        <Text style={[style.MtableContent,{ color: '#00c087' }]}>0,0000124125</Text>
                    </Col>
                    <Col sm={1}>
                        <Text style={[style.MtableContent, {textAlign: 'right'}]}>1654</Text>
                    </Col>
                  </Row>
                  <Row size={2} style={[style.MtableRows]}>
                    <Col sm={1}>
                        <Text style={[style.MtableContent,{ color: '#00c087' }]}>0,0000124125</Text>
                    </Col>
                    <Col sm={1}>
                        <Text style={[style.MtableContent, {textAlign: 'right'}]}>1654</Text>
                    </Col>
                  </Row>

                  <View style={style.topBid}>
                    <Text style={[style.MtableContent,{ color: '#00c087' }]}>0,000124145</Text>
                  </View>

                  <Row size={2} style={[style.MtableRows]}>
                    <Col sm={1}>
                        <Text style={[style.MtableContent,{ color: '#00c087' }]}>0,0000124125</Text>
                    </Col>
                    <Col sm={1}>
                        <Text style={[style.MtableContent, {textAlign: 'right'}]}>1654</Text>
                    </Col>
                  </Row>
                  <Row size={2} style={[style.MtableRows]}>
                    <Col sm={1}>
                        <Text style={[style.MtableContent,{ color: '#00c087' }]}>0,0000124125</Text>
                    </Col>
                    <Col sm={1}>
                        <Text style={[style.MtableContent, {textAlign: 'right'}]}>1654</Text>
                    </Col>
                  </Row>
                  <Row size={2} style={[style.MtableRows]}>
                    <Col sm={1}>
                        <Text style={[style.MtableContent,{ color: '#00c087' }]}>0,0000124125</Text>
                    </Col>
                    <Col sm={1}>
                        <Text style={[style.MtableContent, {textAlign: 'right'}]}>1654</Text>
                    </Col>
                  </Row>
                  <View>
                    <ModalDropdown options={['5 Decimals', '4 Decimals','3 Decimals', '2 Decimals']}/>
                    <ModalDropdown options={['Default', 'Self Orders','Buy Orders', '2 Decimals']}/>
                  </View>
                </Col>
              </Row>

            </View>
            <View>
              <Text>Market Trades</Text>
              <Row size={3}>
                <Col sm={1} style={style.Mtable}>
                    <Text>Time</Text>
                </Col>
                <Col sm={1} style={style.Mtable}>
                    <Text style={{textAlign: 'center'}}>Price</Text>
                </Col>
                <Col sm={1} style={style.Mtable}>
                    <Text style={{textAlign: 'right'}}>Amount</Text>
                </Col>
              </Row>
              <Row size={3} style={[style.MtableRows]}>
                <Col sm={1}>
                    <Text style={[style.MtableContent]}>09:32:34</Text>
                </Col>
                <Col sm={1}>    
                    <Text style={[style.MtableContent, {color : '#00c087', textAlign:'center'}]}>0,041221245</Text>
                </Col>
                <Col sm={1}>
                    <Text style={[style.MtableContent, {textAlign: 'right'}]}>237</Text>
                </Col>
              </Row>
              <Row size={3} style={[style.MtableRows]}>
                <Col sm={1}>
                    <Text style={[style.MtableContent]}>09:32:34</Text>
                </Col>
                <Col sm={1}>    
                    <Text style={[style.MtableContent, {color : '#00c087', textAlign:'center'}]}>0,024321245</Text>
                </Col>
                <Col sm={1}>
                    <Text style={[style.MtableContent, {textAlign: 'right'}]}>24,3</Text>
                </Col>
              </Row>
              <Row size={3} style={[style.MtableRows]}>
                <Col sm={1}>
                    <Text style={[style.MtableContent]}>09:32:34</Text>
                </Col>
                <Col sm={1}>    
                    <Text style={[style.MtableContent, {color : '#00c087', textAlign:'center'}]}>0,844545232</Text>
                </Col>
                <Col sm={1}>
                    <Text style={[style.MtableContent, {textAlign: 'right'}]}>12</Text>
                </Col>
              </Row>
            </View>
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
  Mtable: {borderBottomColor:'#e7e7e7',borderBottomWidth:1, padding: 5},
  MtableRows:{borderBottomColor:'#e7e7e7',borderBottomWidth:0.5, padding: 2},
  MtableContent:{fontWeight: 'bold', padding : 3, fontSize: 11},
  topBid :{
    padding: 10,
    borderStyle: 'dashed',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: 'gray',
    borderBottomColor: 'gray',
  }, header: {
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