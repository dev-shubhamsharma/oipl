
// declared total questions to attempt
var totalQuestions = 60



// declared total questions entered in the "questions.js" file
var totalQuestionsAddedInList = 200

let score = 0
let currentQuestion = 0
let wrongAnswers = 0
let indexNumber = 0
var indexList = [0];


// clear error message when an option is selected
function clearMsg() {
    document.getElementById("msg").innerHTML = ""
}


function loadNext(index) {
    
    clearSelection()
    
    // alert(window.localStorage.getItem("name")+" "+window.localStorage.getItem("surname")+"is logged in");

//     to display score and question no on page load
    // document.getElementById("score").innerHTML = score
    // alert("hello")
    
    document.getElementById("question").innerHTML = questions[indexNumber].question
    document.getElementById("option1").innerHTML = questions[indexNumber].optionA
    document.getElementById("option2").innerHTML = questions[indexNumber].optionB
    document.getElementById("option3").innerHTML = questions[indexNumber].optionC
    document.getElementById("option4").innerHTML = questions[indexNumber].optionD
    
    
//     if current question reaches at second last question then change save btn text to submit
    if(document.getElementById("current-question").innerHTML == (totalQuestions - 1).toString()) {
        document.getElementById("next-btn").innerHTML = "Submit"
    }
    
//     increament question number 
    currentQuestion++
    document.getElementById("current-question").innerHTML = currentQuestion
    
}


//  to clear all the selected radio buttons
function clearSelection() {
    var elem = document.getElementsByName("question1");
    for(var i=0;i<elem.length;i++)
      elem[i].checked = false;
}


// to check the answer on click on save
function checkAnswerAndNext() {
    
    var elements = document.getElementsByName("question1")
//     to check if any radio button is not selected
    
    if(elements[0].checked == false && elements[1].checked == false && elements[2].checked == false && elements[3].checked == false) {
        // alert("hello")
        document.getElementById("msg").innerHTML = "Please select an option"
    }
    else {
        var selectedAnswer = "";
        var elements = document.getElementsByName("question1");
        
        if(elements[0].checked==true)
            selectedAnswer = document.querySelector("#opt1 ~ span").innerHTML
        else if(elements[1].checked==true)
            selectedAnswer = document.querySelector("#opt2 ~ span").innerHTML
        else if(elements[2].checked==true)
            selectedAnswer = document.querySelector("#opt3 ~ span").innerHTML
        else if(elements[3].checked==true)
            selectedAnswer = document.querySelector("#opt4 ~ span").innerHTML
    
        if(selectedAnswer == questions[indexNumber].correctAnswer) {
            score++
            console.log('score'+score)
            // document.getElementById("score").innerHTML = score
        }
        if(currentQuestion == totalQuestions.toString()) {
            // submit the paper and display result
            submitExam("QuestionEnd")
            
        }
        else {


            // indexNumber++
            let index = generateRandomNumber(0, totalQuestionsAddedInList-1);
            
            // to check if current index question is already displayed
            while(indexList.includes(index) == true) {
                index = generateRandomNumber(0,totalQuestionsAddedInList - 1);
            }
            
            indexList.push(index)
            console.log(indexList);
            indexNumber = index

            // console.log(indexNumber)
            loadNext(indexNumber)
        }
    }    
    
}





//  submit exam after time ends and onclick of submit button

function submitExam(str) {

    // calculate grade based on score from total no of questions
    let per = (score/totalQuestions)*100
    let grade = ""

    if(per>=85) { grade = "S" }
    else if(per>=75) { grade = "A" }
    else if(per>=65) { grade = "B" }
    else if(per>=55) { grade = "C" }
    else if(per>=50) { grade = "D" }
    else { grade = "F" }

    window.localStorage.setItem("grade",grade)

    window.localStorage.setItem("score",score.toString())
    window.localStorage.setItem("totalquestions",totalQuestions.toString())

    if(str=="TimeEnd") {
        // let m = totalTiming.toString()

        window.localStorage.setItem("minutes",totalTiming.toString())
        window.localStorage.setItem("seconds","00")

    }
    else if(str == "QuestionEnd") {
        let m = parseInt(secondsCounter / 60)
        let s = parseInt(secondsCounter % 60)

        window.localStorage.setItem("minutes",m.toString())
        window.localStorage.setItem("seconds",s.toString())
    }
    window.open("certificate.html","_self") 
    // document.getElementById("overlay").style.display = "flex"
    // window.localStorage.setItem("score",score.toString())
    // displayResult();
}


function generateRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}
