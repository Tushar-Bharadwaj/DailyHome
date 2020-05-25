import { FETCH_TABS } from "./tabsActions";

const initialState = {
  genres: [],
  localities: [],
  tags: [],
  sources: [],
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TABS:
      return { ...action.navigationDetails };

    default:
      return state;
  }
};

export default tabReducer;
