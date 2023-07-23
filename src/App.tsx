import { Routes, Route } from "react-router-dom";
import MyLayout from "./components/Layout";
import Dashboard from "./pages/Home";
import User from "./pages/User";
import ArticleList from "./pages/article/List";
import ArticleCategories from "./pages/article/Categories";
import MedicineList from "./pages/medicine/List";
import MedicineCategories from "./pages/medicine/Categories";
import "./App.css";

function App() {
  return (
    <MyLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="articles/list" element={<ArticleList />} />
        <Route path="articles/categories" element={<ArticleCategories />} />
        <Route path="medicine/list" element={<MedicineList />} />
        <Route path="medicine/categories" element={<MedicineCategories />} />
      </Routes>
    </MyLayout>
  );
}

export default App;
