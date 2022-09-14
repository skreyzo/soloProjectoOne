const React = require("react");
const Layout = require("./Layout");

function Dog({ user }) {
  return (
    <Layout user={user}>
      <h1>Hello, Dog!</h1>
      <script defer src="/js/dog.js" />

      <button type="button" className="btn btn-danger dogBtn">
        Получить собакена
      </button>
      <div className="dog">
      <div className="divDog"></div>
      </div>
    </Layout>
  );
}

module.exports = Dog;
