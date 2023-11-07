import CTA from "./sections/CTA";
import Content from "./sections/Content";
import Intro from "./sections/Intro";
import Knowledge from "./sections/Knowledge";
import LogoBanner from "./sections/LogoBanner";
import Products from "./sections/Products";


const HomePage = () => (
	<>
		<Intro />
		<Knowledge />
		<LogoBanner/>
		<Products/>
		<Content />
		<CTA />
	</>
);

export default HomePage;
