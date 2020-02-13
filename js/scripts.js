var bmi = function(weight, height) {
  return weight / height;
};
var weight = prompt("Enter your weight(ks):");
var height = prompt("Enter your height(cm):");
var result = bmi(weight, height);
if (result<18.5){
alert("results"+ result +"underweight");
}
