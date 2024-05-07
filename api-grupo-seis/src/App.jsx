import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductDetail from "./components/ProductDetail";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Profile from "./components/Profile";
import Login from "./pages/Login";

function App() {
  const shopRoutes = ["gatos", "perros", "hamsters", "peces"];

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
