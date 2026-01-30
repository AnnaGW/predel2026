import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppRoute } from './const';
import Error404 from './_/_error404/error404';

const routes = [
	{
		path: '/',
		errorElement: <Error404 />,
		lazy: () => import('./_'),
	},
	{
		path: AppRoute.About,
		lazy: () => import('./_/_about'),
	},
];

function Routing() {
	const router = useMemo(() => createBrowserRouter(routes), []);
	return <RouterProvider router={router} />;
}

export default Routing;
