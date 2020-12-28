import React, { Component } from "react";
import LoginStyles from "../../assets/styles/LoginStyles.css";
import { Link } from "react-router-dom";

class Login extends Component {
	render() {
		return (
			<div className="body">
				<div className="wrapperrr shadow-lg">
					<div className="title">Sign In</div>
					<form action="#">
						<div className="field">
							<input type="text" required />
							<label>Username</label>
						</div>
						<div className="field">
							<input type="password" required />
							<label>Password</label>
						</div>
						<div className="content">
							<div className="checkbox">
								<input type="checkbox" id="remember-me" />
								<label for="remember-me">Remember me</label>
							</div>
							<div className="pass-link">
								<a href="#">Forgot password?</a>
							</div>
						</div>
						<div className="field">
							<input type="submit" value="Login" />
						</div>
						<div className="signup-link">
							Not a member?
							<br />
							<Link to="/register-user">
								<a href="#"> Register now as an User</a>
							</Link>
							<h6>or</h6>
							<Link to="/register-advisor">
								<a href="#"> Register now as an Advisor</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
