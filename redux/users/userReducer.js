import { FETCH_USER_INFO, SIGN_IN_USER } from "./userActions";

const initialState = {
  isLoggedIn: false,
  userToken: "",
  details: {
    id: "",
    email: "",
    name: "",
  },
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
  }
  return state;
};

export default userReducer;
