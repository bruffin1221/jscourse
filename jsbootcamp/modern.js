class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

}

let xavien = new Person("Xavien", "Ruffin", 11)
console.log(xavien)
    
class Pet{
    constructor(animal, name, owner){
        this.animal = animal
        this.name = name
        this.owner  = owner
    }
}

let marmaduke = new Pet("dog", "marmaduke", "Sue Ann")
console.log(marmaduke)





// function Person(firstName, lastName, age){
//     this.firstName = firstName
//     this.LastName = lastName
//     this.age = age
// }

// let bruce = new Person("Bruce", "Ruffin", 45)
// let karla = new Person("Karla", "Ruffin",  40)

// console.log(bruce)
// console.log(karla)

// function Animal(name, location){
//     this.name = name
//     this.location = location
// }

// let elephant = new Animal("elephant", "India")
// console.log(elephant)

// let family = new Set()
// family.add(["Bruce Ruffin", "Gladys Ruffin", "Brandon Ruffin", "Joshua Ruffin"])

// // let myFamily = Array.from(family)
// // console.log(myFamily[1])

// let objFamily = new Set()
// objFamily.add({
//     father: "Bruce Ruffin", 
//     mother: "Glady Ruffin",
//     children: ["DeWayne", "Michael", "Brandon", "Joshua"]
// })
// // console.log(objFamily)

// for(let value of objFamily.entries()){
//     console.log(value)
// }


// let family = new Map()
// family.set("father", "Bruce Ruffin")
// family.set("mother", "Gladys Ruffin")
// family.set("children", ["Brandon", "Michael", "DeWayne", "Joshua"])

// family.forEach((key, value)=>{
//     console.log(`${key} ${value}`)
// })

// for(let key of family.keys()){
//     console.log(key)
// }

// for(let value of family.values()){
//     console.log(value)
// } 

// for(let arr of family.entries()){
//     console.log(arr)
// }

// let myFamily = new Map([
//     ["mother", "Karla Ruffin"],
//     ["father", "Bruce Ruffin"],
//     ["son","Xavien Ruffin"]
// ])
// console.log(myFamily.get("mother"))




// let family=["Bruce Ruffin", "Gladys Ruffin", "DeWayne Ruffin", "Michael Ruffin", "Brandon Ruffin", "Joshua Ruffin"]
// let[father,, oldestSon] = family
// console.log(father, oldestSon)
// let family =(lastName, ...names)=>{
    
//     names.forEach(name=> console.log(`${name} ${lastName}`))
// }


// family("Ruffin", "Karla", "Bruce", "Xavien")

// let sum = (x, y, ...num) =>{ 
//     let number = num.reduce((previous, current) => previous + current)
//     z = x + y + number
//     console.log(z)
// }

// sum(1, 2, 100, 200, 7)

// var lis = document.querySelectorAll("ul li")
// console.log(lis)

// var lisArr = Array.from(lis)
// lisArr.forEach(li => li.addEventListener("click", (e)=>
//     e.target.classList.toggle("white")))

// for(let li of lis){
//     li.addEventListener("click", () =>{
//         li.classList.toggle("white")
//     })
// }


// let person = (name="John Smith", profession = "nurse") => `${name} is a ${profession}`

// console.log(person("Xavien Ruffin", "football player"))
// console.log(person("Bruce Ruffin", "piece of shit"))



// let add = (x, y)=> x+y
// console.log(add(10, 20))

// let avg = (num1, num2, num3, x) => {
//     total = num1 + num2 +num3

//     return total/x
// }

// console.log(avg(20, 40, 30, 3))





// let  multiply = (x, y)=> x * y
// console.log(multiply(10, 5))

// let fullName = (firstName, lastName)=>`${firstName} ${lastName}`
// console.log(fullName("Xavien", "Ruffin"))

// let divide = x => x/2

// console.log(divide(20))

// function person(firstName, lastName, age){
//     console.log(`${firstName} ${lastName} is ${age} years old  `)
// }

// person("Xavien", "Ruffin", 8)

// function grade(person, age){
//     if(age< 10 ){
//         console.log(`${person} is in elementary school`)
//     }else if(age<14){
//         console.log(`${person} is in junior high`)
//     }else if(age<18){
//         console.log(`${person} is in high school`)
//     }else{
//         console.log(`${person} is not in school`)
//     }
// }

// grade("John", 15)
// grade("Ashley", 12)
// grade("Stacy", 30)




// var mathClass=[
//     {firstName: "John", lastName: "Wilson", class: "Algebra", grade: 6},
//     {firstName: "Stacy", lastName: "Sweat", class: "Pre-Calc", grade: 8},
//     {firstName: "Earl", lastName: "Weaver", class: "Statistics", grade: 7},
//     {firstName: "Mitchell", lastName: "Granger", class: "Geometry", grade: 7},
//     {firstName: "Grace", lastName: "Petra", class: "Algebra", grade:8},
//     {firstName: "Sean", lastName: "Orr", class: "Statistics", grade: 6},
//     {firstName: "Anna", lastName: "Briar", class: "Geometry", grade: 7},
//     {firstName: "Kacy", lastName: "Smith", class: "Pre-Calc", grade: 8},
//     {firstName: "Bryan", lastName: "Davis", class: "Statistics", grade: 7},
//     {firstName: "Manuel", lastName: "Garcia", class: "Geometry", grade: 6},
//     {firstName: "Bobby", lastName: "Brown", class: "Pre-Calc", grade: 6},
// ]

// let [firstStudent] = mathClass
// let {firstName, lastName} = firstStudent
// console.log(`${firstName} ${lastName}`)

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach(number=> console.log(number))

// console.log('--------------')

// let lessThan8 = numbers.filter(number=> number < 8)
// console.log(lessThan8)

// let geo = mathClass.filter(math=>math.class==="Geometry")
// let geoName = geo.map(name=> `${name.firstName} ${name.lastName}`)
// console.log(geoName)


// mathClass.forEach(function(e){
//     console.log(e.lastName)
// })

// number.forEach(function(e){

//     if(e>2){
//         console.log(e)
//     }
// })
// console.log("++++++++++++++")


// number.forEach(function(e){

//     if(e<=2){
//         console.log(e)
//     }
// })


// console.log("++++++++++++++")

// var grade8 = mathClass.map(function(e){
//         return e.firstName
// })

// console.log(grade8)
// console.log("++++++++++++++")

// var grade = mathClass.map(function(e){
//     return e.firstName + " " + e.lastName + " is in grade " + 6 
// })

// console.log(grade)

// console.log("--------------------------")

// var newNumber = numbers.filter(function(e){
//     return e>5
// })

// console.log(newNumber)
// console.log("--------------------------")

// var numArr = numbers.filter(function(e){
//     return e<=3
// })

// console.log(numArr)

// console.log("--------------------------")


// var algebra = mathClass.filter(function(e){
//     return e.class === "Algebra" || e.grade===8
// })
// console.log(algebra)

// console.log("--------------------------")

// var algebraNames = algebra.map(function(e){
//     return e.firstName + "  " + e.lastName 
// })

// console.log(algebraNames)

// console.log("--------------------------")


// var algebra5 = mathClass.filter(function(e){
//     return e.grade !==8 && e.class!=="Statistics"
// })
// console.log(algebra5)

// console.log("--------------------------")

// var num1 = numbers.filter(function(e){
//     return e > 2 && e< 9
// })

// console.log(num1)


//  var findStudent = mathClass.find(function(e){
//     return e.grade === 7
//  })

//  console.log(findStudent)

//  console.log("--------------------------")

//  nameClass=[
//     {name:"John Smith", gender: "Male"},
//     {name:"Stacy Johnson ", gender: "Female"},
//     {name:"Brynn Nelson", gender: "Female"},
//     {name:"Michelle Houston", gender: "Female"},
//     {name:"Katy Apple", gender: "Female"},
//     {name:"Frankie Spade", gender: "Female"},
//     {name:"Bille Blakes", gender: "Male"},
//     {name:"Anna Jacobs", gender: "Female"},
//  ]

// //  var x = 0 
// //  var gender = nameClass.every(function(name){

// //     console.log(++x + name.gender)
// //     return name.gender ==="Female"
// //  })


// //  console.log(gender)

//  console.log("--------------------------")
//  var x = 0 
//  var maleGender = nameClass.some(function(e){
//     console.log(++x + e.gender)
//     return e.gender ==="Male"
//  })

//  console.log(maleGender)