import './App.css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Shop from './components/Shop';

function App() {

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Layout>
  )
}

export default App
