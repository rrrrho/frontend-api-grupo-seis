import './App.css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import ProductDetail from './components/ProductDetail';

function App() {
  const product = {
    image: 'https://arcordiezb2c.vteximg.com.br/arquivos/ids/160297/Raza-Carne-Para-Perro-x-3-Kg-1-2427.jpg?v=637450400824130000',
    nombre : 'Comida Para Perros',
    description: 'Descripción del producto',
    price: 100,
    category: 'Categoría del producto',
    seller: 'Nombre del vendedor',
    stock: 1,
  };

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<ProductDetail product={product} />} />
        </Routes>
      </Layout>
  )
}

export default App
