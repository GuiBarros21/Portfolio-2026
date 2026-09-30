import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import hero from "../assets/hero.png";
import CV from "../assets/gui barros.pdf";
import { DownloadIcon, Mail } from "lucide-react";
function Hero() {
	const socialIcons = [
		{ icon: FaGithub, alt: "GitHub", link: "https://github.com/GuiBarros21" },
		{
			icon: FaLinkedin,
			alt: "LinkedIn",
			link: "https://www.linkedin.com/in/gui-barros-ab4312137",
		},
	];

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden"
		>
			<div className="container mx-auto px-4 sm:px-8 lg:px-14 py-12 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
				<div
					className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left"
					data-aos="fade-right"
				>
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 mb-5">
						<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
						<span className="text-sm font-medium text-gray-700 dark:text-red-300">
							Available for work
						</span>
					</div>

					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
						Hi, I'm <span className="text-red-600 dark:text-red-500">Gui</span>
					</h1>
					<h2 className="text-xl sm:text-2xl font-mono mb-4 dark:text-red-400 text-red-600">
						<span className="text-gray-400 dark:text-gray-500">&lt;</span>
						Full Stack Developer
						<span className="text-gray-400 dark:text-gray-500">&gt;</span>
					</h2>
					<p className="mb-6  leading-relaxed max-w-md lg:max-w-lg dark:text-gray-300 text-gray-700">
						{`I hold a degree in Computer Science from Veiga de Almeida University in Brazil. I also have a diploma in Web Development from Cornerstone College in Vancouver. With over 7 years of experience, I have excelled as a software developer. My work spans various industries, including electrical, finance, construction, law, and marketing startups. I thrive in dynamic environments and enjoy solving complex problems. I am passionate about creating innovative solutions that drive success.`}
						<br />
						{`I'm a skilled software developer with experience in TypeScript and
				JavaScript, and expertise in frameworks like React, Next.js, Vue.js, Node.js, and
				Three.js. I'm a quick learner and collaborate closely with clients to
				create efficient, scalable, and user-friendly solutions that solve
				real-world problems. Let's work together to bring your ideas to life!`}
					</p>
					<div className="flex gap-8 mb-7">
						{[
							{ number: "7+", label: "Years Experience" },
							{ number: "20+", label: "Projects Done" },
							{ number: "10+", label: "Happy Clients" },
						].map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-2xl font-bold dark:text-white text-gray-900">
									{stat.number}
								</div>
								<div className="text-xs dark:text-gray-400 text-gray-600">
									{stat.label}
								</div>
							</div>
						))}
					</div>
					<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
						<a href={CV} download className="w-full sm:w-auto">
							<button
								className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r 
							from-red-600 to-red-800 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105"
							>
								<DownloadIcon size={18} />
								Download CV
							</button>
						</a>
						<a href="#contact" download className="w-full sm:w-auto">
							<button
								className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3
												rounded-full border-2 dark:border-red-500 border-red-600 dark:text-white text-gray-800
												font-semibold 
												dark:hover:bg-red-500 hover:bg-red-600
												hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105"
							>
								<Mail size={18} />
								Hire Me
							</button>
						</a>
					</div>

					{/* Social Icons */}
					<div className="flex items-center gap-4">
						{socialIcons.map(({ icon: Icon, alt, link }) => (
							<a
								key={alt}
								href={link}
								aria-label={alt}
								target="_blank"
								className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
							>
								<Icon className="w-6 h-6" />
							</a>
						))}
					</div>
				</div>

				<div
					className="relative flex justify-center items-center group"
					data-aos="fade-up"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

					<div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
						<img
							src={hero}
							alt="Hero"
							className="w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500"
						/>
						<div className="absolute inset-0 border-2 border-red-500/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
						<div className="absolute inset-0 border-2 border-red-500/30 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
