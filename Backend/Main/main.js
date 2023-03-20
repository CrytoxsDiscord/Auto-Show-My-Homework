const { app, BrowserWindow } = require("electron");

function createWindow() 
{
    const win = new BrowserWindow
    (
        {
            width: 768,
            height: 560
        }
    );
    console.log(__dirname)
    console.log(`${__dirname}../../Frontend/HTML/index.html`)
    win.loadFile(`${__dirname}../../Frontend/HTML/index.html`)
}

app.whenReady().then(createWindow);
app.on(`window-all-closed`, () => {
    if (process.platform !== 'darwin') app.quit();
});