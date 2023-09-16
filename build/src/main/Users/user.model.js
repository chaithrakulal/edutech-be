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
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
UserSchema.statics = {
    addRegisteredUser: function (matchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new User(matchQuery);
            const data = yield newUser.save();
            return data;
        });
    },
    getUser: function (matchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.find(matchQuery);
            return data;
        });
    },
};
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
