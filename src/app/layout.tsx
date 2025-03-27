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
	title: 'Screon - Платформа для игровых скриншотов',
	description: 'Делитесь лучшими моментами из игр, находите единомышленников и создавайте уникальные истории в сообществе геймеров',
	keywords: 'игровые скриншоты, геймеры, игровое сообщество, скриншоты, игры, фэнтези, магия, приключения',
	openGraph: {
		title: 'Screon - Платформа для игровых скриншотов',
		description: 'Делитесь лучшими моментами из игр, находите единомышленников и создавайте уникальные истории в сообществе геймеров',
		type: 'website',
		locale: 'ru_RU',
	},
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
