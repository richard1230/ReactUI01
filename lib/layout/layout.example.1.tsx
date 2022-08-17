import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.example.scss';

const LayoutExample1 =   () => {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{height: 500, width: 500}} className="hi">
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
    </div>
  );
}

export default LayoutExample1


