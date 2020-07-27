import MQTT from "mqtt";
import { roomCount, roomList, result } from "./actions/roomActions";
import { users, personOfRoom } from "./actions/personsAction";
import { personActivity, alarmRoomOver } from "./actions/activityAction";
import * as actionType from "./actionType";
export const middleware = (config) => ({ dispatch }) => {
  const clientId = Math.floor(Math.random() * 10000) + 1;
  let client = null;

  function initConnection() {
    client = MQTT.connect(config);
    client.on("connect", function () {
      client.subscribe("dashboard/" + clientId + "/#");
      client.subscribe("update/#");
      client.subscribe("alarm/#");
    });

    client.on("message", (topic, message) => {
      const msgObj = JSON.parse(message);
      if (
        topic === "dashboard/" + clientId + "/data" &&
        msgObj.type === "roomList"
      ) {
        dispatch(roomList(msgObj));
      } else if (
        topic === "dashboard/" + clientId + "/data" &&
        msgObj.type === "roomCount"
      ) {
        dispatch(roomCount(msgObj));
      } else if (
        topic === "dashboard/" + clientId + "/data" &&
        msgObj.type === "personList"
      ) {
        dispatch(users(msgObj));
      } else if (
        topic === "dashboard/" + clientId + "/data" &&
        msgObj.type === "personOfRoom"
      ) {
        dispatch(personOfRoom(msgObj));
      } else if (topic === "update/room") {
        dispatch(roomCount(msgObj));
      } else if (topic === "update/useractivity") {
        dispatch(personActivity(msgObj));
      } else if (topic === "alarm/room") {
        dispatch(alarmRoomOver(msgObj));
      } else if (topic === "dashboard/" + clientId + "/result/success") {
        dispatch(result(msgObj));
      } else if (topic === "dashboard/" + clientId + "/result/fail") {
        dispatch(result(msgObj));
      }
    });
  }

  return (next) => (action) => {
    if (action.type === actionType.INIT_MQTT) {
      initConnection();
      return;
    }

    if (!client) {
      next(action);
      return;
    }
    switch (action.type) {
      case actionType.ADD_ROOM:
        client.publish(
          "command/" + clientId + "/s",
          JSON.stringify(action.payload)
        );
        break;
      case actionType.GET_ROOM_LIST:
        client.publish(
          "command/" + clientId + "/s",
          JSON.stringify(action.payload)
        );
        break;
      case actionType.GET_ROOM_COUNT:
        client.publish(
          "command/" + clientId + "/s",
          JSON.stringify(action.payload)
        );
        break;
      case actionType.ADD_PERSON:
        client.publish(
          "command/" + clientId + "/s",
          JSON.stringify(action.payload)
        );
        break;
      case actionType.GET_PERSON_LIST:
        client.publish(
          "command/" + clientId + "/s",
          JSON.stringify(action.payload)
        );
        break;
      case actionType.GET_PERSON_LIST_OF_ROOM:
        client.publish(
          "command/" + clientId + "/s",
          JSON.stringify(action.payload)
        );
        break;

      default:
        break;
    }
    //client.publish('testtopic/aliceinwonder','This is a test message')
    next(action);
  };
};

export default middleware;
