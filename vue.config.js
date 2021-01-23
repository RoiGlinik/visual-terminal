module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
        resolve: {
            symlinks: false
        }
    },
    transpileDependencies: [
        '@coreui/utils'
    ],
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true, // this may or may not be necessary - you can try without it
            externals: ['node-pty'], // this excludes the node-pty from the front end
            allowRendererProcessReuse: false,
        }
    }
}