import { System } from '~/els/system';
import surveillance from './img/surveillance-1.jpg';
import fitters from './img/fitters.jpg';
import cable from './img/cable-1.jpg';
import access from './img/access-1.jpg';
import signaling from './img/signaling-1.jpg';
import notification from './img/notification-1.jpg';
import vcs from './img/vcs-1.jpg';
import elsys from './img/elsys-1.jpg';
import bastion from './img/bastion-1.png';
import punktir from './img/punktir-1.jpg';
import s from './styles.module.css';
import { AppRoute } from '~/const';

export function MainPage() {
	return (
		<>
			<div className="container">
				<section className={s.intro}>
					<img src={fitters} />
					<div className={s.callUs}>
						<span className={s.phone}>ТЕЛЕФОН</span>
						<span className={s.phoneNumber}>+7 (347) 262-91-75</span>
						<span className={s.mail}>
							<a>info@predelufa.ru</a>
						</span>
					</div>
				</section>
				<section className={s.help}>
					<span className={s.helpHeadline}>ПОМОЖЕМ</span>
					<span className={s.helpDescr}>
						Разработать и реализовать комплексные проекты для предприятий и
						организаций любого масштаба. Главная цель – создание у наших
						партнеров современной и надежной инфраструктуры по безопасности и
						связи.
					</span>
				</section>
				<div className={s.systems}>
					<System
						imageSrc={surveillance}
						name="Видеонаблюдение"
						link={AppRoute.Surveillance}
					/>
					<System
						imageSrc={cable}
						name="Кабельные системы"
						link={AppRoute.Cablesystem}
					/>
					<System
						imageSrc={access}
						name="Контроль доступа"
						link={AppRoute.Access}
					/>
					<System
						imageSrc={signaling}
						name="Сигнализация"
						link={AppRoute.Signaling}
					/>
					<System
						imageSrc={notification}
						name="Оповещение"
						link={AppRoute.Notification}
					/>
					<System imageSrc={vcs} name="Система ВКС" link={AppRoute.Vks} />
				</div>
			</div>
			<section className={s.partners}>
				<div className="container">
					<p className={s.partnersHeadline}>Наш партнеры</p>
					<ul className={s.partnersList}>
						<li className={s.partnersItem}>
							<img src={bastion} />
						</li>
						<li className={s.partnersBorder}></li>
						<li className={s.partnersItem}>
							<img src={elsys} />
						</li>
						<li className={s.partnersBorder}></li>
						<li className={s.partnersItem}>
							<img src={punktir} />
						</li>
					</ul>
					<a className={s.partnersMore} href={AppRoute.Partners}>
						ЕЩЕ
					</a>
				</div>
			</section>
		</>
	);
}

export const element = <MainPage />;
