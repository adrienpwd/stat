import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({ a: 'a' });

export const DataReducer = (state = INITIAL_STATE, action = {}) => {
  // const { payload, type } = action;
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default DataReducer;
