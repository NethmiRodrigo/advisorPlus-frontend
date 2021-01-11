import React from "react";
import {Link} from "react-router-dom";

const CategoryNav = () => {
	return (
		<div>
			<nav className="nav nav-pills flex-column flex-row category-navbar mt-0 bg-green-500 text-white font-bold px-10">
				<Link to="/advisors-category-1">
					<a
						className="flex-sm-fill text-sm-center nav-link category left"
					>
						Mental Health
					</a>
				</Link>
				<Link to="/advisors-category-2">
					<a 
						className="flex-sm-fill text-sm-center nav-link category"
					>
						Financial Guidance
					</a>
				</Link>
				<Link to="/advisors-category-3">
					<a
						className="flex-sm-fill text-sm-center nav-link category"
					>
						Career Guidance
					</a>
				</Link>
				<Link to="/advisors-category-4">
					<a
						className="flex-sm-fill text-sm-center nav-link category"
					>
						Health and Fitness
					</a>
				</Link>
				<Link to="/advisors-category-5">
					<a
						className="flex-sm-fill text-sm-center nav-link category"
					>
						IT Consultation
					</a>
				</Link>
				<Link to="/advisors-category-6">
					<a
						className="flex-sm-fill text-sm-center nav-link category"
					>
						Human Resources Consultation
					</a>
				</Link>
			</nav>
		</div>
	);
};

export default CategoryNav;
