import './App.css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<ProductDetail/>} />
        </Routes>
      </Layout>
  )
}

export default App
