export enum AppRoute {
	MainPage = '/',
	About = '/about',
	Services = '/services',
	Partners = '/partners',
	Contacts = '/contacts',
	Surveillance = '/surveillance',
	Cablesystem = '/cablesystem',
	Access = '/access',
	Signaling = '/signaling',
	Notification = '/notification',
	Vks = '/vks',
}

export enum Pages {
	MainPage = 'Главная',
	About = 'О нас',
	Services = 'Услуги',
	Partners = 'Наши партнеры',
	Contacts = 'Контакты',
	Surveillance = 'Видеонаблюдение',
	Cablesystem = 'Кабельные системы',
	Access = 'Контроль доступа',
	Signaling = 'Сигнализация',
	Notification = 'Оповещение',
	Vks = 'Система ВКС',
}

export const BASE_URL = import.meta.env.BASE_URL;

export const getBase = (route: AppRoute): string => {
	if (import.meta.env.MODE === 'development') {
		return route;
	}
	return `/predel2026${route}`;
};

// const getCurrentPath = () => {
// 	const pathName = window.location.pathname;
// 	return pathName.startsWith(BASE_URL)
// 		? pathName.slice(BASE_URL.length - 1) || '/'
// 		: pathName;
// };
