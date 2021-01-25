import { lazy } from "react";

const officerRoute = [
    {
        path: "/officer/home",
        exact: true,
        layout: "officer",
        component: lazy(() => import("../pages/Home/Home")),
    },
    {
        path: "/officer/saveorder",
        exact: true,
        layout: "officer",
        component: lazy(() => import("../pages/Order/Saveorder")),
    },
    {
        path: "/officer/login",
        exact: true,
        layout: "",
        component: lazy(() => import("../pages/Login/Login")),
    },
];

export default officerRoute;
