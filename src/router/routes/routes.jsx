import React from "react";
import { PathName } from "../PathName";

const Cart = React.lazy(() => import("../../pages/Cart/Cart"));
const GenericComponents = React.lazy(() =>
    import("../../pages/GenericComponents/GenericComponents")
);
const Landing = React.lazy(() => import("../../pages/Landing/Landing"));
const Login = React.lazy(() => import("../../pages/Login/Login"));
const Product = React.lazy(() => import("../../pages/Product/Product"));
const ProductListing = React.lazy(() =>
    import("../../pages/ProductListing/ProductListing")
);
const Signup = React.lazy(() => import("../../pages/Signup/Signup"));
const Wishlist = React.lazy(() => import("../../pages/Wishlist/Wishlist"));
const PageNotFound = React.lazy(() =>
    import("../../pages/PageNotFound/PageNotFound")
);

const routes = [
    {
        path: PathName.CART,
        component: <Cart />,
        exact: true,
        key: "cart",
    },
    {
        path: PathName.GENERIC_COMPONENTS,
        component: <GenericComponents />,
        exact: true,
        key: "generic-comp",
    },
    {
        path: PathName.LANDING,
        component: <Landing />,
        exact: true,
        key: "landing",
    },
    {
        path: PathName.LOGIN,
        component: <Login />,
        exact: true,
        key: "login",
    },
    {
        path: PathName.PRODUCT,
        component: <Product />,
        exact: true,
        key: "product",
    },
    {
        path: PathName.PRODUCT_LISTING,
        component: <ProductListing />,
        exact: true,
        key: "product-listings",
    },
    {
        path: PathName.SIGNUP,
        component: <Signup />,
        exact: true,
        key: "signup",
    },
    {
        path: PathName.WISHLIST,
        component: <Wishlist />,
        exact: true,
        key: "wishlist",
    },
    {
        path: PathName.PAGE_NOT_FOUND,
        component: <PageNotFound />,
        key: "page-not-found",
    },
];

export { routes };
