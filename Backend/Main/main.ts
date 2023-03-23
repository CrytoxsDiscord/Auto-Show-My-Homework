const { app, BrowserWindow } = require("electron");

function createWindow() 
{
    const win = new BrowserWindow
    (
        {
            width: 1900,
            height: 1500,
        }
    );

    //win.setMenu(null);
    win.loadFile(`${__dirname}../../../Frontend/HTML/index.html`)
}

app.whenReady().then(createWindow);
// When the window is close, quit the app.
app.on(`window-all-closed`, () => {
    if (process.platform !== 'darwin') app.quit();
});