var welcome = "Hello"
console.log("Hello");
var a =4;
var b= 5;
var c= b-a;

console.log(a>b);

console.log(a>b || c<a );
var gender = prompt("please enter your gender");
if(gender == "female")
{
    alert("you entered female");
    document.write("you are female visitor")
}
else if(gender == "male")
{
   alert("you entered male");
   document.write("you are male visitor")

}
else 
{
    alert("No match");
}