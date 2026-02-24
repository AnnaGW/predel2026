import { useEffect, useState, type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from '../logo';
import { cn } from '../@common/cn';
import { MainNav } from '../nav';
import { AppRoute, InternalRoute } from '~/const';

import s from './styles.module.css';

export const Header = (): ReactElement => {
	const url = useLocation();

	const [currentPage, setCurrentPage] = useState<InternalRoute>(
		InternalRoute.MainPage
	);

	useEffect(() => {
		switch (url.pathname) {
			case AppRoute.MainPage:
				setCurrentPage(InternalRoute.MainPage);
				break;
			case AppRoute.About:
				setCurrentPage(InternalRoute.About);
				break;
			case AppRoute.Services:
				setCurrentPage(InternalRoute.Services);
				break;
			case AppRoute.Partners:
				setCurrentPage(InternalRoute.Partners);
				break;
			case AppRoute.Contacts:
				setCurrentPage(InternalRoute.Contacts);
				break;
			case AppRoute.Surveillance:
				setCurrentPage(InternalRoute.Surveillance);
				break;
			case AppRoute.Cablesystem:
				setCurrentPage(InternalRoute.Cablesystem);
				break;
			case AppRoute.Access:
				setCurrentPage(InternalRoute.Access);
				break;
			case AppRoute.Notification:
				setCurrentPage(InternalRoute.Notification);
				break;
			case AppRoute.Vks:
				setCurrentPage(InternalRoute.Vks);
				break;
			case AppRoute.Signaling:
				setCurrentPage(InternalRoute.Signaling);
				break;
			default:
				setCurrentPage(InternalRoute.MainPage);
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
							<div className={s.headerPLank}>
								<span>
									Звоните и пишите нам! Мы ответим на все Ваши вопросы. <br />
								</span>
								<span>+7 347 262 91 75 / info@predelufa.ru</span>
							</div>
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
