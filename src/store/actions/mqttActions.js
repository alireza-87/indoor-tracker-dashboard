export const ROOM_LIST = '/App/ROOM_LIST';

export const result = (data) => {
  return{
    type:'RESULT',
    payload:data
  };

}

export const roomList = roomParams => ({
  type: ROOM_LIST,
  rooms: {
    rooms: roomParams.result
  },
});

export const addRoom = (data) => {
  return{
    type:'ADD_ROOM',
    payload:data
  };
};

export const getRoomList = (data) => {
  return{
    type:'GET_ROOM_LIST',
    payload:data
  };
};


// export const addRoom = roomParams => ({
//   type: ADD_ROOM,
//   rooms: {
//     rooms: '1111'
//   },
// });