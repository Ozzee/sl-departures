import { combineReducers } from 'redux';
import moment from 'moment';

const testReducer = () => {
    return {
      stops: {
        fruangen: {
              name: 'Fruängen',
              id: '1234',
              departures: [
                {
                  line: '14',
                  destination: 'Mörby Centrum',
                  time: moment().add(1, 'minutes').seconds(0).format()
                },
                {
                  line: '14',
                  destination: 'Mörby Centrum',
                  time: moment().add(6, 'minutes').seconds(0).format()
                },
                {
                  line: '14',
                  destination: 'Mörby Centrum',
                  time: moment().add(11, 'minutes').seconds(0).format()
                }
              ]
        }
      }
    };
};

const departuresApp = combineReducers({
  testReducer
});

export default departuresApp;