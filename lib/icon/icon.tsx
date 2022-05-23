import React from 'react';
import './importicons';
import './icon.scss';

//extends React.SVGAttributes<SVGElement> ---> 保证svg有非常多的dom事件处理函数,
// 而不用自己在接口里面一个一个写;
//其实这里的本质是让IconProps继承了React.SVGAttributes这个接口
//React.SVGAttributes这个接口是有非常多的属性的,包括各种事件处理函数
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

//如何申明一个函数组件接受的props类型
//<>：表示FunctionComponent接受一个参数,其源代码里面指明了此参数为p(这里为name),不传的话即为空对象
// interface FunctionComponent<P = {}>
//后面是一个箭头函数,接受的参数是props,返回的是svg组件,
//这里就是说我们自定义的Icon组件就是用svg来替代了,故props其实就是IconProps了
const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className,...restProps} = props;
  return (

    <svg className={`fui-icon ${className}`}
         {...restProps}
    >
      <use xlinkHref={`#${props.name}`}/>
    </svg>


  );
};


export default Icon;