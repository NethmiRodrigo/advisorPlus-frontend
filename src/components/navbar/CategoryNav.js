import React from "react";
import {Link} from "react-router-dom";

const CategoryNav = () => {
	return (
		<div>
			<nav className="nav nav-pills flex-column flex-sm-row category-navbar mt-0 bg-green-500 text-white font-bold px-10">
				<Link to="/advisors-category-1">
					<a
						className="flex-sm-fill text-sm-center nav-link category left"
						href="#G&D"
					>
						Graphics & Design
					</a>
				</Link>
				<a className="flex-sm-fill text-sm-center nav-link category" href="#DM">
					Digital Marketing
				</a>
				<a
					className="flex-sm-fill text-sm-center nav-link category"
					href="#W&T"
				>
					Writing & Translation
				</a>
				<a
					className="flex-sm-fill text-sm-center nav-link category"
					href="#V&A"
				>
					Video & Animation
				</a>
				<a
					className="flex-sm-fill text-sm-center nav-link category"
					href="#M&A"
				>
					Music & Audio
				</a>
				<a
					className="flex-sm-fill text-sm-center nav-link category"
					href="#P&T"
				>
					Programming & Tech
				</a>
				<a className="flex-sm-fill text-sm-center nav-link category" href="#B">
					Business
				</a>
				<a
					className="flex-sm-fill text-sm-center nav-link category right"
					href="#H&L"
				>
					Health & Lifestyle
				</a>
			</nav>
		</div>
	);
};

export default CategoryNav;
