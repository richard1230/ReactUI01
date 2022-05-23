function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
  // return names.filter(v=>v).join(' ');
  //这个filter所要解决的问题:
  //['1',undefined].join(' ') ====> '1 '  ====> 1后面多了个空格 ====>除去空格
}


export default classes;