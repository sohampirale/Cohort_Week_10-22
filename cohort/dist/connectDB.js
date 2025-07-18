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
exports.client = void 0;
exports.default = connectDB;
const pg_1 = require("pg");
exports.client = new pg_1.Client({
    connectionString: process.env.NEON_DB_URI
});
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.client.connect();
            console.log('DB connected successfully!');
        }
        catch (error) {
            console.log('Failed to connect DB : ' + JSON.stringify(error));
        }
    });
}
