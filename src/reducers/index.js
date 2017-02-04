import { combineReducers } from 'redux';

const testReducer = (state, action) => {
    return {
      stops: {
        fruangen: {
              name: 'Fruängen',
              id: '1234',
              departures: [
                {
                  line: '14',
                  destination: 'Mörby Centrum',
                  time: '11:30'
                },
                {
                  line: '14',
                  destination: 'Mörby Centrum',
                  time: '11:40'
                },
                {
                  line: '14',
                  destination: 'Mörby Centrum',
                  time: '11:50'
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