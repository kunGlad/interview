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
const BroadCastChannel = lazy(() => import("../pages/crossPageCommunication/broadCastChannel"));
const LocalStorage = lazy(() => import("../pages/crossPageCommunication/localStorage"));
const ReceivePage = lazy(() => import("../pages/crossPageCommunication/receivePage"));
const BoxSizing = lazy(() => import("../pages/boxSizing"));
const DualWingLayout = lazy(() => import("../pages/dualWingLayout"));
const Triangle = lazy(() => import("../pages/triangle"));
const Background = lazy(() => import("../pages/background"));

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
  {
    path: "/broad-cast-channel",
    element: <BroadCastChannel />,
  },
  {
    path: "/recieve-page",
    element: <ReceivePage />,
  },
  { path: "/local-storage", element: <LocalStorage /> },
  { path: "/box-sizing", element: <BoxSizing /> },
  { path: "/dual-wing-layout", element: <DualWingLayout /> },
  { path: "/triangle", element: <Triangle /> },
  { path: "/background", element: <Background /> },
];

const router = createBrowserRouter(routes);

export default router;
