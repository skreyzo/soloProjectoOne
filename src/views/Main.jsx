const React = require("react");
const Layout = require("./Layout");

function Main({ user }) {
  <script defer src="/js/rickAndMorty.js" />
  return (
    <Layout user={user}>
      <h1>Это главная страница проекта пользователя {user}</h1>

<div>
<form>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="pass" className="form-label">Password</label>
    <input type="password" className="form-control" name="pass" />
  </div>
  <div className="mb-3 form-check">
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>







      <button type="button" className="btn btn-danger rickBtn">
        Получить Рика
      </button>
      <div className="rick">
        <div className="divRick"></div>
      </div>
    </Layout>
  );
}

module.exports = Main;
