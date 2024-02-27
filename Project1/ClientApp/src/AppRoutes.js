import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/list',
    element: <Counter />
  },
  {
    path: '/reviews',
    element: <FetchData />
  }
];

export default AppRoutes;
