//initial state for redux store
const initialState = {
  chartData: []
};

//reducer function
export default function (state = initialState, action) {
  switch (action.type) {
    case "RESET_STATE":
      state = initialState;
      return state;
    case 'FETCH_ITEMS':
      return {
        ...state,
        chartData: action.payload
      };
    //returns default state, in case some unknown action type is discovered
    default:
      return state;
  }
}
