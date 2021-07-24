//map

var numbers=[5,2,13];
var squaredNumbers=[];

//without helper function 'map'
for(var i=0;i<numbers.length;i++)
{
  squaredNumbers.push(Math.pow(numbers[i],2));
}
console.log(squaredNumbers)



//using helper function 'map' and anonymous function
var squared=numbers.map(function(num){
  return num*num
})
console.log(squared)

//using helper function 'map' and arror function
var squaredArrow = numbers.map(num=>num * num)
console.log(squaredArrow)


//another example

var players=[
  {name:'Laporte',pos:'CB'},
  {name: 'Olmo', pos:'AMF'},
  {name: 'Pedri', pos:'CMF'},
  {name: 'Rodri', pos:'DMF'}
]

players_names=players.map(player=>player.name)
console.log(players_names)


//another example

function render(player){
  return `${player.name} at ${player.pos} is gonna play for Spain`
}

render_list=players.map(render)
console.log(render_list)
