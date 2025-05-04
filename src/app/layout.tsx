import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
    title: "Yo0's Resume",
    description: "This is Yo0's resume",
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
