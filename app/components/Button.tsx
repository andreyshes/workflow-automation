interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
	square?: boolean;
	paddingLess?: boolean;
	type?: "button" | "submit" | "reset";
}

const Button = ({
	className = "",
	children,
	square,
	paddingLess,
	type = "button",
	...props
}: IButtonProps) => {
	return (
		<button
			{...props}
			type={type}
			className={`
				
				
				${className}
			`}
		>
			{children}
		</button>
	);
};
export default Button;
