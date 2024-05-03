import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserAdmin from "./components/UserAdmin";
import ProductDetail from './components/ProductDetail';
import Shop from "./components/Shop";

function App() {

  const shopRoutes = [
    "gatos",
    "perros",
    "hamsters",
    "peces"
  ];

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-admin" element={<UserAdmin />} />
        <Route path="/shop" element={<Shop />}>
          {shopRoutes.map((category, index) => (
            <Route key={index} path={category} element={<Shop />} />
          ))}
        </Route>
        <Route path="/product-detail" element={<ProductDetail/>} />
      </Routes>
    </Layout>
  );
}

export default App;
