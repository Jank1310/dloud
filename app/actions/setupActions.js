import {
    CHECK_SETUP_PROGRESS,
    CHECK_SETUP_FINISHED
} from './actionTypes';
import {
    hashHistory
} from 'react-router'

const ipcMessages = require('../../backend/ipcMessages');

function checkSetupProgress() {
    return {
        type: CHECK_SETUP_PROGRESS
    }
}

function checkSetupFinished(setup) {
    return {
        type: CHECK_SETUP_FINISHED,
        setup
    }
}

export function checkSetup() {
    return function(dispatch, getState, ipcRenderer) {
        dispatch(checkSetupProgress());
        return new Promise((resolve, reject) => {
            ipcRenderer.once(ipcMessages.SETUP_STATUS, (event, setup) => {
                console.log("got setup status", event, setup)
                dispatch(checkSetupFinished(setup));
                resolve(setup);
            });
            ipcRenderer.send(ipcMessages.CHECK_SETUP_STATUS);
        });
    }
}
