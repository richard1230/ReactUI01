import ReactDOM from 'react-dom';
import React from 'react'
import Icon from './icon/icon';


const fn = () => { 
    console.log("this is fn ")
}

ReactDOM.render(
    <div>
        {/* <Icon name='wechat' />
        <Icon name='alipay' /> */}
        <Icon name='qq' onClick={fn}/>
    </div>,

    document.querySelector('#root')
    // document.getElementById('app')
)


