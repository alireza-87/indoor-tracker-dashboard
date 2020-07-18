export const createRoom = (room) =>{
    return (dispatch,getState) =>{
        // make async call to ..
        dispatch({ type : 'CREATE_ROOM',room})
    }
}