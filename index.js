var app = require('app')
var BrowserWindow = require('browser-window')

require('crash-reporter').start();
var mainWindow = null;
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    'title-bar-style': 'hidden'
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  if(process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
  }
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
