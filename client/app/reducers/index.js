import { SEARCH_DRAMA_NAME } from '../actions';

const initialState = {
  dramaList: [],
  keyword: '',
  pendingSearch: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case `${SEARCH_DRAMA_NAME}_PENDING`:
      // API PENDING.
      return {
        ...state,
        pendingSearch: true,
      };
    case `${SEARCH_DRAMA_NAME}_FULFILLED`:
      return {
        dramaList: action.payload.data.result,
        keyword: action.payload.data.keyword,
        pendingSearch: false,
      };
    default:
      return state;
  }
}

export default reducer;
