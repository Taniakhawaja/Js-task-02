//exercise 1//
//calculate total cost//

/*function calculateTotalCost(price,quantity){
    let totalCost = price * quantity;
    return totalCost;
}
let price = parseFloat(prompt("enter price:"));
let quantity = parseInt(prompt("Enter Quantity:"));
let result = calculateTotalCost(price,quantity);
console.log("Total Cost:" , result);*/

//exercise2//
//calculate area of triangle//
/*function calculateArea(length,width){
    let area = length * width;
    return area;
}
let length = parseFloat(prompt("enter the length of the triangle:"));
let width = parseFloat(prompt("Enter the width of the triangle:"));
let result = calculateArea(length,width);
alert("The Area of The Triangle is :" +result);*/

//exercise3//
/*function calculateBMI(weight,height) {
    let bmi = weight / (height*height);
    return bmi;
}
let weight = parseFloat(prompt("Please enter your Weight in KG: "));
let height = parseFloat(prompt("Please Enter Your Height in Meters: "));
let  result = calculateBMI(weight,height);
console.log("BMI:" , result);*/

//EXERCISE4//
function calculateTriangleArea(base,height){
    let area = (base * height) / 2;
    return area;
}
let base = parseFloat(prompt( "What is the Base of the Triangle? " ) );
let height = parseFloat(prompt( "enter the height of the triangle"));
let result = 
calculateTriangleArea(base,height);
console.log( "The Area of this Triangle is " + result);