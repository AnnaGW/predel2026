import { useEffect, useState, type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from '../logo';
import { cn } from '../@common/cn';
import { MainNav } from '../nav';
import { AppRoute } from '~/const';

import s from './styles.module.css';

export const Header = (): ReactElement => {
	const url = useLocation();

	const [currentPage, setCurrentPage] = useState<string>(AppRoute.MainPage);

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
			case AppRoute.Surveillance:
				setCurrentPage(AppRoute.Surveillance);
				break;
			case AppRoute.Cablesystem:
				setCurrentPage(AppRoute.Cablesystem);
				break;
			case AppRoute.Access:
				setCurrentPage(AppRoute.Access);
				break;
			case AppRoute.Notification:
				setCurrentPage(AppRoute.Notification);
				break;
			case AppRoute.Vks:
				setCurrentPage(AppRoute.Vks);
				break;
			case AppRoute.Signaling:
				setCurrentPage(AppRoute.Signaling);
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
							<div
								className={cn(s.headerPLank, {
									[s.none]: url.pathname === AppRoute.MainPage,
								})}
							>
								<span>
									Звоните и пишите нам! Мы ответим на все Ваши вопросы. <br />
								</span>
								<span>
									+7 347 262 91 75 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									info@predelufa.ru
								</span>
							</div>
							<div
								className={cn(s.headerMainPlank, {
									[s.none]: url.pathname !== AppRoute.MainPage,
								})}
							>
								Звоните и пишите нам! <br />
								Мы ответим на все Ваши вопросы.
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
