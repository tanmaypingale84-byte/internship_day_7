console.log("Hello");
console.log("if else condition");

let age = 20;
if (age >= 18) {
    console.log("You are eligible for a driving license.");
}
else{
     console.log("You are not eligible for a driving license.");

}



console.log("multiple condition");

let score= 85;
if (score >= 90)
     {
    console.log("Grade: A");
} 
else if (score >= 80) 
    {
    console.log("Grade: B");
}
 else if (score >= 70) 
    {
    console.log("Grade: C");
} 
else if (score >= 60) 
    {
    console.log("Grade: D");
}

console.log("switch case");

let ch = 't';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(ch + " is a vowel.");
        break;
    default:
        console.log(ch + " is a consonant.");
}
console.log("condition operator");
let age1 = 20;
let status = (age1>=18) ? "You are eligible for a driving license." : "You are not eligible for a driving license.";
{
   console.log(status);
}
console.log("for loop");
for( let i =0; i <= 50; i++){
    if(i%2==0){
        console.log("i =" ,i, "even");
    }
    else{
         console.log("i =" ,i, "odd");

    }
}
console.log("while");
let i =0 ;
while(i <=9){
    console.log("i =",i);
    i++
}
console.log("do while loop");
i = 1;
do{
    console.log("i =",i);
    i++;
} while(i>3)
console.log("break and continue statement")

  for( let i =0;i<=10;i++){
    console.log("i=0",i);
    if(i==4){
        break;
    }

  }  
