"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
let localStrategy = passport_local_1.default.Strategy;
const user_1 = __importDefault(require("../Models/user"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const DBConfig = __importStar(require("./db"));
mongoose_1.default.connect(DBConfig.localURI, { useNewUrlParser: true, 'useUnifiedTopology': true });
mongoose_1.default.connection.on("error", console.error.bind(console, "console error"));
mongoose_1.default.connection.once("open", () => {
    console.log(`connected to MongoDB at: ${DBConfig.HostName} `);
});
const indexRouter_1 = __importDefault(require("../Routes/indexRouter"));
const clothingRouter_1 = __importDefault(require("../Routes/clothingRouter"));
const app = express_1.default();
app.set("views", path_1.default.join(__dirname, "../Views"));
app.set("view engine", "ejs");
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "../../Client")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../node_modules")));
app.use(cors_1.default());
app.use(connect_flash_1.default());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
passport_1.default.use(user_1.default.createStrategy());
passport_1.default.serializeUser(user_1.default.serializeUser());
passport_1.default.deserializeUser(user_1.default.deserializeUser());
app.use(express_session_1.default({
    secret: DBConfig.Secret,
    saveUninitialized: false,
    resave: false
}));
app.use("/", indexRouter_1.default);
app.use("/clothing-list", clothingRouter_1.default);
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});
exports.default = app;
//# sourceMappingURL=app.js.map