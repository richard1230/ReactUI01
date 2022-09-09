import React from 'react';
import {ButtonHTMLAttributes} from 'react';
import './button.scss';
import classes from '../helpers/classes';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'danger' | 'normal';
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {className, children, level, ...rest} = props;

  return (
    <button
      className={classes('fui-button', `fui-button-${level}`, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

//danger的样式没写
Button.defaultProps={
  level:'normal'
}

export default Button;