import { Headline } from '~/els/headline';
import s from './styles.module.css';

export function ContactsPage() {
	return (
		<div>
			<Headline text="Контакты" />
			<div className={s.contactsContent}>
				<div className={s.contactsAdress}>
					<h3>Наш адрес</h3>
					<p>
						450074 г. Уфа, бульвар Н. Наджми, д. 19, офис 2А info@predelufa.ru
					</p>
					<p>Телефон: +7 (347) 262-91-75 +7 (937) 849-91-75</p>
				</div>
				<div className={s.contactsBorder}></div>
				<div className={s.contactsDetails}>
					<h3>Наши реквизиты</h3>
					<p>
						Юр. адрес: 450074 г.Уфа, бульвар Назара Наджми, д. 19 офис 2А ИНН
						0278921967 КПП 027401001 ОГРН 1160280112849
					</p>
					<p>
						БАШКИРСКОЕ ОТДЕЛЕНИЕ N8598 ПАО СБЕРБАНК Кор. сч.
						30101810300000000601 БИК 048073601 Расч. сч. 40702810106000020026
					</p>
					<p>Директор Мараховский Павел Валерьевич</p>
				</div>
				<p className={s.contactsCard}>
					<a href={'files/Predel_partner_card.doc'}>Карта партнера</a>
				</p>
			</div>
			<iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A80bfeabf7d1eb5332eca31227a85813c78d28f1e9b9f1de2e439a9564058771c&amp;source=constructor"
				width="100%"
				height="450"
				style={{ border: 0 }}
			></iframe>
		</div>
	);
}

export const element = <ContactsPage />;
