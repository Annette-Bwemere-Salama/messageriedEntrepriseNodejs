"use strict";
exports.__esModule = true;
var express_1 = require("express");
// import passport from 'passport';
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
var path_1 = require("path");
var helmet_1 = require("helmet");
var morgan_1 = require("morgan");
// import multer from 'multer';
var auth_1 = require("./routes/auth");
// import {upload} from "./upload/multer"
// import multer from 'multer';
// const app: Express = express()
dotenv_1["default"].config();
var URI = process.env.MONGODB_URI;
mongoose_1["default"].connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log("Connection fait avec succes chez mongodbdatabase ");
});
// midlewere
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(helmet_1["default"]());
app.use(morgan_1["default"]("common"));
console.log(process.env);
app.post("/register", auth_1.getRegister);
app.post("/login", auth_1.getLogin);
app.get("/images", express_1["default"].static(path_1["default"].join(__dirname, "./public/images")));
var port = process.env.PORT;
app.listen(4001, function () {
    console.log("[server]: Server is runnning at https : anny  localhost: " + port);
});
