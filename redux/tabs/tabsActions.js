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
    const navigation = await Axios.get("/user_profile/navigation");

    const navigationDetails = {
      genres: navigation.data.genres.all_the_genres || [],
      localities: navigation.data.localities.all_the_localities || [],
      tags: navigation.data.tags.all_the_tags || [],
      sources: navigation.data.sources.all_the_sources || [],
    };

    dispatch(updateTabDetails(navigationDetails));
    return true;
  };
};
