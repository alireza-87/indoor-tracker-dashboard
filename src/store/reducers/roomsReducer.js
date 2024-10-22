import * as actionType from "../actionType";

const roomReducer = (
  state = {
    totalCurrentOccupide: [0, 0, 0, 0, 0],
    totalCount: 0,
    roomList: [],
  },
  action
) => {
  const totalCount = () => {
    let c = 0;
    state.roomList.forEach((item) => {
      c = c + item.capacity;
    });
    return c;
  };

  const calltotalCurrentOccupide = (data) => {
    let index = 0;
    let c = 0;
    if (data)
      data.forEach((item) => {
        item.counter ? (c = c + item.counter) : (c = c + 0);
      });
    return [c];
  };
  console.log(action);
  switch (action.type) {
    case actionType.ROOM_LIST:
      return {
        ...state,
        roomList: [...action.payload.rooms],
        totalCount: totalCount(),
        totalCurrentOccupide: [
          ...state.totalCurrentOccupide,
          ...calltotalCurrentOccupide(state.rooms),
        ].splice(
          state.totalCurrentOccupide.length > 4
            ? state.totalCurrentOccupide.length - 4
            : 0
        ),
      };
    case actionType.ROOM_COUNT:
      return {
        ...state,
        roomList: state.roomList.map((item) =>
          item.floor === action.payload.rooms.floor &&
          item.room === action.payload.rooms.room
            ? { ...item, counter: action.payload.rooms.count }
            : { ...item }
        ),
        totalCount: totalCount(),
        totalCurrentOccupide: [
          ...state.totalCurrentOccupide,
          ...calltotalCurrentOccupide(
            state.roomList.map((item) =>
              item.floor === action.payload.rooms.floor &&
              item.room === action.payload.rooms.room
                ? { ...item, counter: action.payload.rooms.count }
                : { ...item }
            )
          ),
        ].splice(
          state.totalCurrentOccupide.length > 4
            ? state.totalCurrentOccupide.length - 4
            : 0
        ),
      };
    default:
      return state;
  }
};

export default roomReducer;
