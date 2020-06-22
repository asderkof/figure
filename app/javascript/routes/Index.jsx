import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Home from "../components/home/Home";
import MenuLayout from "../components/MenuLayout";

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

export default (
    <Router>
        <MenuLayout>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </MenuLayout>
    </Router>
);