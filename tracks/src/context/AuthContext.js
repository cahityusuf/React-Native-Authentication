import createDataContext from "./createDataContext";
import pazaarApi from "../api/pazaar"

const authReducer = (state, action) => {
  switch (action.type) {
    case value:
      break;

    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await pazaarApi.post('/auth/register', ({ email:email, password:password }));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
