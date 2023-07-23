import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import Login from "./pages/Login/index.tsx";
import zhCN from "antd/lib/locale/zh_CN";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<App />} />
      </Routes>
    </ConfigProvider>
  </Router>
);
