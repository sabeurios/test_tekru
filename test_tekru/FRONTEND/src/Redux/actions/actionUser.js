import { GET_USERS} from "./actionTypes";
import axios from "axios";


export const getUsers = () => async (dispatch) => {
  await axios
    .get(`http://localhost:5000/users/`)
    .then((res) => dispatch({ type: GET_USERS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const deleteUser = (userID) => async (dispatch) => {
  await axios
    .delete(`http://localhost:5000/deleteUser/${userID}`)
    .then((res) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};

export const updateUser = (userID,updatedUser) => async (dispatch) => {
  await axios
    .put(`http://localhost:5000/updateUser/${userID}`,updatedUser)
    .then((res) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};
