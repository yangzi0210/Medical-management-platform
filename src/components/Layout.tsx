import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Dropdown, message } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";

const { Header, Sider, Content } = Layout;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout id="components-layout-demo-custom-trigger">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            {
              key: "/admin/dashboard",
              icon: <DashboardOutlined />,
              label: "看板",
            },
            {
              key: "/admin/medicine",
              icon: <VideoCameraOutlined />,
              label: "药品管理",
              children: [
                {
                  label: "药品分类",
                  key: "/admin/medicine/categories",
                },
                {
                  label: "药品信息",
                  key: "/admin/medicine/list",
                },
              ],
            },
            {
              key: "/admin/articles",
              icon: <UploadOutlined />,
              label: "文章管理",
              children: [
                {
                  label: "文章分类",
                  key: "/admin/articles/categories",
                },
                {
                  label: "文章信息",
                  key: "/admin/articles/list",
                },
              ],
            },
            {
              key: "/admin/users",
              icon: <UserOutlined />,
              label: "会员信息",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <span className="app-title">医药管理平台</span>
          <Dropdown
            overlay={
              <Menu
                onClick={({ key }) => {
                  if (key === "logOut") {
                    navigate("/");
                  } else {
                    message.info("暂未开通");
                  }
                }}
                items={[
                  {
                    label: "个人中心",
                    key: "userCenter",
                  },
                  {
                    label: "退出",
                    key: "logOut",
                  },
                ]}
              />
            }
          >
            <Button
              icon={<LogoutOutlined />}
              style={{
                float: "right",
                marginRight: "50px",
                marginTop: "16px",
              }}
            >
              退出登录
            </Button>
          </Dropdown>
        </Header>
        <Content className="site-layout-background">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
