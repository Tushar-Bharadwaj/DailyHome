import getAxios from "../../util/axios-helper";

export const SIGN_IN_USER = "sign-in-user";
export const FETCH_USER_INFO = "fetch-user-info";
export const SIGN_OUT_USER = "sign-out-user";

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
    Axios.get("/user_profile/info")
      .then((response) => {
        const userDetails = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        };
        dispatch(getUserInfoAction(userDetails));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
