import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../helpers/classes';



const sc = scopedClassMaker('gu-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
  children: ReactElement | Array<ReactElement>
}


const Layout: React.FunctionComponent<Props> = (props)=>{

  return (
    <div>
      {props.children}
    </div>
  )

}


export default Layout;
