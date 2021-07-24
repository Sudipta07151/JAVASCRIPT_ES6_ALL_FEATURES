//forEach

var names=["Eric","Elisabeth","Kathy","Bert"];

//previously
for (var i = 0; i < names.length;i++)
{
  console.log(names[i]);
}

// with array method (normal function)
names.forEach(function(name){
  console.log(name);
});


//arrow funntion
names.forEach(name=>console.log(name));

//a short exercise

//create an array of numbers
numbers=[1,4,3,5,6]

//create a varaible to hold the sum
var sum=0;
var sum2=0;
var sum3=0;

//loop over the array, invrementing the sum variable
numbers.forEach(num=>sum+=num)

//or
numbers.forEach(function(num){
  return sum2+=num;
})

//

function sumAllNum(num){
  sum3+=num;
}
numbers.forEach(sumAllNum)


//print sum variable
console.log(sum)
console.log(sum2)
console.log(sum3)
