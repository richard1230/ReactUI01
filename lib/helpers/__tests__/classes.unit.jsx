import classes from '../classes';


describe('test classes',()=>{
  it('输入为a的话,应该接收: a ',()=>{
        const result = classes('a')
        expect(result).toEqual('a')
  });
  it('接受 2 个 className: a b -----> 结果是 a空格b',()=>{
      const result = classes('a','b')
      expect(result).toEqual('a b')
    }
  );
  it(
    '输入 a undefined ---> 结果应该是 a',()=>{
      const  result = classes('a',undefined)
      expect(result).toEqual('a')
    }
  )
  it('接受各种奇怪值', () => {
    const result = classes(
      'a', undefined, '中文',false,null
    )
    expect(result).toEqual('a 中文')
  })
  it('接受 0 个参数', () => {
    const result = classes()
    expect(result).toEqual('')
  })

})