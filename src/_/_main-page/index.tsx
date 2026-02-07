import { System } from '~/els/system';
import surveillance from './img/surveillance-1.jpg';
import fitters from './img/fitters.avif';
import cable from './img/cable-1.jpg';
import access from './img/access-1.jpg';
import s from './styles.module.css';

export function MainPage() {
	return (
		<>
			<div className="container">
				<div className={s.intro}>
					<img src={fitters} />
					<div className={s.callUs}>
						<span className={s.phone}>ТЕЛЕФОН</span>
						<span className={s.phoneNumber}>+7(347) 262-91-75</span>
						<span className={s.mail}>
							<a>info@predelufa.ru</a>
						</span>
					</div>
				</div>
				<div className={s.help}>
					<span className={s.helpHeadline}>ПОМОЖЕМ</span>
					<span className={s.helpDescr}>
						Разработать и реализовать комплексные проекты для предприятий и
						организаций любого масштаба. \ Главная цель – создание у наших
						партнеров современной и надежной инфраструктуры по безопасности и
						связи.
					</span>
				</div>
				<div className={s.systems}>
					<System imageSrc={surveillance} name="Видеонаблюдение" link="" />
					<System imageSrc={cable} name="Кабельные системы" link="" />
					<System imageSrc={access} name="Контроль доступа" link="" />
				</div>
			</div>
			<div className={s.partners}>
				<div className="container"></div>
			</div>
		</>
	);
}

export const element = <MainPage />;
