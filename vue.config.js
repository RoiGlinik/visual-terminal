module.exports = {
    "pluginOptions":  {
        "electronBuilder": {
          "nodeIntegration": true, // this may or may not be necessary - you can try without it
           externals:['node-pty'], // this excludes the node-pty from the front end
           allowRendererProcessReuse : false,
        }
    }
}