"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var MessageSchema = new mongoose_1["default"].Schema({
    conversationId: {
        type: String
    },
    sender: {
        type: String
    },
    text: {
        type: String
    }
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("Message ", MessageSchema);
