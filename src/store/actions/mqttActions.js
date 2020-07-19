export const ROOM_LIST = '/App/ROOM_LIST';

export const roomList = roomParams => ({
  type: ROOM_LIST,
  rooms: {
    rooms: roomParams.rooms
  },
});

export const addRoom = (data) => {
  return{
    type:'ADD_ROOM',
    payload:data
  };
};

// export const addRoom = roomParams => ({
//   type: ADD_ROOM,
//   rooms: {
//     rooms: '1111'
//   },
// });