import * as action from '../actionType'

export const result = data => ({
  type:action.RESULT,
  payload:data

})

export const addRoom = data => ({
  type:action.ADD_ROOM,
  payload:data
})

export const addPerson = data => ({
  type:action.ADD_PERSON,
  payload:data
})

export const getRoomList = () => ({
  type:action.GET_ROOM_LIST,
  payload:{
    type: action.GET_ROOM_LIST
  }
})

export const getRoomCount = (floors, rooms )=> ({
  type:action.GET_ROOM_COUNT,
  payload:{
    type: action.GET_ROOM_COUNT,
    floor:floors,
    room:rooms
  }
})

export const getAllUser = ( )=> ({
  type:action.GET_PERSON_LIST,
  payload:{
    type: action.GET_PERSON_LIST
  }
})

export const getUserOfRoom = (floors, rooms )=> ({
  type:action.GET_PERSON_LIST_OF_ROOM,
  payload:{
    type: action.GET_PERSON_LIST_OF_ROOM,
    floor:floors,
    room:rooms
  }
})