import * as actionType from '../actionType'

const INIT_STATE={
    allUser:[],
    userOfRoom:[]
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
                userOfRoom:[...action.payload.persons]
            }
        default:
            return state
    }
}

export default PersonReducer