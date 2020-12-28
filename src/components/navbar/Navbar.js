import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="bg-white py-2 border-t-8 border-green-500 shadow-md">
			<div className="container flex justify-between items-center mx-auto">
				<Link to="/">
					<div className="font-bold text-gray-800 text-2xl tracking-widest">
						ADVISOR+
					</div>
				</Link>
				<div>
					<ul className="flex items-center">
						<li className="p-2 mx-4 text-black text-opacity-50">
							Solutions for everything...
						</li>
						<li className="p-2 mx-4">
							<Link to="/blog">
								<button className="rounded text-white px-4 py-2 bg-indigo-500 border border-indigo-500 hover:bg-indigo-600 hover:border--600">
									<span className="flex items-center">
										<i className="fas fa-comment-alt mx-1"></i>Blog
									</span>
								</button>
							</Link>
						</li>
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
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
