import type { ReactElement } from 'react';
import s from './styles.module.css';

export const Footer = (): ReactElement => {
	return (
		<footer className={s.mainFooter}>
			<div className="container">
				<p>&copy; 2026 | ООО "Предел" г. Уфа | Республика Башкортостан</p>
			</div>
		</footer>
	);
};
