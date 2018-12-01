import { API_URLS, BASE_URL } from "../../appUrls";
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

export const createEntryAction = data => dispatch => {
  return axios
    .post(API_URLS.CREATE_VIEW_ENTRIES, data, headers())
    .then(res => {
      toast.success(res.data.Message, {
        autoClose: 3500,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.NEW_ENTRY,
        payload: res.data
      });
    })
    .catch(error => {
      toast.error("Cannot Create, Please Check your fields format", {
        autoClose: 3500,
        hideProgressBar: true
      });
    });
};

export const deleteAnEntry = id => dispatch => {
  return axios
    .delete(BASE_URL + `/api/v1/entries/${id}`, headers())
    .then(res => {
      toast.success(res.data.Message, {
        autoClose: 3500,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.DELETE_ONE_ENTRY,
        payload: res.data
      });
    })
    .catch(error => {
      toast.error(error, { autoClose: 3500, hideProgressBar: true });
    });
};

export const updateEntryAction = (id, data) => dispatch => {
  return axios
    .put(BASE_URL + `/api/v1/entries/${id}`,data, headers())
    .then(res => {
      toast.success(res.data.Message, {
        autoClose: 3500,
        hideProgressBar: true
      });
      dispatch({
        type: ACTION_TYPE.MODIFY_ENTRY,
        payload: res.data
      });
    })
    .catch(error => {
      toast.error("You can only Update today's entries!, Otherwise please Check your fields format", {
        autoClose: 5000,
        hideProgressBar: true
      });
    });
};
