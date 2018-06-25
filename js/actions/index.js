import Constants from 'Constants';
import { csvtojson, jsontocsv } from 'Utils';

export const processData = file => {
  return dispatch => {
    dispatch({
      type: Constants.POPULATE_DATA_STORE
    });

    if (!window || !window.File || !window.FileReader) {
      dispatch({
        type: Constants.DISPATCH_ERROR,
        error: "Your Browser doesn't support the File API"
      });
    }

    if (file.type !== 'text/csv' || file.type !== 'application/json') {
      dispatch({
        type: Constants.DISPATCH_ERROR,
        error: 'Please select a valid file, we accept both csv and json files.'
      });
    }

    if (file.type === 'text/csv') {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = event => {
        dispatch({
          type: Constants.POPULATE_DATA_STORE_SUCCESS,
          payload: {
            id: file.name,
            csv: event.target.result,
            json: csvtojson(event.target.result)
          }
        });
      };
    }

    if (file.type === 'application/json') {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(e) {
        const result = JSON.parse(e.target.result);

        dispatch({
          type: Constants.POPULATE_DATA_STORE_SUCCESS,
          payload: {
            id: file.name,
            json: result,
            csv: jsontocsv(result)
          }
        });
      };
    }
  };
};

export default {
  processData
};
