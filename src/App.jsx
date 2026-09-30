import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
	const [darkMode, setDarkMode] = useState(true);

	// Run once on mount for AOS initialization
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			offset: 100,
		});
	}, []);

	// Sync dark class and refresh AOS when darkMode changes
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		AOS.refresh();
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<div
			className={
				darkMode
					? "bg-linear-to-br from-gray-900 via-[#2e0d10] to-red-900 min-h-screen"
					: "bg-linear-to-br from-gray-50 to-red-50 min-h-screen"
			}
		>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Hero />
		</div>
	);
};

export default App;
