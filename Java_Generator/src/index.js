"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var express = require("express");
var app = express();
var port = 3000;
// Middleware to parse JSON requests
app.use(express.json());
app.post("/", function (req, res) {
    var requestbody = req.body;
    var class_node = requestbody.class_nodes[0];
    res.send("classid:".concat(class_node.id));
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
