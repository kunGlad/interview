import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/home";
import { lazy } from "react";
// import UseStateIndex from "../pages/useState";
const UseStateIndex = lazy(() => import("../pages/useState"));
const NativeEventsAndSyntheticEvents = lazy(
  () => import("../pages/nativeEventsAndSyntheticEvents")
);

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/use-state",
    element: <UseStateIndex />,
    // children: [{ path: "/", element: <Navigate to="home" replace /> }],
  },
  {
    path: "/native-events-and-synthetic-events",
    element: <NativeEventsAndSyntheticEvents />,
  },
];

const router = createBrowserRouter(routes);

export default router;
