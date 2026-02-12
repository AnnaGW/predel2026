import { Headline } from '~/els/headline';
import bolid from './img/bolid-2.jpg';
import elsys from './img/elsys-2.jpg';
import legran from './img/legrand-2.jpg';
import ltv from './img/LTV-2.jpg';
import nikomax from './img/nikomax-2.png';
import poligon from './img/poligon-2.jpg';
import punktir from './img/punktir-2.jpg';
import videonova from './img/videonova-2.jpg';
import zarya from './img/zarya-2.jpg';
import s from './styles.module.css';

export function PartnersPage() {
	return (
		<div>
			<Headline text="Наши партнеры" />
			<ul className={s.partnersLogoList}>
				<li className={s.partnersLogoItem}>
					<img src={legran} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={nikomax} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={ltv} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={punktir} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={elsys} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={zarya} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={poligon} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={videonova} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={bolid} className={s.partnersLogoImg} />
				</li>
			</ul>
		</div>
	);
}

export const element = <PartnersPage />;
