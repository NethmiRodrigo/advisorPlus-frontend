import React from "react";
import { Link } from "react-router-dom";
import NavbarStyles from '../../assets/styles/NavbarStyles.css';
import advisorplus from '../../assets/images/advisorplus.jpg';

const Navbar = () => {
	return (
		<div className="bg-white py-1 border-t-7 border-green-500 shadow-md">
			<div className="container flex justify-between items-center mx-auto">
				<Link to="/">
					<div className="font-bold text-gray-800 text-2xl tracking-widest" style={{marginLeft: "2vw"}}>
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
						<li className="p-2 mx-1">
							<Link to="/login">
								<button className="rounded text-black px-1 py-2">
									<span className="flex items-center">
										<i className="fas fa-sign-in-alt mx-2"></i>
										Login
									</span>
								</button>
							</Link>
						</li>
						<li className="p-2 mx-1">
							<Link to="/register">
								<button className="rounded text-black px-1 py-2">
									<span className="flex items-center">
										<i className="fas fa-mouse-pointer mx-2"></i>
										Register
									</span>
								</button>
							</Link>
						</li>
						<li className="p-2 mx-1">
							<Link to="/advisor-profile">
								<button className="bg-indigo-500" style={{color: 'white', borderRadius: '100%', width: '50px', height: '50px'}}>Pic</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
