var str = "hello";
function reverseString(str){
  var result = "";
  for(var i = str.length; i > 0; i--){
    result = result + str.charAt(i);
  }
  return result;
}
document.write(reverseString(str));
