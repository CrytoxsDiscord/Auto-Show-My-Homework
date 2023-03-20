import { app, BrowserWindow } from "electron";

function createWindow() 
{
    const win = new BrowserWindow
    (
        {
            width: 768,
            height: 560
        }
    )

    win.loadFile(`${__dirname}../../Frontend/index.html`)
}
