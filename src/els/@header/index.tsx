import type { ReactElement } from 'react';
import s from './styles.module.css';
import { Logo } from '../logo';

export const Header = (): ReactElement => {
	return (
		<header className={s.mainHeader}>
			<div className={s.topPart}>
				<div className="container">
					<Logo />
				</div>
			</div>
		</header>
	);
};
