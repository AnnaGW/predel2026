import type { ReactElement } from 'react';
import s from './styles.module.css';
import logoImg from './roof.avif';
import { AppRoute } from '~/const';

export const Logo = (): ReactElement => {
	return (
		<a href={AppRoute.MainPage}>
			<div className={s.logo}>
				<div className={s.roof}>
					<img src={logoImg} alt="ООО &laquo;Предел&raquo;" />
				</div>
				<h1 className={s.logoTitle}>ПРЕДЕЛ</h1>
				<div className={s.slogan}>Проектирование, поставка, монтаж </div>
			</div>
		</a>
	);
};
