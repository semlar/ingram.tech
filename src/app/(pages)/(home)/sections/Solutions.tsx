import Link from "next/link";
import {GiProgression, GiShieldReflect, GiTechnoHeart} from "react-icons/gi";

const features = [
	{
		name: "Instant Information Extraction",
		image: "/images/solutions/extraction.svg",
	},
	{
		name: "AI-Personalities on Demand",
		image: "/images/solutions/demand.svg",
	},
	{
		name: "24/7 Chatbot Excellence",
		image: "/images/solutions/24-7.svg",
	},
	{
		name: "Continuous Market Insight",
		image: "/images/solutions/market.svg",
	},
	{
		name: "AI-Powered Team Training",
		image: "/images/solutions/training.svg",
	},
	{
		name: "Ultimate Data Security",
		image: "/images/solutions/security.svg",
	},
];

const Solutions = () => {
	return (
		<div className=" py-24 sm:py-16">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className="mt-2 text-3xl sm:text-5xl">
						Solutions
					</h1>
					<h3>
						KEY EXPERTISE
					</h3>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-2 text-center gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-white">
									<img
										className="w-5/12"
										src={feature.image}
										alt=""
									/>
									<h2>{feature.name}</h2>
								</dt>
							</div>
						))}
					</dl>
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<button style={{backgroundColor: "#FB5956"}} className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white ">
					<Link style={{backgroundColor: "#FB5956"}} href="/solutions">Discover more</Link>
				</button>
			</div>
		</div>
	);
};

export default Solutions;
