import React from "react";
// import CategoryNav from './CategoryNav';
import Slideshow from "../../components/common/slideshow/Slideshow";
// import RegisterForm from "../register/RegisterForm";
import IntroSlideShow from "../../components/common/slideshow/IntroSlideShow";
import BlogAccess from "../blog/BlogAccess";

function Home() {
	return (
		<div>
			{/* <CategoryNav /> */}
			<BlogAccess />
			{/* <RegisterForm /> */}
			<IntroSlideShow />
			<div
				style={{
					marginTop: "70px",
					marginLeft: "100px",
					marginBottom: "30px",
					marginRight: "100px",
				}}
			>
				<p
					style={{ fontFamily: "Trebuchet MS" }}
					className="text-center fs-1 fw-bold"
				>
					Our popular advisory fields
				</p>
			</div>
			<Slideshow />
		</div>
	);
}

export default Home;
