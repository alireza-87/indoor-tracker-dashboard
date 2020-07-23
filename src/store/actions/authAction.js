import * as actionType from '../actionType'
import axios from "axios";
  
  
export const login = (data) => {
    console.log("login");


    return dispatch => {
        console.log("login dispatch");
        axios.post("http://localhost:1080/login",data)
        .then(res => {
            const data = res;
            console.log("login dispatch ",res);
            dispatch({
                type: actionType.LOGIN,
                login: data.data
            });
        })
    };
};

