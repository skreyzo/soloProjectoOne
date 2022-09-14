const React = require("react");
const Layout = require("./Layout");

function Main({ user }) {
  return (
    <Layout title="Main" username={user}>
      Это главная страница проекта
    </Layout>
  );
}

module.exports = Main;
