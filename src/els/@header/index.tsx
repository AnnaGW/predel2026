import { useEffect, useState, type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from '../logo';
import { cn } from '../@common/cn';
import { MainNav } from '../nav';
import { AppRoute } from '~/const';

import s from './styles.module.css';

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

	const [isMobMenuOpen, setIsMobMenuOpen] = useState<boolean>(true);

	useEffect(() => {
		if (
			window.innerWidth <= 480 &&
			window.screen.orientation.type === 'portrait-primary'
		) {
			setIsMobMenuOpen(false);
		}
	}, []);

	const menuToggleClickHandler = () => {
		setIsMobMenuOpen(!isMobMenuOpen);
	};

	//обрабатываем resize и изменение ориентации
	screen.orientation.onchange = () => {
		if (
			window.innerWidth <= 480 &&
			window.screen.orientation.type === 'portrait-primary'
		) {
			setIsMobMenuOpen(false);
		} else {
			setIsMobMenuOpen(true);
		}
	};

	return (
		<header className={s.mainHeader}>
			<div className={s.topPart}>
				<div className="container">
					<div className={s.headerInnerWrap}>
						<Logo />
						<div className={s.headerNavWrap}>
							<MainNav currentPage={currentPage} isOpen={isMobMenuOpen} />
						</div>
					</div>
					<button
						className={cn(s.menuToggle, { [s.isActive]: isMobMenuOpen })}
						onClick={menuToggleClickHandler}
					>
						<span className={s.hamburger}></span>
					</button>
				</div>
			</div>
		</header>
	);
};
