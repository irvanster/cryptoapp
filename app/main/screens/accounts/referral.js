import React, { Component } from 'react'
import { View, Text, WebView} from 'react-native'

export default class ReferallProgram extends Component {

    render() {
        return(
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20}}
            />
        )
    }
}