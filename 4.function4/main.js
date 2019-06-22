function countWord(string){
  var count = 0;
  if(!string.isEmpty){
    count = (string.split(' ')).length;
  }
  return count;
}
console.log(countWord("Good morning, I love JavaScript."));
