// Code your solution in this file!
//let pickuplocation=50;
function  distanceFromHqInBlocks(pickuplocation)
{
if(pickuplocation> 42 ){
    return  pickuplocation-42;
}else{
    return  42-pickuplocation;
}}
console.log(distanceFromHqInBlocks(pickuplocation));

function distanceFromHqInFeet(numberBlocks){

  return distanceFromHqInBlocks(numberBlocks) * 264;
}
function distanceTravelledInFeet(start, destination) {
return Math.abs(( start-destination)*264);
}


function calculatesFarePrice(start, destination){
if(distanceTravelledInFeet(start, destination)<= 400)
{
return 0;
}
else if (distanceTravelledInFeet(start, destination)>400 && (distanceTravelledInFeet(start, destination)<=2000)){
    return 0.02*(distanceTravelledInFeet(start, destination)-400);

}else if (distanceTravelledInFeet(start, destination)>2000 && (distanceTravelledInFeet(start, destination)<2500)){
      return 25;


}else if(distanceTravelledInFeet(start, destination)>2500 ){

return 'cannot travel that far';
}

}