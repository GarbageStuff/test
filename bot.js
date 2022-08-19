// without discord.js, if your having problems with the bot, we cant pretty much help
var WebSocketClient = require('websocket').client;
var fs = require('fs')
var vm2lib = require('vm2')
var vm2 = new vm2lib.VM({ allowAsync: false });
var ws = new WebSocketClient();
var vm = '(wont work, ignore)';
const prefix = "test%";
client.once("ready", function() {
console.log("started");
});
