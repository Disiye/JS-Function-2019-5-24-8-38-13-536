function palindRome(str){
  var len = str.length;
  for(var i = 0; i < len; i++){
    if(str.charAt(i) == str.charAt(len-1-i)){
      console.log("true")
    }else{
      console.log("false")
    }
  } 
}
