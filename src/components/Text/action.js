import { INCREASE, DECREASE } from '../../constants/actionTypes';
export const Increase = () => {
  return {
    type: INCREASE,
    payload: {}
  };
};
export const Decrease = () => {
  return {
    type: DECREASE,
    payload: {}
  };
};
