const React = require("react");
const Layout = require("./Layout");

function Register({ user }) {
  return (
    <Layout title="Login" username={user}>
      Это  страница, где ты можешь зарегис рироваться

      <form action="/register" method="POST">
  <div className="mb-3">
    <label htmlFor="InputUsername" className="form-label">Username</label>
    <input type="text" className="form-control" name="username" />
  </div>
  <div className="mb-3">
    <label htmlFor="InputEmail" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="InputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" />
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
      
      
       </Layout>
  );
}

module.exports = Register;