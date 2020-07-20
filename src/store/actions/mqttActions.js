import * as action from '../actionType'

export const result = data => ({
  type:action.RESULT,
  payload:data

})

export const addRoom = data => ({
  type:action.ADD_ROOM,
  payload:data
})

export const getRoomList = data => ({
  type:action.GET_ROOM_LIST,
  payload:data
})