import { lazy } from "react";

const linebotRoute = [
    {
        path: "/linebot/verify",
        exact: true,
        layout: "",
        component: lazy(() => import("../pages/Verify/Verify")),
    },
    {
        path: "/linebot/setting",
        exact: true,
        authliff: true,
        layout: "linebot",
        component: lazy(() => import("../pages/Setting/Setting")),
    },
    {
        path: "/linebot/login",
        exact: true,
        layout: "",
        component: lazy(() => import("../pages/Login/Login")),
    },
];

export default linebotRoute;
