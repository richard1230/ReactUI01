import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon/icon';


const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(
  <div>
    {/* <Icon name='wechat' />
        <Icon name='alipay' /> */}
    <Icon name="qq"
          // className='qwert'
          onClick={fn}
          onMouseEnter={() => console.log('i am entering')}
          onMouseLeave={() => console.log('i am leaving')}
    />
  </div>,

  document.querySelector('#root')
  // document.getElementById('app')
);


