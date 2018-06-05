import React, { Component } from 'react'
import {
    View, Text, StyleSheet,Switch, TouchableOpacity
} from 'react-native'
import {
    Container, Content,
    Header, Body, Title, Icon, Left, Right
 } from 'native-base'
 import { createStackNavigator } from 'react-navigation'
 const Divider =(
    <View
        style={{
            borderBottomColor: '#e9e9e9',
            borderBottomWidth: 1,
        }}
    />
  )
 export default class AccountMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: true
        }
    }
    render() {
        // console.log(this.props)
        return(
            <Container style={styles.container}>
                <Header style={styles.header} noShadow>
                <Left style={styles.titleCentering}/>
                <Body style={styles.titleCentering}>
                    <Title style={styles.headerTitle}>Account</Title>
                </Body>
                <Right style={styles.titleCentering}/>
                </Header>
                <Content>
                    <View style={[styles.row, { padding: 12, marginTop: 0}]}>
                        <Icon name='md-contact' style={[styles.Licon, {fontSize: 30}]}>
                        </Icon>
                        <Text style={{ color : '#2B79C9', fontSize: 17, marginLeft: 30 }}>
                        <Text>tovamaulana098@gmail.com</Text>
                        </Text>         
                    </View>
                    <Text style={[styles.row, { color : '#bbb', fontSize: 10, backgroundColor: '#f3f7fa' }]}>
                        Please do not disclose SMS and Google Authenticatio codes to anyone,
                        including Binance customer support.
                    </Text>
                    <View style={[styles.row, { padding: 12}]}>
                        <Icon name='database' type='Entypo' style={styles.Licon}>
                        </Icon>
                        <Text style={{ color : '#242d3d', marginLeft: 30 }}>
                        <Text>Using BNB to pay for fees (50% discount)</Text>
                        </Text>
                        <Switch
                            value={this.state.value}
                            onValueChange={ 
                                (value) => this.setState({
                                    value
                                })
                                
                            
                            }
                            thumbTintColor='#2B79C9'
                            onTintColor='#e7f2ff'
                            tintColor='#555'
                            style={[styles.switch]}/>
                    </View>
                    <View style={[styles.row, { padding: 12}]}>
                            <Icon name='gift' type='FontAwesome' style={styles.Licon}>
                            </Icon>
                            <Text style={{ color : '#242d3d', marginLeft: 30 }}>
                            <Text onPress={ () => this.props.navigation.navigate('Referral') }>Referral Program</Text>
                            </Text>
                            <Text style={[styles.RightCol, {right:34}]}>
                                ID : 35129703
                            </Text>
                            <Icon type='SimpleLineIcons' style={styles.RightCol}
                            name='arrow-right' /> 
                    </View>
                    <View style={[styles.row, { padding: 12}]}>
                        <Icon name='id-card-o' type='FontAwesome' style={styles.Licon}>
                        </Icon>
                        <Text style={{ color : '#242d3d', marginLeft: 30 }}>
                        <Text style={{ color: '#242d3d' }}>Identity Authentication</Text>
                        </Text>
                        <Text style={styles.RightCol}>
                            Unverified
                        </Text>            
                    </View>
                    <View style={[styles.row, { padding: 12}]}>
                        <View style={[styles.row, {marginTop: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 10, paddingBottom: 10}]}>
                            <Icon name='shield' type='Foundation' style={[styles.Licon, {left: 0}]}>
                            </Icon>
                            <Text style={{ color : '#242d3d', marginLeft: 30 }}>
                            <Text>Security</Text>
                            </Text>
                            <Icon type='SimpleLineIcons' style={[styles.RightCol, {right: 0}]}
                            name='arrow-right' />  
                        </View>
                        {Divider}
                        <View style={[styles.row, {marginTop: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 10, paddingBottom: 10}]}>
                            <Icon name='md-settings' type='Ionicons' style={[styles.Licon, {left :0}]}>
                            </Icon>
                            <Text style={{ color : '#242d3d', marginLeft: 30 }}>
                            <Text>setting</Text>
                            </Text>
                            <Icon type='SimpleLineIcons' style={[styles.RightCol, {right: 0}]}
                            name='arrow-right' />
                        </View>   
                    </View>
                    <View style={[styles.row, { padding: 12}]}>
                        <Icon name='support' type='FontAwesome' style={styles.Licon}>
                        </Icon>
                        <Text style={{ color : '#242d3d', marginLeft: 30 }}>
                        <Text>Support</Text>
                        </Text>
                        <Icon type='SimpleLineIcons' style={styles.RightCol}
                        name='arrow-right' />            
                    </View>            
                </Content>
            </Container>
        )
    }
 }
 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f7fa'
      },
      header: {
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
      row: {
        backgroundColor : '#ffffff',
        paddingLeft: 17,
        paddingRight: 17,
        marginTop: 7,
      },
      Licon: {
        position: 'absolute',
        left: 17,
        top: 10,
        fontSize: 20,
        color: '#9ba2b0'
      },
      RightCol: {
        color: '#9ba2b0', 
        fontSize: 13,
        textAlign : 'right',
        position: 'absolute',
        right: 17,
        top: 15
      },
      switch: {
        position: 'absolute',
        right: 17,
        top: 15
      }
 })