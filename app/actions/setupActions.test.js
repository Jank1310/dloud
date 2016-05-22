import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    checkSetup
} from './setupActions'
import {
    CHECK_SETUP_PROGRESS,
    CHECK_SETUP_FINISHED
} from './actionTypes'
import {
    expect
} from 'chai'
import electronIPCMock from 'electron-ipc-mock'
import ipcMessages from '../../backend/ipcMessages';

const ipcMocks = electronIPCMock();
const middlewares = [thunk.withExtraArgument(ipcMocks.ipcRenderer)];
const mockStore = configureMockStore(middlewares);

describe('setupActions', () => {
    it('should get setup via ipc', () => {
        ipcMocks.ipcMain.once(ipcMessages.CHECK_SETUP_STATUS, (event) => {
            event.sender.send(ipcMessages.SETUP_STATUS, {
                complete: true
            });
        })
        const expectedActions = [{
            type: CHECK_SETUP_PROGRESS
        }, {
            type: CHECK_SETUP_FINISHED,
            setup: {
                complete: true
            }
        }]
        const store = mockStore()
        return store.dispatch(checkSetup())
            .then(() => {
                expect(store.getActions()).to.deep.equal(expectedActions);
            })
    })
})
