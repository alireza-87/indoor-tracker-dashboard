import * as actionType from '../actionType'

const INIT_STATE={
    result:{},
}

const resultReducer = (state = INIT_STATE , action) =>{

    if(action.type===actionType.RESULT){
    return {
        ...state,
        ...action.payload
    }
    }
    return state
}

export default resultReducer