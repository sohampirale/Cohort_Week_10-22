"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB_1 = __importDefault(require("./connectDB"));
const createTable_1 = __importDefault(require("./createTable"));
const insertIntoDB_1 = require("./insertIntoDB");
const deleteTable_1 = require("./deleteTable");
(0, connectDB_1.default)();
let choice = 2;
if (choice == 1) {
    (0, createTable_1.default)();
}
else if (choice == 2) {
    (0, insertIntoDB_1.insertIntoDB)();
}
else if (choice == 3) {
    (0, deleteTable_1.deleteTable)();
}
