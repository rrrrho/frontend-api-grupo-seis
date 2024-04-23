import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserAdmin from "./components/UserAdmin";
import CatShop from './components/Shop/CatShop';
import DogShop from './components/Shop/DogShop';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-admin" element={<UserAdmin />} />
        <Route path="/cats" element={<CatShop />} />
        <Route path="/dogs" element={<DogShop />} />
        <Route path="/product-detail" element={<ProductDetail/>} />
      </Routes>
    </Layout>
  );
}

export default App;
