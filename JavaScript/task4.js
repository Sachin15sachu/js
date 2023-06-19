// function Get_NationBird()
// {
//  var national_Bird='Peocock';
//  return'Peacock';
// }
// console.log(Get_NationBird());

// function greet() 
// {
//     return "Hello! Have a nice day";
// }
// console.log(greet())

// function integers (x, y) {
//     if (x == y) {
//       return 1 * (x + y);
//       } 
//      else
//      {
//       return (x + y);
//      }
//    }
//   console.log(integers(10, 200));

// function two_Integers(num1,num2)
// {
//     let integers=(num1+num2)/2
//     return "The Average number is :"+ integers;
// }
// console.log(two_Integers(4,2));
var num1=10;
var num2=20;
var num3=50;
function findLargest(num1, num2, num3) 
{
  if(num1 > num2 && num1 > num3){
    console.log(`${num1} is the largest number`)
  }
  else if (num2 < num3){
    console.log(`${num2} is the largest number`)
  }
  else{
    console.log(`${num3} is the largest number`)
  }
}
findLargest()