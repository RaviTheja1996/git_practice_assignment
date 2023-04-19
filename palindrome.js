
let str = "121";

let start = 0;
let end = str.length - 1;

let flag = true;

while (start <= end) {
  if (str[start] !== str[end]) {
    flag = false; 
    break;
  }
  
  start++;
  end--;
}

if (flag) {
  console.log(str," is a palindrome.");
} else {
  console.log(str," is not a palindrome.");
}
