import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

type Props = {
	type?: "success" | "info" | "warning" | "danger";
};

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
			className="p-6 mb-7 border-3 rounded-md relative lg:border-r-0 lg:border-t-0 lg:border-b-0 lg:rounded-l-none"
			style={{
				backgroundColor,
				borderColor,
			}}
		>
			<div className="absolute top-2 -left-0.5 transform -translate-x-1/2 -translate-y-1/2 rounded-full p5 bg-main hidden lg:block">
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
