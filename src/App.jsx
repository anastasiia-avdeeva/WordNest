import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout/MainLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { GamePage } from "./pages/GamePage/GamePage";
import { words } from "./common/constants/constants";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage words={words} />} />
      <Route path="game" element={<GamePage words={words} />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
