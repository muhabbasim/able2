import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import ComponentsRoutes from './ComponentsRoutes';

// import { SimpleLayoutType } from 'config';
// import SimpleLayout from 'layout/Simple';
import Loadable from 'components/Loadable';
import LandingpageLayout from 'layout/landingpage/LandingpageLayout';

// render - landing page
// const PagesLanding = Loadable(lazy(() => import('pages/landing')));
const Landingkgp = Loadable(lazy(() => import('kgp-landingpage/pages/HomePage1')));


// ==============================|| ROUTES RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingpageLayout/>,
      children: [
        {
          index: true,
          element: <Landingkgp />
        }
      ]
    },
    LoginRoutes,
    ComponentsRoutes,
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
