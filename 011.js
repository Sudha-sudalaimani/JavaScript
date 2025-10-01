//logical operators
console.log(true && true && false)  // true and true = true // true and false = false both is true the output is true
console.log(true || false) // either one is true output is true 
console.log(!false) //opposite

//Q1
var color="Green"
if(color=="red"){
    console.log("Stop")
}
else if(color=="Yellow"){
    console.log("Be ready")
}
else{
    console.log("Go")
}

//Q2
var season="winter"
if(season=="spring"){
    console.log("Enjoy the blooming flowers")
}
else if(season=="summer"){
    console.log("Have fun is the sun")
}
else if(season=="autumn"){
    console.log("admire the colorful leaves")
}
else{
    console.log("Bundle up and stay warm")
}

//Q3
var score="65"
if (score< 50){
    console.log("You need to improve")
}
else if(score>=50 && score <=70){
    console.log("Good Job")
}
else{
    console.log("Excellent performanmce")
}

//Q4
var num=25
if(num%2==0){
    console.log("Even")
}else{
    console.log("Odd")
}

//Q5
var char="A"
var vowel="aeiouAEIOU"
if(vowel.includes(char)){
    console.log("it is vowel")
}
else{
    console.log("It is consonant")
}
