import * as actionType from "../actionType";
const INIT_STATE = {
  activityLog: [],
};

const activityReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.PERSON_OF_ACTIVITY:
      return {
        ...state,
        activityLog: [...state.activityLog, ...action.payload.persons],
      };
    case actionType.ALARM_ROOM_OVER:
      return {
        ...state,
        activityLog: [...state.activityLog, ...action.payload.persons],
      };

    default:
      return state;
  }
};

export default activityReducer;
