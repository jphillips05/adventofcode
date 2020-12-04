const Utils = require('./util.js')
const fs = require('fs')
let data = Utils.ReadFile('/data/Day1.txt').map(n => parseInt(n));
console.log(Utils.AddsUp(data, 2020))