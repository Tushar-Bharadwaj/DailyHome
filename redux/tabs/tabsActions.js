import getAxios from "../../util/axios-helper";
export const FETCH_TABS = "fetch-tabs";

export const updateTabDetails = (navigationDetails) => {
  return {
    type: FETCH_TABS,
    navigationDetails: navigationDetails,
  };
};

/**
 * Fetch the navigation links for the users that aren't logged in
 */
export const fetchTabDetails = (token) => {
  return async (dispatch) => {
    const Axios = getAxios(token);
    const navigation = await Axios.get(
      "/injestion/user_profile/newsComponents/generic"
    );

    const navigationDetails = {
      genres: navigation.data.all_the_genres || [],
      localities: navigation.data.all_the_localities || [],
      tags: navigation.data.all_the_tags || [],
      sources: navigation.data.all_the_sources || [],
    };
    console.log("Tab Details");
    console.log(navigationDetails);
    dispatch(updateTabDetails(navigationDetails));
    return true;
  };
};
