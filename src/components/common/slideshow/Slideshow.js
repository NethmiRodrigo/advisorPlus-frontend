import React from "react";
import CarsSet from "../card/CardSet";
import CarsSet2 from "../card/CardSet2";

const Slideshow = () => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-bs-ride="carousel"
			style={{
				height: "64.3vh",
				marginTop: "2vh",
				marginLeft: "5vw",
				marginRight: "5vw",
				marginBottom: "30vh",
			}}
		>
			<div
				className="carousel-inner bg-light"
				style={{ borderRadius: "10px", height: "64vh" }}
			>
				<div className="carousel-item active">
					<CarsSet />
				</div>
				<div className="carousel-item">
					<CarsSet2 />
				</div>
			</div>
			<a
				className="carousel-control-prev"
				href="#carouselExampleControls"
				role="button"
				data-bs-slide="prev"
			>
				<button
					type="button"
					className="btn btn-success carousel-control-prev-icon"
					style={{ borderRadius: "80%" }}
				></button>
			</a>
			<a
				className="carousel-control-next"
				href="#carouselExampleControls"
				role="button"
				data-bs-slide="next"
			>
				<button
					type="button"
					className="btn btn-success carousel-control-next-icon"
					style={{ borderRadius: "80%" }}
				></button>
			</a>
		</div>
	);
};

export default Slideshow;
