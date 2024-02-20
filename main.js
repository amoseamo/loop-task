//1. Print Even number upto 50.

var i;
var x =50;
for (i=1;i<=x;i++)
{
  if(i%2==0){
    console.log(i);
  }
}

// 2. Add 1 to 10.

var n=10;
var sum=0;
var i;
for(i=1;i<=n;i++){
	sum=sum+i;
}
console.log(sum);

//3 reverse order in 100 to 50.

for (let i=100; i>=50; i--){
  console.log(i);
}

//4 Find factorial of the given number.

function factorial(n){
var n;
var fact=1;
while(n>=1){
	fact=fact*n;
	n--;}
	return fact;
}
console.log(factorial + "The factorial of given number is"(5));