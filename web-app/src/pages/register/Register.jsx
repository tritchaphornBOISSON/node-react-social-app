import { Link } from "react-router-dom";
import "./register.scss";
import Login from "../login/Login";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>React Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            labore ex illum cum recusandae esse voluptate sequi repellendus
            molestiae iusto accusantium fugiat quos placeat, omnis animi
            voluptas debitis voluptatem at.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
