export enum InternalRoute {
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

export const getBase = (route: string): string => {
	if (import.meta.env.MODE === 'development') {
		return route;
	}
	return `/predel2026${route}`;
};

export const AppRoute = {
	MainPage: getBase(InternalRoute.MainPage),
	About: getBase(InternalRoute.About),
	Services: getBase(InternalRoute.Services),
	Partners: getBase(InternalRoute.Partners),
	Contacts: getBase(InternalRoute.Contacts),
	Surveillance: getBase(InternalRoute.Surveillance),
	Cablesystem: getBase(InternalRoute.Cablesystem),
	Access: getBase(InternalRoute.Access),
	Signaling: getBase(InternalRoute.Signaling),
	Notification: getBase(InternalRoute.Notification),
	Vks: getBase(InternalRoute.Vks),
} as const;

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

// const getCurrentPath = () => {
// 	const pathName = window.location.pathname;
// 	return pathName.startsWith(BASE_URL)
// 		? pathName.slice(BASE_URL.length - 1) || '/'
// 		: pathName;
// };
