const route = require("express").Router();
const bcrypt = require("bcrypt");
// тут я подключаю шаблон для рендеринга вьюшек.
const renderTemplate = require("../../lib/renderTemplate");
const Login = require("../views/Login");
const Main = require("../views/Main");
const Register = require("../views/Register");
const Dog = require("../views/Dog");
const Lk = require("../views/Lk");
const { User } = require("../../db/models");

// достаю мидлварки, которые проверяют наличие этого юзера в БД
const {
  checkUserInBase,
  checkUserInBaseLogin,
} = require("../../src/middleware/checkUser.middleware");

// юзер зашел в корень проекта
route.get("/", (req, res) => {
  const user = req.session?.user;
  renderTemplate(Main, { user }, res);
});

route.get("/lk", (req, res) => {
  const user = req.session?.user;
  renderTemplate(Lk, { user }, res);
});

// юзер хочет залогиниться
route.get("/dog", (req, res) => {
  const user = req.session?.user;
  renderTemplate(Dog, { user }, res);
});

// юзер хочет залогиниться
route.get("/login", (req, res) => {
  renderTemplate(Login, null, res);
});

// юзев ввел данные
route.post("/login", checkUserInBaseLogin, async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    const passCheck = await bcrypt.compare(password, user.password);
    if (passCheck) {
      req.session.user = user.username;
      req.session.save(() => {
        res.redirect("/");
      });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

// юзер ввел данные для регистрации
route.post("/register", checkUserInBase, async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      username,
      email,
      password: hash,
    });
    req.session.user = user.email;
    req.session.save(() => {
      res.redirect("/");
    });
  } catch (error) {
    res.send(`Error =======> ${error}`);
  }
});

// юзер перешел на форму регистрации
route.get("/register", (req, res) => {
  renderTemplate(Register, null, res);
});
// кнопочка логаут - убьёт текущую сессию
route.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = route;
