var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
// var usersRouter = require('./routes/users');
var summaryRouter = require("./routes/summary")
var loginRouter = require("./routes/login")

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/../build")));

app.use("/", indexRouter);
// app.use('/users', usersRouter);
app.use("/summary", summaryRouter)
app.use("/login", loginRouter)

app.listen(5001, console.log("Server started"));