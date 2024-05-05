import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Checkout from "./components/Checkout";
import UserAdmin from "./components/UserAdmin";
import CatShop from './components/Shop/CatShop';
import DogShop from './components/Shop/DogShop';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="user-admin" element={<UserAdmin />} />
        <Route path="/cats" element={<CatShop />} />
        <Route path="/dogs" element={<DogShop />} />

      </Routes>
    </Layout>
  );
}

export default App;
