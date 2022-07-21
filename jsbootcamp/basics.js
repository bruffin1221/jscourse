function a(){
    console.log(this)
}
a()
console.log(this)
console.log(window)

var per = {
    firstName: "John",
    lastName:"Smith",
    getFullName: function(){
        console.log(this.firstName+""+this.lastName)
        var that = this
        function greet(){
            console.log("Hi!" +" " + that.firstName)
        }
        greet()
    }
}

var per1={
    firstName: "Jane",
    lastName: "Bone"
}

per1.getFullName= per.getFullName

per.getFullName()
per1.getFullName()

// var date = new Date()
// console.log(date.getMonth() +"/" + date.getDate() + "/" + date.getFullYear())

// var month = date.setMonth(5), newDate = date.setDate(5), year = date.setFullYear(2022)
// console.log("Cinco de Mayo is on ", month, newDate + ". "+  year )


// var family = ["Gladys", "Bruce", "DeWayne", "Michael", "Brandon", "Joshua"]

// var i = 0 

// while (i<= family.length){
    
//     console.log(family[i])
//     i++
   
// }

// var professions =["engineer", "teacher", "nurse", "scientist", "financial advisor"]

// var pro = 0
// while(pro<=professions.length){
//     console.log(professions[pro])
//     pro++
// }


// for(var i = 0; i<family.length; i++){
//     if(family[i]==="DeWayne"){
//         console.log(family[i])
//     }
    
// }

// for(var i = 0; i<family.length; i++){
//     if(family[i]==="Bruce"){
//         console.log(family[i] + " is my Dad.")
//         continue
//     }
//     console.log(family[i])
   
// }



// var i = 5

// while(i<=30){

//     console.log(i)
//     i + 5
// }



// var family = ["Gladys", "Bruce", "DeWayne", "Michael", "Brandon", "Joshua"]



// for(var i = 0; i<family.length; i++){

//     console.log(family[i])
    
// }

// var professions=["teacher", "engineer", "nurse", "secretary", "social worker"]
// for(var i = 0; i<professions.length; i++){

//     console.log(professions[i])
// }


// var newPerson  = {

//     "First Name": "Matthew",
//     "Last Name": "Haynes",
//     "wife": "Wendy",
//      "Age": 30,
//      "Children":{
//          "Oldest": "Mark",
//          "Second": "Michelle",
//          "Third": "Mason"
//      },
//      "Pets":["Fish", "Cat", "Ferret", "Pig"],
//      name: function(firstName, children){

//         console.log(firstName + "'s child's name is", children)
//      }
// }

// console.log(newPerson.name(newPerson["First Name"], newPerson["Children"]["Oldest"]))









// var person = new Object()
// person.fName = "John"
// person.lName = "Brunson"
// person.age = 35
// person.profession = "Engineer"
// person.wife = "LeAnn"
// person.children = new Object()
// person.children.oldest = "Ben"
// person.children.second = "Mary"
// person.children.youngest = "Xavier"
// person.pets = new Array()
// person.pets[0]="turtle"
// person.pets[1] = "dog"
// person.pets[2] = "2 cats"

// console.log(person)

// var person1 = new Object()
// person1.fName = "James"
// person1.lName = "Blair"
// person1.age = 45
// person1.profession = "Math Teacher"
// console.log(person1)

//  var person2 = new Object()
//  person2["First Name"] = "Macy"
//  person2["Last Name"] = "Reece"
//  person2["age"] = 50
//  person2["profession"] = "Secretary"
//  console.log(person2)
 
//  var pets = new Array()
//  pets[0] = "dog"
//  pets[1] = "cats"
//  pets[2]="fish"
//  console.log(pets)
 //  var student2 = new Object()
//  student2["fName"] = "Jokm" 
//  student2["lName"] = "Sweet"
//  student2["age"] = 13
//  student2["grade"]= "7th"
//  student2["teacher"]= "Ms. Sahle"
// console.log(student2)

// function score(name, paper, essay){

//     var z= paper + essay
//     var finalScore =  z/100
//     var finalGrade = finalScore*100
   
//     if(finalGrade>50){
//         console.log(name + " passed the class with a final grade of "+ finalGrade + "%")
//     }else{
//         console.log(name + " failed the class with a final grade of "+ finalGrade + "%")
//     }

// }

// var grade1 = ["John", "Brandon", "Anne", "Bruce", "Kim"]
// // grade1.push("Milo", "Shelby", "Gia", "Holly")
// // grade1.pop()
// // console.log(grade1)
// grade1.unshift("Frank", "Marie","Katia", "Myles")
// // grade1.unshift("Annie","John")
// // grade1.shift()
// console.log(grade1)
// console.log(grade1.indexOf("Kim"))

// score("Ann", 22, 22)
// var sum = function(a, b){
//     console.log(a + b)
// }
// sum(30.34, 18.123)

// var family =["Bruce", 
//              "Michael", 
//              "Joshua",  
//              "DeWayne", 
//              ["Bruce", "Gladys"],
//              function(name){
//                  console.log("Hello "+ name)

//              }
//             ]
// console.log(family[5](family[0]))

// var arr= new Array("Brandon", "Michael", "Xavien", "JN")

// arr[0]="Brandon"

// arr[3]="Lou"

// console.log(arr)

// var klass = new Array("John", "Ryan")
// console.log(klass)



// var a=90, b=80, c=70, d=60, n=50

// var studentScore=99

// if(studentScore>a){
//     console.log("Ypu have a A")
// }else if(studentScore>b){
//     console.log("You have a B")
// }else if(studentScore>c){
//     console.log("You have a C")
// }else if(studentScore>d){
//     console.log("Ypu have a D")
// }else if(studentScore>n){
//     console.log("You have a N")
// }

// function grade(name, studentScore){
//     var a=90, b=80, c=70, d=60, n=50
    
//     if(studentScore>a){
//         console.log(name+ " have a A")
//     }else if(studentScore>b){
//         console.log(name + " have a B")
//     }else if(studentScore>c){
//         console.log(name +" have a C")
//     }else if(studentScore>d){
//         console.log(name + " have a D")
//     }else if(studentScore>n){
//         console.log(name + " have a N")
//     }
// }

// grade("Btry", 55)

// function price(item, price, percentage){

//      var amountOff= price*(percentage/100)
//      var newPrice=price-amountOff

//      console.log("The cost of the "+ item + " is $"+  newPrice)

// }

// price("beanbag", 157, 30)


// function family(name, lastName, family){

//     console.log(name, lastName + " is a member of the "+ family +" family" )
// }

// family("Xavien", "Ruffin", "Ruffin")

// function squareRoot(x){

//     console.log(x*x)

// }

// function testScore( name, score){

//     testPer =  (score/75) * 100
//     console.log(testPer)

//     if(testPer>50){
//         console.log(name + " passed the test with a score of " + testPer)
//     }else{
//         console.log(name + " failed the test with a score of " + testPer)
//     }
// }

// testScore("Mike", 50)
// testScore("Evan", 58)

// function add(x, y, w){
//     z=x+y
//    if (z===w){
//        console.log("They are equal")
//    }else{
//        console.log("They are unequal")
//    }
// }

// add(5,5, 10)

// var multiply = function(x, y){

//     z= x*y
//     console.log(z)
// }

// multiply(4, 4)

// var divide = function(x, y){

//     z= x/y
//     console.log(z)
// }

// divide(50, 10)
   

// if(passExam<nick && passExam<mi ){
//     console.log("You passed the exam")

// var a= 1, b=2, c=5
//  var five = 5, twenty = 20, ten = 10

// console.log(a===a)
// console.log(b != c)
// console.log(a+b < c)

// if(a!=a){

//    console.log("My name is Karla")
// }else{
//     console.log("Xavien is green")
// }

// if(a<b || c>b){
//     console.log("This seems pretty simple")
// }

// if(a+b<c && c===five){
//     console.log("We need this.")
// }

// if(c!=twenty){
//     console.log("They are not equal.")
// }



// var x = 10, y= a+b
// if(a+b<twenty){
//     console.log(twenty + " is bigger than", y)
// }

// var veh = "tractor"

// if(veh==="truck"){
//     console.log(veh + " need to haul stuff")
// } else if(veh=="bike"){
//     console.log(veh + " is fun for exercising")
// }else if(veh=="car"){
//     console.log(veh + " use it for my kids")
// }else{
//     console.log("It is not mine")
// }








// var str1="Karla is my wife",
// str2="Xavien is my son.",
// family="'family' is a group of people living together"

// console.log(str1)
// console.log(str2)
// console.log(family)

// var age=46,
// age2=11.50,
// age3= 11.75

// console.log(age, age2, age3)

// var bruce= 46,
// karla= 46

// console.log(karla<bruce)

// var add= bruce+karla
// console.log(add)



// var equ = five + twenty * ten
// console.log(equ)
// var add= five + twenty
// console.log(add)
// console.log(equ>add)
// console.log((twenty+ten)/five)
// console.log(five * twenty)
// console.log(twenty/five)
// console.log(five-twenty)

 