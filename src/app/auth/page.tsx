'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
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
			<div className={styles.authCard}>
				<h1 className={styles.title}>Авторизация</h1>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<label htmlFor="username" className={styles.label}>
							Логин
						</label>
						<input
							type="text"
							id="username"
							value={login}
							onChange={(e) => setLogin(e.target.value)}
							className={styles.input}
							placeholder="Введите логин"
							required
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="password" className={styles.label}>
							Пароль
						</label>
						<div className={styles.passwordInput}>
							<input
								type={showPassword ? 'text' : 'password'}
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className={styles.input}
								placeholder="Введите пароль"
								required
							/>
							<button
								type="button"
								className={styles.togglePassword}
								onClick={togglePasswordVisibility}
								aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
							>
								{showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
							</button>
						</div>
					</div>
					<button type="submit" className={styles.submitButton}>
						Войти
					</button>
				</form>
			</div>
		</div>
	);
} 