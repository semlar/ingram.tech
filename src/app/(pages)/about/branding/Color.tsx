"use client";

const rgb2hex = (rgb: string) =>
	`#${rgb
		.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
		?.slice(1)
		.map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
		.join("")}`;

const Color: React.FC<{
	className: string;
}> = ({ className }) => (
	<td>
		<div
			className={`w-10 h-10 shadow-md border border-grey-600 rounded-sm m-2 ${className} cursor-pointer`}
			onClick={(e) => {
				const bgColor = rgb2hex(
					window.getComputedStyle(e.currentTarget).backgroundColor,
				);
				navigator.clipboard.writeText(bgColor);
				console.log(bgColor);
			}}
		>
			{" "}
		</div>
	</td>
);

export default Color;
