const Intro = () => (
	<div className="h-screen flex flex-col justify-center items-center  w-full  gap-20">
		<img
			src="/network.jpg"
			className="mix-blend-color-dodge h-screen w-screen top-0   absolute left-0  -z-10"
			alt="A shimmering network representing AI"
		/>
		<div className="flex justify-center items-center w-10/12 gap-10  ">
			<div>
				<h1>
					The AI Revolution
					<br /> is Here.
				</h1>
				<p className="text-gray-100 pt-5 text-right text-xl">
					Those who don&apos;t act now
					<br />
					get left behind.
				</p>
				<div className="mt-10 text-right">
					<a
						href="mailto:sales@ingram.tech"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Book a Free Consultation ⚡
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Intro;
