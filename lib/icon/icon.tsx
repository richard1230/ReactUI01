import React from 'react';
import './importicons';//importIcons作用:导入所有svg,没有它不行
import './icon.scss';
import classes from '../helpers/classes';


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
  const {className, name, ...restProps} = props;
  return (
    //这里的classes是解决命名className的问题
    <svg className={classes('fui-icon', className)}
         {...restProps}//这里的属性其实是包含各种各样的事件处理函数的
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};


export default Icon;