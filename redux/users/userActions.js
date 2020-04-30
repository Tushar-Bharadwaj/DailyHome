import getAxios from "../../util/axios-helper";

export const SIGN_IN_USER = "sign-in-user";
export const SET_LOGGED_IN_USER = "set-logged-in-user";

export const signIn = (userToken) => {
  return {
    type: SIGN_IN_USER,
    userToken: userToken,
  };
};

export const setLoggedInUser = (details) => {
  return {
    type: SET_LOGGED_IN_USER,
    details: details,
  };
};

export const signInUser = (formInputs) => {
  return (dispatch) => {
    let Axios = getAxios();
    Axios.post("/user_profile/auth/signin", {
      password: formInputs.password,
      email: formInputs.email,
    })
      .then((response) => {
        const authToken = response.data.accessToken;
        dispatch(signIn(authToken));
      })
      .catch((error) => {
        //TODO: Proper Error Toast
        console.log("Error Has Occured");
      });
  };
};
