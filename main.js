const electron = require('electron');
const {
    app,
    BrowserWindow
} = electron;
let window;

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600
    });
    window.loadURL(`file://${__dirname}/public/index.html`);
    window.webContents.openDevTools();
    window.on('closed', () => {
        win = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
