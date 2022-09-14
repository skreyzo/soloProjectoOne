const route = require("express").Router();
const renderTemplate = require("../../lib/renderTemplate");

const Map = require("../views/Map");

// юзер перешел по ссылке на карту
route.get("/", (req, res) => {
  const user = req.session?.user;
  renderTemplate(Map, { user }, res);
});

module.exports = route;
