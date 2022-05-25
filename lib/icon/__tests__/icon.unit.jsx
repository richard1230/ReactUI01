import * as render from 'react-test-renderer'
import React from "react";
import Icon from "../icon";
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


Enzyme.configure({adapter: new Adapter()});

describe('icon 组件单元测试: ', () => {
  it('should render successful', function () {
    const json = render.create(<Icon name='alipay'/>).toJSON()
    expect(json).toMatchSnapshot()
  });
  it('onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="alipay" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  });

})