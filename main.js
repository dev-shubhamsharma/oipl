
// declared total questions to attempt
var totalQuestions = 60


// declared total questions entered in the "questions.js" file
var totalQuestionsAddedInList = 252

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
    // document.getElementById("next-btn").disabled = "false"    
    
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

    if(elements[0].checked == false && elements[1].checked == false && elements[2].checked == false && elements[3].checked == false) {
        // alert("hello")
        document.getElementById("msg").innerHTML = "Please select an option";
    }
    else {
        var selectedAnswer = "";
        var elements = document.getElementsByName("question1");       

        if(elements[0].checked==true) {
            selectedAnswer = document.querySelector("#opt1 ~ span").innerHTML
        }
        else if(elements[1].checked==true) {
            selectedAnswer = document.querySelector("#opt2 ~ span").innerHTML
        }
        else if(elements[2].checked==true) {
            selectedAnswer = document.querySelector("#opt3 ~ span").innerHTML
        }
        else if(elements[3].checked==true) {
            selectedAnswer = document.querySelector("#opt4 ~ span").innerHTML
        }

        if(selectedAnswer == questions[indexNumber].correctAnswer) {
            score++
            console.log('score'+score)
            document.getElementById("score-count").innerHTML = score
        }


        // **********************************************

        var correctAnswer = questions[indexNumber].correctAnswer;

        if(document.querySelector("#opt1 ~ span").innerHTML == correctAnswer) {
            document.querySelector(".first-option-container").style.borderColor = "green"
            document.querySelector(".first-option-container").style.background = "rgba(0,255,0,0.2)"
        }
        else {
            document.querySelector(".first-option-container").style.borderColor = "red"
            document.querySelector(".first-option-container").style.background = "rgba(255,0,0,0.2)"
        }
        

        if(document.querySelector("#opt2 ~ span").innerHTML == correctAnswer) {
            document.querySelector(".second-option-container").style.borderColor = "green"
            document.querySelector(".second-option-container").style.background = "rgba(0,255,0,0.2)"
        }
        else {
            document.querySelector(".second-option-container").style.borderColor = "red"
            document.querySelector(".second-option-container").style.background = "rgba(255,0,0,0.2)"
        }
        

        if(document.querySelector("#opt3 ~ span").innerHTML == correctAnswer) {
            document.querySelector(".third-option-container").style.borderColor = "green"
            document.querySelector(".third-option-container").style.background = "rgba(0,255,0,0.2)"
        }
        else {
            document.querySelector(".third-option-container").style.borderColor = "red"
            document.querySelector(".third-option-container").style.background = "rgba(255,0,0,0.2)"
        }
        

        if(document.querySelector("#opt4 ~ span").innerHTML == correctAnswer) {
            document.querySelector(".fourth-option-container").style.borderColor = "green"
            document.querySelector(".fourth-option-container").style.background = "rgba(0,255,0,0.2)"
        }
        else {
            document.querySelector(".fourth-option-container").style.borderColor = "red"
            document.querySelector(".fourth-option-container").style.background = "rgba(255,0,0,0.2)"
        }


        // disable save & next btn

        // document.getElementById("next-btn").disabled = "true"
        
        setTimeout(() => {
            // var elements = document.getElementsByName("question1")
            // //     to check if any radio button is not selected
        
            // if(elements[0].checked == false && elements[1].checked == false && elements[2].checked == false && elements[3].checked == false) {
            // // alert("hello")
            //     document.getElementById("msg").innerHTML = "Please select an option"
            // }
            // else {
            //     var selectedAnswer = "";
            //     var elements = document.getElementsByName("question1");       
    
            //     if(elements[0].checked==true) {
            //         selectedAnswer = document.querySelector("#opt1 ~ span").innerHTML
            //     }
            //     else if(elements[1].checked==true) {
            //         selectedAnswer = document.querySelector("#opt2 ~ span").innerHTML
            //     }
            //     else if(elements[2].checked==true) {
            //         selectedAnswer = document.querySelector("#opt3 ~ span").innerHTML
            //     }
            //     else if(elements[3].checked==true) {
            //         selectedAnswer = document.querySelector("#opt4 ~ span").innerHTML
            //     }
                
            //     if(selectedAnswer == questions[indexNumber].correctAnswer) {
            //         score++
            //         console.log('score'+score)
            //         document.getElementById("score-count").innerHTML = score
            //     }
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
                    
                    // reset border color before loading next question
    
                    var options = document.querySelectorAll(".option-container")
                    console.log(options)
                    for(var i=0; i<options.length; i++) {
                        options[i].style.borderColor = '#eee';
                        options[i].style.background = '#fff';
                    }
    
                    
                    // console.log(indexNumber)
                    loadNext(indexNumber)


                }
            // }
            
        }, 2000); 

        

        
        
    }

    





    
}





//  submit exam after time ends and onclick of submit button

function submitExam(str) {

    window.localStorage.setItem("mcqScore",score.toString())
    window.localStorage.setItem("totalMcqQuestions",totalQuestions.toString())

    window.open("TrueFalseWindow.html","_self")
}


function generateRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}
