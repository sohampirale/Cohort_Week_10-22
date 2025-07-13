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
exports.deleteTable = deleteTable;
const connectDB_1 = require("./connectDB");
function deleteTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `DROP TABLE users`;
            const result = yield connectDB_1.client.query(query);
            console.log('deleted table = ' + JSON.stringify(result));
        }
        catch (error) {
            console.log('failed to drop the table');
        }
    });
}
