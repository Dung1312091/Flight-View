import { TOGLE } from '../../constants/actionTypes';
const initialState = {
  isCollapse: false
};
const handleCollapse = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case TOGLE: {
      return {
        ...state,
        isCollapse: !state.isCollapse
      };
    }
    default:
      return state;
  }
};
export default handleCollapse;
