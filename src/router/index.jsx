import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
// eslint-disable-next-line react-refresh/only-export-components
const Discover = lazy(() => import('@/views/discover'));
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'));
const Songs = lazy(() => import('@/views/discover/c-views/songs'));
const Artist = lazy(() => import('@/views/discover/c-views/artist'));
const Album = lazy(() => import('@/views/discover/c-views/album'));
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'));
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'));
const Mine = lazy(() => import('@/views/mine'));
const Focus = lazy(() => import('@/views/focus'));
const Download = lazy(() => import('@/views/download'));
const routes = [
    {
        path: '/',
        element: <Navigate to="/discover"/>
    },
    {
        path: '/discover',
        element: <Discover />,
        children: [
            {
                path: '/discover',
                element: <Navigate to="/discover/recommend"/>
            },
            {
                path: '/discover/recommend',
                element: <Recommend />
            },
            {
                path: '/discover/songs',
                element: <Songs />
            },
            {
                path: '/discover/artist',
                element: <Artist />
            },
            {
                path: '/discover/album',
                element: <Album />
            },
            {
                path: '/discover/ranking',
                element: <Ranking />
            },
            {
                path: '/discover/djradio',
                element: <Djradio />
            }
        ]
    },
    {
        path: '/mine',
        element: <Mine />
    },
    {
        path: '/focus',
        element: <Focus />
    },
    {
        path: '/download',
        element: <Download />
    }
];
export default routes;
//# sourceMappingURL=index.jsx.map