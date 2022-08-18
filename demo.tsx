import * as React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import {useState} from 'react';


interface Props {
  code: string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
      )}
    </Highlight>
  );
  return (
    <div>
      <div className="example">
        {props.children}
      </div>
      <div>
        <button onClick={() => setCodeVisible(!codeVisible)}>查看代码</button>
        {codeVisible && code}
      </div>
    </div>
  );
};

export default Demo;

//demo作为一个公共组件导出(可以将其看为父组件--->有对应的属性,这里为code)
//但是这里的父组件demo用到一个事件处理函数setCodeVisible
//实现展示源代码逻辑:
//用Demo(父组件) 包裹其他的组件(LayoutExample/IconExample)等
//利用 code={require('!!raw-loader!./layout.example.4.tsx').default}
//code={require('!!raw-loader!./icon.example.1.tsx').default  来展示源代码
// $yarn add -D raw-loader
// $yarn add -D prism-react-renderer
