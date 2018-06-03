import {  FETCH_DATA_FULFILLED,FETCH_DATA_REJECTED, FETCH_DATA_PENDING } from '../../markets/btc/const'

const initialState = {
    data : [],
    isFetching : false,
    error : false,
}

export default function btcReducer(state = initialState,action){
    switch(action.type){
        case FETCH_DATA_PENDING:
            return {...state,isFetching : true,data :[]}
        case FETCH_DATA_FULFILLED:
            console.log("action "+action.payload)
            return {...state,isFetching : false,data:action.payload}
        case FETCH_DATA_REJECTED:
            return {...state,isFetching : true, error:false}
        default:
            return state
    }
}