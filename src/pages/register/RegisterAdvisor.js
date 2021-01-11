import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

import "../../assets/styles/RegisterStyles.css";

import { register_user } from "../../redux/actions/user_actions";
import { connect } from "react-redux";

class RegisterAdvisor extends Component {
	constructor(props) {
		super(props);
		this.fields = [
			{ 
				label: "Full Name", 
				name: "fullName", 
				type: "text", 
				required: true 
			},
			{ 
				label: "Email", 
				name: "email", 
				type: "email", 
				required: true 
			},
			{
				name: "qualifications",
				label: "Qualifications",
				type: "text",
				required: false,
			},
			{
				label: "Field of Interest",
				name: "fieldOfInterest",
				type: "text",
				required: true,
			},
			{ 
				label: "Password", 
				name: "password", 
				type: "password", 
				required: true },
			{
				label: "Confirm Password",
				name: "confirmPassword",
				type: "password",
				required: true,
			},
		];
		this.state = {
			fullName: "",
			email: "",
			qualifications: "",
			fieldOfInterest: "",
			password: "",
			confirmPassword: "",
			errors: {},
			validated: false,
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: `${event.target.value}`,
		});
	};

	componentDidUpdate(prevProps) {
		if (this.props.ui.errors !== prevProps.ui.errors) {
			this.setState({
				errors: this.props.ui.errors,
			});
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		let valid = form.checkValidity();
		let error = {};
		if (this.state.password !== this.state.confirmPassword) {
			error.confirmPassword = "Passwords do not match";
		}
		this.setState({
			errors: error,
			validated: true,
		});
		if (Object.keys(error).length === 0 && valid) {
			const user_data = {
				email: this.state.email,
				password: this.state.password,
				rating: 0,
				status: "active",
				name: this.state.fullName,
				type: "advisor",
			};
			this.props.register_user(user_data, this.props.history);
		}
	};

	render() {
		const { loading } = this.props.ui;
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
					<Form
						className="form"
						// noValidate
						// validated={this.state.validated}
						onSubmit={(e) => {
							this.handleSubmit(e);
						}}
					>
						{this.fields.map((field, i) => (
							<div
								controlId={`formfield${field.name}`}
								key={i}
								className="field"
							>
								<Form.Label id={field.name}>{field.label}</Form.Label>
								<Form.Control
									type={field.type}
									required={field.required}
									value={this.state[field.name]}
									id={field.name}
									className={
										this.state.errors && this.state.errors[field.name]
											? "form is-invalid"
											: "form"
									}
									onChange={(e) => {
										this.handleChange(e);
									}}
								/>
								{this.state.errors && (
									<Form.Control.Feedback
										type="invalid"
										className="error-message"
									>
										{this.state.errors[field.name]}
									</Form.Control.Feedback>
								)}
							</div>
						))}
						<div className="field" style={{ marginTop: "3rem" }}>
							<button
								className="submit-button"
								type="submit"
								disabled={loading}
							>
								Let's Go!
							</button>
						</div>
						<div className="signup-link">
							Already a member?
							<Link to="/login">
								<a href="#"> Sign In</a>
							</Link>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

RegisterAdvisor.propTypes = {
	register_user: PropTypes.func.isRequired,
};

const mapActionsToProps = {
	register_user,
};

const mapStateToProps = (state) => ({
	ui: state.ui,
});

export default connect(mapStateToProps, mapActionsToProps)(RegisterAdvisor);
