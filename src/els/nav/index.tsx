import type { ReactElement } from 'react';
import s from './styles.module.css';
import { AppRoute, Pages } from '~/const';
import { cn } from '../@common/cn';

export type MainNavProps = {
	currentPage: AppRoute;
};

export const MainNav = ({ currentPage }: MainNavProps): ReactElement => {
	return (
		<div className={s.mainNavWrap}>
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
						href={AppRoute.Services}
						className={cn(s.mainNavLink, {
							[s.activeLink]: currentPage === AppRoute.Services,
						})}
					>
						{Pages.Services}
					</a>
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
