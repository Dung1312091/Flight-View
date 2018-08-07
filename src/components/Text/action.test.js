import * as actions from './action';
import * as types from '../../constants/actionTypes';
describe('action test', () => {
  it('test action increase', () => {
    const data = {
      type: types.INCREASE,
      payload: {}
    };
    expect(actions.Increase()).toEqual(data);
  });
  it('test action decrease', () => {
    const data = {
      type: types.DECREASE,
      payload: {}
    };
    expect(actions.Decrease()).toEqual(data);
  });
});
