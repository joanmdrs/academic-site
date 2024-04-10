'use client'
import Head from 'next/head';
import React from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Footer } from 'antd/es/layout/layout';
import Home from '@/pages/Home/Home';
import Courses from '@/pages/Courses/Courses';
import Reasons from '@/pages/Reasons/Reasons';
import Feedback from '@/pages/Feedback/FeedBack';
import About from '@/pages/About/About';
import Contact from '@/pages/Contact/Contact';
import Dashboard from '@/pages/Dashboard/Dashboard';
import CustomHeader from '@/components/Header/Header';

function App() {
    return (
        <div>
            <Head>
                <title>WEBSITE FOR ENTERPRISE</title>

            </Head>
            
            <Layout>
                
                <CustomHeader />
                
                <Content style={{zIndex: '2'}}>
                    <Home />
                    <Dashboard />
                    <Reasons />
                    <Courses />
                    <Feedback />
                    <About />
                    <Contact />
                </Content>

                <Footer>

                </Footer>
            </Layout>
        </div>
    );
}

export default App;
