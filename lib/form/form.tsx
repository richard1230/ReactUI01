import * as React from 'react';
import {ReactFragment} from 'react';
import Input from '../input/input';
import './form.scss'
import classes from '../helpers/classes';

export interface FormValue {
  [K: string]: any;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };

}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value}//name是变量,...formData表示之前的变量,[name]: value表示新的变量
    props.onChange(newFormValue)
  }
  return (
    <form onSubmit={onSubmit}>
      <table className="fui-form-table">
        <tbody>

      {
        props.fields.map(f =>
          <tr className={classes('fui-form-tr')}  key={f.name}>
            {/*下面的这个td包含的是标签:你的用户名,密码*/}
            <td className='fui-form-td'>
              <span className='fui-form-label'>
                {f.label}
              </span>
            </td>
            {/*下面的这个td包含的标签:两个输入框*/}
            <td className='fui-form-td'>
              <Input className="fui-form-input"
                     type={f.input.type}
                     value={formData[f.name]}
                //这个函数是为了: 你输入数据,input那个数据框里面能够同步接受到数据
                     onChange={(e) => onInputChange(f.name, e.target.value)}
              />
              <div className='fui-form-error'>
                {props.errors[f.name]}
              </div>
            </td>
          </tr>)
      }
      {/*//这个地方单独的那个td保证了button与上面的两个input对齐*/}
      <tr className="fui-form-tr">
        {/*单独的这个td*/}
        <td className="fui-form-td"/>
        {/*下面这个td包含了两个button*/}
        <td className="fui-form-td">
          {props.buttons}
        </td>
      </tr>
        </tbody>
      </table>
    </form>
  );
};


export default Form;


/*
* form与input是黄金搭档
* input里面的type有两个类型 text | password;
* 名字和值(value,可以不写) 是 提交数据需要注意的两大属性
*
*        example.tsx中:
*        <NavLink to="/form"> 与  <Route path="/form"    component={FormDemo}/>
         中的path要一致


表单设计准则:  Errors = 数据＋准则(rules),就是要有验证器
提交(onSubmit)之后会有一个验证函数
*
用户输入===>触发onChange===> 而后提交,就会submit===>提交校验(是否为空,长度,格式)===>得到错误(在提交函数里面),setError==>errors回传给表单(example里面的Form通过errors函数传给Form组件中的form,),Form组件是最底层的子组件了，这里可以通过props来展现具体属性(错误可以通过属性来展现)==>用户输入...

*
* */



