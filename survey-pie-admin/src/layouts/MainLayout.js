import { Layout, Menu } from "antd";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function MainLayout({ selectedKeys, children, padding = 45 }) {
  const contentStyle = useMemo(() => {
    return { padding };
  }, [padding]);

  const menuItems = [
    {
      key: "list",
      label: <Link to="/list">설문조사 관리</Link>,
    },
    // 필요하면 다른 메뉴도 추가 가능
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255,255,255,0.3)",
            borderRadius: 8,
          }}
        />
        <Menu
          theme="dark"
          selectedKeys={selectedKeys}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header />
        <Content style={contentStyle}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default MainLayout;
