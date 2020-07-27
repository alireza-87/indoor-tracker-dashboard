import * as actionType from "../actionType";

const INIT_STATE = {
  allUser: [],
};

const PersonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.PERSON_LIST:
      return {
        ...state,
        allUser: [...action.payload.persons],
      };
    case actionType.PERSON_OF_ROOM:
      return {
        ...state,
        allUser: [...action.payload.persons],
      };

    default:
      return state;
  }
};

export default PersonReducer;
