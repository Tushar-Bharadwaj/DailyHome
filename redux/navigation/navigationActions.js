import getAxios from "../../util/axios-helper";
export const FETCH_OFFLINE_NAVIGATION = "fetch-offline-navigation";

export const updateOfflineNavigation = (navigationDetails) => {
  return {
    type: FETCH_OFFLINE_NAVIGATION,
    navigationDetails: navigationDetails,
  };
};

/**
 * Fetch the navigation links for the users that aren't logged in
 */
export const fetchOfflineNavigation = () => {
  return async (dispatch) => {
    const Axios = getAxios();
    const response = await Axios.get(
      "/injestion/user_profile/newsComponents/generic"
    );
    const navigationDetails = response.data.all_the_genres;
    dispatch(updateOfflineNavigation(navigationDetails));
    return true;
  };
};
