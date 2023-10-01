import { Victor_Mono } from "next/font/google";

const monofont = Victor_Mono({ subsets: ["latin"] });
const monospace = monofont.className;

const HomePage = () => (
	<>
		<img
			src="/network.jpg"
			className="mix-blend-color-dodge absolute left-0 -top-8 -z-10"
			alt="A shimmering network representing AI"
		/>
		<header className="flex justify-between items-center max-w-3xl mx-auto my-8 px-8 bg-zinc-800 border border-zinc-900 rounded-lg drop-shadow-lg">
			<div className="flex items-center gap-2 text-[1.5rem]">
				<img src="/logo_v4.svg" className="w-16" alt="Ingram logo" />
				Ingram
			</div>
			<ul className="flex gap-8">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li className="hidden">
					<a href="/team">Team</a>
				</li>
				<li className="hidden">
					<a href="/solutions">Solutions</a>
				</li>
				<li className="hidden">
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</header>

		<main className="max-w-3xl mx-auto px-8 space-y-8">
			<div>
				<p
					className={`${monospace} table pr-2 pl-4 -ml-5 bg-white text-zinc-900 text-4xl font-extrabold tracking-wider`}
				>
					Do Humans Dream of AI Sheep?
				</p>
				<p className="text-xl tracking-wide mt-4">
					When they do, they come to us, and we make it happen
				</p>
			</div>

			<div className="lg:max-w-[50%] space-y-4 drop-shadow-lg">
				<p>
					In the evolving landscape of artificial intelligence, there exists a
					transformative force that&apos;s reshaping the way we communicate,
					learn, and make decisions. This force captures the essence of human
					language, offering depth and versatility in its applications, a
					culmination of countless nuances and intricacies. To navigate this
					vast realm and harness its full potential, you need a guiding hand—a
					master of the craft.
				</p>

				<p>
					Our expertise lies in sculpting this force to perfection. We adapt
					and refine, ensuring it aligns seamlessly with specific industry
					needs, while integrating effortlessly into varied platforms. This
					isn&apos;t just about sifting through vast data or complex
					computations—it&apos;s about crafting tools that think, adapt, and
					evolve, mirroring the brilliance of human intellect.
				</p>

				<p>
					Imagine conversational agents that rival human interactions, content
					creators that can replicate any narrative flair, or systems that can
					delve deep into texts, unveiling insights in a heartbeat. With our
					bespoke solutions, the line between dream and reality blurs. Step
					into the future of intelligent language processing, with us charting
					the course.
				</p>
			</div>
		</main>

		<footer className="flex justify-between items-center max-w-3xl mx-auto my-8 p-8 bg-zinc-800 border border-zinc-900 rounded-lg drop-shadow-lg">
			<span>
				© {new Date().getFullYear()} Ingram by{" "}
				<a href="https://goveni.eu" target="_blank" rel="noopener noreferrer">
					Goveni
				</a>
			</span>
		</footer>
	</>
);

export default HomePage;
