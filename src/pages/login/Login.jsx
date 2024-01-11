import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            labore ex illum cum recusandae esse voluptate sequi repellendus
            molestiae iusto accusantium fugiat quos placeat, omnis animi
            voluptas debitis voluptatem at.
          </p>
          <span>Don't have an account yet?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
