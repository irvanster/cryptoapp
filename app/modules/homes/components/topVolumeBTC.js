import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Left } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

import { connect } from 'react-redux'
import { getSortedVolumeData } from '../../markets/btc/action'
 
class TopBtcVolume extends Component {

    constructor(props) {
        super(props);

        // props.fetch2("https://api.backendless.com/A6942FE5-A0B9-8FE9-FFF9-6D943626DA00/FCF54D0C-0FF7-270D-FFDA-A3BBE5AE4F00/data/btc_market?pageSize=5&props=last_price%2Cprice_in_dollar%2Cdifference%2Cvolume%2CobjectId&sortBy=volume%20desc&loadRelations=pair_target%2Cpair_from")
    }
    componentWillMount = () => {
        this.props.fetch()
    };
    
    handleStatusColor(isWin,isLose){
        if(isWin){
            return "#00c087"
        }
        if(isLose){
            return "red"
        }
        return "white"
    }
    handleOnLoadingData(){
       return ( <View>
       <View style={{marginLeft:10,marginRight:10,marginTop:10, paddingBottom:10, borderBottomColor:'white',borderBottomWidth:0.5}}>
                <Row size={3}>
                    <Col sm={1}>
                    <Row size={3}>
                    <Text style={[style.text_content,{color:'white',textAlign:'left'}]}>---</Text>
                    <Text style={[style.text_target_pair]}> / ---</Text>
                    </Row>
                   
                    </Col>
                    <Col sm={1}>
                    <Text style={[style.text_content,{color:'white'}]}>---</Text>
                    </Col>
                    <Col sm={1}>
                    <Text style={[style.text_content,{color:'white',textAlign:'right'}]}>---</Text>
                </Col>
                </Row>      
        </View>
        <View style={{marginLeft:10,marginRight:10,marginTop:10, paddingBottom:10, borderBottomColor:'white',borderBottomWidth:0.5}}>
                <Row size={3}>
                    <Col sm={1}>
                    <Row size={3}>
                    <Text style={[style.text_content,{color:'white',textAlign:'left'}]}>---</Text>
                    <Text style={[style.text_target_pair]}> / ---</Text>
                    </Row>
                   
                    </Col>
                    <Col sm={1}>
                    <Text style={[style.text_content,{color:'white'}]}>---</Text>
                    </Col>
                    <Col sm={1}>
                    <Text style={[style.text_content,{color:'white',textAlign:'right'}]}>---</Text>
                </Col>
                </Row>      
        </View>
        <View style={{marginLeft:10,marginRight:10,marginTop:10, paddingBottom:10, borderBottomColor:'white',borderBottomWidth:0.5}}>
                <Row size={3}>
                    <Col sm={1}>
                    <Row size={3}>
                    <Text style={[style.text_content,{color:'white',textAlign:'left'}]}>---</Text>
                    <Text style={[style.text_target_pair]}> / ---</Text>
                    </Row>
                   
                    </Col>
                    <Col sm={1}>
                    <Text style={[style.text_content,{color:'white'}]}>---</Text>
                    </Col>
                    <Col sm={1}>
                    <Text style={[style.text_content,{color:'white',textAlign:'right'}]}>---</Text>
                </Col>
                </Row>      
        </View>
       </View> )
    }
    
  render() {
      {console.log(this.props)}
    return (
        <View>
        <View style={{backgroundColor:'#1a212a',padding:10}}>
            <Text style={{color:"white",fontSize:14}}>BTC 24h Volume Top</Text>
        </View>
        <View style={{padding:10,backgroundColor:'#141921'}}>
            <Row size={3}>
                <Col sm={1}>
                <Text style={{color:'white',textAlign:'left'}}>Pair</Text>
                </Col>
                <Col sm={1}>
                <Text style={{color:'white'}}>Last Price</Text>
                </Col>
                <Col sm={1}>
                <Text style={{color:'white',textAlign:'right'}}>Volume(BTC)</Text>
            </Col>
            </Row>  
        </View>  
        {this.props.reducer.isFetching && 
            ( this.handleOnLoadingData() )
        }
        {this.props.reducer.data.length > 0 && 
        (this.props.reducer.data.slice(0,5).map((item,index)=>{
            return(
                <View key={index} style={{marginLeft:10,marginRight:10,marginTop:10, paddingBottom:10, borderBottomColor:'white',borderBottomWidth:0.5}}>
                <Row size={3}>
                    <Col sm={1}>
                    <Row size={3}>
                    <Text style={[style.text_content,{color:'white',textAlign:'left'}]}>{item.pair_from.name}</Text>
                    <Text style={[style.text_target_pair]}> / {item.pair_target.name}</Text>
                    </Row>
                   
                    </Col>
                    <Col sm={1}>
                    <Text style={[style.text_content,{color:this.handleStatusColor(item.isWin,item.isLose)}]}>{item.last_price}</Text>
                    </Col>
                    <Col sm={1}>
                    <Text style={[style.text_content,{color:'white',textAlign:'right'}]}>{item.volume}</Text>
                </Col>
                </Row>      
                </View>  
            )
        }))}
        </View>

    )
  }
};

const style={
    title:{
        color:'white'
    },
    text_header:{
        color:'white',
    },
    text_content:{
        color:'white',
        fontSize: 15,
    },
    text_target_pair:{
        color:'#acacac',textAlign:'left',fontSize:12,marginTop:3
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        reducer : state.btcReducer
    }
}
function dispatchToProps(dispatch){
    return {
        fetch: ()=> dispatch(getSortedVolumeData())
    }
}
export default connect(mapStateToProps,dispatchToProps)(TopBtcVolume)