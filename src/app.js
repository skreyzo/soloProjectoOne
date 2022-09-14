// Подключаю дотенв
require("dotenv").config();
// подключаю path
const path = require("path");

// подключаю библиотеку express

const express = require("express");

// подключаю логгер морган
const morgan = require("morgan");

// вызываю экспресс
const app = express();

const indexRoute = require("./routes/indexRouter");

// настройки для сессий и куки
const session = require("express-session");
const FileStore = require("session-file-store")(session);

// тут я чекаю подключение к базе
const dbConnectionCheck = require("../db/dbConnectionCheck");
dbConnectionCheck();

// выцепляю значения PORT и SSION_SECRET из rocess.env
const { PORT, SESSION_SECRET } = process.env;

// это тоже к логгеру морган относится
app.use(morgan("dev"));

// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, "../public/")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// настройки для куки
const sessionConfig = {
  name: "soloCookie", // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? "soloProject", // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

app.use(session(sessionConfig));
app.use((req, res, next) => {
  console.log(req.session);
  next();
});

app.use("/", indexRoute);

// поднимаю сервер
app.listen(PORT, async () => {
  console.log(`Сервер поднят на ${PORT} порту!`);
});
