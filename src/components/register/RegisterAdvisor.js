import React, { Component } from "react";
import RegisterStyles from "../../assets/styles/RegisterStyles.css";
import { Link } from "react-router-dom";

class RegisterAdvisor extends Component {
	render() {
		return (
			<div className="bodyyyy">
				<div
					className="display-4"
					style={{ position: "absolute", marginLeft: "5vw", marginTop: "30vw" }}
				>
					Love to help someone?
					<br />
					<span style={{ marginLeft: "7vw" }}>You're about to begin!</span>
				</div>
				<div className="wrapper shadow-lg">
					<div className="title">Register</div>
					<form action="#">
						<div className="field">
							<input type="text" required />
							<label>Full Name</label>
						</div>
						<div className="field">
							<input type="text" required />
							<label>Username</label>
						</div>
						<div className="field">
							<input type="text" required />
							<label>Email</label>
						</div>
						<div className="field">
							<input type="text" required />
							<label>Qualifications</label>
						</div>
						<div className="field">
							<input type="text" required />
							<label>Field of interest</label>
						</div>
						<div className="field">
							<input type="password" required />
							<label>Password</label>
						</div>
						<div className="field">
							<input type="password" required />
							<label>Re-enter Password</label>
						</div>
						<div className="field">
							<input type="submit" value="Let's Go!" />
						</div>
						<div className="signup-link">
							Already a member?
							<Link to="/login">
								<a href="#"> Sign In</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default RegisterAdvisor;
