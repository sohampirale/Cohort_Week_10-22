"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertIntoDB = insertIntoDB;
const connectDB_1 = require("./connectDB");
function insertIntoDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      INSERT INTO users (username,email,password) VALUES($1,$2,$3)
    `;
            const values = ['soham1', 'soham1@gmail.com', 'Soham@1'];
            const result = yield connectDB_1.client.query(query, values);
            console.log('inserted value = ' + JSON.stringify(result));
        }
        catch (error) {
            console.log('error while inserting : ' + JSON.stringify(error));
        }
    });
}
