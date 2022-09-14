const route = require("express").Router();

// тут я подключаю шаблон для рендеринга вьюшек.
const renderTemplate = require("../../lib/renderTemplate");
const Main = require("../views/Main");

route.get("/", (req, res) => {
  renderTemplate(Main, null, res);
});

module.exports = route;
