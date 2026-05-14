import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { CarDetail } from "./components/CarDetail";
import { Models } from "./components/Models";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "models", Component: Models },
      { path: "models/:carId", Component: CarDetail },
    ],
  },
]);
