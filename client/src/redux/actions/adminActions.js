import axios from "axios";
import { errorToast, successToast, url } from "../../utils";
import { GET_GROUP_LIST } from "../constants/actions-types";

export const get_group_list = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(`${url}/api/v1/admin/get_group_list`, config);
    dispatch({ type: GET_GROUP_LIST, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
