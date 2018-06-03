import { FETCH_DATA_FULFILLED,FETCH_DATA_PENDING,FETCH_DATA_REJECTED } from './const'
import { GET_ALL, GET_SORTED_VOLUME } from './btc_repository'

import axios from 'axios'

export function getAllData(){
    return (dispatch)=>{
        dispatch(onLoadData())
        fetch(GET_ALL).then((response)=>{
            return response
        }).then((response)=>response.json())
        .then((items)=>{
            console.log("results "+items)
            dispatch(onSuccessLoadData(items))
        }).catch(()=>{
            console.log("error")
            dispatch(onFailureLoadData())
        })
    }
}


export function getSortedVolumeData(){
    return (dispatch)=>{
        dispatch(onLoadData())
        fetch(GET_SORTED_VOLUME).then((response)=>{
            return response
        }).then((response)=>response.json())
        .then((items)=>{
            console.log("results "+items)
            dispatch(onSuccessLoadData(items))
        }).catch(()=>{
            console.log("error")
            dispatch(onFailureLoadData())
        })
    }
}

export function onLoadData(){
    console.log(" LOAD")
    return{
        type: FETCH_DATA_PENDING
    }
}

export function onSuccessLoadData(data){
    console.log("SELESAI LOAD")
    return{
        type:FETCH_DATA_FULFILLED,
        payload:data
    }
}

export function onFailureLoadData(){
    return{
        type:FETCH_DATA_REJECTED
    }
}
