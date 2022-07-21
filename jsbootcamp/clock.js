

function digitalClock(){

    var date = new Date()
 
   
    var dClock= document.getElementById("clock") 
    dClock.innerHTML=  date.toLocaleString("en-US", {weekday: "short"}) + " "+ date.toLocaleTimeString()
   
}
setInterval(digitalClock, 1000)



var students = new Array()

students[0]= new Object()
students[0].name= "John"
students[0].scores1 = 47
students[0].scores2 = 46

students[1] = new Object()
students[1].name = "Bob"
students[1].scores1 = 21
students[1].scores2 = 27

students[2] = new Object()
students[2].name = "Nick"
students[2].scores1 = 45
students[2].scores2 = 35

students[3] = new Object()
students[3].name = "Alex"
students[3].scores1 = 44
students[3].scores2 = 45

students[4] = new Object()
students[4].name = "Shawn"
students[4].scores1 = 40
students[4].scores2 = 32




var degrees=["A", "B", "C", "D", "E"]

var scores = [91, 81, 71, 61, 51]


function studentCalc(index){

    var studentProfile = students[index-1]

    var studentScore= studentProfile.scores1 + studentProfile.scores1
    
    var student=[studentProfile.name, studentScore]

    return student

}


function calcTest(index){

    var student= studentCalc(index)
   console.log(student[1])
    a=91
    b=81
    c=71

    if(a<student[1]){

        console.log(student[0] + "! You recieved A degree.")

    }else if(a>student[1] && b<student[1]){

        console.log(student[0] + "! You recieved B degree.")

    }else if(b>student[1] && c<student[1]){

        console.log(student[0] + "! You recieved C degree.")

    }
    else{
        console.log("No degree!")
    }
    

}

calcTest(5)
/*
function hello(name){
    console.log("Hello" + " "+ name + "!")
}

hello("John")

var helloObj ={

    name: "Karla",
    hello: function(){

        return "hi"
    }
}
*/

function nameA(){
    var name="John"
    nameB()
    console.log(name)
    
    
   
}

/*

function nameB(){
    var name="Alex"
    nameC()
    console.log(name)
   
}

function nameC(){
    var name="Nick"
    console.log(name)
   
}
nameA()
*/
/*
c=10
console.log(c)

function add(){

    c=15
console.log(c)

    function solution(){

        c=20
        console.log(c)
        
       
        
    }

   return solution()
  
}

add()
nameA()
*/
/*
a = 20
b = a
a=10
console.log(a, b)

var c = {

    name: "John"
}
c.name="Nick"
var d=c 

console.log(c, d)
*/
var n ={

    fName: "Karen",
    lName: "Jick",
    fullName: function(){

        var that = this

        function greeting(){
            
            console.log("Hi! " + that.fName)
        }

        greeting()

    }
}

var n1 = {
    fName: "Jane",
    lName: "Doesw",
    
}

n1.fullName = n.fullName
n1.fullName()


/*
function addition(a, b){

    var c= a+b

    function sol(){

        console.log(this)
    }

    return  sol()
}

addition(2, 3)
  */ 



    
