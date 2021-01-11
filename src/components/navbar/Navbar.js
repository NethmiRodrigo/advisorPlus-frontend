import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/user_actions";

import "../../assets/styles/NavbarStyles.css";
import advisorplus from "../../assets/images/advisorplus.jpg";
import { ButtonGroup, Button } from "react-bootstrap";

const Navbar = (props) => {
	const { user } = props;
	return (
		<div className="bg-white py-1 border-t-7 border-green-500 shadow-md">
			<div className="container flex justify-between items-center mx-auto">
				<Link to="/">
					<div
						className="font-bold text-gray-800 text-2xl tracking-widest"
						style={{ marginLeft: "2vw" }}
					>
						<img src={advisorplus} width="25%" />
					</div>
				</Link>
				<div>
					<ul className="flex items-center">
						<li className="p-4 mx-1">
							<Link to="/">
								<button className="rounded text-black px-1 py-2">
									<span className="flex items-center">
										<i className="fas fa-home mx-2"></i>
										Home
									</span>
								</button>
							</Link>
						</li>
						<li className="p-2 mx-1">
							<Link to="/blog">
								<button className="rounded text-black px-1 py-2">
									<span className="flex items-center">
										<i className="fas fa-comment-alt mx-2"></i>
										Blog
									</span>
								</button>
							</Link>
						</li>
						{user.authenticated ? (
							<>
								<li className="p-2 mx-1 flex justify-between items-center">
									<Link to="/advisor-profile">
										<Button className="rounded-full">
											<span>
												<i className="fas fa-user"></i>
											</span>
										</Button>
									</Link>
								</li>
								<li className="p-2 mx-1">
									<Button variant="success" onClick={() => props.logoutUser()}>
										Logout
									</Button>
								</li>
							</>
						) : (
							<>
								<li className="p-2 mx-4">
									<Link to="/login">
										<button className="rounded text-white px-4 py-2 bg-green-500 border border-green-500 hover:bg-green-700 hover:border-green-700">
											Login
										</button>
									</Link>
								</li>
								<li className="p-2 mx-4">
									<Link to="/register">
										<button className="rounded text-white px-4 py-2 bg-green-500 border border-green-500 hover:bg-green-700 hover:border-green-700">
											Register
										</button>
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

Navbar.propTypes = {
	user: PropTypes.object.isRequired,
	logoutUser: PropTypes.func.isRequired,
};

const mapActionsToProps = {
	logoutUser,
};

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
