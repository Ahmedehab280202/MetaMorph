"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.post('/figma', function (req, res) {
    console.log(req.body.children);
    res.send('Hello, Express with TypeScript!');
});
app.listen(port, function () {
    console.log("Server is listening on port ".concat(port));
});
