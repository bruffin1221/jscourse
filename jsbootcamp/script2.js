var family = ["Brandon", "Michael", "Joshua", "DeWayne", "Ramurru", "Oloushala"]



/*
for(var members = 0;  members<family.length; members++){

    console.log(family[members])


}

*/

/*
for(var members = 0; members<family.length; members++){

    if(family[members]==="DeWayne"){

        console.log(family[members] + " is the oldest")
        continue

    }else if(family[members]==="Michael"){

        console.log(family[members] + " is the second oldest")
        continue

    }else if(family[members]==="Joshua"){

        console.log(family[members] + " is the youngest")
        continue

    }
    console.log(family[members])
}
*/
/*
var i = 5 

while( i>=5 && i<=15){

    console.log(i)
    i++


}
*/
/*
var members = 0

do{

    console.log(family[members])
    members++

}while(members<family.length)
*/
/*
var date = new Date()

console.log(date)
*/

var date = new Date("December 10, 2010 24:00:00" )

var sonDate= date.getDate()
var dateSon= sonDate-1

var sonMonth = date.getMonth()
var monthSon= sonMonth+1

var sonYear = date.getFullYear()
console.log( monthSon+"/"+ sonDate +"/"+ sonYear)

let birthDate= new Date("12/10/2010")
let mySonBirth = birthDate.toLocaleString("en-US",{month: "long"})
console.log(mySonBirth + " " + sonDate + ", " + sonYear )