import React from 'react'
import './Dash_styles.css'
import { Layout } from 'antd';
import loginImg from 'C:/Users/infantjs/Desktop/ggg/ui/src/components/login/images/download.jpg';
import { Typography } from 'antd';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
export default function Dashboard() {
    return (
        <div>
            <Layout>
                <Header >               
                <Title style={{color:"white"}}level={3}>Virtusa Pharmacy</Title>
             </Header>
                <Layout>
                    <Sider >Sider</Sider>
                    <Layout>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
                
            </Layout>
        </div>
    )
}
