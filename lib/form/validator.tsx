import {FormValue} from './form';


interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}


type FormRules = Array<FormRule>

function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

interface FormErrors {
  [K: string]: string[];
}


const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};

  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
    console.log("============================")
    console.log('errors[key]:')//['太短']
                               //['太短', '格式不正确']
                               //['必填']
    console.log(errors[key])
  };

  rules.map(rule => {
      const value = formValue[rule.key];
      if (rule.required && isEmpty(value)) {
        addError(rule.key, '必填');
      }

      if (rule.minLength && !isEmpty(value) && value!.length < rule.minLength) {
        addError(rule.key, '太短');
      }

      if (rule.maxLength && !isEmpty(value) && value!.length > rule.maxLength) {
        addError(rule.key, '太长');
      }

      if (rule.pattern) {
        if (!(rule.pattern.test(value))) {
          addError(rule.key, '格式不正确');
        }
      }
    }
  );
  return errors;
};

export default Validator;
