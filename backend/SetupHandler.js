const ipcMessages = require('./ipcMessages');

class SetupHandler {
    constructor(ipcMain) {
        this._ipcMain = ipcMain;
        this.registerEvents();
    }

    registerEvents() {
        this._ipcMain.on(ipcMessages.CHECK_SETUP_STATUS, this.handleCheckSetupStatus);
    }

    handleCheckSetupStatus(event, arg) {
        let setupComplete = false;
        if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
            setupComplete = true;
        }
        event.sender.send(ipcMessages.SETUP_STATUS, {
            complete: setupComplete
        });
    }
}

module.exports = SetupHandler;
