var addNote = document.getElementById("add-button")
var button = document.getElementById("add-btn")
var ul = document.getElementById("noie-list")


button.addEventListener("click", function(e){
    e.preventDefault()
    var note = e.target.parentNode.parentNode.previousElementSibling
    var ul = note.firstElementChild.nextElementSibling
   
   
    var li = document.createElement("li")
    ul.appendChild(li)

    var p = document.createElement("p")
    p.classList.add("list-item")
    var newNote = document.createTextNode(addNote.value)
    p.appendChild(newNote)
    li.appendChild(p)
   
    trashdiv = document.createElement("div")
    li.appendChild(trashdiv)
    trashdiv.setAttribute("class", "trash")

    editdiv = document.createElement("div")
    li.appendChild(editdiv)
    editdiv.classList.add("edit")
    
    editNotes = document.createElement("input")
    li.appendChild(editNotes)
    editNotes.setAttribute("type", "text")
    editNotes.setAttribute("class", "edit-notes")
    
})

var note = document.querySelector("div#note")
note.addEventListener("click", function(e){

    if (e.target.classList.contains('edit')) {
        var p = e.target.previousElementSibling.previousElementSibling
        var newNote = e.target.nextElementSibling
        p.textContent= newNote.value
        newNote.value=""
      }
    
    if (e.target.classList.contains('trash')){
        var trash = e.target
        var li = e.target.parentElement
        li.remove()
    }
})

var hide = document.getElementById("hide")
hide.addEventListener("click", function(e){

    var noteList = document.querySelector("ul.note-list")
    noteList.classList.toggle("hide")
   
})

var search = document.getElementById("search")

search.addEventListener("input", function(){
   
    var searched = document.querySelector("ul.searched")
    searched.innerHTML =  `<p class="input">${search.value}</p>`
    var input =document.querySelector("p.input")
    var listItem = document.querySelectorAll("p.list-item")
   
   
     for(var i = 0; i<listItem.length; i++){
        
        if(input.classList.contains("input")){ 
            if(search.value===listItem[i].textContent){
                var addLi =listItem[i].parentElement
                var newLi = addLi.cloneNode(true)
                searched.removeChild(searched.firstElementChild)
                searched.appendChild(newLi)

            }
        }
         
     }
   
})

// if(noteList[i].textContent===search.value){
//     console.log(noteList[i].textContent)
// }

search.addEventListener("click", function(e){
    e.preventDefault()

    var p = document.querySelectorAll("p.list-item")
    var li = document.querySelector("ul.searched")
    var ul = document.querySelector("ul.note-list")
    li.removeChild(li.firstElementChild)
    

    for(var i=0; i<p.length; i++){

        if(p[i].classList.contains("list-item")){

            if(search.value === p[i].textContent){
               p2 = p[i].parentElement
               newLi =  p2.cloneNode(true)
               ul.classList.add("hide")
               li.classList.remove("hide")
               li.appendChild(newLi)
                search.value = ""
               
               goBack = document.createElement("p")
               backText = document.createTextNode("Go Back")
               goBack.appendChild(backText)
               li.appendChild(goBack)
               goBack.classList.add("goBack")
               goBack.addEventListener("click", function(e){
                   e.preventDefault()

                   li.removeChild(li.firstElementChild)
                   li.removeChild(li.firstElementChild)

                   ul.classList.remove("hide")

               })

            }}

            else{
                search.innerHTML = " "
            }
    }
  
})
     




// var edit= document.querySelectorAll("div.edit")
// var editNotes= document.querySelectorAll(".edit-notes")
// edit.forEach(function(item){
//     item.addEventListener("click", function(e){


//         console.log(e.target)
//     //   var p = e.target.previousElementSibling.previousElementSibling
//     //   var editN = e.target.nextElementSibling
//     //   p.innerHTML = editN.value
//     //   editN.value =" "

    
//     })
// })



// var liLast = document.querySelector("li:last-child")
    // liLast.innerHTML = annNote
                    //   `<div class="trash"></div>
                    //   <div class="edit"></div>
                    //   <input type="text" class="edit-notes">` 


// var noteManager = document.getElementById("note-manager")

// noteManager.addEventListener("click", function(){
//     var button = document.createElement("button")
//     var clickMe = document.createTextNode("Click Me!")
//     button.appendChild(clickMe)
//     noteManager.appendChild(button)
//     button.setAttribute("style", "background: black; color: white; margin-left: 45%")
// })



// var p = document.createElement("p")
// console.log(p)
// var stuff = document.createTextNode("Some Stuff")
// p.appendChild(stuff)

// var li = document.querySelector("li:first-child")
// console.log(li)
// var edit = li.lastElementChild.previousElementSibling

// li.appendChild(p)
// p.setAttribute("style", "color: blue; transform: translateX(15px); font-size: 200%")
// var  h2 = document.createElement("h2")
// var moreNotes = document.createTextNode("More Notes")
// console.log(h2)
// console.log(h2.appendChild(moreNotes))

// var noteManager = document.getElementById("note-manager")
// noteManager.appendChild(h2)
// h2.setAttribute("style", "text-align: center; color: black; margin-top: 50px")

// var p = document.createElement("p")
// var  anotherN = document.createTextNode("Another Note")
// p.appendChild(p.appendChild(anotherN))
// var li = document.querySelector("li:first-child")
// li.appendChild(p)
// li.setAttribute("style", "text-align: center")

// var li2 = document.querySelector("li:nth-child(2)")
// // console.log(li2.parentNode)
// // console.log(li2.parentElement)
// console.log(li2.childNodes)
// console.log(li2.children)
// console.log(li2.childNodes[3])
// console.log(li2.children[0])

// var li = document.querySelector("li:first-child")
// console.log(li.firstElementChild.nextElementSibling.nextElementSibling)
// console.log(li.lastElementChild.previousElementSibling)

// var edit = li.firstElementChild.nextElementSibling.nextElementSibling
// edit.addEventListener("click", function(){
//     edit.innerHTML = `<h2>I love you!</h2>`
// })
// console.log(li.firstChild.nextSibling)
// console.log(li.firstElementChild)

// var p = li.firstChild.nextSibling

// p.addEventListener("click", colorC)


// function colorC(){
//     p.style.color = "red"
//     p.style.transform = "translateX(50px)"
// }

// var li2 = document.getElementById("list-item")
// var ul = li2.parentNode
// console.log(ul)

// ul.addEventListener("mouseover",function(){ 
    
//     colorC()
//     li2.classList.add("transform")

// })
// addbtn.addEventListener("click", function(e){
//     e.preventDefault()
//     addNote.setAttribute("type", "submit")
//     addNote.setAttribute("value", addNote.value)
// })












// newColor.setAttribute("style", "background: blue")

// var notes = document.querySelector("#notes")
// var noteManager = document.querySelector("#note-manager")
// var p = noteManager.querySelector("p")


// notes.addEventListener("click", function(){
//   var delay = new Date().getTime() + 1000
//   while(new Date() < delay) {}
//   console.log("Click Notes!")
// }, true)

// noteManager.addEventListener("click", function(){
//   var delay = new Date().getTime() + 1000
//   while(new Date() < delay) {}
//   console.log("Click Note Manager!")
 
// }, true)

// p.addEventListener("click", function(){
//   console.log("CLick Paragraph")
// }, true)

// function delayP(){
//   var delay = new Date().getTime() + 1000
//   while(new Date() < delay) {}
//   console.log("from  delay P")
// }

// delayP()

// console.log("Form Global Event")

// var li2 = document.querySelector("li:nth-child(2")
// li2.addEventListener("click", function(){
//   add(4,5)
// })

// function add(x,y){

//   c= x+y
//   li2.innerHTML = c
//   li2.style.color = "green"

// }

// var li = document.getElementById("new-note")

// li.addEventListener("mouseover", function(){
//   multiply(8, 9)
// })

// function multiply(x, y){
//   c= x*y
//   li.innerHTML = c 
// }


 
// var note = document.getElementById("note")


// var noteMan = document.querySelector("#note-manager")
// var p = noteMan.querySelector("p")
// p.onclick = function(){
//     p.className = "transform"
//     p.classList.add("changeFont")
// }





// var li2 = document.querySelector("li:nth-child(2)")
// console.log(li2)

// var p = li2.querySelector("p")
// p.className = "changeBg"
// p.classList.add("transform")


// var li = document.querySelector("li:last-child")
// console.log(li)
// var p2 = li.querySelector("p")
// console.log(p2)
// p2.classList.add("transform")
// p2.classList.add("reverse")
// p2.classList.remove("reverse")

