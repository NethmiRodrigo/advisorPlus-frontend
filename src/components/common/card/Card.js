import React from "react";
import samplepic from "../../../assets/images/samplepic.jpg";

const Card = () => {
	return (
		<div
			className="card text-white"
			style={{
				margin: "1vw",
				border: "1px solid lightgrey",
				borderRadius: "5px",
			}}
		>
			<img src={samplepic} className="card-img" alt="pic" />
			<div className="card-img-overlay">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">This is a wider card with supporting text.</p>
				<p className="card-text">Last updated 3 mins ago</p>
			</div>
		</div>
	);
};

export default Card;
