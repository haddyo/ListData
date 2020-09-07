//initial state for redux store
const initialState = {
  posts: [],
  comments: [],
  profiles: [],
  activePost: ''
};

//reducer function
export default function (state = initialState, action) {
  switch (action.type) {
    case "RESET_STATE":
      state = initialState;
      return state;
    case 'FETCH_POST_ITEMS':
      return {
        ...state,
        posts: action.payload
      };
    case 'FETCH_COMMENT_ITEMS':
      return {
        ...state,
        comments: action.payload
      };
    case 'FETCH_PROFILE_ITEMS':
      return {
        ...state,
        profiles: action.payload
      };
    case 'SET_ACTIVE_POST':
      return {
        ...state,
        activePost: action.payload
      };

    //returns default state, in case some unknown action type is discovered
    default:
      return state;
  }
}
