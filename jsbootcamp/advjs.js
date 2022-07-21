var add= function(x, y){
    z = x+y
   return z
}

add(3, 2)

var mulitply = function(w){
    answer = z * w
    console.log(answer)
}

mulitply.call(add, 10)

var son ={
    firstName: "Xavien",
    lastName: "Ruffin",
    mySon: function(){
        return `${this.firstName} ${this.lastName} is my son.`
    }

}

var schoolWork= function(grades, score){
    console.log(`${this.firstName} ${this.lastName} has a ${grades} with a score of ${score}`)
}
schoolWork.apply(son, ["A", 94])


var child =function(firstName, lastName){
    fullName = `${firstName} ${lastName}`
    return fullName 
}

child("Anam", "Aziz")

var parents = function(first, last){

    console.log(`${fullName}'s parent is ${first} ${last}`)

}

parents.apply(child,["John", "Sununu"])
parents.call(child, "Bue", "Buell")
var kidP = parents.bind(child)
kidP( "Minerva","McCall")


// (function(daughter){
//     console.log(`${daughter} is my daughter`)
// }("Stacy"))
// function exerciseIn(num){
//     if(num>= 8){
//         return function(name){
//             console.log(`${name}, you are working extremely hard. Nice job`)}
//         }else if(num>= 5){
//             return function(name){
//                 console.log(`${name}, you are working hard. Keep it up.`)
//             }
//         }else if(num>=2){
//             return function(name){
//                 console.log(`${name}, is warming-up. Ready to go hard`)
//             }
//         }else{
//             return function(name){
//                 console.log(`${name} is resting.`)
//             }
//         }
// }

// exerciseIn(7)("John")

// exerciseIn(1)("Jane")




// var temps = [90, 89, 77,85, 80]

// function hot(arr, fn){
//     var newArr = []
//     for (var i = 0; i< arr.length; i++){
//         newArr.push(fn(arr[i]))
//     }
//     return newArr
// }

// function superHot(temps){
//     return temps >= 80
// }

// console.log(hot(temps, superHot))

// var johnScores=[55, 58, 60, 55, 60, 65, 60]

// function addScores(arr){
  
//    var halfScore = johnScores[0]+johnScores[1]+johnScores[2]
//    var totalScore = halfScore + johnScores[3]+johnScores[4]+johnScores[5]+johnScores[6]
//       return totalScore
//     }

// function averageScore(){
//    average = addScores()/7
//    return average 
// }

// function grade(){

//    if(averageScore()>=90){
//        console.log("You have an A")
//    }else if(averageScore()>=80){
//     console.log("You have an B")
//    }else if(averageScore()>=70){
//     console.log("You have a C")
//    }else if(averageScore()>=60){
//     console.log("You have a D")
//    }else{
//     console.log("You have a N")}
       
// }
// grade()







// var son = function(){
//     console.log("Xavien Ruffin")
// }
// son()

// var add = function(x, y){
//     console.log(x + y)
    
// }
// add(120, 126)

// var cash = function(name, money){
//     console.log(name +" "+ "has "+ "$"+ money + ".")
// }
// cash("John", 50)

// var multiply = function(x, y, fn){
//     z= x*y
//     console.log(fn(z))
// }

// multiply(11, 4, answer)

// function answer(z){
//     return z + " is the answer."

// }
// var obj1 = Object.create(Object.prototype, {
//     name:{
//         value: "John"
//     },
//     age:{
//         value: 48
//     }
// })
// obj1.name= "John"
// obj1.age = 40
// console.log(obj1)

// function Person(firstName, lastName){
//     this.firstName = firstName
//     this.lastName =  lastName
// }

// Person.prototype.getFullName = function(){
//     return this.firstName + " "+ this.lastName
// }
// Person.prototype.greeting ="Hello from prototype object"

// var person = new Person("Bruce", "Ruffin")
// person.greeting ="Hello from person object"

// var person1 = new Person("Xavien", "Jones")
// person1.greeting ="Hello from person1 object"

// console.log(person.getFullName())
// console.log(person1.getFullName())


// function Classes(firstPeriod, secondPeriod, thirdPeriod){
//     this["1st Period"] = firstPeriod
//     this["2nd Period"] = secondPeriod
//     this["3rd Period"] = thirdPeriod
// }

// Classes.prototype.classes = function(){
//     return `Your classes are ${this['1st Period']}, ${this['2nd Period']}, and  ${this['3rd Period']}.`
// }

// var yourClasses1 = new Classes("Amer. Lit", "Geometry", "Biology I")

// console.log(yourClasses1)
// console.log(yourClasses1.classes())

// function Exercise(bodyPart, name, description){
//     this["Body Part"] = bodyPart 
//     this["Name"] = name
//     this["Description"] = description

// }

// Exercise.prototype.perform= function(sets, reps){
//     return this["Body Part"] +" " +  this["Name"] + " " +  this["Description"] +" " +  sets + " " + reps
// }

// var latP = new Exercise("Back", "Lat Pulldown", "Pull the Bar To the Soulders")
// console.log(latP)
// console.log(latP.perform(3, 10))

// function Singer(name, song, genre){
//     this["Name"] = name
//     this["Song"] = song
//     this["Genre"] = genre

// }

// Singer.prototype.singing = function(){
//     return `The song name is ${this['Song']} by ${this['Name']} and its genre is ${this['Genre']}.`
// }

// var beatIt = new Singer("Michael Jackson", "Beat It", "Pop")
// console.log(beatIt)
// console.log(beatIt.singing())


// function createStudent(firstName, lastName, age){

//     var student ={}
//     student.firstName = firstName
//     student.lastName = lastName
//     student.age = age
//     console.log(student)

// }

// createStudent("Xavien", "Ruffin", 11)
// createStudent("Karla","Ruffin", 13)


// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//  var myFather = new Person("John", "Doe", 50, "blue")
//  console.log(myFather)

//  function Teacher(firstName, lastName, age){
//      this.firstName = firstName
//      this.lastName = lastName
//      this.age = age
//  }

//  var mathTeacher = new Teacher("John", "Brennon", "Math")
//  console.log(mathTeacher)

//  var englishTeacher = new Teacher("Brown", "Mack", "American Literature")
//  console.log(englishTeacher)

// var persons =new Array()
// persons[0]="John Wayne"
// persons[1]="Mel Brooks"
// persons[2]="Mickey Rourke"
// console.log(persons)
// console.log(persons.indexOf("John Wayne"))

// var string = new String("I hate people.")
// console.log(string)
// console.assert(string.indexOf("hate"))