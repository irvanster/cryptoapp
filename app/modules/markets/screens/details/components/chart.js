import React, { Component } from 'react';
import { View,Text,Dimensions } from "react-native";

//
import { LineChart, Grid, XAxis , BarChart} from 'react-native-svg-charts'
import { Row, Column as Col} from 'react-native-flexbox-grid'
import { Dropdown } from 'react-native-material-dropdown'
//

//
//

const chart_type = [
  {
  value:'Candle',
  },{
    value:'Line'
  }
]
let _interval;
const fill = 'rgb(134, 65, 244)'
export default class Chart extends Component {
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

  handleChangeLineType(lineType){
    switch(lineType){
      case 'Candle':
        alert('Candle')
        break;
      case 'Line':
        alert('Line')
        break;
      default:
        alert('default candle')
        break;
    }
  }
  render() {
    return (
      <View>
        <Row size={12}>
          <Col sm={3}>
            <Dropdown dropdownOffset={{top:0,left:0}} data={chart_type} value='Candle' onChangeText={this.handleChangeLineType} ></Dropdown>
          </Col>
          <Col sm={9}>
          </Col>
        </Row>
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

        {/* <Tabs style={ style.tabs } 
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
          </Tabs> */}
          </View>
    )
  }
};
