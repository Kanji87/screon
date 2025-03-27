import Link from 'next/link';
import styles from './card.module.scss';

interface CardProps {
	imageUrl: string;
	date: string;
	time: string;
	hashtags: string[];
	description: string;
	author: string;
}

export default function Card({ imageUrl, date, time, hashtags, description, author }: CardProps) {
	return (
		<article className={styles.card}>
			<div className={styles.imageWrapper}>
				<img src={imageUrl} alt="Card image" className={styles.image} />
			</div>
			<div className={styles.content}>
				<Link href={`/author/${author}`} className={styles.author}>{author}</Link>
				<div className={styles.meta}>
					<span className={styles.date}>{date}</span>
					<span className={styles.time}>{time}</span>
				</div>
				<div className={styles.hashtagList}>
					{hashtags.map((tag, index) => (
						<Link key={index} className={styles.hashtag} href={`/tag/${tag}`}>
							#{tag}
						</Link>
					))}
				</div>
				<p className={styles.description}>{description}</p>
			</div>
		</article>
	);
} 