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
					marginTop: "25vh",
					marginLeft: "10vw",
					marginBottom: "10vh",
					marginRight: "10vw",
				}}
			>
				<p
					style={{ fontFamily: "Trebuchet MS" }}
					className="text-center fw-bold display-1"
				>
					Our popular advisory fields
				</p>
			</div>
			<Slideshow />
		</div>
	);
}

export default Home;
