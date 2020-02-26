export const changeValue = () => dispatch => {
  dispatch({ type: "CHANGE_VALUE" });
};

export const SetUserDetails = user => dispatch => {
  dispatch({
    type: "SET_USER_VALUE",
    payload: user
  });
};
