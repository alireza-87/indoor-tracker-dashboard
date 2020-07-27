import * as actionType from "../actionType";

const commandReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.ADD_ROOM:
      return {
        ...action.rooms,
      };
    case actionType.ADD_PERSON:
      return {
        ...action.person,
      };

    case actionType.GET_ROOM_LIST:
      return {
        ...action.rooms,
      };
    case actionType.GET_ROOM_COUNT:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default commandReducer;
