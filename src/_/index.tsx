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
			{/* <div className={s.mobilePlank}>
				Звоните и пишите нам! <br />
				Мы ответим на все Ваши вопросы <br />
				+7 347 262 91 75 &nbsp;&nbsp;&nbsp;info@predelufa.ru
			</div> */}
			<Outlet />
			<Footer />
		</div>
	);
}

export const element = <MainLayout />;
