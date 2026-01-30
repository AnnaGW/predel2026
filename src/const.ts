export enum AppRoute {
	MainPage = '/',
	// Profile = '/leaders/:player_id',
	About = '/about',
	History = '/history',
	People = '/people',
	Garden = '/garden',
	Temple = '/temple',
	Events = '/events',
	Tasks = '/Tasks',
}

function getBase(): string {
	if (import.meta.env.MODE === 'development') {
		return `http://${import.meta.env.VITE_DOMAIN}`;
	}
	return `https://${import.meta.env.VITE_DOMAIN}`;
}

export const ExternalRoutes = {
	Game: getBase,
	Rules: () => `${getBase()}/rules`,
	News: () => `${getBase()}/news`,
};
