import { default as React, Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Cart from './components/Cart';
import Header from './components/Header';
import Shimmer from './components/Shimmer';
import './index.css';
import UserContext from './utils/UserContext';
import appStore from './utils/appStore';
import Error from "./components/Error"

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'));
// import { SpeedInsights } from "@vercel/speed-insights"

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        setUserName({ name: ' Wenodh' });
    }, []);
    return (
        <Provider store={appStore}>
            <UserContext.Provider
                value={{ loggedInUser: userName, setUserName }}
            >
                <Header />
                <div className="container mx-auto px-4">
                    <Outlet />{' '}
                </div>
                {/* <SpeedInsights /> */}
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: '/contact',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: '/restaurants/:resId',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <RestaurantMenu />
                    </Suspense>
                ),
            },
            {
                path: '/cart',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Cart />
                    </Suspense>
                ),
            },
        ],
        errorElement: <Error />,
    },
]);

const App = () => <RouterProvider router={appRouter} />

export default App