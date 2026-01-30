import s from './styles.module.css';

function Main() {
	return (
		<>
			<div className={s.bgFixed}></div>
			<main className={s.startContainer}>
				<section className={s.start}>Главная страница ООО Предел</section>
			</main>
		</>
	);
}

export const element = <Main />;
