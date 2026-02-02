import { Outlet } from 'react-router-dom';
import s from './styles.module.css';
import { Header } from '~/els/@header';
import { Footer } from '~/els/@footer';

function MainLayout() {
	return (
		<>
			<div className={s.bgFixed}></div>
			<main className={s.startContainer}>
				<section className={s.start}>
					<Header />
					<Outlet />
					<Footer />
				</section>
			</main>
		</>
	);
}

export const element = <MainLayout />;
