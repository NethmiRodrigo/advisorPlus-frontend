import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/RegisterFormStyles.css";

const RegisterForm = () => {
	return (
		<div>
			<div className="main">
				<div
					style={{
						maxWidth: "500px",
						marginTop: "0vw",
						marginLeft: "7vw",
						marginBottom: "4vw",
					}}
				>
					<p
						className="display-3"
						style={{ paddingTop: "5vw", lineHeight: "10vh", color: "#808B96" }}
					>
						Matching users with great advisors...
					</p>
				</div>
				<div
					style={{
						maxWidth: "17vw",
						float: "left",
						marginLeft: "7vw",
						marginRight: "7vw",
					}}
				>
					<p className="text" style={{ fontSize: "2vw" }}>
						For Advisors
					</p>
					<br />
					<p className="text" style={{ marginBottom: "3vh" }}>
						If you are professional on any field, be it arts, science, sports,
						health anything, this is the space for you to share your knowledge
						with our community.
					</p>
					<Link to="/register-advisor">
						<button type="button" className="btn btn-success">
							Register
						</button>
					</Link>
				</div>
				<div style={{ maxWidth: "50vw" }}>
					<h3 className="text" style={{ fontSize: "2vw" }}>
						For Users
					</h3>
					<br />
					<p className="text" style={{ marginBottom: "4.2vh" }}>
						Stuck on a project? Can't find get something out of your mind?
						Always curious to know more? This is your free space to ask
						questions, get advice and share your enthusiasm.
					</p>
					<Link to="/register-user">
						<button type="button" className="btn btn-outline-success">
							Register
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;
