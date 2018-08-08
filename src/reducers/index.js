import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import handleCollapse from '../components/Header/reducer';
export default combineReducers({
  user: () => {
    return {
      isAuthenticated: false,
      loaded: false,
      lang: 'en'
    };
  },
  test: () => {
    return {};
  },
  router: routerReducer,
  handleCollapse
});
