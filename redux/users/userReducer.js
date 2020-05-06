import {
  FETCH_USER_INFO,
  SIGN_IN_USER,
  SIGN_OUT_USER,
  UPDATE_PREFERENCE,
} from "./userActions";

let initialState = {
  isLoggedIn: false,
  userToken: "",
  details: {
    id: "",
    email: "",
    name: "",
  },

  following: {},
  blocked: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        isLoggedIn: true,
        userToken: action.userToken,
      };

    case FETCH_USER_INFO:
      return {
        ...state,
        details: action.details,
      };

    case SIGN_OUT_USER:
      return initialState;
    case UPDATE_PREFERENCE:
      return {
        ...state,
        following: action.following,
        blocked: action.blocked,
      };
  }
  return state;
};

export default userReducer;
