import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetail from "./components/ProductDetail";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout/Checkout";
import UserAdmin from "./components/UserAdmin/UserAdmin";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  const shopRoutes = ["gatos", "perros", "hamsters", "peces"];

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user-admin" element={<UserAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />}>
          {shopRoutes.map((category, index) => (
            <Route key={index} path={category} element={<Shop />} />
          ))}
        </Route>
        <Route path="/product-detail/:id" Component={ProductDetail} />
      </Routes>
    </Layout>
  );
}

export default App;
