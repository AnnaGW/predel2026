import { useEffect, useState, type ReactElement } from 'react';
import s from './styles.module.css';
import { Logo } from '../logo';
import { cn } from '../@common/cn';
import { MainNav } from '../nav';
import { AppRoute } from '~/const';
import { useLocation } from 'react-router-dom';

export const Header = (): ReactElement => {
	const url = useLocation();

	const [currentPage, setCurrentPage] = useState<AppRoute>(AppRoute.MainPage);

	useEffect(() => {
		switch (url.pathname) {
			case AppRoute.MainPage:
				setCurrentPage(AppRoute.MainPage);
				break;
			case AppRoute.About:
				setCurrentPage(AppRoute.About);
				break;
			case AppRoute.Services:
				setCurrentPage(AppRoute.Services);
				break;
			case AppRoute.Partners:
				setCurrentPage(AppRoute.Partners);
				break;
			case AppRoute.Contacts:
				setCurrentPage(AppRoute.Contacts);
				break;
			default:
				setCurrentPage(AppRoute.MainPage);
				break;
		}
	}, [url]);

	return (
		<header className={s.mainHeader}>
			<div className={s.topPart}>
				<div className="container">
					<div className={s.headerInnerWrap}>
						<Logo />
						<div className={s.headerNavWrap}>
							<MainNav currentPage={currentPage} />
						</div>
					</div>
					<button className={cn(s.menuToggle)}>
						<span className={s.hamburger}></span>
					</button>
				</div>
			</div>
		</header>
	);
};
