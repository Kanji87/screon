import '@/styles/globals.scss';
import styles from './page.module.scss';
import type { Metadata } from 'next';
import Header from '@/components/header/header';
import Card from '@/components/card/card';

export const metadata: Metadata = {
	title: 'Screon - Главная',
	description: 'Главная страница Screon',
};

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.grid}>
					<Card
						imageUrl="https://images.placeholders.dev/800x450/2d2d2d/ffffff?text=Fantasy+World"
						date="15 марта 2024"
						time="14:30"
						hashtags={['fantasy', 'magic', 'adventure']}
						description="В далеком королевстве Эльдария, где магия течет по жилам земли, а древние пророчества оживают в реальности, начинается новая глава истории..."
						author="Мастер Слов"
					/>
					<Card
						imageUrl="https://images.placeholders.dev/800x450/2d2d2d/ffffff?text=Dragon+Legends"
						date="15 марта 2024"
						time="15:45"
						hashtags={['dragons', 'knights', 'legends']}
						description="Среди заснеженных вершин Драконьих гор, где древние существа охраняют забытые сокровища, разворачивается эпическая сага о храбрости и предательстве..."
						author="Сказитель Древний"
					/>
				</div>
			</main>
		</>
	);
}
