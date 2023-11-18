function LogoBanner() {
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="mx-auto max-w-full px-6 lg:px-8 text-center">
				<h1>They trust us</h1>
				<div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10">
					<img
						className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
						src="/logo/amazon.svg"
						alt="Amazon"
					/>
					<img
						className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
						src="/images/logos/stripe.svg"
						alt="Stripe"
					/>
					<img
						className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
						src="/images/logos/faraday.svg"
						alt="Faraday Lab"
					/>
					<img
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="/logo/Thales.svg"
						alt="Thales"
					/>
					<img
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
						src="/logo/rpf.svg"
						alt="Republique Francaise"
					/>
					<img
						className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
						src="/logo/un.svg"
						alt="United Nations"
					/>
					<img
						className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
						src="/images/logos/ftbe.svg"
						alt="Fintech Belgium"
					/>
					<img
						className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
						src="/images/logos/gdpr.png"
						alt="GDPR"
					/>
					<img
						className="col-span-2 max-h-20 w-full object-contain"
						src="/images/logos/iso27001.png"
						alt="ISO 27001"
					/>
					<img
						className="col-span-2 max-h-32 w-full object-contain"
						src="/images/logos/pcidss.svg"
						alt="PCI-DSS"
					/>
				</div>
			</div>
		</div>
	);
}

export default LogoBanner;
