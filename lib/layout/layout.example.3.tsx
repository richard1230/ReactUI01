import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';

const LayoutExample3 =   () =>{
  return (
    <div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{height: 500, width: 500}} className="hi">
          <Header className="x">header</Header>
          <Layout>
            <Content className="y">content</Content>
            <Aside className="z">aside</Aside>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
    </div>
  );
}

export default LayoutExample3