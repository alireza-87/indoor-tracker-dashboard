import * as actionType from '../actionType'
const initState={
    login:{}
}
const authReducer = (state = initState , action) =>{
    console.log("authReducer ",action)
    switch(action.type){
        case actionType.LOGIN:
            return {
                ...state,
                login:{...action.login}
            }
        case actionType.LOGOUT:
            state = initState;
            return state

        default:
            return state

    }
}

export default authReducer