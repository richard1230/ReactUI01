import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';

import ButtonExample from './lib/button.example';
import {Aside, Content, Footer, Header, Layout} from './lib/layout/layout';
import './example.scss';
import {Icon} from "./lib";
import DialogDemo from "./lib/dialog/dialog.demo";
import LayoutDemo from "./lib/layout/layout.demo";


// Router报红没有关系
// @ts-ignore
ReactDOM.render(
  <Router>
    <Layout className="site-page"  >
      <Header className="site-header"  >
        <div className="logo">
          {/*<img src={require('./logo.png').default} width="45" height="45" alt=""/>*/}
          <Icon name="xue"/>
          <span> RUI </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside" >
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            {/*<li>*/}
            {/*  <NavLink to="/button">Button</NavLink>*/}
            {/*</li>*/}
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">
                Layout
              </NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogDemo}/>
          <Route path="/layout" component={LayoutDemo}/>
        </Content>
      </Layout>
      <Footer className="site-footer" >
        &copy; Richard Hu
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root')
 );