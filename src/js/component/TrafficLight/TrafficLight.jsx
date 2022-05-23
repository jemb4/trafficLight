import React, { useState } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<div id="trafficLight">
			<div id="trafficTop"></div>
			<div id="container-trafficLight">
				<div id="container-Light">
					<div
						className={"red" + (color === "red" ? " light" : "")}
						onClick={() => setColor("red")}></div>
					<div
						className={
							"orange" + (color === "orange" ? " light" : "")
						}
						onClick={() => setColor("orange")}></div>
					<div
						className={
							"green" + (color === "green" ? " light" : "")
						}
						onClick={() => setColor("green")}></div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
