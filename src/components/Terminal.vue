<template>
  <div :id="'xterm-' + index">
  </div>
</template>

<script>
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
var os = require("os");
var pty = require("node-pty");

export default {
  name: "Terminal",
  props: {
    index: String,
  },
  mounted() {
    // Initialize node-pty with an appropriate shell
    const shell =
      process.env[os.platform() === "win32" ? "powershell" : "SHELL"];
    const ptyProcess = pty.spawn(shell, [], {
      name: "xterm-color",
      cols: 80,
      rows: 30,
      cwd: process.cwd(),
      env: process.env,
    });

    // Initialize xterm.js and attach it to the DOM
    const xterm = new Terminal();
    xterm.open(document.getElementById("xterm-" + this.index));

    // Setup communication between xterm.js and node-pty
    xterm.onData((data) => ptyProcess.write(data));
    ptyProcess.on("data", function (data) {
      xterm.write(data);
    });
  },
};
</script>