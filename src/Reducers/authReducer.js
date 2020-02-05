const initialState = {
  user: "this is just testing"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_USER_VALUE":
      return { ...state, user: "this is updated" };
    default:
      return state;
  }
}
