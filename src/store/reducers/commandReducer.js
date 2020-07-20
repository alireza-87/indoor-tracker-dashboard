import * as actionType from '../actionType'

const commandReducer = (state = {}, action) => {
  console.log('commandReducer actio  > ',action);
  console.log('commandReducer state > ',state);

  switch (action.type) {
    case actionType.ADD_ROOM:
      return {
        ...action.rooms,
      };
      break
    case actionType.GET_ROOM_LIST:
      return {
        ...action.rooms,
      };
      break
      case actionType.GET_ROOM_COUNT:
        return {
          ...action.payload,
        };
        break
    default:
      return state;
  }
};

export default commandReducer;
