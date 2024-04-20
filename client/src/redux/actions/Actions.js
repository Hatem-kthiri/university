import {
  CURRENT_USER,
  ERROR,
  LOADING,
  LOGIN_USER,
} from "../constants/actions-types";
import axios from "axios";
import { errorToast, successToast, url } from "../../utils";

export const login =
  ({ loginDetails, navigate }) =>
  (dispatch) => {
    dispatch({ type: LOADING });
    axios
      .post(`${url}/api/v1/auth/login`, loginDetails)
      .then((response) => {
        dispatch({ type: LOGIN_USER, payload: response.data.data });
        successToast(response.data.message);
        loginDetails.role === "Admin"
          ? navigate("/admin/dashboard")
          : loginDetails === "Professor"
          ? navigate("/professor/dashboard")
          : navigate("/student/dashbaord");
      })
      .catch((err) => {
        errorToast(err.response.data.message);
      });
  };
export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios
      .get(`${url}/api/v1/auth/current`, config)
      .catch((err) => {
        if (err.response.data.message === "Invalid token") {
          localStorage.removeItem("accessToken");
          window.location.reload();
        }
      });
    if (result.data.status) {
      dispatch({ type: CURRENT_USER, payload: result.data });
    }
  } catch (error) {
    console.log(error);
  }
};
