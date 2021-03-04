import { lazy } from "react";

const officerRoute = [
    {
        path: "/officer/home",
        exact: true,
        auth: true,
        layout: "officer",
        component: lazy(() => import("../pages/Home/Home")),
    },
    {
        path: "/officer/saveorder",
        exact: true,
        auth: true,
        layout: "officer",
        component: lazy(() => import("../pages/Order/Saveorder")),
    },
    {
        path: "/officer/listorder",
        exact: true,
        auth: true,
        layout: "officer",
        component: lazy(() => import("../pages/Listorder/Listorder")),
    },
    {
        path: "/officer/login",
        exact: true,
        layout: "",
        component: lazy(() => import("../pages/Login/Login")),
    },
    {
        path: "/officer/lookscreen",
        exact: true,
        layout: "",
        component: lazy(() => import("../pages/Lookscreen/Lookscreen")),
    },
    {
        path: "/officer/saveorder3",
        exact: true,
        layout: "officer",
        component: lazy(() => import("../pages/Order/component/SaveorderComponent")),
    },
    {
        path: "/officer/detail",
        exact: true,
        layout: "officer",
        component: lazy(() => import("../pages/Order/component/Detail")),
    },
    {
        path: "/officer/calenda",
        exact: true,
        layout: "officer",
        component: lazy(() => import("../pages/Calenda/Calenda")),
    },
];



export default officerRoute;
