import { useState, type ReactElement } from 'react';
import s from './styles.module.css';
import { AppRoute, Pages } from '~/const';
import { cn } from '../@common/cn';

export type MainNavProps = {
	currentPage: AppRoute;
	isOpen: boolean;
};

export const MainNav = ({
	currentPage,
	isOpen = true,
}: MainNavProps): ReactElement => {
	const [isSubnavOpen, setIsSubnavOpen] = useState<boolean>(false);

	const menuClickHandler = (evt: React.MouseEvent<HTMLAnchorElement>) => {
		evt.preventDefault();
		setIsSubnavOpen(!isSubnavOpen);
	};

	return (
		<div className={cn(s.mainNavWrap, { [s.invisible]: !isOpen })}>
			<ul className={s.mainNav}>
				<li className={s.mainNavItem}>
					<a
						href={AppRoute.MainPage}
						className={cn(s.mainNavLink, {
							[s.activeLink]: currentPage === AppRoute.MainPage,
						})}
					>
						{Pages.MainPage}
					</a>
				</li>
				<li className={s.mainNavItem}>
					<a
						href={AppRoute.About}
						className={cn(s.mainNavLink, {
							[s.activeLink]: currentPage === AppRoute.About,
						})}
					>
						{Pages.About}
					</a>
				</li>
				<li className={s.mainNavItem}>
					<a
						className={cn(s.mainNavLink, s.mainNavService, {
							[s.activeLink]: currentPage === AppRoute.Services,
						})}
						onClick={menuClickHandler}
					>
						{Pages.Services}
					</a>
					<ul
						className={cn(s.mainSubNav, {
							[s.hidden]: !isSubnavOpen,
						})}
					>
						<li>
							<a
								href={AppRoute.Surveillance}
								className={cn(s.mainNavLink, s.mainSubNavLink, {
									[s.activeLink]: currentPage === AppRoute.Surveillance,
								})}
							>
								{Pages.Surveillance}
							</a>
						</li>
						<li>
							<a
								href={AppRoute.Cablesystem}
								className={cn(s.mainNavLink, s.mainSubNavLink, {
									[s.activeLink]: currentPage === AppRoute.Cablesystem,
								})}
							>
								{Pages.Cablesystem}
							</a>
						</li>
						<li>
							<a
								href={AppRoute.Access}
								className={cn(s.mainNavLink, s.mainSubNavLink, {
									[s.activeLink]: currentPage === AppRoute.Access,
								})}
							>
								{Pages.Access}
							</a>
						</li>
						<li>
							<a
								href={AppRoute.Signaling}
								className={cn(s.mainNavLink, s.mainSubNavLink, {
									[s.activeLink]: currentPage === AppRoute.Signaling,
								})}
							>
								{Pages.Signaling}
							</a>
						</li>
						<li>
							<a
								href={AppRoute.Notification}
								className={cn(s.mainNavLink, s.mainSubNavLink, {
									[s.activeLink]: currentPage === AppRoute.Notification,
								})}
							>
								{Pages.Notification}
							</a>
						</li>
						<li>
							<a
								href={AppRoute.Vks}
								className={cn(s.mainNavLink, s.mainSubNavLink, {
									[s.activeLink]: currentPage === AppRoute.Vks,
								})}
							>
								{Pages.Vks}
							</a>
						</li>
					</ul>
				</li>
				<li className={s.mainNavItem}>
					<a
						href={AppRoute.Partners}
						className={cn(s.mainNavLink, {
							[s.activeLink]: currentPage === AppRoute.Partners,
						})}
					>
						{Pages.Partners}
					</a>
				</li>
				<li className={s.mainNavItem}>
					<a
						href={AppRoute.Contacts}
						className={cn(s.mainNavLink, {
							[s.activeLink]: currentPage === AppRoute.Contacts,
						})}
					>
						{Pages.Contacts}
					</a>
				</li>
			</ul>
		</div>
	);
};
