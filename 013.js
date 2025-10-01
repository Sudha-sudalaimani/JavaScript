//Leap year concept
// divisible by 4 maybe yes
//then check not divisible by 100 thats leap year
//incase divisible by 100 then check divisible by 400 now that is leap year
// now lets see into this code

var year=2016

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("Its a leap year");
        }
        else{
            console.log("Not a leap year");
        }
    }
    else{
        console.log("Leap year")
    }
}else{
    console.log("Not a leeap year");
}

console.log("-----------------------------------------------------------------")
//another way 

let Lyear=1900

if(Lyear%4==0 && Lyear%100!=0 || Lyear%400==0){
    console.log(`${Lyear} is a Leap Year`)
}
else{
    console.log(`${Lyear} Not a Leap year`)
}
