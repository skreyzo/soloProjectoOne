const React = require("react");
const Layout = require("./Layout");

function Lk({ user }) {
  return (
    <Layout user={user}>
      Это личный кабинет пользователя {user}. Здесь я реализую функцию удаления
      своего аккаунта или изменения почты и имени пользователя
    </Layout>
  );
}

module.exports = Lk;
