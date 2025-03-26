import '@/styles/globals.scss';
import styles from './page.module.scss';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Главная | Next.js проект с SCSS',
	description: 'Главная страница проекта на Next.js с использованием SCSS модулей',
};

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Добро пожаловать в Next.js проект</h1>
			<p>Это базовая структура проекта с поддержкой SCSS</p>
			<Link href="/test" className={styles.link} prefetch>
				Перейти на тестовую страницу
			</Link>
		</main>
	);
}
