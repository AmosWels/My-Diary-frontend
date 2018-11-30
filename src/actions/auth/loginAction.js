import { API_URLS } from "../../appUrls";
import ACTION_TYPE from "../actionTypes";
import { toast } from "react-toastify";
import axios from "axios";

export const loginAction = data => dispatch => {
  return axios
    .post(API_URLS.LOGIN_USER, data)
    .then(response => {
      toast.success("You have Succefully Logged In", {
        autoClose: 4000,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.LOGIN_ACTION,
        payload: response.data
      });
    })
    .catch(error => {
      toast.error(
        "Wrong Credentials",
        {
          autoClose: 4000,
          hideProgressBar: true
        }
      );
      return error.response;
    });
};
