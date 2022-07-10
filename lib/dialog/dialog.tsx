import React, {Fragment, ReactElement, ReactNode} from 'react';
import {Icon} from '../index';
import {scopedClassMaker} from '../helpers/classes';
import ReactDOM from 'react-dom';
import './dialog.scss';


interface Props {
  visible: Boolean;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean
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
  }

  return (
    props.visible ?
      <Fragment>
        {/*使用Fragment可以替换div,但是其又不出现在dom中*/}
        <div className={sc('mask')}  onClick={onClickMask}>
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
      null
  );
};


export default Dialog;