var arr = ["LeeDong", "Nathen", "Yui", "Aei", "Hannah"];
console.log(typeof arr);

// 在array末端加入
arr.push("Jack");
console.log(arr);

// 在array最前加入
arr.unshift("LOL");
console.log(arr);

// 移除最後者
arr.pop();
console.log(arr);

// 移除最前者
arr.shift();
console.log(arr);

// 在(目標起算點,刪除多少數量的元素,(替代元素))
arr.splice(2, 0, "Yee");
console.log(arr);
arr.splice(2, 1);
console.log(arr);

// 資料反轉
arr.reverse();
console.log(arr);

var arr2 = ["GodJJ", "Stanley", "Uzra"];

// 將arr2併入arr1
var newArr = arr.concat(arr2);
console.log(newArr);

console.log(newArr.length);

// for

// 不要再迴圈內寫匿名函式
function changeSize(i) {
  // 此處可用this，但this會隨執行階段有不同結果，故不建議使用
  // this.target.style.fontSize = '50px';
  i.target.style.fontSize = "150%";
}
var BTN = document.getElementsByClassName("btn");
for (var i = 0; i < BTN.length; i++) {
  BTN[i].addEventListener("click", changeSize);
}
