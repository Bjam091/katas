let repeatNumbers = function(data){
  let resultArr = [];
for (let i = 0; i < data.length; i++){
  let result = "";
  for (let b = 0; b < data[i][1]; b++){
    result += data[i][0];
  }
resultArr.push(result)  
}
return resultArr.join(", ")
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));