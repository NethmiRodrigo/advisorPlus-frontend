import React from "react";
import IntroSlideActive from "./IntroSlideActive";
import IntroSlideNormal from "./IntroSlideNormal";
import pic6 from "../../../assets/images/pic6.jpg";
import pic7 from "../../../assets/images/pic7.jpg";
import pic8 from "../../../assets/images/pic8.jpg";
import pic9 from "../../../assets/images/pic9.jpg";
import pic10 from "../../../assets/images/pic10.jpg";
import pic11 from "../../../assets/images/pic11.jpg";

const IntroSlideShow = () => {
	const text1 = (
		<p className="display-1">
			All the answers to your life's questions in one place!
		</p>
	);
	const text2 = (
		<p className="display-1 antialiased text-7xl tracking-tight">
			<span style={{ color: "green", fontWeight: "bold" }}>Advisor+</span> is a
			constantly growing user generated collection of questions and answers.
		</p>
	);
	const text3 = (
		<p className="display-3">
			Unlike other community spaces,{" "}
			<span style={{ color: "green", fontWeight: "bold" }}>Advisor+</span> uses
			experties knowledge to resolve your life's problems.
		</p>
	);
	const text4 = (
		<p className="display-3">
			All the answers to your <br />
			questions are provided <br />
			by experts in the relevant <br />
			field, registered at <br />
			<span style={{ color: "green", fontWeight: "bold" }}>Advisor+</span>
		</p>
	);
	const text5 = (
		<p className="display-1">
			You can also use{" "}
			<span style={{ color: "green", fontWeight: "bold" }}>Advisor+</span> as a
			source for research, information and general interest.
		</p>
	);
	const text6 = (
		<p className="display-1">
			Join today to be a part of the community. <br />
			&emsp;
			<span style={{ color: "green", fontWeight: "bold" }}>Get advice, </span>
			<br />
			&emsp;&emsp;
			<span style={{ color: "green", fontWeight: "bold" }}>Give advice!</span>
		</p>
	);

	return (
		<div
			id="carouselExampleFade"
			className="carousel slide carousel-fade"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				{/* <div class="carousel-item active">
                    <img src="..." class="d-block w-100" alt="..." />
                </div> */}
				<IntroSlideActive
					imgSrc={pic6}
					text={text1}
					textLeftPadding={"6vw"}
					textTopPadding={"5vw"}
				/>
				<IntroSlideNormal
					imgSrc={pic7}
					text={text2}
					textLeftPadding={"6vw"}
					textTopPadding={"5vw"}
				/>
				<IntroSlideNormal
					imgSrc={pic8}
					text={text3}
					textLeftPadding={"6vw"}
					textTopPadding={"5vw"}
				/>
				<IntroSlideNormal
					imgSrc={pic9}
					text={text4}
					textLeftPadding={"6vw"}
					textTopPadding={"5vw"}
				/>
				<IntroSlideNormal
					imgSrc={pic10}
					text={text5}
					textLeftPadding={"33vw"}
					textTopPadding={"20vw"}
				/>
				<IntroSlideNormal
					imgSrc={pic11}
					text={text6}
					textLeftPadding={"37vw"}
					textTopPadding={"20vw"}
				/>
			</div>
			<a
				className="carousel-control-prev"
				href="#carouselExampleFade"
				role="button"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			</a>
			<a
				className="carousel-control-next"
				href="#carouselExampleFade"
				role="button"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
			</a>
		</div>
	);
};

export default IntroSlideShow;
