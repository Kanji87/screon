import '@/styles/globals.scss';
import styles from './page.module.scss';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Тестовая страница | Next.js проект с SCSS',
	description: 'Тестовая страница для проверки роутинга в Next.js',
};

export default function TestPage() {
	return (
		<main className={styles.main}>
			<h1>Тестовая страница</h1>
			<p>Это тестовая страница для проверки роутинга в Next.js</p>
			<Link href="/" className={styles.link} prefetch>
				Вернуться на главную
			</Link>
		</main>
	);
}
