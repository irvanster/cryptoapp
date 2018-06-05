import React, { Component } from 'react'
import { View, Text, WebView} from 'react-native'

export default class ReferallProgram extends Component {

    render() {
        return(
            <WebView
                source={{uri: 'https://www.binance.com/invite.html'}}
            />
        )
    }
}