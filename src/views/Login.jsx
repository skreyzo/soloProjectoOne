const React = require("react");
const Layout = require("./Layout");

function Login({ user }) {
  return (
    <Layout title="Login" username={user}>
      Это  страница, где ты можешь залогиниться

      <form action="/login" method="POST">

  <div className="mb-3">
    <label htmlFor="InputEmail" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="InputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
      
      
       </Layout>
  );
}

module.exports = Login;