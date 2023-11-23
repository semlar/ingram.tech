import Content from "./sections/Content";
import Industries from "./sections/Industry";
import Intro from "./sections/Intro";
import Knowledge from "./sections/Knowledge";
import LogoBanner from "./sections/LogoBanner";
import Solutions from "./sections/Solutions";

const HomePage = () => (
	<>
		<Intro />
		<Knowledge />
		<Solutions />
		<Industries />
		<LogoBanner />
		<Content />
		{/* <CTA /> */}
	</>
);

export default HomePage;
