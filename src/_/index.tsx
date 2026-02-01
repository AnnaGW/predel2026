import { Outlet } from 'react-router-dom';
import s from './styles.module.css';

function MainLayout() {
	return (
		<>
			<div className={s.bgFixed}></div>
			<main className={s.startContainer}>
				<section className={s.start}>
					<p>Хедер</p>
					<Outlet />
					<p>Футер</p>
				</section>
			</main>
		</>
	);
}

export const element = <MainLayout />;
