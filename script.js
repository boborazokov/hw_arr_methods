var text1 = prompt("Array method [ pop , push , shift , unshift , splice ]");
var arr = ["Banana", "Orange", "Apple", "Mango"];
console.log(arr);
if (text1 === "pop") {
  arr.pop();
  console.log(arr);
} else if (text1 === "push") {
  var text2 = prompt("Enter you wont add arr ");
  arr.push(text2);
  console.log(arr);
} else if (text1 === "shift") {
  arr.shift();
  console.log(arr);
} else if (text1 === "unshift") {
  arr.unshift();
  console.log(arr);
} else if (text1 === "splice") {
  var num1 = prompt("enter start delete ");
  var num2 = prompt("enter how many ");
  arr.splice(num1, num2);
  console.log(arr);
}
