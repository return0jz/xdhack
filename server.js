var express = require("express");
const path = require('path');
var app = express();

function main() {
    app.use(express.static(__dirname+'/public'))
    app.listen(process.env.PORT || 3000);
}
main();