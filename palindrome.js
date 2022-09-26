let str = "racecar";
function checkPalindrome(str){
 let bag = "";
 for (let i = str.length;i>=0;i++){
   bag+=str[i];
  }
  return bag;
}  
let ans=checkPalindrome()
if(str==ans){
 console.log("Yes");
else {
 console.log("No");