import { List, Map, fromJS } from 'immutable';
import Constants from 'Constants';

const INITIAL_STATE = Map({
  datasets: List(),
  error: null,
  converted: false,
  converting: false
});

const onPopulateDataStore = state => state.set('converting', true);

const onPopulateDataStoreSuccess = (state, { id, json, csv }) => {
  const dataset = Map({
    id,
    csv,
    json
  });
  let datasets = state.get('datasets');
  datasets = datasets.push(dataset);
  return state.merge({
    datasets,
    converting: false,
    converted: true,
    error: null
  });
};

const onError = (state, error) => state.set('error', error);

export const DataReducer = (state = INITIAL_STATE, action = {}) => {
  const { error, payload, type } = action;

  switch (type) {
    case Constants.POPULATE_DATA_STORE:
      return onPopulateDataStore(state);
    case Constants.POPULATE_DATA_STORE_SUCCESS:
      return onPopulateDataStoreSuccess(state, payload);
    case Constants.DISPATCH_ERROR:
      return onError(state, error);
    default:
      return state;
  }
};

export default DataReducer;
