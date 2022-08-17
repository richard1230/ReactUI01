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
function scopedClassMaker(prefix: string) {
 return function (name?:string, options?:Options) {
   const result = [prefix,name].filter(Boolean).join('-');
   if (options && options.extra){
     return [result,options && options.extra].filter(Boolean).join(' ');
   }else {
     return result
   }
 }
}


export {scopedClassMaker};
