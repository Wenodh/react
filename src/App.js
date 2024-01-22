import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shimmer from './components/Shimmer';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'));

const AppLayout = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4"><Outlet /> </div>
        </>
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
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
