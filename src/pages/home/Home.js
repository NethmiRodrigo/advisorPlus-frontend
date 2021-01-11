import React from "react";
import Slideshow from "../../components/common/slideshow/Slideshow";
import IntroSlideShow from "../../components/common/slideshow/IntroSlideShow";
import BlogAccess from "../blog/BlogAccess";

function Home() {
	return (
		<div>
			<BlogAccess />
			<IntroSlideShow />
			<div className="m-32">
				<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center">
					<span className="block xl:inline mr-2">
						Our popular advisory fields
					</span>
				</h1>
			</div>
			<Slideshow />
		</div>
	);
}

export default Home;
