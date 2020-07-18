// feet to mile
function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}


var result=feetToMile(115);
console.log(result); 

// Wood calculator
function woodCalculator(chair,table,bed){
    
    var chairs=chair*1;
    var tables=table*3;
    var beds=bed*5;
    var total=chairs+tables+beds;
    return total;
}
var result=woodCalculator(3,5,5);
console.log(result);

// Brick Calculator
function brickCalculator(building){
    const perFeetBrick=1000;
    if(building<=10){
        var bricknum=building*perFeetBrick*15;
    }
    else if(building>10){
        var bricknum=building*perFeetBrick*12;

    }
    return bricknum;
}
var totalBrick = brickCalculator(12);
console.log(totalBrick);


// tiny Friend
function tinyFriend(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length > array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(tinyFriend('Anisul, ShuroviKa'));