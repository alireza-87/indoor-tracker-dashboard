import * as action from '../actionType'

export const personActivity = personParams => ({
  type: action.PERSON_OF_ACTIVITY,
  payload: {
    persons: personParams.result
  },
});

export const alarmRoomOver = personParams => ({
  type: action.ALARM_ROOM_OVER,
  payload: {
    persons: personParams.result
  },
});
