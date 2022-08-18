import React from "react";
import  { modal} from "./dialog";


const  DialogExample2= () => {

  const openModal = () => {
    //函数返回操作这个函数内部变量的api
    //函数返回值是===>操作这个函数内部变量的api
    //modal的返回值是close组件(就是卸载组件，其实就是使得visible为false)
    //注意:这里面的Close()一定要写成箭头函数的形式,直接写为onClick={Close}不行的
    const Close = modal(<h1>hello,this is modal!
      <button onClick={() => {
        Close()
      }}>close</button>
    </h1>);
  }
  return (
    <div>
      <div>
        <h1>example 2</h1>
        <button onClick={openModal}>modal</button>
      </div>

    </div>

  )
}

export default DialogExample2

//这里有个问题,modal以Dialog组件为基础(将Dialog封装了),modal是不好直接点击按钮关闭的
//因为visible在Dialog里面,现在Dialog是以modal的形式出现的,没有visible属性,所以不好关闭按钮
//解决方法:
// 利用 函数返回值是===>操作这个函数内部变量的api