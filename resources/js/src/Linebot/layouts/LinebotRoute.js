import { lazy } from "react";

const linebotRoute = [
    {
        path: "/linebot/verify",
        exact: true,
        layout: "",
        component: lazy(() => import("../pages/Verify/Verify")),
    },
    {
        path: "/linebot/login",
        exact: true,
        layout: "",
        component: lazy(() => import("../pages/Login/Login")),
    },
    {
        path: "/linebot/setting",
        exact: true,
        authliff: true,
        layout: "linebot",
        component: lazy(() => import("../pages/Setting/Setting")),
    },
    {
        path: "/linebot/profile",
        exact: true,
        authliff: true,
        layout: "linebot",
        component: lazy(() => import("../pages/Profile/Profile")),
    },
];

export default linebotRoute;
