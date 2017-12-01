var invertName = require("./name-inverter");
var leftPad = require('left-pad');

var name = process.argv[2];
var invertedName = invertName(name);
var paddedName = leftPad(invertedName, invertedName.length + 5, "🤗");
console.log(paddedName);