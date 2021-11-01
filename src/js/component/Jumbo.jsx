import React from "react";
import PropTypes from "prop-types";

const Jumbo = props => {
	return (
		<div classNameName="jumbotron">
			<div className="jumbotron jumbotron-fluid bg-light pb-4 pt-3">
				<div className="container">
					<h1 className="display-4">{props.title}</h1>
					<p className="lead">{props.text}</p>
					<button type="button" className="btn btn-primary">
						{props.buttonText}
					</button>
				</div>
			</div>
		</div>
	);
};

Jumbo.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	buttonText: PropTypes.string
};

export default Jumbo;
