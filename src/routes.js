import React from 'react';
import ErrorPage from "./error-page";
// import LoginRoute from './routes/login-route';
import App from './App';
import { ShopListHOF } from './components/shop-list-hof';
import { ShopHOF } from './components/shop-hof/shop-hof';
import { DishDetail } from './components/dish-detail';
import { ShopCartHOF } from './components/shop-cart-hof';
import { Map } from './components/map'

const routesConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // {
      //   path: "login",
      //   element: <LoginRoute />
      // },
      {
        path: '/',
        element: <ShopListHOF />,
        // loader: interactiveMasterMapLoader
      },
      {
        path: 'merchants/:merchantId',
        element: <ShopHOF />,
        // loader: interactiveMasterMapLoader
      },
      {
        path: 'merchants/:merchantId/cart',
        element: <ShopCartHOF />,
      },
      {
        path: 'merchants/:merchantId/menu/:dishId',
        element: <><DishDetail /></>,
        // loader: interactiveMasterMapLoader
      },
      {
        path: 'payment_succeeded',
        element: <><h1>checkout ok</h1></>
      },
      {
        path: 'checkout_failed',
        element: <><h1>checkout ko</h1></>
      },
      {
        path: 'map',
        element: <><Map /></>
      },
    ],
  },
];

export default routesConfig;