import { lazy } from "react";

// import modular routes
// import infoRoutes from "../Info/layouts/InfoRoute";
// import memberRoutes from "../Member/layouts/MemberRoute";

const Route = [
    {
        path: "/officer/home",
        exact: true,
        layout: "private",
        component: lazy(() => import("../pages/Home/Home"))
    },
    {
        path: "/officer/saveorder",
        exact: true,
        layout: "private",
        component: lazy(() => import("../pages/Order/Saveorder"))
    },
    {
        path: "/officer/login",
        exact: true,
        layout: "",
        component: lazy(() => import("../pages/Login/Login"))
    }
];

export default Route;
