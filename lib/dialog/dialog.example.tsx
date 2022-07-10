import React, {useState} from 'react';
import Dialog from './dialog';


const DialogExample = ()=>{
    const [x,setX] = useState(false);
  const [y,setY] = useState(false);

  return(
    <div>
      <div>
        <h1>example 1</h1>
        <button onClick={()=>{setX(!x)}}>click</button>
        <Dialog visible={x}
                buttons={
                  [
                    <button onClick={()=>{setX(false)}}>close</button>
                  ]
                }
                onClose={()=>{setX(false)}}
        >
          <strong>hello,this is dialog 1,if you click, here are see</strong>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>

        <button onClick={()=>{setY(!y)}}>click</button>
        <Dialog visible={y}  closeOnClickMask={true}
                buttons={
                  [
                    <button onClick={()=>{setY(false)}}>close</button>
                  ]
                }
                onClose={()=>{setY(false)}}
        >
          <strong>hello,this is dialog 2,if you click, here are see</strong>
        </Dialog>
      </div>
    </div>
    )
}


export default DialogExample;