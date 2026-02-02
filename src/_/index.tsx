import { Outlet } from 'react-router-dom';
import s from './styles.module.css';
import { Header } from '~/els/@header';
import { Footer } from '~/els/@footer';

function MainLayout() {
	return (
		<>
			<div className={s.bgFixed}></div>
			<div className={s.container}>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export const element = <MainLayout />;
