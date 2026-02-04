import type { ReactElement } from 'react';
import s from './styles.module.css';

export const Header = (): ReactElement => {
	return (
		<header className={s.mainHeader}>
			<h1 className={s.mainTitle}>ПРЕДЕЛ</h1>
		</header>
	);
};
