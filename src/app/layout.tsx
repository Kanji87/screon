import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/globals.scss';

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	preload: true,
	adjustFontFallback: true,
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#007bff',
};

export const metadata: Metadata = {
	title: 'Next.js проект с SCSS',
	description: 'Проект на Next.js с использованием SCSS модулей',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru" className={`${roboto.className} dark-theme`}>
			<body>
				{children}
			</body>
		</html>
	);
}
