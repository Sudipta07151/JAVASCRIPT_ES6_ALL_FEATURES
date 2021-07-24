//reduce

var numbers = [1, 2, 4, 5, 67, 12, 2]

//using helper

var sum = numbers.reduce((sum, number) => {
  console.log('prev: ',sum,'next:',number,'sum:',sum+number)
  return sum + number;
}, 0)

console.log(sum)

//example

var primaryColors=[
  {color:'red'},
  { color: 'blue' },
  { color: 'yellow' },
  { color: 'orange' }
]

//using reduce to get only color array[not using map]

const colors=primaryColors.reduce((colorArr,colorEl)=>{
  colorArr.push(colorEl.color)
  return colorArr
},[])

console.log(colors)


//find maximum

const max=numbers.reduce((maxVal,next)=>{
  return maxVal > next ? maxVal:next;
},0)

console.log(max)


//balanced parenthesis problem

function balancedParams(string){
  return !string.split("").reduce((counter,char)=>{
    if(counter<0)
    return counter;
    if(char==='(')
    return ++counter;
    if(char===')')
    return --counter;
    return counter;
  },0);
}

console.log(balancedParams("console.log(hello)"))
console.log(balancedParams("console.log)hello("))


