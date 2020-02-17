const initialState = {
  user: "this is just testing",
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
    default:
      return state;
  }
}
