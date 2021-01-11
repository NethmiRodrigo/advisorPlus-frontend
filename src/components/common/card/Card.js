import React from "react";
// import samplepic from "../../../assets/images/samplepic.jpg";

const Card = ({picSrc, content}) => {
	return (
		<div
			className="card text-white"
			style={{
				margin: "1vw",
				borderRadius: "5px",
				height: "60vh"
			}}
		>
			<img src={picSrc} className="card-img" alt="pic" style={{height: "60vh"}} />
			<div className="card-img-overlay">
				<p className="card-title display-4" style={{color: "white", textShadow: "1px 1px 10px black"}}>{content}</p>
			</div>
		</div>
	);
};

export default Card;
