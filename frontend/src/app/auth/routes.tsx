import { ROUTE_URL } from '../../constant/routes.const.ts';
import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from '../../baseLayout/BaseLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home/home'));
const AboutUs = lazy(() => import('../../pages/AboutUS/aboutUs'));
const PageNotFound = lazy(() => import('../../app/notFound/PageNotFound/PageNotFound.tsx'));
const Services = lazy(() => import('../../pages/Service/services.tsx'));
const Careers = lazy(() => import('../../pages/careers/careers.tsx'));
const LearnMoreServicesPage = lazy(() => import('../../pages/Service/LearnMoreServicesPage.tsx'));
const LearnMoreCareerPage = lazy(() => import('../../pages/careers/LearnMoreCareersPage.tsx'));

// const WhoWeAre = lazy(() => import('../../pages/whoWeAre/whoWeAre.tsx'));
const Contact = lazy(() => import('../../pages/Contact/Contact.tsx'));
const RoutesApp = createBrowserRouter([
  {
    path: ROUTE_URL.HOME,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ROUTE_URL.ABOUT,
        element: <AboutUs />
      },
      {
        path: ROUTE_URL.SERVICE,
        element: <Services />
      },
      // {
      //   path: ROUTE_URL.WHO_WE_ARE,
      //   element: <WhoWeAre />,
      // },
      {
        path: ROUTE_URL.CONTACT,
        element: <Contact />
      },
      {
        path: ROUTE_URL.LEARN_MORE,
        element: <LearnMoreServicesPage />
      },
      {
        path: ROUTE_URL.CAREERS,
        element: <Careers />
      },
      {
        path: ROUTE_URL.LEARN_MORE_ABOUT_CAREER,
        element: <LearnMoreCareerPage />
      },
      {
        path: ROUTE_URL.UNDEFINED,
        element: <PageNotFound />
      }
    ]
  },
  {
    path: ROUTE_URL.UNDEFINED,
    element: <PageNotFound />
  }
]);

export default RoutesApp;

