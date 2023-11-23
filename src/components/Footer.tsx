const Footer = () => {
	return (
		<footer className="flex justify-center w-full  p-8 bg-zinc-800 border border-zinc-900 rounded-lg drop-shadow-lg">
			<span className="bg-zinc-800">
				© {new Date().getFullYear()} Ingram by{" "}
				<a href="https://goveni.eu" target="_blank" rel="noopener noreferrer" className="bg-zinc-800">
					Goveni
				</a>
			</span>
		</footer>
	);
};

export default Footer;
