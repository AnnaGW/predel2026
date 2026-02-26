import { Headline } from '~/els/headline';
import bolid from './img/bolid-2.jpg';
import elsys from './img/elsys-2.jpg';
import bastion from './img/bastion-2.png';
import ltv from './img/LTV-2.jpg';
import nikomax from './img/nikomax-2.png';
import intellekt from './img/intellekt-2.png';
import punktir from './img/punktir-2.jpg';
import rubezh from './img/rubezh-2.png';
import zarya from './img/zarya-2.jpg';
import s from './styles.module.css';

export function PartnersPage() {
	return (
		<div>
			<Headline text="Наши партнеры" />
			<ul className={s.partnersLogoList}>
				<li className={s.partnersLogoItem}>
					<img src={bastion} className={s.partnersLogoImg} />
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
					<img src={intellekt} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={rubezh} className={s.partnersLogoImg} />
				</li>
				<li className={s.partnersLogoItem}>
					<img src={bolid} className={s.partnersLogoImg} />
				</li>
			</ul>
		</div>
	);
}

export const element = <PartnersPage />;
