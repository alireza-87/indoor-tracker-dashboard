import * as actionType from '../actionType'

const INIT_STATE={
    allUser:[],
    activityLog:[]
}

const PersonReducer = (state = INIT_STATE , action) =>{
    console.log('person reducer > ',action)
    switch(action.type){
        case actionType.PERSON_LIST:
            return {
                ...state,
                allUser:[...action.payload.persons]
            }
        case actionType.PERSON_OF_ROOM:
            return{
                ...state,
                allUser:[...action.payload.persons]
            }
        case actionType.PERSON_OF_ACTIVITY:
            return{
                ...state,
                activityLog:[...state.activityLog,...action.payload.persons]
            }
    
        default:
            return state
    }
}

export default PersonReducer