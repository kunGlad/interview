import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/home";
import { lazy } from "react";
// import UseStateIndex from "../pages/useState";
const UseStateIndex = lazy(() => import("../pages/useState"));
const NativeEventsAndSyntheticEvents = lazy(
  () => import("../pages/nativeEventsAndSyntheticEvents")
);

const TimeoutEx = lazy(() => import("../pages/timeoutExample"));
const Bfc = lazy(() => import("../pages/bfc"));
const TextAlignJustify = lazy(() => import("../pages/textAlignJustify/"));

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
  {
    path: "/timeout-example",
    element: <TimeoutEx />,
  },
  {
    path: "/bfc",
    element: <Bfc />,
  },
  {
    path: "/text-align-justify",
    element: <TextAlignJustify />,
  },
];

const router = createBrowserRouter(routes);

export default router;
