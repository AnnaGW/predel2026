import { Outlet } from 'react-router-dom';
import s from './styles.module.css';
import { Header } from '~/els/@header';
import { Footer } from '~/els/@footer';
import { AppRoute, getBase } from '~/const';

function MainLayout() {
	console.log('MODE is ', import.meta.env.MODE);
	console.log('ROUTE is ', getBase(AppRoute.MainPage));
	return (
		<div className={s.mainLayout}>
			<div className={s.bgFixed}></div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export const element = <MainLayout />;
