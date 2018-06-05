import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
                <Thumbnail square 
                    style={{alignSelf : 'center', marginBottom: 10 }} 
                    source={require('../../../../assets/images/logo.png')}
                />
                <Content style={{ width: '85%', alignSelf: 'center' }}>
                    <Form>
                        <Item floatingLabel style={{ marginLeft: 0 }}>
                            <Label>Email</Label>
                            <Input keyboardType='email-address' autoCapitalize='none' />
                        </Item>
                        <Item floatingLabel style={{ marginLeft: 0 }}>
                            <Label>Password</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                    </Form>
                    <Button onPress={ () => Navigator.navigate('Home') } 
                            rounded 
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
                                <Text>
                                    <Text>Lupa Password?</Text>
                                    <Text>Daftar Disini</Text>
                                </Text>
                            </Col>
                        </Row>
                </Content>
            </Container>
        )
    }
}