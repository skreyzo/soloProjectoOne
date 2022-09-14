const React = require("react");
const Layout = require("./Layout");

function Main({ user }) {
  return (
    <Layout user={user}>
      Это главная страница проекта пользователя {user}
    </Layout>
  );
}

module.exports = Main;
