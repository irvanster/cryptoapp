import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import { Container, Content, Grid, Col, Icon, Thumbnail, Button, Tabs, Tab, TabHeading } from 'native-base'
import Swiper from 'react-native-swiper'  
import { ImageHeader,Market,TopBtcVolume} from '../../modules/homes/components/index'
const Divider =(
  <View
      style={{
          borderBottomColor: '#e9e9e9',
          borderBottomWidth: 1,
      }}
  />
)

export default class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ height : 200 }}>
            <Swiper
                  showsPagination={false}
                  autoplay={true}
                  autoplayTimeout={7}
                  style={styles.bannerWrapper}
                >
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('../../../assets/images/banner1.gif') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('../../../assets/images/banner2.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('../../../assets/images/banner3.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('../../../assets/images/banner4.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('../../../assets/images/banner5.gif') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('../../../assets/images/banner6.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('../../../assets/images/banner7.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('../../../assets/images/banner8.png') }/>
                  </View>
                </Swiper>
          </View>
          <View style={styles.row}>
            <Swiper style={styles.timelineWrapper}
            dotColor='#aaa'
            activeDotColor='#2B79C9'
            >
                <View style={styles.timelineWrapper}>
                  <Grid>
                    <Col style={styles.timelineGrid}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        BNB / BTC
                      </Text>
                      <Text style={{ color : '#e50370', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : '#00c087', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                    <Col style={styles.timelineGrid}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        EOS / BTC
                      </Text>
                      <Text style={{ color : '#00c087', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : '#e50370', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                    <Col style={[styles.timelineGrid, {borderRightWidth: 0}]}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        TRX / BTC 
                      </Text>
                      <Text style={{ color : '#242d3d', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : '#e50370', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                  </Grid>
                </View>
                <View style={styles.timelineWrapper}>
                  <Grid>
                    <Col style={styles.timelineGrid}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        ZEN / BTC
                      </Text>
                      <Text style={{ color : '#242d3d', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : '#00c087', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                    <Col style={styles.timelineGrid}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        ETH / BTC
                      </Text>
                      <Text style={{ color : '#00c087', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : '#00c087', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                    <Col style={[styles.timelineGrid, {borderRightWidth: 0}]}>
                      <Text style={{ color : 'grey', textAlign: 'center', justifyContent: 'center' }}>
                        More >>
                      </Text>
                    </Col>
                  </Grid>
                </View>
              </Swiper>
              {Divider}
              <Grid style={{ padding : 5 }}>
                <Col style={{width: 30}}>
                  <Icon style={{ color : '#242d3d', }} name='ios-volume-up'>
                  </Icon>
                </Col>
                <Col>
                  <Swiper
                  autoplay={true}
                  autoplayTimeout={5}
                  showsPagination={false}
                  horizontal={false}
                  vertical={true}
                  style={styles.annoucmentWrapper}
                >
                  <View style={styles.annoucmentWrapper} numberOflines={1}>
                      <Text style={styles.annoucmentItem}>
                      <Text style={{ color : '#242d3d'}}>Binance Lists Theta Token (THETA)</Text>
                    </Text>
                  </View>
                  <View style={styles.annoucmentWrapper} numberOflines={1}>
                      <Text style={styles.annoucmentItem}>
                      <Text style={{ color : '#242d3d'}}>EOS MAinnet Swap Update</Text>
                    </Text>
                  </View>
                  <View style={styles.annoucmentWrapper} numberOflines={1}>
                      <Text style={styles.annoucmentItem}>
                      <Text style={{ color : '#242d3d'}}>Biance Lists IoText (IOTEXT)</Text>
                    </Text>
                  </View>
                  <View style={styles.annoucmentWrapper} numberOflines={1}>
                      <Text style={styles.annoucmentItem}>
                      <Text style={{ color : '#242d3d'}}>Binance Adds XRP/BNB, TUSD/UST and more again</Text>
                    </Text>
                  </View>

                </Swiper>
                </Col>
              </Grid>
          </View>
          <View style={[styles.row, { padding: 15}] }>
            <Grid>
              <Col>
                <Text style={{color : '#959eb1', textAlign: 'center'}}><Thumbnail large source={ require('../../../assets/images/h1.png') } />{'\n'}Support</Text>
              </Col>
              <Col>
                <Text style={{color : '#959eb1', textAlign: 'center'}}><Thumbnail large source={ require('../../../assets/images/h2.png') } />{'\n'}Favorites</Text>
              </Col>
              <Col>
                <Text style={{color : '#959eb1', textAlign: 'center'}}><Thumbnail large source={ require('../../../assets/images/h3.png') } />{'\n'}Deposit</Text>
              </Col>
              <Col>
                <Text style={{color : '#959eb1', textAlign: 'center'}}><Thumbnail large source={ require('../../../assets/images/h3.png') } />{'\n'}Withdraw</Text>
              </Col>
            </Grid>
          </View>
          <View style={[styles.row, { padding: 7}]}>
            <Icon type='Foundation' style={{ color : '#5a667c',
                fontSize: 18,
                position: 'absolute',
                left: 17,
                top: 7
            }} name='crown' />
            <Text style={{ color : '#5a667c', marginLeft: 30 }}>
              <Text>BTC 24h Volume Top</Text>
            </Text>
              <Icon type='SimpleLineIcons' style={{ color: '#999', 
                fontSize: 13,
                textAlign : 'right',
                position: 'absolute',
                right: 17,
                top: 10
              }} 
              name='arrow-right' />            
          </View>
          <View style={{ backgroundColor : '#ffffff', }}>
            <Grid style={[styles.hTable, {padding : 10}]}>
              <Col><Text style={[styles.hTableCol, {textAlign:'left'}]}>Pair</Text></Col>
              <Col><Text style={[styles.hTableCol, {textAlign:'center'}]}>Last Price</Text></Col>
              <Col><Text style={[styles.hTableCol, {textAlign:'right'}]}>Volume(BTC)</Text></Col>
            </Grid>
            <Grid style={[styles.hTableContent, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>EOS<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : '#00c087',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 45.122</Text>
                </Col>
            </Grid>
            <Grid style={[styles.hTableContent, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>IOTX<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : '#e50370',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 4.120</Text>
                </Col>
            </Grid>
            <Grid style={[styles.hTableContent, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>ETH<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : '#00c087',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 15.508</Text>
                </Col>
            </Grid>
            <Grid style={[styles.hTableContent, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>ONT<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : '#242d3d',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 12.208</Text>
                </Col>
            </Grid>
            <Grid style={[styles.hTableContent, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>TRX<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : '#00c087',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 5.502</Text>
                </Col>
            </Grid>
          </View>
            <View style={{marginTop:10}}>
                <Market navigation={this.props.navigation}></Market>
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
  bannerWrapper: {
    height: 200
  },
  banners: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',

  },
  bannerSlide: {
    width: '100%',
    height: 200,
  },
  timeline: {
    height: 150,
    backgroundColor: '#ffffff',
    width: '100%'
  },
  timelineWrapper: {
    height: 135,
    backgroundColor : '#ffffff',
    marginBottom: 5
  },
  timelineGrid: {
    borderRightWidth: 1,
    borderRightColor: '#e9e9e9',
    marginTop : 25,
    marginBottom : 40,
    
  },
  annoucmentWrapper: {
    height: 30,
    flex: 1,
    marginTop: 2,
  },
  annoucmentItem: {
    flex: 1,
    width: '100%',
    height: 30,
    fontSize: 14,
  },
  hTable: {
    backgroundColor: '#f7f9fa'
  },
  hTableContent:{
      backgroundColor: '#fff',
      borderBottomColor: '#e9e9e9',
      borderBottomWidth: 1,
  },
  hTableCol: {
    textAlign: 'center',
    color : '#bbc2d0'
  },
  textH: {
    color : '#242d3d',
    fontWeight: 'bold', 
    fontSize: 16,
  },
  row: {
    backgroundColor : '#ffffff',
    paddingLeft: 17,
    paddingRight: 17,
    marginTop: 5,
  }
})