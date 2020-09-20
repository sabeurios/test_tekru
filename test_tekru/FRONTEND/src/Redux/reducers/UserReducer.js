import { GET_USERS } from "../actions/actionTypes";

const initState = {
  users: [
    { name: "user1", family_name: "family1" },
    { name: "user2", family_name: "family2" },
    { name: "user3", family_name: "family3" }]
};

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
