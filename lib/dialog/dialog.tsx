import React, {Fragment, ReactElement, ReactNode} from 'react';
import {Icon} from '../index';
import {scopedClassMaker} from '../helpers/classes';
import ReactDOM from 'react-dom';
import './dialog.scss';


interface Props {
  visible: Boolean;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass;

const Dialog: React.FC<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const result = props.visible ?
    <Fragment>
      {/*使用Fragment可以替换div,但是其又不出现在dom中*/}
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc('')}>
        <div className={sc('close')}
             onClick={onClickClose}
        >
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>
          notice:
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        <footer className={sc('footer')}>
          {
            props.buttons && props.buttons.map((button, index) =>
              React.cloneElement(button, {key: index})
            )
          }{/*React渲染数组的时候需要有key*/}
        </footer>
      </div>
      {/*//react里面只能返回组件或者null,这里加上div就能保证是组件*/}
    </Fragment>
    :
    null;
  return (
    ReactDOM.createPortal(result, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  //这个close组件可以复用
  const close = () => {
    //重新渲染组件，同时改一下visible
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    //从div上面卸载掉这个组件
    ReactDOM.unmountComponentAtNode(div);
    //删除div
    div.remove();
  };
  const component = <Dialog
    visible={true}
    buttons={buttons}
    onClose={() => {
      close();
      afterClose && afterClose();
    }}>
    {content}
  </Dialog>;

  //动态生成组件
  //动态创建div,而后在div里面塞一个组件
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>;
  //函数返回操作这个函数内部的api
  const close = modal(content, [button]);//这里调用了modal组件

};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();//这里复用
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  //函数返回 ===>操作这个函数内部的api
  const close = modal(content, buttons, no);
};


export {modal, alert, confirm};
export default Dialog;

//这里的Dialog是最基础组件,modal以Dialog组件为基础,confirm和alert又以modal为基础
