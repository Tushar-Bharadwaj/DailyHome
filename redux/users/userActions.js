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
  return (dispatch) => {
    let Axios = getAxios();
    return new Promise((resolve, reject) => {
      Axios.post("/user_profile/auth/signin", {
        password: formInputs.password,
        email: formInputs.email,
      })
        .then((response) => {
          const authToken = response.data.accessToken;
          dispatch(signInAction(authToken));
          return resolve(authToken);
        })
        .catch((error) => {
          //TODO: Proper Error Toast
          console.log(error);
        });
    });
  };
};

export const fetchUserDetails = (token) => {
  return (dispatch) => {
    let Axios = getAxios(token);
    return new Promise((resolve, reject) => {
      Axios.get("/user_profile/info")
        .then((response) => {
          const userDetails = {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
          };
          dispatch(getUserInfoAction(userDetails));
          return resolve(userDetails);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
};

export const fetchBlockedAndFollowing = (userid, token) => {
  return async (dispatch) => {
    let Axios = getAxios(token);
    const following = await Axios.get(`/home_profile/following/${userid}`).then(
      (response) => {
        return {
          genres: response.data.genres.all_the_genres,
          localities: response.data.localities.all_the_localities,
          languages: response.data.languages.all_the_languages,
          localities: response.data.localities.all_the_localities,
        };
      }
    );
    const blocked = await Axios.get(`/home_profile/blocked/${userid}`).then(
      (response) => {
        return {
          genres: response.data.genres.all_the_genres,
          localities: response.data.localities.all_the_localities,
          languages: response.data.languages.all_the_languages,
          localities: response.data.localities.all_the_localities,
        };
      }
    );
    dispatch(updatePreferenceAction(blocked, following));
  };
};
