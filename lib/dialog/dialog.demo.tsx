import DialogExample1 from "./dialog.example.1"
import React,{Fragment}  from 'react'
import Demo from "../../demo"
import DialogExample2 from "./dialog.example.2"


const DialogDemo = ()=>{
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./dialog.example.1.tsx').default}>
        <DialogExample1/>
      </Demo>
      <Demo code={require('!!raw-loader!./dialog.example.2.tsx').default}>
        <DialogExample2/>
      </Demo>
    </Fragment>
  )
}



export default DialogDemo