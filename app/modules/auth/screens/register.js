import React, { Component } from 'react'
import { WebView } from 'react-native'

export default class Register extends Component {

    render() {

        return(
            <WebView
                source={{uri: 'https://beta.rekeningku.com/id/register'}}
            />
        )
    }
}   