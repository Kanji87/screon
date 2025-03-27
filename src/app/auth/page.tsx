'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function AuthPage() {
	const router = useRouter();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({
			login,
			pass: password,
		});
		router.replace('/');
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className={styles.authContainer}>
			<form onSubmit={handleSubmit} className={styles.authForm}>
				<h1 className={styles.logo}>Screon</h1>

				<div className={styles.inputGroup}>
					<label htmlFor="login">Логин</label>
					<input
						type="text"
						id="login"
						value={login}
						onChange={(e) => setLogin(e.target.value)}
						required
					/>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="password">Пароль</label>
					<input
						type={showPassword ? 'text' : 'password'}
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button
						type="button"
						className={styles.passwordToggle}
						onClick={togglePasswordVisibility}
						aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
					>
						{showPassword ? '👁️' : '👁️‍🗨️'}
					</button>
				</div>

				<button type="submit" className={styles.submitButton}>
					Войти
				</button>
			</form>
		</div>
	);
} 