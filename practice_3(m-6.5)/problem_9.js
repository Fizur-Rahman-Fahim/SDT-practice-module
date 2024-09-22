const prompt = require("prompt-sync")();
var array = [];
var livingCost ;
var totalIncome = 0;



for( let i = 0; i <array.length; i++ )
{
    if( array[i] < 3000)
    {
        totalIncome += array[i];
    }
    else
    {
        totalIncome += (array[i] - (array[i]* 0.2));
    }
}

const savings = totalIncome - livingCost;

if (savings >= 0){
    console.log(savings);
}
   
else{
    console.log('"earn more"');
}