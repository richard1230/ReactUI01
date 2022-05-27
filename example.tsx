import React from 'react';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';



// Router报红没有关系
// @ts-ignore
ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          RUI
        </div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root')
 );