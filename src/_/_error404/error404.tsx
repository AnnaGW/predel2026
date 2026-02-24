import { Block } from '~/els/block';
import s from './styles.module.css';
import { AppRoute, getBase } from '~/const';

function Error404() {
	console.log('MODE is ', import.meta.env.MODE);
	console.log('ROUTE is ', getBase(AppRoute.MainPage));
	return (
		<div className={s.mainLayout}>
			<div className={s.bgFixed}></div>
			<div className="container">
				<Block>
					<h1>404</h1>
					<h2>К сожалению, страница не найдена</h2>
					<a className={s.link} href={AppRoute.MainPage}>
						На главную
					</a>
				</Block>
			</div>
		</div>
	);
}

export default Error404;
