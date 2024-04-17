import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserAdmin from "./components/UserAdmin";
import Shop from './components/Shop';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-admin" element={<UserAdmin />} />
          <Route path="/shop" element={<Shop />} />
      </Routes>
    </Layout>
  );
}
export default App;
