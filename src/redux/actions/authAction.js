import constants from "../../utils/constants";
import authTypes from "../types/authTypes";

export const getAuthenticationRequestToken = () => async (dispatch) => {
  try {
    const res = await fetch(
      `${constants.BASE_URL}/authentication/token/new?api_key=${constants.API_KEY}`
    );
    const data = await res.json();
    dispatch({
      type: authTypes.FETCH_AUTHENTICATION_TOKEN_NEW,
      payload: data.request_token,
    });
    return data.request_token;
  } catch (e) {
    return e;
  }
};

export const getAuthenticationRequestTokenWithLogin =
  (payload) => async (dispatch) => {
    try {
      const res = await fetch(
        `${constants.BASE_URL}/authentication/token/validate_with_login?api_key=${constants.API_KEY}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      dispatch({
        type: authTypes.FETCH_AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN,
        payload: data.request_token,
      });
      return data.request_token;
    } catch (e) {
      return e;
    }
  };

export const getAuthenticationSessionUser = (payload) => async (dispatch) => {
  try {
    const res = await fetch(
      `${constants.BASE_URL}/authentication/session/new?api_key=${constants.API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    const data = await res.json();

    dispatch({
      type: authTypes.FETCH_AUTHENTICATION_SESSION_NEW,
      payload: data.session_id,
    });
    return data.session_id;
  } catch (e) {
    return e;
  }
};

export const loginAccount =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const requestToken = await dispatch(getAuthenticationRequestToken());

      const userToken = await dispatch(
        getAuthenticationRequestTokenWithLogin({
          username,
          password,
          request_token: requestToken,
        })
      );

      const userSession = await dispatch(
        getAuthenticationSessionUser({
          request_token: userToken,
        })
      );
    } catch (e) {
      return e;
    }
  };

export const fetchAccount = () => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const res = await fetch(
      `${constants.BASE_URL}/account?api_key=${constants.API_KEY}&session_id=${auth.userSession}`
    );
    const data = await res.json();
    dispatch({
      type: authTypes.FETCH_ACCOUNT,
      payload: data,
    });
    return data;
  } catch (e) {
    return e;
  }
};
