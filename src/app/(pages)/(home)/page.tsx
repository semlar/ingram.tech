import CTA from "./sections/CTA";
import Content from "./sections/Content";
import Industry from "./sections/Industry";
import Intro from "./sections/Intro";
import Knowledge from "./sections/Knowledge";
import LogoBanner from "./sections/LogoBanner";
import Solutions from "./sections/Solutions";
import Technologies from "./sections/Technologies";

const HomePage = () => (
	<>
		<Intro />
		<Technologies />
		<Knowledge />
		<Solutions/>
		<Industry/>
		<LogoBanner />
		<Content />
		{/* <CTA /> */}
	</>
);

export default HomePage;
