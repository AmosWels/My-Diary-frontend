import { API_URLS } from "../../appUrls";
import ACTION_TYPE from "../actionTypes";
import { toast } from "react-toastify";
import { headers } from "../../utils/myHeaders";
import axios from "axios";

export const getAllEntries = () => dispatch => {
  return axios
    .get(API_URLS.CREATE_VIEW_ENTRIES, headers())
    .then(res => {
      dispatch({
        type: ACTION_TYPE.VIEW_ENTRIES,
        payload: res.data.entries
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};
