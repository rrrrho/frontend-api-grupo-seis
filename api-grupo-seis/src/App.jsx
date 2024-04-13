import './App.css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import CatShop from './components/Shop/CatShop';
import DogShop from './components/Shop/DogShop';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<CatShop />} />
          <Route path="/dogs" element={<DogShop />} />
        </Routes>
      </Layout>
  );
};

export default App;
