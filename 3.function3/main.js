function sortString(string){
  var result = string.split("").sort();
  return result.join("");
}
console.log(sortString("hello"));
