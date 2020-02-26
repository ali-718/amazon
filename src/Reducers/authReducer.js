const initialState = {
  user: {},
  name: "ali haider"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        user: "this is updated",
        isLogin: true
      };
    case "SET_USER_VALUE":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
