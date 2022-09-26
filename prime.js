function checkPrime(num){
 let count = 0;

 for (let i = 2;i<=num**0.5;i++){
   if(num%i==0){
    count++;
   }
 } 
 return count;
}  
let ans=checkPrime(7); 
if (checkPrime>0){
 console.log("Prime");
} else { 
 console.log("NaN");