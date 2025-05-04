import { ReactNode } from "react";

export const metadata = {
    title: "My App",
    description: "A clean template",
};

type LayoutProps = {
    children: ReactNode;
};

export default function RootLayout({
    children,
}: LayoutProps): React.ReactElement {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
