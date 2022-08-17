import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';

const LayoutExample2 =   () => {
  return (
    <div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{height: 500, width: 500}} className="hi">
          <Header className="x">header</Header>
          <Layout>
            <Aside className="z">aside</Aside>
            <Content className="y">content</Content>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>

    </div>
  );
}

export default LayoutExample2