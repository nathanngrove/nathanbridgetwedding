import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Nathan and Bridget",
	description: "Nathan and Bridget's wedding website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
