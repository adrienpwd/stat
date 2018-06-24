import Constants from 'Constants';
import { csvtojson } from 'Utils';

export const convertCSVtoJSON = file => {
  return dispatch => {
    dispatch({
      type: Constants.CONVERT_CSV_TO_JSON
    });

    let csv;

    if (file.type === 'text/csv') {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = event => {
        csv = csvtojson(event.target.result);
        dispatch({
          type: Constants.CONVERT_CSV_TO_JSON_SUCCESS,
          payload: { file: csv }
        });
      };
    } else {
      dispatch({
        type: Constants.CONVERT_CSV_TO_JSON_ERROR,
        error: 'Please select a valid csv file.'
      });
    }
  };
};

export default {
  convertCSVtoJSON
};
