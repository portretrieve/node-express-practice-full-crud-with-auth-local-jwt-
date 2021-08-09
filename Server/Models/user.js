"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    emailAddress: String,
    displayName: String,
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "users"
});
UserSchema.plugin(passport_local_mongoose_1.default);
exports.default = mongoose_1.default.model("UserModel", UserSchema);
//# sourceMappingURL=user.js.map