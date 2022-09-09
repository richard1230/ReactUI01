import * as React from 'react';
import Form, {FormValue} from './form';
import {useState, Fragment} from 'react';
import Validator from './validator';
import Button from '../button/button';


const FormExample: React.FunctionComponent = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState<FormValue>({
    username: 'richard',
    password: ''
  });

  const [fields] = useState([
    {name: 'username', label: '你的用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {
        key: 'username',
        required: true
      },
      {
        key:'username',
        minLength:8,maxLength:16
      },
      {
        key: 'username',
        pattern:/^[A-Za-z0-9]$/
      },
      {
        key: 'password',
        required: true
      }
    ];
    const errors = Validator(formData, rules);
    setErrors(errors)

    console.log('this is error:'+errors);
  };
  return (
    <Form value={formData}
          fields={fields}
          buttons={
            <Fragment>
              <Button type="submit">提交</Button>
              <Button>返回</Button>
            </Fragment>
          }
          onSubmit={onSubmit}
          onChange={(NewValue) => setFormData(NewValue)}
          errors={errors}
    />
  );
};


export default FormExample;