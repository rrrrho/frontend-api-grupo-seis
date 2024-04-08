import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserAdmin from "./components/UserAdmin";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-admin" element={<UserAdmin />} />
      </Routes>
    </Layout>
  );
}

export default App;
