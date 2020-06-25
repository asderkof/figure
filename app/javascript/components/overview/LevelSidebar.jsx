import React from "react";
import { Layout, Menu } from 'antd';
import NavBreadcrumbs from "../layout/Breadcrumbs"
import { UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Content, Sider} = Layout;

export default function LevelSidebar({levels, onSelectLevel, children}) {

    return (
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        levels?.map((level, index) => (
                            <Menu.Item key={String(index)} icon={<UserOutlined />} onClick={onSelectLevel}>
                                {level.level_title}
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <NavBreadcrumbs />
                <Content>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}