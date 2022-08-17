import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';

const LayoutExample4 =   () => {
  return (
    <div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{height: 500, width: 500}} className="hi">
          <Aside className="z">aside</Aside>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}

export default LayoutExample4