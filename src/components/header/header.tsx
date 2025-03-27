'use client';

import { useRouter } from 'next/navigation';
import { MdPerson } from 'react-icons/md';
import styles from './header.module.scss';

export default function Header() {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className={styles.logo} onClick={() => router.push('/')}>
				Screon
			</div>
			<div className={styles.userSection}>
				<span className={styles.userName}>Иван Иванов</span>
				<button className={styles.userButton} aria-label="Личный кабинет">
					<MdPerson size={24} />
				</button>
			</div>
		</header>
	);
} 