import { useEffect, useRef, useState, type ReactElement } from 'react';
import s from './styles.module.css';
import { AppRoute, getBase, Pages } from '~/const';
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

	const submenuRef = useRef<HTMLUListElement | null>(null);
	const submenuBtnRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		//обработка клика вне подменю
		const clickOutsideHandler = (evt: DocumentEventMap['mousedown']) => {
			if (
				submenuRef.current &&
				!submenuRef.current.contains(evt.target as any) &&
				!submenuBtnRef.current?.contains(evt.target as any)
			) {
				setIsSubnavOpen(false);
			}
		};

		document.addEventListener('mousedown', clickOutsideHandler);
		return () => {
			document.removeEventListener('mousedown', clickOutsideHandler);
		};
	}, []);

	const subnavBtnClickHandler = () => {
		setIsSubnavOpen(!isSubnavOpen);
	};

	return (
		<div className={cn(s.mainNavWrap, { [s.invisible]: !isOpen })}>
			<ul className={s.mainNav}>
				<li className={s.mainNavItem}>
					<a
						href={getBase(AppRoute.MainPage)}
						className={cn(s.mainNavLink, {
							[s.activeLink]: currentPage === getBase(AppRoute.MainPage),
						})}
					>
						{Pages.MainPage}
					</a>
				</li>
				<li className={s.mainNavItem}>
					<a
						href={getBase(AppRoute.About)}
						className={cn(s.mainNavLink, {
							[s.activeLink]: currentPage === getBase(AppRoute.About),
						})}
					>
						{Pages.About}
					</a>
				</li>
				<li className={s.mainNavItem}>
					<span
						className={s.mainSubnavBtn}
						onClick={subnavBtnClickHandler}
						ref={submenuBtnRef}
					>
						&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;
					</span>
					<a
						href={AppRoute.Services}
						className={cn(s.mainNavLink, s.mainNavService, {
							[s.activeLink]: currentPage === AppRoute.Services,
						})}
						onMouseEnter={() => setIsSubnavOpen(true)}
					>
						{Pages.Services}
					</a>
					<ul
						className={cn(s.mainSubNav, {
							[s.hidden]: !isSubnavOpen,
						})}
						ref={submenuRef}
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
