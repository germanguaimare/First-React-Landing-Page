import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card h-25 pr-3 mt-4" style={{ width: "20rem" }}>
			<img
				style={{ width: "auto", height: "25rem", objectFit: "cover" }}
				className="card-img-top"
				src={props.img}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.buttonText}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	buttonText: PropTypes.string
};

export default Card;
