import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid'
import {Content, Container, Header, Left, Right,
    Icon, Body, Title, Button, H3, P,
    Card, CardItem, List, ListItem, Thumbnail, 
    H2, Form, Item, Label, Input
} from 'native-base'

export default class Login extends Component {

    render() {

        return(
            <Container style={{ backgroundColor :  'white' }}>
                <Content style={{ padding : 30, paddingTop: 100 }}>
                <Image square 
                    style={{alignSelf : 'center', marginBottom: 10 }} 
                    source={require('../../../../assets/images/logo.png')}
                />
                    <Form>
                        <Item floatingLabel style={{ marginLeft: 0 }}>
                            <Label>Email</Label>
                            <Input keyboardType='email-address' autoCapitalize='none' />
                        </Item>
                        <Item floatingLabel style={{ marginLeft: 0 }}>
                            <Label>Password</Label>
                            <Input secureTextEntry={true}/>
                            <Icon name='md-eye' style={{ color : '#aaa', fontSize: 15 }} />
                        </Item>
                    </Form>
                    <Button  
                        block 
                        style={{
                            marginTop: 25,
                            marginBottom: 25,
                            backgroundColor : '#007bff'
                            }}
                    >
                            <Text style={{ color : 'white' }}>Login</Text>
                        </Button>
                        <Row>
                            <Col sm={12}>
                                <Text style={{ color : '#007bff', textAlign: 'center' }}>
                                    <Text>Lupa Password? </Text>
                                    <Text style={{ color: '#777' }}>·</Text>
                                    <Text> Daftar Disini</Text>
                                </Text>
                            </Col>
                        </Row>
                </Content>
            </Container>
        )
    }
}