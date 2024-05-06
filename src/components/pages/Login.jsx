import "./Login.css";
import google from "../../img/google.png";
function Login() {
  return (
    <div className="container">
      <h1>Log In</h1>
      <br />
      <br />
      <br />
      <button className="google-signin-button">
        <img src={google} alt="Google Logo" className="google-logo"></img> Sign
        in with Google{" "}
      </button>
    </div>
  );
}

export default Login;
