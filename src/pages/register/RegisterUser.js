import React, { useState, useEffect } from "react";
import "../../assets/styles/RegisterStyles.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register_user } from "../../redux/actions/user_actions";
import { Form } from "react-bootstrap";

const RegisterUser = (props) => {
	const useInput = (type, value, name, label, handleChange) => {
		const input = (
			<div className="field">
				<Form.Label> {label}</Form.Label>
				<Form.Control
					value={value}
					type={type}
					name={name}
					required
					onChange={(e) => {
						handleChange(e.target.value);
					}}
				/>
			</div>
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
	const emailInput = useInput("email", email, "email", "Full Name", setemail);
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

	const handleSubmit = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			setErrors("Passwords do not match");
		} else {
			const user = {
				fullname,
				password,
				confirmPassword,
				fieldOfInterest,
				email,
				username,
			};
		}
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
				<Form noValidate validated={validated}>
					{fullNameInput}
					{usernameInput}
					{emailInput}
					{fieldOfInterestInput}
					{passwordInput}
					{confirmPasswordInput}
					<div className="field">
						<input type="submit" value="Let's Go!" />
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
	user: PropTypes.object.isRequired,
};

const mapActionsToProps = {
	register_user,
};

const mapStateToProps = () => ({});
export default connect(mapStateToProps, mapActionsToProps)(RegisterUser);
