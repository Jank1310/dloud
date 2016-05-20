const SetupHandler = require('./SetupHandler');
const ipcMessages = require('./ipcMessages');
const electronIPCMock = require('electron-ipc-mock');
const {
    expect
} = require('chai');

describe('SetupHandler', function() {
    let setupHandler;
    let ipcRenderer,
        ipcMain;
    beforeEach(function() {
        let ipcMocks = electronIPCMock();
        ipcRenderer = ipcMocks.ipcRenderer;
        ipcMain = ipcMocks.ipcMain;
        setupHandler = new SetupHandler(ipcMain);
    });

    it('should return uncompleted setup status', (ready) => {
        delete process.env.AWS_ACCESS_KEY_ID;
        delete process.env.AWS_SECRET_ACCESS_KEY;
        ipcRenderer.on(ipcMessages.SETUP_STATUS, (setupStatus) => {
            expect(setupStatus.complete).to.be.false;
            ready();
        });
        ipcRenderer.send(ipcMessages.CHECK_SETUP_STATUS);
    });

    it('should return completed setup status', (ready) => {
        process.env.AWS_ACCESS_KEY_ID = 'some_access_key_id';
        process.env.AWS_SECRET_ACCESS_KEY = 'some_secret_access_key';
        ipcRenderer.on(ipcMessages.SETUP_STATUS, (setupStatus) => {
            expect(setupStatus.complete).to.be.true;
            ready();
        });
        ipcRenderer.send(ipcMessages.CHECK_SETUP_STATUS);
    })
});
