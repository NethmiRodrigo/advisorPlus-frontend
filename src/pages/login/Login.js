import React, { Component } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import { login } from "../../redux/actions/user_actions";
import PropTypes from "prop-types";

import "../../assets/styles/LoginStyles.css";
import { connect } from "react-redux";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			validated: false,
			errors: {},
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: `${event.target.value}`,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		this.setState({
			validated: true,
		});
		if (form.checkValidity() === true) {
			const login_details = {
				email: this.state.email,
				password: this.state.password,
			};
			this.props.login(login_details, this.props.history);
		}
	};

	componentDidUpdate(prevProps) {
		if (this.props.ui.errors !== prevProps.ui.errors) {
			this.setState({
				errors: this.props.ui.errors,
			});
		}
		console.log(this.props.ui);
	}

	render() {
		return (
			<div className="body">
				<div className="wrapper shadow-lg">
					<div className="title">Sign In</div>
					<Form
						noValidate
						validated={this.state.validated}
						onSubmit={this.handleSubmit}
					>
						<Form.Group className="field">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								required
								name="email"
								className={
									this.state.errors?.email ? "form is-invalid" : "form"
								}
								value={this.state.email}
								onChange={(e) => this.handleChange(e)}
							/>
							{this.state.errors && (
								<Form.Control.Feedback>
									{this.state.errors.email}
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group className="field">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								required
								name="password"
								className={
									this.state.errors?.password ? "form is-invalid" : "form"
								}
								value={this.state.password}
								onChange={this.handleChange}
							/>
							{this.state.errors && (
								<Form.Control.Feedback>
									{this.state.errors.password}
								</Form.Control.Feedback>
							)}
						</Form.Group>
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
							<input
								type="submit"
								className="submit-button"
								value="Login"
								disabled={this.props.ui.loading}
							/>
						</div>
						{this.state.errors?.error?.message ? (
							<Alert variant="danger" style={{ margin: "1rem" }}>
								{this.state.errors.error.message}
							</Alert>
						) : (
							""
						)}

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
					</Form>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
	ui: PropTypes.object.isRequired,
};

const mapActionsToProps = {
	login,
};

const mapStateToProps = (state) => ({
	ui: state.ui,
});

export default connect(mapStateToProps, mapActionsToProps)(Login);
