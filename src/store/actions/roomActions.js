import * as action from '../actionType'

export const result = data => ({
  type:action.RESULT,
  payload:data
})

export const roomList = roomParams => ({
  type: action.ROOM_LIST,
  payload: {
    rooms: roomParams.result
  },
});