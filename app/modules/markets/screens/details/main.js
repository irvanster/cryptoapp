import React, { Component } from 'react';
import { View,Text, Dimensions} from 'react-native';
import { Row,Column as Col } from 'react-native-flexbox-grid'
import { LineChart, Grid, XAxis , BarChart} from 'react-native-svg-charts'
import { Container, Content, Tabs, Tab, Button} from 'native-base';
import { primaryColor } from '../../../commons/const_style';

let _interval;
export default class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inc : 0,
            lineChart :  [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -100, -80 ],
            barGrid :  [ 50, 10, 40, 95, 85, 91, 35, 53,  24, 50 ],

        }
    }
    
    componentDidMount = () => {
        _interval = setInterval(() => {
            // Your code
            let newArray = this.state.lineChart;
            let barGrid = this.state.barGrid
            newArray.push(Math.floor(Math.random() * (100 - (-100) + 1)) + (-100));
            newArray.splice(0,1)

            barGrid.push(Math.floor(Math.random() * (100 - (0) + 1)) + (0))
            barGrid.splice(0,1)
            this.setState({
                data : newArray,
                barGrid : barGrid
            })

          }, 2000);
    };
    componentWillUnmount = () => {
      clearInterval(_interval)
    };
    
    
  render() {
    const fill = 'rgb(134, 65, 244)'
    return (
        <Container style={{ backgroundColor: '#fff' }}>
            <Content>
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
        <Tabs style={ style.tabs } 
        tabContainerStyle={{
            elevation:0
          }}
        tabBarUnderlineStyle={{ backgroundColor: '#2B79C7' }}
        noShadows>
            <Tab heading='Line'
                tabStyle={{backgroundColor: '#f7f9fa'}} 
                textStyle={{color: 'gray'}} 
                activeTabStyle={{backgroundColor: '#f7f9fa', borderBottomColor: '#2B79C7'}} 
                activeTextStyle={{color: '#2B79C7', fontWeight: 'normal'}}
                
            >
                <Row size={12}>
                    <Col sm={12}>
                        <LineChart
                        style={{ height: 200,width: Dimensions.get('window').width}}
                        data={ this.state.lineChart}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        contentInset={{ top: 20, bottom: 20 }}
                        >
                        <Grid/>
                        </LineChart>
                        <View style={{ height: 130, width: Dimensions.get('window').width}}>
                        <BarChart
                            style={{ height: 130 }}
                            data={ this.state.barGrid }
                            svg={{ fill }}
                            contentInset={{ top: 30, bottom: 30 }}
                        >
                        </BarChart>
                        </View>
                    </Col>
                </Row>
            </Tab>
            <Tab heading='Depth'
                tabStyle={{backgroundColor: '#f7f9fa'}} 
                textStyle={{color: 'gray'}} 
                activeTabStyle={{backgroundColor: '#f7f9fa'}} 
                activeTextStyle={{color: '#2B79C7', fontWeight: 'normal'}}
            ></Tab>
        </Tabs>
        <Tabs 
         lazy={false}
         tabContainerStyle={{
            elevation:0
          }}
         style={style.tabs}
         initialPage={0} style={style.tab_header}
         tabBarUnderlineStyle={{backgroundColor:'#2B79C9'}} 
         onChangeTab={({i,ref,from})=>this.setState({currentIndexTab:i})}
        >
        <Tab heading = "Book"
            tabStyle={{backgroundColor: '#fff'}} 
            textStyle={{color: 'gray'}} 
            activeTabStyle={{backgroundColor: '#fff', borderBottomColor: '#2B79C7'}} 
            activeTextStyle={{color: '#2B79C7', fontWeight: 'normal'}}
        >
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
                        <Button block style={{backgroundColor: '#00c087'}} onPress={()=>this.props.navigation.navigate('Trades')}>
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
        </Tab>
        <Tab heading="Market Trades"
            tabStyle={{backgroundColor: '#fff'}} 
            textStyle={{color: 'gray'}} 
            activeTabStyle={{backgroundColor: '#fff', borderBottomColor: '#2B79C7'}} 
            activeTextStyle={{color: '#2B79C7', fontWeight: 'normal'}}
        >
        
        </Tab>
       </Tabs>
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
    header:{
      alignItems: 'center',
      backgroundColor:primaryColor
    },
    Mtable: {borderBottomColor:'#e7e7e7',borderBottomWidth:1, padding: 10},
    MtableRows:{borderBottomColor:'#e7e7e7',borderBottomWidth:0.5, padding: 5},
    MtableContent:{fontWeight: 'bold', padding : 3}
  }