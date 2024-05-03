import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserAdmin from "./components/UserAdmin";
import ProductDetail from './components/ProductDetail';
import Shop from "./components/Shop";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-admin" element={<UserAdmin />} />
        <Route path="/shop/cats" element={<Shop />} />
        <Route path="/shop/dogs" element={<Shop />} />
        <Route path="/shop/hamsters" element={<Shop />} />
        <Route path="/shop/peces" element={<Shop />} />
        <Route path="/product-detail" element={<ProductDetail/>} />
      </Routes>
    </Layout>
  );
}

export default App;
