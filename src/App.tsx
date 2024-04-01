import { Route, Routes } from "react-router-dom";
import { ERoutes } from "./enums/routes";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path={ERoutes.Root} element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path={ERoutes.Cart} element={<CartPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
