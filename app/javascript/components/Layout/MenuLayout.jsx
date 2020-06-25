import React from "react";
import { Layout, Menu } from 'antd';
import { NavLink, Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import 'antd/dist/antd.css';

const { Header, Content } = Layout;

export default function MenuLayout({children, sidebar = true}) {
    return (
        <Layout>
            <Header className="header">
                <Link to="/"><div className="logo"/></Link>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><NavLink
                    to="/overview"
                >Company Overview</NavLink></Menu.Item>

<Menu.Item key="2"><NavLink
                    to="/employees"
                >Employees</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink
                    to="/upload"
                >Upload Data</NavLink></Menu.Item>
                </Menu>
            </Header>
            {sidebar ? (
                <Sidebar>
                    {children}
                </Sidebar>
            ) : (
                <>
                    {children}
                </>
            )}
        </Layout>
    );
};  