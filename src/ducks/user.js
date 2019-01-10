import axios from "axios";

const initialState = {
  user: {},
  error: ""
};

// action types
const LOGIN = "LOGIN";

//action creators
export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios.post("/auth/login", { username: username, password })
  };
}

// reducer function
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN + "_FULFILLED":
      return { ...state, user: action.payload };
    case LOGIN + "_REJECTED":
      return { ...state, error: "Bad login" };

    default:
      return state;
  }
}
