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

export const getRoomList = data => ({
  type:action.GET_ROOM_LIST,
  payload:data
})

export const getRoomCount = (floors, rooms )=> ({
  type:action.GET_ROOM_COUNT,
  payload:{
    type: 'getRoomCount',
    floor:floors,
    room:rooms
  }
})