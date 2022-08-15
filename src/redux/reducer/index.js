import { GET_LOCATIONS } from '../actions/index';

const initialState = {
  locations: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
      default:
        return state;
  };
}
export default rootReducer;
