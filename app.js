function isIsogram(str){
  //...
  let lower = str.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    for (let j = i+1; j < lower.length; j++) {
    if (lower[j] === lower[i]) {
      return false;
      }
    return true;
    };
  };


  function isIsogram(str){
  //...
  str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    for (var j = i; j < str.length; j++) {
    if (j == i) {
      return false;
      }
    else {
      return true;
      }
    };
  }



  console.log(str);
}
