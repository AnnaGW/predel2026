import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppRoute } from './const';
import Error404 from './_/_error404/error404';

const routes = [
	{
		path: '/',
		errorElement: <Error404 />,
		lazy: () => import('./_'),
		children: [
			{
				path: AppRoute.MainPage,
				lazy: () => import('./_/_main-page'),
			},
			{
				lazy: () => import('./_/template'),
				children: [
					{
						path: AppRoute.About,
						lazy: () => import('./_/_about'),
					},
					{
						path: AppRoute.Services,
						lazy: () => import('./_/_services'),
					},
					{
						path: AppRoute.Contacts,
						lazy: () => import('./_/_contacts'),
					},
					{
						path: AppRoute.Partners,
						lazy: () => import('./_/_partners'),
					},
					{
						path: AppRoute.Surveillance,
						lazy: () => import('./_/_services/surveillance'),
					},
					{
						path: AppRoute.Cablesystem,
						lazy: () => import('./_/_services/cable'),
					},
					{
						path: AppRoute.Access,
						lazy: () => import('./_/_services/access'),
					},
					{
						path: AppRoute.Signaling,
						lazy: () => import('./_/_services/signaling'),
					},
					{
						path: AppRoute.Notification,
						lazy: () => import('./_/_services/notification'),
					},
					{
						path: AppRoute.Vks,
						lazy: () => import('./_/_services/vks'),
					},
				],
			},
		],
	},
];

function Routing() {
	const router = useMemo(() => createBrowserRouter(routes), []);
	return <RouterProvider router={router} />;
}

export default Routing;
