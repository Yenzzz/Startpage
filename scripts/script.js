"use strict";

// Search Engine

function search() {
	const selectedEngine = document.getElementById("search").value;
	const searchText = document.getElementById("duck").value;

	if (selectedEngine === "duck") {
		window.location.href = `https://www.duckduckgo.com/?q=${searchText}`;
	} else if (selectedEngine === "google") window.location.href = `https://www.google.com/search?q=${searchText}`;
}

const inputBox = document.getElementById("duck");
inputBox.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.querySelector(".click-search").click();
	}
});

const searchButton = document.querySelector(".click-search").addEventListener("click", search);

// Clock

class DigitalClock {
	constructor(element) {
		this.element = element;
	}

	start() {
		this.update();

		setInterval(() => {
			this.update();
		}, 500);
	}

	update() {
		const parts = this.getTimeParts();
		const minuteFormatted = parts.minute.toString().padStart(2, "0");
		const timeFormatted = `${parts.hour}:${minuteFormatted}`;
		const amPM = parts.isAm ? "AM" : "PM";
		let greeting = parts.greeting;

		this.element.querySelector(".time").textContent = timeFormatted;
		this.element.querySelector(".ampm").textContent = amPM;
		document.getElementById("greeting").textContent = greeting;
	}

	getTimeParts() {
		const now = new Date();
		const currentHour = now.getHours();

		let greeting = "";

		if (currentHour < 12) greeting = "Good Morning";
		else if (currentHour > 11 && currentHour <= 17) greeting = "Good Afternoon";
		else if (currentHour >= 17 && currentHour > 0) greeting = "Good Evening";

		return {
			hour: now.getHours() % 12 || 12,
			minute: now.getMinutes(),
			isAm: now.getHours() < 12,
			greeting: greeting
		};
	}
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();
