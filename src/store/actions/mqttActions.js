export const ROOM_LIST = '/App/ROOM_LIST';

export const roomList = roomParams => ({
  type: ROOM_LIST,
  rooms: {
    rooms: roomParams.rooms
  },
});