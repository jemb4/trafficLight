import React, { useState } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
	const [color, setColor] = useState("");
	const [oppened, setOppened] = useState(true);
	const [flagInterval, setFlagInterval] = useState(null);

	let count = 0;
	function interval() {
		count++;
		console.log(count);
		if (count == 1) {
			setColor("red");
		} else if (count == 2) {
			setColor("orange");
		} else if (count == 3) {
			setColor("green");
		} else if (count == 4) {
			setColor("");
			count = 0;
		}
	}

	function activateinterval() {
		if (flagInterval) {
			clearInterval(flagInterval);
			setFlagInterval(null);
		} else {
			setFlagInterval(setInterval(interval, 1000));
		}
	}

	return oppened ? (
		<div>
			<div id="trafficLight">
				<div id="trafficTop"></div>
				<div id="container-trafficLight">
					<div class="container-Light">
						<div
							className={
								"red" + (color === "red" ? " light" : "")
							}
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

			<div class="container mt-5">
				<div class=" d-flex justify-content-center ">
					<div>
						<button
							class="active mx-2"
							onClick={() =>
								oppened
									? (setOppened(false), activateinterval())
									: setOppened(true)
							}>
							{" "}
							Active{" "}
						</button>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div>
			<div id="trafficLight">
				<div id="trafficTop"></div>
				<div id="container-trafficLight">
					<div class="container-Light">
						<div
							className={
								"red" + (color === "red" ? " light" : "")
							}></div>
						<div
							className={
								"orange" + (color === "orange" ? " light" : "")
							}></div>
						<div
							className={
								"green" + (color === "green" ? " light" : "")
							}></div>
					</div>
				</div>
			</div>

			<div class="container mt-5">
				<div class=" d-flex justify-content-center ">
					<div>
						<button
							class="stop mx-2"
							onClick={() =>
								oppened
									? setOppened(false)
									: (setOppened(true),
									  activateinterval(),
									  console.log("funciona"))
							}>
							{" "}
							Stop{" "}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
