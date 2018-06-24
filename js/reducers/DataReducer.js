import { Map, fromJS } from 'immutable';
import Constants from 'Constants';

const INITIAL_STATE = Map({
  data: null,
  error: null,
  converted: false,
  converting: false
});

const onCSVtoJSON = state => state.set('converting', true);

const onCSVtoJSONSuccess = (state, { file }) =>
  state.merge({
    data: fromJS(file),
    converting: false,
    converted: true,
    error: null
  });

const onCSVtoJSONError = (state, error) => state.set('error', error);

export const DataReducer = (state = INITIAL_STATE, action = {}) => {
  const { error, payload, type } = action;

  switch (type) {
    case Constants.CONVERT_CSV_TO_JSON:
      return onCSVtoJSON(state);
    case Constants.CONVERT_CSV_TO_JSON_SUCCESS:
      return onCSVtoJSONSuccess(state, payload);
    case Constants.CONVERT_CSV_TO_JSON_ERROR:
      return onCSVtoJSONError(state, error);
    default:
      return state;
  }
};

export default DataReducer;
