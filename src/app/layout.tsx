import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Ingram",
	description: "Your partner in AI",
};

const RootLayout = ({children}: {children: React.ReactNode}) => (
	<html lang="en">
		<body className={`${inter.className} relative bg-zinc-900 text-white`}>
			<main>
				<Navbar />
				{children}
				<Footer />
			</main>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script>
		</body>
	</html>
);

export default RootLayout;
