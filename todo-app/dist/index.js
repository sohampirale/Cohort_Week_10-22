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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertNewUser(email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName
            }
        });
        console.log('created User : ', user);
    });
}
function updateUser(email, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedUser = yield prisma.user.update({
            where: {
                email,
                password: data.password
            },
            data: {
                firstName: data.firstName,
                lastName: data.lastName
            }
        });
        console.log('updated user : ', updatedUser);
    });
}
// insertNewUser("sohampirale20504@gmail.com","Soham@1","Soham","Pirale");
updateUser("sohampirale20504@gmail.com", {
    firstName: "soham",
    lastName: "pirale",
    password: "Soham@1"
});
