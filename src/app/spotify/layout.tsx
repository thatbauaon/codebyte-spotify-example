'use client';

import React, { useState } from 'react';

import { Flex, Splitter, Layout, theme } from 'antd';
import BtnPlay from './components/footer';
import HeaderComponent from './components/header';
import SplitterFirstComponent from './components/splitter-first-components';
const { Header, Sider, Content, Footer } = Layout;

export default function MemberLayout({ children }: { readonly children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ height: '100vh', overflow: 'hidden' }}>
            <Layout style={{ height: '100vh', overflow: 'hidden' }}>

                <HeaderComponent />

                <Content
                    style={{
                        padding: 4,
                        flex: 1, // ให้ content ขยายเต็มพื้นที่
                        minHeight: 0, // ป้องกันการขยายเกิน
                        background: colorBgContainer,
                        backgroundColor: '#000000'
                    }}
                >

                    <Splitter style={{ height: '100vh', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} >
                        <Splitter.Panel defaultSize="20%" min="18%" max="70%" >
                            <Flex justify="start" align="start" style={{ height: '100%' }} className="bg-[#121212] p-2 rounded-lg pb-200">
                                <SplitterFirstComponent />
                            </Flex>
                        </Splitter.Panel>
                        <Splitter.Panel style={{ overflow: 'auto' }} >
                            {/* <Desc text="Second" /> */}
                            <Flex justify="start" align="start" style={{ height: '100%' }} className="bg-[#121212] p-2 rounded-lg">
                                {/* <SplitterSecondComponent /> */}
                                {children}
                            </Flex>
                        </Splitter.Panel>
                    </Splitter>
                </Content>
                <Footer className="bg-[#000000]">
                    <BtnPlay />
                </Footer>
            </Layout>
        </Layout>
    );
}
