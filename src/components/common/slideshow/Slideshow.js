import React from "react";
// import samplepic from '../samplepic.jpg';
import CarsSet from "../card/CardSet";

const Slideshow = () => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-bs-ride="carousel"
			style={{
				marginTop: "2vh",
				marginLeft: "5vw",
				marginRight: "5vw",
				marginBottom: "15vh",
			}}
		>
			<div
				className="carousel-inner bg-light"
				style={{ borderRadius: "10px", height: "20rem" }}
			>
				<div className="carousel-item active">
					{/* <img src={samplepic} className="d-block" alt="pic" style={{width: '50%'}} /> */}
					<CarsSet />
				</div>
				<div className="carousel-item">
					<CarsSet />
				</div>
				<div className="carousel-item">
					<CarsSet />
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
