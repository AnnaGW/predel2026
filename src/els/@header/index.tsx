import type { ReactElement } from 'react';
import s from './styles.module.css';
import { Logo } from '../logo';
import { cn } from '../@common/cn';

export const Header = (): ReactElement => {
	return (
		<header className={s.mainHeader}>
			<div className={s.topPart}>
				<div className="container">
					<Logo />
					<button className={cn(s.menuToggle)}>
						<span className={s.hamburger}></span>
					</button>
				</div>
			</div>
		</header>
	);
};
