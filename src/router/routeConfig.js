//public routes
import Home from '../components/public/Home';
import Listing from '../components/public/Listing';
import AboutUs from '../components/public/AboutUs';
import ContactUs from '../components/public/ContactUs';
import Services from '../components/public/Services';
import Login from '../components/public/Login';

//protected routes
import Profile from '../components/protected/Profile';


//Protected Routes Object
export const protectedRoutes = [
    {
      key: "profile",
      path: "/profile",
      component: Profile,
      exact: true
    }
];

//Public Routes Object
export const publicRoutes = [
    {
        key: "Home",
        path: "/",
        component: Home,
        exact: true
    },
    {
        key: "AboutUs",
        path: "/about-us",
        component: AboutUs,
        exact: true
    },
    {
        key: "ContactUs",
        path: "/contact-us",
        component: ContactUs,
        exact: true
    },
    {
        key: "Listing",
        path: "/listing",
        component: Listing,
        exact: true
    },
    {
        key: "Services",
        path: "/services",
        component: Services,
        exact: true
    }   
];