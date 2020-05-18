import getAxios from "../../util/axios-helper";

export const SIGN_IN_USER = "sign-in-user";
export const FETCH_USER_INFO = "fetch-user-info";
export const SIGN_OUT_USER = "sign-out-user";
export const UPDATE_PREFERENCE = "update-preference";

export const signInAction = (userToken) => {
  return {
    type: SIGN_IN_USER,
    userToken: userToken,
  };
};

export const getUserInfoAction = (details) => {
  return {
    type: FETCH_USER_INFO,
    details: details,
  };
};

export const updatePreferenceAction = (blocked, following) => {
  return {
    type: UPDATE_PREFERENCE,
    blocked: blocked,
    following: following,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT_USER,
  };
};

/**
 * Thunk Related Actions
 */

export const signInUser = (formInputs) => {
  return async (dispatch) => {
    let Axios = getAxios();
    const user = await Axios.post("/user_profile/auth/signin", {
      password: formInputs.password,
      email: formInputs.email,
    });

    const token = user.data.accessToken;
    dispatch(signInAction(token));
    return token;
  };
};

export const fetchUserDetails = (token) => {
  return async (dispatch) => {
    let Axios = getAxios(token);
    const user = await Axios.get("/user_profile/info");
    console.log("User info is");
    console.log(user.data);
    const userDetails = {
      id: user.data.id,
      name: user.data.name,
      email: user.data.email,
      image: user.data.imagePath,
    };
    dispatch(getUserInfoAction(userDetails));
    return userDetails;
  };
};

export const fetchBlockedAndFollowing = (userid, token) => {
  return async (dispatch) => {
    let Axios = getAxios(token);
    const response = await Axios.get(`/home_profile/following/${userid}`);
    const following = {
      genres: response.data.genres.all_the_genres,
      localities: response.data.localities.all_the_localities,
      languages: response.data.languages.all_the_languages,
      localities: response.data.localities.all_the_localities,
    };

    const blockedResponse = await Axios.get(`/home_profile/blocked/${userid}`);
    const blocked = {
      genres: blockedResponse.data.genres.all_the_genres,
      localities: blockedResponse.data.localities.all_the_localities,
      languages: blockedResponse.data.languages.all_the_languages,
      localities: blockedResponse.data.localities.all_the_localities,
    };
    dispatch(updatePreferenceAction(blocked, following));
    return {
      blocked: blocked,
      following: following,
    };
  };
};
