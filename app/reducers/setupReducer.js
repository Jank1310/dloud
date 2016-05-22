import {CHECK_SETUP_PROGRESS, CHECK_SETUP_FINISHED} from '../actions/actionTypes';

const initialState = {
  complete: false
};

export default function setupReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_SETUP_PROGRESS:
      return Object.assign({}, state, {
        checking: true,
      });
    case CHECK_SETUP_FINISHED:
      return Object.assign({}, state, {
        complete: action.setup.complete,
        awsAccessKeyId: action.setup.awsAccessKeyId,
        awsSecretAccessKey: action.setup.awsSecretAccessKey
      })
    default:
      return state
  }
}
