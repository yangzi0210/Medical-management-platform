import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Router>
);