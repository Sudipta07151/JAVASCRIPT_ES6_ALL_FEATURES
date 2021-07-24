//some
//every

const computerData=require('./data/computersData')
// console.log(computerData)


//traditional approach
var allComputerCanRunProgram=true;
var onlySomeComputerCanRunProgram=false;


for(var i=0;i<computerData.length;i++)
{
    if(computerData.ram<16)
    {
        allComputerCanRunProgram=false;
    }
    else{
        onlySomeComputerCanRunProgram=true;
    }
}

console.log(allComputerCanRunProgram)
console.log(onlySomeComputerCanRunProgram)

//every helper

const allCanRun=computerData.every(function(computer){
   return computer.ram>12 
})

console.log(allCanRun)

//some helper

const someCanRun=computerData.some(function(computer){
    return computer.ram>12 
 })
 
 console.log(someCanRun)


 //example

 var players = [
    { name: 'Laporte', pos: 'CB', con: 'ESP' },
    { name: 'Olmo', pos: 'AMF', con: 'ESP' },
    { name: 'Pedri', pos: 'CMF', con: 'ESP' },
    { name: 'Rodri', pos: 'DMF', con: 'ESP' },
    { name: 'Bunnucci', pos: 'CB', con: 'ITA' }
 ]

every_name=players.every(player=>player.name.length>5)

some_name=players.some(player=>player.name.length>5)


console.log(every_name)
console.log(some_name)



