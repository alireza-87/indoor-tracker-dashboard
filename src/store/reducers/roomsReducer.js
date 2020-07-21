import * as actionType from '../actionType'

const roomReducer = (state = {totalCurrentOccupide:0, totalCount:0,roomList : [] }, action) => {
  console.log('roomReducer actio  > ',action);
  console.log('roomReducer state > ',state);
  
  const totalCount = () =>{
    let c=0
    state.roomList.forEach(item => {c=c+item.capacity})
    return c
  }
  
  const totalCurrentOccupide = () =>{
    let c=0
    if(state.roomList)
      state.roomList.forEach(item => {item.counter? c=c+item.counter:c=c+0})
    return c
  }

  switch (action.type) {
    case actionType.ROOM_LIST:
      return {
        ...state, 
        totalCount:totalCount(),
        totalCurrentOccupide:totalCurrentOccupide(),
        roomList: [ ...action.payload.rooms]
      };
    case actionType.ROOM_COUNT:
      
      return {
        ...state, 
        totalCount:totalCount(),
        totalCurrentOccupide:totalCurrentOccupide(),

        roomList: state.roomList.map(item => item.floor === action.payload.rooms.floor && item.room === action.payload.rooms.room ? {...item,counter:action.payload.rooms.count} : {...item} )
      } 
    default:
      console.log("OPS2: ",action.type)
      return state;
  }
};

export default roomReducer;
