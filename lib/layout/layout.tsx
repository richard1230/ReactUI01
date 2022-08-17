import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import Aside from './aside';



const sc = scopedClassMaker('gu-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
  children: ReactElement | Array<ReactElement>
}


const Layout: React.FunctionComponent<Props> = (props)=>{
    const {className,...rest} = props;
    const children = props.children as Array<ReactElement>;
    //这里是说 div的class(类名)中有Aside这个名字,那么就改变其样式将aside这部分元素放在左边,右边为上中下结构--->查看一下layout.scss即可知道
    const hasAside = 'length' in children && children.reduce((result,node)=> result || node.type === Aside,false)
  return (
    <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  )

}


export default Layout;
export {Layout};
export {default as Header} from './header';
export {default as Content} from './content';
export {default as Footer} from './footer';
export {default as Aside} from './aside';