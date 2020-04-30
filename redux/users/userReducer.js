import { SET_LOGGED_IN_USER, SIGN_IN_USER } from "./userActions";

const initialState = {
  isLoggedIn: false,
  userToken: "",
  details: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        isLoggedIn: true,
        userToken: action.userToken,
      };

    case SET_LOGGED_IN_USER:
      return {
        ...state,
        details: action.details,
      };
  }
  return state;
};

export default userReducer;
