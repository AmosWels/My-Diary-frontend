import { API_URLS } from "../../appUrls";
import ACTION_TYPE from "../actionTypes";
import { toast } from "react-toastify";
import axios from "axios";

export const signupAction = data => dispatch => {
  return axios
    .post(API_URLS.SIGNUP_USER, data, {})
    .then(response => {
      toast.success(response.data.Message, {
        autoClose: 4000,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.SIGNUP_ACTION,
        payload: response.data
      });
    })
    .catch(error => {
      toast.error(
        "Password and username should be > 5, or Username already exists",
        {
          autoClose: 4000,
          hideProgressBar: true
        }
      );
      return error.response;
    });
};
