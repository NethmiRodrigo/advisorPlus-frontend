import React from "react";
import { Link } from "react-router-dom";

const BlogAccess = () => {
	return (
		<div className="bg-gray-100 py-5 my-5">
			<div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 bg-gy">
				<div className="sm:text-center lg:text-left">
					<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						<span className="block xl:inline mr-2">Need help?</span>
						<span className="block text-green-600 xl:inline">
							Don't know where to look?
						</span>
					</h1>
					<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
						Solutions for everything on your finger tips!
					</p>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div className="mt-3 sm:mt-0 sm:ml-3 rounded-md shadow">
							<Link to="/blog">
								<button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
									Get started
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogAccess;
