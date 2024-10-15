// import React from 'react'

export default function Header() {
	const currentDate = new Date()
		.toLocaleDateString("fr-FR", {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric",
		})
		.replace(
			/(\w+)\s(\d+)/,
			(_match, month, day) =>
				`${month.charAt(0).toUpperCase() + month.slice(1)} ${day}`,
		);

	return (
		<div className="header-container">
			{/* <img src="src/images/q13Ss21.png" alt="logo" /> */}
			<p>{currentDate}</p>
		</div>
	);
}
