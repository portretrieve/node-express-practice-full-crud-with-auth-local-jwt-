import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";

// modules for cors
import cors from 'cors';

//Modules for authentication
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";

// Authentication objects
let localStrategy = passportLocal.Strategy;
import User from '../Models/user';

// module for auth messaging and error management
import flash from 'connect-flash';


import * as DBConfig from "./db";

mongoose.connect(DBConfig.localURI,{useNewUrlParser: true, 'useUnifiedTopology': true} )
mongoose.connection.on("error", console.error.bind(console, "console error"))
mongoose.connection.once("open", ()=>{
  console.log(`connected to MongoDB at: ${DBConfig.HostName} `)
})

import indexRouter from "../Routes/indexRouter";
import clothingRouter from "../Routes/clothingRouter"

const app = express();
// view engine setup
app.set("views", path.join(__dirname, "../Views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../Client")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

// add support for cors
app.use(cors());

// initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// implement an Auth Strategy
passport.use(User.createStrategy());

// serialize and deserialize user data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// setup express session
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false
}));


app.use("/", indexRouter);
app.use("/clothing-list", clothingRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: createError.HttpError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// module.exports = app;
export default app;
