import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register_user } from "../../redux/actions/user_actions";

import "../../assets/styles/RegisterStyles.css";

const RegisterUser = (props) => {
	const useInput = (type, value, name, label, handleChange) => {
		const input = (
			<Form.Group className="field">
				<Form.Label> {label}</Form.Label>
				<Form.Control
					value={value}
					type={type}
					name={name}
					required
					className={errors?.[name] ? "form is-invalid" : "form"}
					onChange={(e) => {
						handleChange(e.target.value);
					}}
				/>
				{errors[name] && (
					<Form.Control.Feedback type="invalid">
						{errors[name]}
					</Form.Control.Feedback>
				)}
			</Form.Group>
		);
		return input;
	};
	const [fullname, setfullname] = useState("");
	const [email, setemail] = useState("");
	const [fieldOfInterest, setfieldOfInterest] = useState("");
	const [password, setpassword] = useState("");
	const [username, setusername] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");
	const [errors, setErrors] = useState({});
	const [validated, setValidated] = useState(false);
	const [date, setDate] = useState("");
	const [gender, setGender] = useState("");

	const fullNameInput = useInput(
		"text",
		fullname,
		"fullName",
		"Full Name",
		setfullname
	);
	const passwordInput = useInput(
		"password",
		password,
		"password",
		"Password",
		setpassword
	);
	const emailInput = useInput("email", email, "email", "Email", setemail);
	const confirmPasswordInput = useInput(
		"password",
		confirmPassword,
		"confirmPassword",
		"Confirm Password",
		setconfirmPassword
	);
	const fieldOfInterestInput = useInput(
		"text",
		fieldOfInterest,
		"fieldOfInterest",
		"Field of interest",
		setfieldOfInterest
	);
	const usernameInput = useInput(
		"text",
		username,
		"username",
		"Username",
		setusername
	);
	const dobInput = useInput("date", date, "dob", "Date of Birth", setDate);

	useEffect(() => {
		if (JSON.stringify(props.ui.errors) !== JSON.stringify(errors)) {
			setErrors(props.ui.errors);
		}
		console.log(errors, props.ui.errors);
	}, [errors]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		if (password !== confirmPassword) {
			let errors = {};
			errors.confirmPassword = "Passwords do not match";
			setErrors(errors);
		} else if (form.checkValidity()) {
			const user = {
				fullname,
				password,
				email,
				username,
				gender,
				dob: date,
				type: "user",
			};
			props.register_user(user, props.history);
		}
		setValidated(true);
	};

	return (
		<div className="bodyyyy">
			<div
				className="display-4"
				style={{ position: "absolute", marginLeft: "5vw", marginTop: "30vw" }}
			>
				Got stuck somewhere?
				<br />
				<span style={{ marginLeft: "7vw" }}>We are here to help you!</span>
			</div>
			<div className="wrapper shadow-lg">
				<div className="title">Register</div>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					{fullNameInput}
					{usernameInput}
					{emailInput}
					{fieldOfInterestInput}
					{passwordInput}
					{confirmPasswordInput}
					{dobInput}
					<Form.Group className="field">
						<Form.Label>Gender</Form.Label>
						<Form.Control
							required
							as="select"
							custom
							onChange={(e) => setGender(e.target.value)}
							style={{ padding: "0.5rem", border: "1px solid #ced4da" }}
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</Form.Control>
					</Form.Group>
					<div className="field">
						<input
							disabled={props.ui.loading}
							type="submit"
							className="submit-button"
							value="Let's Go!"
							style={{ marginTop: "1rem" }}
						/>
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
};

RegisterUser.propTypes = {
	register_user: PropTypes.func.isRequired,
	ui: PropTypes.object.isRequired,
};

const mapActionsToProps = {
	register_user,
};

const mapStateToProps = (state) => ({
	ui: state.ui,
});

export default connect(mapStateToProps, mapActionsToProps)(RegisterUser);
