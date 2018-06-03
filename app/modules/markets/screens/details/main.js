import React, { Component } from 'react';
import { View,Text, Dimensions} from 'react-native';
import { Row,Column as Col } from 'react-native-flexbox-grid'
import { LineChart, Grid, XAxis , BarChart} from 'react-native-svg-charts'
import { Container, Content, Tabs, Tab} from 'native-base';
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
        <Container>
            <Content>
            <View style={{padding:20}}>
            <Row size={4}>
                <Col sm={1}>
                    <Text style={{fontSize:24}}>1,0111</Text>
                </Col>
                <Col sm={0.1}>
                    <Text style={{fontSize:14}}>^</Text>
                </Col>
                <Col sm={2}>
                    <Text>$ 14,56</Text>
                </Col>
            </Row>
            <Row size={12}>
                <Col sm={3}>
                    <Text>+0,1334</Text>
                </Col>
                <Col sm={5}>
                    <Text>+15,29</Text>
                </Col>
                <Col sm={2}>
                    <Text>Low</Text>
                </Col>
                <Col sm={2}>
                    <Text>0,8457</Text>
                </Col>
            </Row>
            <Row size={12}>
                <Col sm={8}>
                    <Text>Vol 130.645 BNB</Text>
                </Col>
                <Col sm={2}>
                    <Text>High</Text>
                </Col>
                <Col sm={2}>
                    <Text>1,8766</Text>
                </Col>
            </Row>
            <Row size={12}>
                <Col sm={12}>
                <LineChart
                style={{ height: 200,width: Dimensions.get('window').width - 40}}
                data={ this.state.lineChart}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
            <View style={{ height: 130, width: Dimensions.get('window').width - 40}}>
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
        </View>
        <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor:'yellow'}} onChangeTab={({i,ref,from})=>this.setState({currentIndexTab:i})}>
        <Tab heading = "Book">
            <View style={{flex:1,padding:20}}>
                <Row size={3}>
                    <Col sm={1}>
                        <Text style={{borderBottomColor:primaryColor,borderBottomWidth:0.2}}>Bid</Text>
                    </Col>
                    <Col sm={0.3}>
                    </Col>
                    <Col sm={1}>
                        <Text>Ask</Text>
                    </Col>
                </Row>
                <Row size={5}>
                    <Col sm={1}>
                        <Text style={{borderBottomColor:primaryColor,borderBottomWidth:0.2}}>2,334</Text>
                    </Col>
                    <Col sm={1}>
                    <Text style={{textAlign:'right'}}>0.3432</Text>
                    </Col>
                    <Col sm={0.3}>
                    </Col>
                    <Col sm={1}>
                        <Text style={{borderBottomColor:primaryColor,borderBottomWidth:0.2}}>0,00005</Text>
                    </Col>
                    <Col sm={1}>
                        <Text style={{textAlign:'right'}}>2,443</Text>
                    </Col>
                </Row>
            </View>
        </Tab>
        <Tab heading="Market Trades">
        
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
    }
  }