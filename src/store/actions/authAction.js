import * as actionType from "../actionType";
import axios from "axios";

export const login = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:1080/login", data).then((res) => {
      const data = res;
      dispatch({
        type: actionType.LOGIN,
        login: data.data,
      });
    });
  };
};

export const logOut = () => ({
  type: actionType.LOGOUT,
});
