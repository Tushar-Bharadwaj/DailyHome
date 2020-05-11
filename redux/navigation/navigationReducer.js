import { FETCH_OFFLINE_NAVIGATION } from "./navigationActions";

const initialState = [];

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFLINE_NAVIGATION:
      return [...action.navigationDetails];

    default:
      return state;
  }
};

export default navigationReducer;
