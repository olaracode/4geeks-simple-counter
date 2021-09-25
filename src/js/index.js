/* eslint-disable no-console */
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

import Secondcounter from "./component/Secondcounter";

let contador = 0;
let segundos = "";

function timer() {
	contador += 1;
	segundos = "000000" + contador;
	segundos = segundos.slice(-6);
	console.log(segundos);
	console.log(segundos.split(""));
	ReactDOM.render(
		<Secondcounter tiempo={segundos.split("")} />,
		document.querySelector("#app")
	);
}

Secondcounter.propTypes = { tiempo: PropTypes.array };
//render your react application
window.setInterval(timer, 1000);
