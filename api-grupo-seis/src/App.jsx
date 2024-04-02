import './App.css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

function App() {

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
  )
}

export default App
