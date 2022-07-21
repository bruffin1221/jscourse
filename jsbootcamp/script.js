function lGrade(name, grade){

    a = 90
    b = 80
    c = 70
    d = 60
   

    if (grade > a){
        console.log(name + " has an A with a " + grade)
    }else if(grade > b && grade< a){
        console.log(name + " has an B a " + grade)
    }else if(grade > c && grade< b){
        console.log(name + " has an C a " + grade)
    }else if(grade > d && grade < c){
        console.log(name + " has an D a " + grade)
    }else{
        console.log("You have failed")
    }
}

    function calcGrade(quiz, essay){

        var grade = quiz + essay

        return grade
    }
  


lGrade("Brandon", calcGrade(60, 11))

var product = function (a, b){

    console.log(a * b)

}

product(60, 30)

var arr=["Brandon", 
["Lilika", "Nova"],
 "Michael", 
 ["Javon", "Kilea", "Milaya"], 
 "Joshua", 
 "DeWayne",
 ["Xavien, Karla"],

 function (name){

   return "Hello "+ name
 }

]

console.log(arr[7](arr[0]))

var family = new Array("Brandon", "Michael", "Joshue")

console.log(family)
console.log(family[0])


var numbers = [1, 2, 3, 5, 6, 7]

numbers[3] = 4
numbers[4] = 5
numbers[5] = 6

numbers.push(7)
    console.log(numbers)

numbers.unshift(12)
console.log(numbers)

numbers.shift()
console.log(numbers)

console.log(numbers.indexOf(4))

var ruffin = new Object()

ruffin.father= "Bruce"
ruffin.mother = "Gladys"
ruffin.son1 = "DeWayne"

ruffin.son1Family = new Object()
ruffin.son1Family.wife = "Karla"
ruffin.son1Family.son= "Xavien"

ruffin.son2 = "Michael"

ruffin.son2Family = new Object()
ruffin.son2Family.wife = "Misty"
ruffin.son2Family.child1 = "Milaya"
ruffin.son2Family.child2 = "Javon"
ruffin.son2Family.child3 = "Kilea"


ruffin.son3 = "Brandon"

ruffin.son3.family = new Object()


ruffin.son4 = "Joshua"
console.log(ruffin)

var dettwyler = {

    father: "William",
    mother: "Mary",
    child1: "Kelvin",
    child2: "Nancy",
    child3: "Arden",
    child4: "Judy",
      family:{

          husband: "Jim",
          child1: "Annika",
          child2: "Kyle"

      },

      fam: function(dettwylerchild4, familyhusband, familyChild1, familyChild2){

        console.log(dettwylerchild4 + "'s family is " + familyhusband + ", "+  familyChild1 + ", and " + familyChild2 +".")
      } 


}

console.log(dettwyler.fam(dettwyler.child4, dettwyler.family.husband, dettwyler. family.child1, dettwyler.family.child2))






