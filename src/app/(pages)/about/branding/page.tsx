import {ArrowDownTrayIcon} from "@heroicons/react/24/outline";

const BrandingPage: React.FC = () => (
	<div className="px-5 max-w-7xl mx-auto">
		<h1 className="font-semibold text-grey-300 my-10 text-2xl">Logo (Normal)</h1>
		<div className="flex gap-10 flex-col md:flex-row ">
			<figure className="h-64 w-72 flex flex-col items-center p-3 gap-3 justify-center">
				<img
					src="/images/logo.png"
					className="h-16 m-3 border border-gray-900 p-2 shadow-md"
					alt="Ingram Logo"
				/>
				<figcaption className="text-lg">Ingram Logo</figcaption>
				<div className="flex gap-3">
					<a
						href="/images/logo.svg"
						download="ingram_logo.svg"
						className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 hover:bg-gray-50 flex items-center gap-2"
					>
						<ArrowDownTrayIcon className="h-5 w-5" />
						SVG
					</a>
					<a
						href="/images/logo.png"
						download="ingram_logo.png"
						className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 hover:bg-gray-50 flex items-center gap-2"
					>
						<ArrowDownTrayIcon className="h-5 w-5" />
						PNG
					</a>
				</div>
			</figure>
			<figure className="h-64 w-72 flex flex-col items-center p-3 gap-3 justify-center">
				<img
					src="/icon.png"
					className="h-16 m-3 border border-gray-900 p-2 shadow-md"
					alt="Ingram Icon"
				/>
				<figcaption className="text-lg">Ingram Icon</figcaption>
				<div className="flex gap-3">
					<a
						href="/icon.svg"
						download="ingram_icon.svg"
						className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 hover:bg-gray-50 flex items-center gap-2"
					>
						<ArrowDownTrayIcon className="h-5 w-5" />
						SVG
					</a>
					<a
						href="/icon.png"
						download="ingram_icon.png"
						className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 hover:bg-gray-50 flex items-center gap-2"
					>
						<ArrowDownTrayIcon className="h-5 w-5" />
						PNG
					</a>
				</div>
			</figure>
		</div>
		<h1 className="font-semibold text-grey-300 my-10 text-2xl">Logo (Dark mode)</h1>
		<div className="flex gap-10 flex-col md:flex-row ">
			<figure className="h-64 w-72 flex flex-col items-center p-3 gap-3 justify-center">
				<img
					src="/images/logo_darkmode.png"
					className="h-16 m-3 border border-gray-900 p-2 shadow-md"
					alt="Ingram Logo"
				/>
				<figcaption className="text-lg">Ingram Logo Dark Mode</figcaption>
				<div className="flex gap-3">
					<a
						href="/images/logo_darkmode.svg"
						download="ingram_logo_darkmode.svg"
						className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 hover:bg-gray-50 flex items-center gap-2"
					>
						<ArrowDownTrayIcon className="h-5 w-5" />
						SVG
					</a>
					<a
						href="/images/logo_darkmode.png"
						download="ingram_logo_darkmode.png"
						className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 hover:bg-gray-50 flex items-center gap-2"
					>
						<ArrowDownTrayIcon className="h-5 w-5" />
						PNG
					</a>
				</div>
			</figure>
			<figure className="h-64 w-72 flex flex-col items-center p-3 gap-3 justify-center">
				<img
					src="/images/icon_darkmode.png"
					className="h-16 m-3 border border-gray-900 p-2 shadow-md"
					alt="Ingram Icon"
				/>
				<figcaption className="text-lg">Ingram Icon Dark Mode</figcaption>
				<div className="flex gap-3">
					<a
						href="/images/icon_darkmode.svg"
						download="ingram_icon_darkmode.svg"
						className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 hover:bg-gray-50 flex items-center gap-2"
					>
						<ArrowDownTrayIcon className="h-5 w-5" />
						SVG
					</a>
					<a
						href="/images/icon_darkmode.png"
						download="ingram_icon_darkmode.png"
						className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 hover:bg-gray-50 flex items-center gap-2"
					>
						<ArrowDownTrayIcon className="h-5 w-5" />
						PNG
					</a>
				</div>
			</figure>
		</div>
	</div>
);

export default BrandingPage;
