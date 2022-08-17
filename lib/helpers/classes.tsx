function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
  // return names.filter(v=>v).join(' ');
  //这个filter所要解决的问题:
  //['1',undefined].join(' ') ====> '1 '  ====> 1后面多了个空格 ====>除去空格
}


export default classes;

interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}


//高阶函数
const scopedClassMaker =(prefix: string) =>
  (name: string | ClassToggles, options?: Options) =>
    Object
      .entries(name instanceof Object ? name:{[name]:name})
      .filter(k => k[1]!==false)
      .map(kv => kv[0])
      .map(name => [prefix, name]
        .filter(Boolean).join('-'))
      .concat(options && options.extra || [])
      .join(' ');

export  {scopedClassMaker}
