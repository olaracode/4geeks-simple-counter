import React from "react";
import PropTypes from "prop-types";
import "bootstrap";

const Secondcounter = ({ tiempo }) => {
	return (
		<>
			<div className="container-fluid fondo mb-3 text-center text-white ">
				<div className="row justify-content-center">
					<div className="col-1 pt-4 far fa-clock fondo1 m-2 "></div>
					{tiempo.map((element, index) => {
						return (
							<div
								key={`counterElement-${index}`}
								className="p-2 fondo1 m-2 ">
								{`${element}`}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
Secondcounter.propTypes = { tiempo: PropTypes.array };
export default Secondcounter;
