import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface Props {
	type?: "success" | "info" | "warning" | "danger";
}

const typeColorsMap: Record<NonNullable<Props["type"]>, [string, string]> = {
	success: ["#0d2726", "#00cc88"],
	info: ["rgb(28, 53, 79)", "rgb(9, 125, 196)"],
	warning: ["#272318", "#ff8000"],
	danger: ["#271b18", "#ff0000"],
};

const iconMap: Record<NonNullable<Props["type"]>, FontAwesomeIconProps["icon"]> = {
	success: ["fas", "check-circle"],
	info: ["fas", "info-circle"],
	warning: ["fas", "info-circle"],
	danger: ["fas", "info-circle"],
};

const Note: React.FCWithChildren<Props> = ({ children, type = "info" }) => {
	const [backgroundColor, borderColor] = typeColorsMap[type];

	return (
		<aside
			className="relative mb-7 rounded-md border-3 p-6 lg:rounded-l-none lg:border-r-0 lg:border-t-0 lg:border-b-0"
			style={{
				backgroundColor,
				borderColor,
			}}
		>
			<div className="p5 bg-main absolute top-2 -left-0.5 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-full lg:block">
				<FontAwesomeIcon
					icon={iconMap[type]}
					size="3x"
					style={{ color: borderColor }}
					className="p-1"
				/>
			</div>
			{children}
		</aside>
	);
};

export default Note;
