import HomePage from '../pages/Home/HomePage';
import BlogPage from '../pages/Blog/BlogPage';
import ContactPage from '../pages/Contact/ContactPage';
import SupportPage from '../pages/Support/SupportPage';
import ProjectsPage from '../pages/Projects/ProjectsPage';
import AboutPage from '../pages/About/AboutPage';
import NotFoundPage from '../pages/NotPoundPage/NotPoundPage';

export const langRoutes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        footerType: '',
    },
    {
        path: '/about',
        page: AboutPage,
        isShowHeader: true,
        footerType: '',
    },
    {
        path: '/projects',
        page: ProjectsPage,
        isShowHeader: true,
        footerType: '',
    },
    {
        path: '/blog',
        page: BlogPage,
        isShowHeader: true,
        footerType: '',
    },
    {
        path: '/contact',
        page: ContactPage,
        isShowHeader: true,
        footerType: '',
    },
    {
        path: '/support',
        page: SupportPage,
        isShowHeader: true,
        footerType: '',
    }
];

export const globalRoutes = [
    {
        path: '*',
        page: NotFoundPage,
    },
];
