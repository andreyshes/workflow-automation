import React from "react";

const Footer: React.FC = () => (
	<footer
		style={{
			width: "100%",
			padding: "1.5rem 0",
			background: "#f5f5f5",
			borderTop: "1px solid #eaeaea",
			textAlign: "center",
			fontSize: "0.95rem",
			color: "#555",
			marginTop: "2rem",
		}}
	>
		<div>
			&copy; {new Date().getFullYear()} Workflow Automation. All rights
			reserved.
		</div>
		<div style={{ marginTop: "0.5rem" }}>
			<a
				href="https://github.com/andreyshestopal/workflow-automation"
				target="_blank"
				rel="noopener noreferrer"
				style={{
					color: "#0070f3",
					textDecoration: "none",
					marginRight: "1rem",
				}}
			>
				GitHub
			</a>
			<a
				href="/privacy"
				style={{
					color: "#0070f3",
					textDecoration: "none",
					marginRight: "1rem",
				}}
			>
				Privacy Policy
			</a>
			<a href="/contact" style={{ color: "#0070f3", textDecoration: "none" }}>
				Contact
			</a>
		</div>
	</footer>
);

export default Footer;
