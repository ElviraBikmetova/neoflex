import { Route, Routes, useNavigate } from "react-router-dom";
import { ERoutes } from "./enums/routes";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(ERoutes.Root)
  }, [])
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
