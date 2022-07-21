 var quizController =(function(){
   
    function Question(write, options){
        this.write = write
        this.options = options
    }

    var quizQuestion = new Question(write, options)


    return{
        myQuiz: quizQuestion
        

    }

})()


var UIcontroller = (function(){

   var adminItems={
    questionbtn: document.getElementById("create-question"),
    options: document.querySelector("ul#options"),
    createdQuestions: document.querySelector("ol#created-questions"),
    clearList: document.querySelector("button#clear-list")
   }
   
   var takeTest={
    testDisplay:  document.querySelector("div.test")
   }

  

   return{
    admin: adminItems,
    test: takeTest
   }
  
})()

var controller =(function(quizCtrl, UICtrl){
   
    var createbtn = UICtrl.admin
    var questions = quizCtrl.myQuiz
    var test = UICtrl.test
    var quizData = []

    createbtn.clearList.addEventListener("click", function(e){

   
    var element = document.querySelector("ol#created-questions")
     localStorage.removeItem("quizData")

    while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    })

    createbtn.options.addEventListener("click", function(e){
        if(e.target.classList.contains("add")){

            var ulOptions = document.querySelector("ul#options")
            var li = document.createElement("li")
            ulOptions.appendChild(li)
            
            var answers = document.createElement("input")
            answers.setAttribute("type", "radio")
            answers.setAttribute("class", "answer")
            li.appendChild(answers)
            
            var writtenAnswers = document.createElement("input")
            writtenAnswers.setAttribute("type", "text")
            writtenAnswers.setAttribute("class", "written-answers")
            li.appendChild(writtenAnswers)
            
            var addP = document.createElement("p")
            addP.setAttribute("class", "add")
            var addT = document.createTextNode("Add")
            addP.appendChild(addT)
            li.appendChild(addP)
            
            var deleteP = document.createElement("p")
            deleteP.setAttribute("class", "delete")
            var deleteT = document.createTextNode("Delete")
            deleteP.appendChild(deleteT)
            li.appendChild(deleteP)
         }

         if(e.target.classList.contains("delete")){
            var li = e.target.parentElement
            li.remove()}

        })
         
        createbtn.questionbtn.addEventListener("click", function(){
            var quizQuestions = {}
            var answers = []
            
            var li = questions.options.children
            var chooseOptions = Array.from(li)
            for(var i = 0; i<chooseOptions.length; i++){
               {var answer = chooseOptions[i].firstElementChild.nextElementSibling.value
                if(answer !=""){
                answers.push(answer)
                }    

              }

              quizQuestions={
                quizQuestion: questions.write.value,
                optionAn: answers
        }
            }
            quizData.push(quizQuestions)
            localStorage.setItem("quizData", JSON.stringify(quizData))
           
            var ol = document.querySelector("ol#created-questions")
            var oLi = document.createElement("li")
            var theQuestion= document.createTextNode(questions.write.value)
            var editButton = document.createElement("button")
            var edit = document.createTextNode("Edit")
            editButton.setAttribute("class", "edit-question")
              
            oLi.appendChild(theQuestion)
            editButton.appendChild(edit)
            oLi.appendChild(editButton)
            ol.appendChild(oLi)
           
        })
        
        createbtn.createdQuestions.addEventListener("click", function(e){
            
             if(e.target.classList.contains("edit-question")){
               var orderedList = document.querySelector("ol#created-questions")
               var lis = Array.from(orderedList.children)
               var index = lis.indexOf(e.target.parentElement)

               var number = JSON.parse(localStorage.getItem("quizData"))
               var questionNumber = number[index]
              

               orderedList.remove()
               var addedQuest = document.querySelector("div#added-questions")
               var newDiv = document.createElement("div")
               var textArea = document.createElement("textarea")
               var addQuestion = document.createTextNode(questionNumber.quizQuestion)
               textArea.setAttribute("name", "Create-Questions")
               textArea.setAttribute("value", "Write Questions")
               textArea.setAttribute("id", "create")
               textArea.setAttribute("cols", "60")
               textArea.setAttribute("rows", "2")
          
               textArea.style.marginLeft = "85px"
               textArea.style.paddingBottom = "1px"
               textArea.classList.add("white")
              

               textArea.appendChild(addQuestion)
               newDiv.appendChild(textArea)
               addedQuest.appendChild(newDiv)

               var newUl = document.createElement("ul")
               newUl.classList.add("update-options")
               newDiv.appendChild(newUl)
               var newOptions = questionNumber.optionAn
              
              
               for(var i = 0; i<newOptions.length; i++){
                var upLi = document.createElement("li")
                upLi.style.paddingTop = "15px"

                var radioInput = document.createElement("input")
                radioInput.setAttribute("type", "radio")
                radioInput.style.paddingTop = "5px"
                radioInput.classList.add("white")
                upLi.appendChild(radioInput)
               
                var textInput = document.createElement("input") 
                textInput.value = newOptions[i] 
                textInput.setAttribute("type", "text")
                textInput.style.marginLeft = "3px"
                textInput.style.width = "400px"
                textInput.classList.add("white")
                upLi.appendChild(textInput)

                var pAdd = document.createElement("p")
                var addNew = document.createTextNode("Add")
                pAdd.classList.add("addOptions")
                pAdd.appendChild(addNew)
                upLi.appendChild(pAdd)

                var pDelete = document.createElement("p")
                var deleteNew = document.createTextNode("Delete")
                pDelete.classList.add("deleteOptions")
                pDelete.appendChild(deleteNew)
                upLi.appendChild(pDelete)

                newUl.appendChild(upLi)
   
            }

            var updateOptions = document.querySelector("ul.update-options")
            updateOptions.addEventListener("click", function(e){
                if(e.target.classList.contains("addOptions")){
                   var addLi = document.createElement("li")
                   updateOptions.appendChild(addLi)
                   addLi.style.paddingTop = "10px"

                  
                   var radioInput = document.createElement("input")
                   radioInput.setAttribute("type", "radio")
                   radioInput.style.paddingTop = "5px"
                   radioInput.style.marginLeft = "5px"
                   radioInput.classList.add("white")
                   addLi.appendChild(radioInput)
                  
                   var textInput = document.createElement("input")
                   textInput.setAttribute("type", "text")
                   textInput.style.width = "400px"
                   textInput.classList.add("white")
                   addLi.appendChild(textInput)

                   var pAdd = document.createElement("p")
                   var addNew = document.createTextNode("Add")
                   pAdd.classList.add("addOptions")
                   pAdd.appendChild(addNew)
                   addLi.appendChild(pAdd)

                   var pDelete = document.createElement("p")
                   var deleteNew = document.createTextNode("Delete")
                   pDelete.classList.add("deleteOptions")
                   pDelete.appendChild(deleteNew)
                   addLi.appendChild(pDelete)

                }

                if(e.target.classList.contains("deleteOptions")){
                   var deleteLi = e.target.parentElement
                   deleteLi.remove()

                }

            })

            var upButton = document.createElement("button")
            var upInfo = document.createTextNode("Update Question")
            upButton.appendChild(upInfo)
            upButton.classList.add("update-button")
            newDiv.appendChild(upButton)
            var index = lis.indexOf(e.target.parentElement)

            upButton.addEventListener("click", function(e){
                var getTest = JSON.parse(localStorage.getItem("quizData"))
                var testQuestion = document.querySelector("textArea#create.white")
                var testAnswers = document.querySelectorAll("ul.update-options li")
                var updatedAnswers=[]
                for( i=0; i< testAnswers.length; i++){
                    var testAnswer = testAnswers[i].firstElementChild.nextElementSibling
                    updatedAnswers.push(testAnswer.value)
                }
                quizQuestions={
                    quizQuestion: testQuestion.value,
                    optionAn: updatedAnswers
            }
            getTest[index] = quizQuestions
            localStorage.setItem("quizData", JSON.stringify(getTest))
            var upDatedTest = JSON.parse(localStorage.getItem("quizData"))
            
            newDiv.remove()
             var addQuestions = document.querySelector("div#added-questions")
             var ol = document.createElement("ol")
             ol.setAttribute("id", "created-questions")
             addQuestions.appendChild(ol)

             for(var i=0; i<upDatedTest.length; i++){
                var oLi = document.createElement("li")
                var updatedQ = document.createTextNode(upDatedTest[i].quizQuestion)
                oLi.appendChild(updatedQ)
                ol.appendChild(oLi)

                var editButton = document.createElement("button")
                var edit = document.createTextNode("Edit")
                 editButton.setAttribute("class", "edit-question")
                editButton.appendChild(edit)
                oLi.appendChild(editButton)
                

             }
             

            addQuestions.addEventListener("click", function(e){

               if(e.target.classList.contains("edit-question")){
                var number =  JSON.parse(localStorage.getItem("quizData"))
                var editQ = document.querySelectorAll("button.edit-question")
                var editButton = Array.from(editQ)
                var index = editButton.indexOf(e.target)
                var theQuestion = number[index]

                var createdQ = document.querySelector("ol#created-questions")
                createdQ.remove()
                var addDiv = document.createElement("div")
                textArea.setAttribute("name", "Create-Questions")
                var addQ = document.createTextNode(theQuestion.quizQuestion)
                textArea.setAttribute("value", "Write Questions")
                textArea.setAttribute("id", "create")
                textArea.setAttribute("cols", "60")
                textArea.setAttribute("rows", "2")

                textArea.style.marginLeft = "85px"
                textArea.style.paddingBottom = "1px"
                textArea.classList.add("white")

                var hidden = document.createElement("input")
                hidden.setAttribute("type", "hidden")
                hidden.setAttribute("value", index)
                hidden.setAttribute("id", "hidden-value")
                addDiv.appendChild(hidden)

                addDiv.appendChild(textArea)
                addQuestions.appendChild(addDiv)

                var ul = document.createElement("ul")
                ul.classList.add("update-options")
                addDiv.appendChild(ul)

                var optionArray = Array.from(theQuestion.optionAn)
                for(var i = 0; i<optionArray.length; i++){
                    
                    var li = document.createElement("li")
                    ul.appendChild(li)
                    li.style.paddingTop = "20px"

                    var radioInput = document.createElement("input")
                    radioInput.setAttribute("type", "radio")
                    radioInput.style.paddingTop = "5px"
                    radioInput.style.marginLeft = "5px"
                    radioInput.classList.add("white")
                    li.appendChild(radioInput)

                   
                    var textInput = document.createElement("input")
                    textInput.setAttribute("type", "text")
                    textInput.style.width = "400px"
                    textInput.classList.add("white")
                    textInput.value = optionArray[i]
                    li.appendChild(textInput)

                    var pAdd = document.createElement("p")
                    var addNew = document.createTextNode("Add")
                    pAdd.classList.add("addUpOptions")
                    pAdd.appendChild(addNew)
                    li.appendChild(pAdd)

                    var pDelete = document.createElement("p")
                    var deleteNew = document.createTextNode("Delete")
                    pDelete.classList.add("deleteUpOptions")
                    pDelete.appendChild(deleteNew)
                    li.appendChild(pDelete)

                }
                
                var button = document.createElement("button")
                var upInfo = document.createTextNode("Update Question")
                button.appendChild(upInfo)
                button.classList.add("update-button")
                addDiv.appendChild(button)

               }

              if(e.target.classList.contains("addUpOptions")){
               var ul = document.querySelector("ul.update-options")
               var li = document.createElement("li")
                    ul.appendChild(li)
                    li.style.paddingTop = "20px"

                    var radioInput = document.createElement("input")
                    radioInput.setAttribute("type", "radio")
                    radioInput.style.paddingTop = "5px"
                    radioInput.style.marginLeft = "5px"
                    radioInput.classList.add("white")
                    li.appendChild(radioInput)

                   
                    var textInput = document.createElement("input")
                    textInput.setAttribute("type", "text")
                    textInput.style.width = "400px"
                    textInput.classList.add("white")
                    li.appendChild(textInput)

                    var pAdd = document.createElement("p")
                    var addNew = document.createTextNode("Add")
                    pAdd.classList.add("addUpOptions")
                    pAdd.appendChild(addNew)
                    li.appendChild(pAdd)

                    var pDelete = document.createElement("p")
                    var deleteNew = document.createTextNode("Delete")
                    pDelete.classList.add("deleteUpOptions")
                    pDelete.appendChild(deleteNew)
                    li.appendChild(pDelete)


              }

    
              if(e.target.classList.contains("deleteUpOptions")){
                var delLi = e.target.parentElement
                delLi.remove()
              }

              if(e.target.classList.contains("update-button")){
                var getTest = JSON.parse(localStorage.getItem("quizData"))
                var hiddenValue = document.getElementById("hidden-value")
                var li = document.querySelectorAll("ul.update-options li")
                
                var updatedAnswers=[]
                for( i=0; i< li.length; i++){
                    var testAnswer = li[i].firstElementChild.nextElementSibling
                    updatedAnswers.push(testAnswer.value)
                }
                quizQuestions={
                    quizQuestion: textArea.value,
                    optionAn: updatedAnswers
            }
            getTest[hiddenValue.value] = quizQuestions
            localStorage.removeItem("quizData")
            localStorage.setItem("quizData", JSON.stringify(getTest))
            var newQuestions = JSON.parse(localStorage.getItem("quizData"))
             var upDiv = textArea.parentElement
             upDiv.remove()
            
             var upQuestions = document.querySelector("div#added-questions")
             var upDatedOl = document.createElement("ol")
             upDatedOl.setAttribute("id", "created-questions")
             upQuestions.appendChild(upDatedOl)

             for(var i = 0; i<newQuestions.length; i++){
                var updatedOl = document.querySelector("ol#created-questions")
                var li = document.createElement("li")
                var newList = document.createTextNode(newQuestions[i].quizQuestion)
                li.appendChild(newList)
                updatedOl.appendChild(li)

                var editButton = document.createElement("button")
                var edit = document.createTextNode("Edit")
                editButton.setAttribute("class", "edit-question")
                editButton.appendChild(edit)
                li.appendChild(editButton)
             }
                      
              }})

            })
        
        }
    

            
    }) 
    
    var  count= 0

   test.testDisplay.addEventListener("click", function(e){


    if(e.target.classList.contains("start")){
        
       var  myTest=  JSON.parse(localStorage.getItem("quizData"))
       e.target.remove()

       var right = document.querySelector("div#right")
       var rightP = document.createElement("p")
       var numberOfQuestions = document.createTextNode(myTest.length)
       rightP.style.color = "white"
       rightP.style.fontSize = "1000%"
       rightP.style.marginTop = "-10px"
       rightP.style.marginLeft = "30px"
       rightP.appendChild(numberOfQuestions)
       right.appendChild(rightP)

       var index = count + 1
       var left = document.querySelector("div#left")
       var leftP = document.createElement("p")
       var numberQuestions = document.createTextNode(index)
       leftP.style.color = "white"
       leftP.style.fontSize = "1000%"
       leftP.style.marginTop = "-10px"
       leftP.style.marginLeft = "30px"
       leftP.appendChild(numberQuestions)
       left.appendChild(leftP)

       
    //    console.log(index)
    //    console.log(left)

     
       
       var upButton = document.createElement("button")
       var next = document.createTextNode("Next")
       upButton.appendChild(next)
       upButton.classList.add("upbutton")
       test.testDisplay.appendChild(upButton)


       var downButton = document.createElement("button")
       var last = document.createTextNode("Last")
       downButton.appendChild(last)
       downButton.classList.add("downbutton")
       test.testDisplay.appendChild(downButton)


       var zero = myTest[0]
       var one = myTest.indexOf(zero)+1
       var testQuestion = document.createTextNode(myTest[0].quizQuestion)
       var period =  document.createTextNode(".")
       var space =  document.createTextNode(" ")
       numberP = document.createElement("p")
       numberP.classList.add("testParagraph")
       number1 = document.createTextNode(one)

       numberP.appendChild(number1)
       numberP.appendChild(period)
       numberP.appendChild(space)
       numberP.appendChild(testQuestion)
       test.testDisplay.appendChild(numberP)

       var ul = document.createElement("ul")
       ul.classList.add("option-tests")
       test.testDisplay.appendChild(ul)


       for(var i = 0; i< myTest[0].optionAn.length; i++){
          var myOptions = myTest[0].optionAn[i]
          var li = document.createElement("li")
          li.classList.add("options-answers")
          ul.appendChild(li)

          var radioInput = document.createElement("input")
          radioInput.setAttribute("type", "radio")
          radioInput.style.marginLeft = "-25px"
          li.appendChild(radioInput)


          var pOption = document.createElement("p")
          pOption.classList.add("option-answer")
          var pickAnswer = document.createTextNode(myOptions)
          pOption.appendChild(pickAnswer)
          li.appendChild(pOption)
       }

      

    //   )

      
    }

  
   
    if(e.target.classList.contains("upbutton")){
        var  myTest=  JSON.parse(localStorage.getItem("quizData"))
         var p = document.querySelector("p.testParagraph")
         var ul = document.querySelector("ul.option-tests")

         p.remove()
         ul.remove()
         count+=1
       
         var resetP  = document.createElement("p")
         var num = document.createTextNode(count + 1)
         var reSetQuestion = document.createTextNode(myTest[count].quizQuestion)
         var period = document.createTextNode(". ")
         resetP.appendChild(num)
         resetP.appendChild(period)
         resetP.appendChild(reSetQuestion)
         resetP.classList.add("testParagraph")
         test.testDisplay.appendChild(resetP)

         var ulReset = document.createElement("ul")
         ulReset.classList.add("option-tests")
         test.testDisplay.appendChild(ulReset)


        var answerSelection = myTest[count].optionAn
        for(var i = 0; i<answerSelection.length; i++){

            var newLi = document.createElement("li")
            newLi.classList.add("options-answers")
           

            var radioButton = document.createElement("input")
            radioButton.setAttribute("type", "radio")
            radioButton.style.marginLeft = "-25px"

            var optionP = document.createElement("p")
            optionP.classList.add("option-answer")
            var makeSelection = document.createTextNode(answerSelection[i])
            optionP.appendChild(makeSelection)

            newLi.appendChild(radioButton)
            newLi.appendChild(optionP)
            ulReset.appendChild(newLi)
    
        }
        
      var last = myTest[myTest.length-1].quizQuestion
     
       if(myTest[count].quizQuestion===last){
            var nextButton = document.querySelector("button.upbutton")
           
            nextButton.remove()

            var finishButton = document.createElement("button")
            finishButton.classList.add("finish-button")
            var finishtText = document.createTextNode("Finish")
            finishButton.appendChild(finishtText)
            test.testDisplay.appendChild(finishButton)
            
        }
        
        
        // var divLeft = document.querySelector("div#left")
        //  count+1
        // console.log(count+1)
       
        var leftp = document.querySelector("div#left p")
        leftp.remove()

        var left = document.querySelector("div#left")
        var leftP = document.createElement("p")
        var number = document.createTextNode(count + 1)
        leftP.style.color = "white"
        leftP.style.fontSize = "1000%"
        leftP.style.marginTop = "-10px"
        leftP.style.marginLeft = "30px"
        leftP.appendChild(number)
        left.appendChild(leftP)

       
        
        
     
    }
    if(e.target.classList.contains("finish-button")){
        var doneP = document.querySelector("p.testParagraph")
        var doneU = document.querySelector("ul.option-tests")
        var downB = document.querySelector("button.downbutton")
        var finishB = document.querySelector("button.finish-button")

        doneP.remove()
        doneU.remove()
        downB.remove()
        finishB.remove()

        var testComplete = document.createElement("p")
        var testCongratulate =  document.createTextNode("You  Are Finished!")
        testComplete.classList.add("finish-test")
        testComplete.appendChild(testCongratulate)
        test.testDisplay.appendChild(testComplete)

       
   
}

if(e.target.classList.contains("downbutton")){

   var myTest = JSON.parse(localStorage.getItem("quizData"))
  
  
   if(count>=1){
    count-=1
    var index = count+1

    var p = document.querySelector("p.testParagraph")
    var ul = document.querySelector("ul.option-tests")
    p.remove()
    ul.remove()

    var  newP = document.createElement("p")
    newP. classList.add("testParagraph")

    var lastQuestion = document.createTextNode(index + ". " + myTest[count].quizQuestion)
    newP.appendChild(lastQuestion)
    test.testDisplay.appendChild(newP)



    var newUl = document.createElement("ul")
    newUl.classList.add("option-tests")
    test.testDisplay.appendChild(newUl)
    console.log(myTest[count].optionAn)

    for(var i=0; i<myTest[count].optionAn.length; i++){
        var li = document.createElement("li")
        li.classList.add("options-answers")

        var radioButton = document.createElement("input")
        radioButton.setAttribute("type", "radio")
        radioButton.style.marginLeft = "-25px"

        var optionP = document.createElement("p")
        optionP.classList.add("option-answer")
        var makeSelection = document.createTextNode(myTest[count].optionAn[i])
        optionP.appendChild(makeSelection)

        li.appendChild(radioButton)
        li.appendChild(optionP)
        newUl.appendChild(li)

        var leftp = document.querySelector("div#left p")
        leftp.remove()

        var left = document.querySelector("div#left")
        var leftP = document.createElement("p")
        var number = document.createTextNode(index)
        leftP.style.color = "white"
        leftP.style.fontSize = "1000%"
        leftP.style.marginTop = "-10px"
        leftP.style.marginLeft = "30px"
        leftP.appendChild(number)
        left.appendChild(leftP)

    }

 
  
    if( document.querySelector("button.finish-button")){
      var finishB= document.querySelector("button.finish-button")
      finishB.classList.replace("finish-button", "upbutton")
      var finishText = finishB.innerText
      finishB.innerText = finishText.replace("Finish", "Next")}}}}) }

   
   
   )(quizController, UIcontroller)

        
        

   

   




