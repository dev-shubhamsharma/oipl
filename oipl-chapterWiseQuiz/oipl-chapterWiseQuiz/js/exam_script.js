var totalQuestionsForTest = 0
var totalTiming = 0;


let url = window.location.search.toString()
let i = url.indexOf("=")
let testId = url.substring(i+1)
console.log(testId)

var totalQuestionsAddedInList = 0

var score = 0


for(let index = 0; index < exams.length; index++) {
    if(exams[index].id == testId) {
        // console.log(exams[index].totalQuestions)
        
        totalQuestionsForTest = Number.parseInt(exams[index].totalQuestions)
        
        // console.log(totalQuestionsForTest)
        
        totalQuestionsAddedInList = Number.parseInt(exams[index].questionsAddedInFile)
        totalTiming = Number.parseInt(exams[index].timeInMinutes)
        
        // console.log(totalQuestionsAddedInList)

        // set exam window title element
        // document.querySelector("#exam-title").innerHTML = exams[index].name.toString()
        
    }
}




// ***********   CHANGE VARIABLES HERE FOR CHANGE TEST *******************

// var totalQuestionsForTest = 10
// var totalQuestionAddedInList = 10

// *******************************************


var currentBtnIdNo = 0

var prevBtnId = ""
var indexList = []



function loadQuestionBtns() {

    if(window.localStorage.getItem("username") == null || window.localStorage.getItem("username") == undefined)
    {
        window.open("index.html","_self")
    }
    
    for(let i=0; i<totalQuestionsForTest; i++) {

        let index = generateRandomNumber(0,totalQuestionsAddedInList)

        while(indexList.includes(index)) {
            index = generateRandomNumber(0, totalQuestionsAddedInList)
        }

        // console.log("no genearted")
        indexList.push(index)
        console.log("indexList = "+indexList)

        let quesBtn = document.createElement("button")
        quesBtn.classList.add("question-btn")
        quesBtn.setAttribute("id","btn"+i)

        let btnText = document.createElement("span")
        btnText.classList.add("btn-text")
        btnText.innerHTML = (i+1).toString();

        let quesIndex = document.createElement("span")
        quesIndex.classList.add("ques-index")
        quesIndex.innerHTML = index.toString();

        let ansOption = document.createElement("span")
        ansOption.classList.add("ans-option")
        ansOption.innerHTML = NaN

        quesBtn.appendChild(btnText)
        quesBtn.appendChild(quesIndex)
        quesBtn.appendChild(ansOption)
        
        quesBtn.setAttribute("onclick","showQuestion(this.id)")

        document.querySelector(".grid-container").append(quesBtn)

    }

    // before showQuestion and after loading question buttons
    // startTimer()

    // call first question clicked event to load first question
    showQuestion("btn"+currentBtnIdNo)
    startTimer()

}



function generateRandomNumber(min, max) {
    let diff = max - min
    let rand = Math.random()
    rand = Math.floor(rand * diff)
    rand = rand + min
    return rand

}



function showQuestion(clickedId) {

    // console.log(clickedId.toString())
    // to change color current clicked btn and previous btn color
    // console.log(document.querySelector("#"+clickedId).classList.contains("current"))
    if(document.querySelector("#"+clickedId).classList.contains("current") == false)
        document.querySelector("#"+clickedId).classList.add("current")
    
    // console.log(prevBtnId)
    if(prevBtnId != "" && prevBtnId !== clickedId)
    document.querySelector("#"+prevBtnId).classList.remove("current")
    
    clearMsg()
    // clearAnswer()
    // console.log(clickedId)

    currentBtnIdNo = Number.parseInt(clickedId.substring(3))
    // currentBtnIdNo
    let btnIndex = document.querySelector("#"+clickedId+" .ques-index").innerHTML
    // console.log(btnIndex)
    document.querySelector(".question-container .en").innerHTML = questions[btnIndex][0].question.toString()
    document.querySelector(".question-container .hi").innerHTML = questions[btnIndex][1].question.toString()

    document.querySelector("#option1 .en").innerHTML = questions[btnIndex][0].optionA.toString()
    document.querySelector("#option2 .en").innerHTML = questions[btnIndex][0].optionB.toString()
    document.querySelector("#option3 .en").innerHTML = questions[btnIndex][0].optionC.toString()
    document.querySelector("#option4 .en").innerHTML = questions[btnIndex][0].optionD.toString()

    document.querySelector("#option1 .hi").innerHTML = questions[btnIndex][1].optionA.toString()
    document.querySelector("#option2 .hi").innerHTML = questions[btnIndex][1].optionB.toString()
    document.querySelector("#option3 .hi").innerHTML = questions[btnIndex][1].optionC.toString()
    document.querySelector("#option4 .hi").innerHTML = questions[btnIndex][1].optionD.toString()


    let savedAnswer = document.querySelector("#"+clickedId+" .ans-option").innerHTML
    // console.log("saved :"+savedAnswer)
    
    switch(savedAnswer) {
        case "A": document.querySelector("#radio-btn1").checked = true; break;
        case "B": document.querySelector("#radio-btn2").checked = true; break;
        case "C": document.querySelector("#radio-btn3").checked = true; break;
        case "D": document.querySelector("#radio-btn4").checked = true; break;
        default : clearAnswer()
    }
    

    // save current btn id into variable for future
    prevBtnId = clickedId 
    

    // if last button is clicked then only save answer
    let nextBtn = document.querySelector("#next-btn")
    if(clickedId == "btn"+(totalQuestionsForTest-1)) {
        
        // .classList.add("disabled")
        nextBtn.innerHTML = "Save"
    }
    else {
        nextBtn.innerHTML = "Save & Next"
    }


    let prevBtn = document.querySelector("#prev-btn")
    if(clickedId == "btn0") {
        prevBtn.classList.add("disabled")
        prevBtn.disabled = true

    }
    else {
        prevBtn.disabled = false
        prevBtn.classList.remove("disabled")
    }
    
    
}


function clearAnswer() {

    let radioBtns = document.querySelectorAll(".radio-btn")
    for(let i=0; i<radioBtns.length; i++) {
        radioBtns[i].checked = false
    }
    // console.log("answer cleared")

}

function saveAnswer() {
    
    let radioBtns = document.querySelectorAll(".radio-btn")

    // if no option is selected then show the message

    if(radioBtns[0].checked == false && radioBtns[1].checked == false && radioBtns[2].checked == false && radioBtns[3].checked == false) {
        document.querySelector("#msg").style.visibility = "visible"
    }
    // if any option is selected then save the answer and goto next
    else {

        for(let i = 0; i<radioBtns.length; i++) {
            if(radioBtns[i].checked == true) {
                
                let selectedAnswer = radioBtns[i].value.toString()
                // console.log("selected answer "+ selectedAnswer)

                // let quesIndex = document.querySelector("#btn"+currentBtnIdNo+" .ques-index").innerHTML

                document.querySelector("#btn"+currentBtnIdNo+" .ans-option").innerHTML = radioBtns[i].value.toString()

                document.querySelector("#btn"+currentBtnIdNo).classList.add("answered")

                
            }


        }

        if(currentBtnIdNo != totalQuestionsForTest - 1) {
            goToNext()
        }
    }
    
}




function clearMsg() {
    document.querySelector("#msg").style.visibility = "hidden"
}




function goToNext() {
    if(currentBtnIdNo <= totalQuestionsForTest - 1) {
        showQuestion("btn"+(currentBtnIdNo+1))
    }
        
}


function goToPrev() {
    if(currentBtnIdNo >= 0) {
        showQuestion("btn"+(currentBtnIdNo-1))
    }
        
}




function submitExam(str) {

    if(str == "TimeEnd") {
        alert("Exam timer has ended\nWe are submitting your exam!")
        // submit the exam
        calculateAndShowResult()
    }
    else if(str == "userSubmitted") {
        let result = confirm("Are you sure about submitting the exam?");
        if(result == true) {
            // submit the exam
            calculateAndShowResult()
        }
    }
        
}



function calculateAndShowResult() {


    window.localStorage.setItem("examstatus","attempted")


    // to show the loading animation after exam submit
    document.querySelector("#overlay").style.display = "flex"
    let no = 100, count = 0
    let interval = setInterval(function() {
        document.querySelector(".progress-content").style.marginLeft = "-"+no+"%"
        document.querySelector("#progress-count").innerHTML = count+"%"
        no--
        count++
        // console.log(no)
        if(no == -1) {
            // stop loading animation and show result
            clearInterval(interval)
            
            // show the result section

            // showResult()
            
            // to save the data in google sheet and show the certificate
            
            // calculateScore()
            // saveExamDataInGoogleSheet()


            // Show Review and Certificate buttons
            document.querySelector("#review-btn").style.display = 'block'
            document.querySelector("#view-certificate-btn").style.display = 'block'
        }
    },100);
    
}


function calculateScore() {
    score = 0
    for(let index = 0; index < indexList.length; index++) {
        
        // ************** ADD TO THE RESULT SECTION *****************

        let selectedOption = document.querySelector("#btn"+index+" .ans-option").innerHTML

        // console.log(selectedOption)
        if(selectedOption == "A" || selectedOption == "B" || selectedOption == "C" || selectedOption == "D") {

            let questionIndex = document.querySelector("#btn"+index+" .ques-index").innerHTML

            // let flexItems = document.createElement("div")
            // flexItems.classList.add("flex-items")

            // flexItems.innerHTML = `
            //     <div class="question" style="font-weight:bold;">${index+1}. ${questions[questionIndex][0].question}</div>
            //     <div class="option" id="option-${index}-a">A. ${questions[questionIndex][0].optionA}</div>
            //     <div class="option" id="option-${index}-b">B. ${questions[questionIndex][0].optionB}</div>
            //     <div class="option" id="option-${index}-c">C. ${questions[questionIndex][0].optionC}</div>
            //     <div class="option" id="option-${index}-d">D. ${questions[questionIndex][0].optionD}</div>
            //     `
            // resultSection.append(flexItems)

            // console.log(questionIndex+"    "+selectedOption)
            // for correct answers
            if(questions[questionIndex][0].correctAnswer === questions[questionIndex][0]["option"+selectedOption]) {
                // document.querySelector("#option-"+index+"-"+selectedOption.toLowerCase()).style.cssText = `color:green; font-weight:bold;`;
                score++

                console.log("score" + score)
            }
            // else {
            //    document.querySelector("#option-"+index+"-"+selectedOption.toLowerCase()).style.cssText = `color:red; font-weight:bold;`;
            // }
        }
        

    }


    // resultSection.style.display = "flex"

    // hide the overlay
    // document.querySelector("#overlay").style.display = "none"
    saveExamDataInGoogleSheet()
}








function saveExamDataInGoogleSheet() {

    // alert(score)
    window.localStorage.setItem("mcqScore",score.toString())
    // alert(totalQuestionsForTest)
    window.localStorage.setItem("totalMcqQuestions",totalQuestionsForTest.toString())


    let username = window.localStorage.getItem("username")
    let mcqScore = window.localStorage.getItem("mcqScore")

    let grade = ""
    let percentage = score*100/totalQuestionsForTest
    console.log("score : "+score)
    console.log("TotalQuestions : "+totalQuestionsForTest)
            
    if(percentage >= 85) { grade = "S" }
    else if(percentage >= 75) { grade = "A" }
    else if(percentage >= 65) { grade = "B" }
    else if(percentage >= 55) { grade = "C" } 
    else if(percentage >= 50) { grade = "D" }
    else { grade = "F" }


    // alert("username "+ username+"\nscore : "+score+"\ntest id "+testId+"\ngrade :"+grade)

    document.querySelector("#name-box").value = username
    document.querySelector("#marks-box").value = score
    document.querySelector("#testname-box").value = testId+" exam"
    document.querySelector("#grade-box").value = grade


    let today = new Date().toLocaleDateString()
    document.querySelector("#date-box").value = today.toString()
    console.log(today)

    let time = new Date().toLocaleTimeString();
    document.querySelector("#time-box").value = time.toString()
    console.log(time)

    // // submit form automatically
    // alert("submit result")
    document.getElementById("hidden-form").submit();
    // window.open("certificate.html","_self")

}






function showResult() {
//  reset score to zero 
    
    score= 0
    
    let resultSection = document.querySelector("#result-section")

    for(let index = 0; index < indexList.length; index++) {
        
        // ************** ADD TO THE RESULT SECTION *****************

        let selectedOption = document.querySelector("#btn"+index+" .ans-option").innerHTML

        console.log(selectedOption)
        if(selectedOption == "A" || selectedOption == "B" || selectedOption == "C" || selectedOption == "D") {

            let questionIndex = document.querySelector("#btn"+index+" .ques-index").innerHTML

            let flexItems = document.createElement("div")
            flexItems.classList.add("flex-items")

            flexItems.innerHTML = `
                <div class="question" style="font-weight:bold;">${index+1}. ${questions[questionIndex][0].question}</div>
                <div class="option" id="option-${index}-a">A. ${questions[questionIndex][0].optionA}</div>
                <div class="option" id="option-${index}-b">B. ${questions[questionIndex][0].optionB}</div>
                <div class="option" id="option-${index}-c">C. ${questions[questionIndex][0].optionC}</div>
                <div class="option" id="option-${index}-d">D. ${questions[questionIndex][0].optionD}</div>
                `
            resultSection.append(flexItems)

            console.log(questionIndex+"    "+selectedOption)
            // for correct answers
            if(questions[questionIndex][0].correctAnswer === questions[questionIndex][0]["option"+selectedOption]) {
                document.querySelector("#option-"+index+"-"+selectedOption.toLowerCase()).style.cssText = `color:green; font-weight:bold;`;
                score++

                console.log("score" + score)
            }
            else {
                document.querySelector("#option-"+index+"-"+selectedOption.toLowerCase()).style.cssText = `color:red; font-weight:bold;`;
            }
        }
        

    }


    resultSection.style.display = "flex"

    // ***************************************************** VIEW CERTIFICATE BTN ADDED HERE **********
    let viewBtn = document.createElement("button")
    viewBtn.innerHTML = "View Certificate"
    viewBtn.classList.add("btn")
    viewBtn.style.margin = 'auto'
    viewBtn.setAttribute("onclick","calculateScore()")
    resultSection.append(viewBtn)

    // hide the overlay
    document.querySelector("#overlay").style.display = "none"
}


function toggleMenu() {
    document.querySelector("#right-section").classList.toggle("open");
}


var secondsCounter = 0

function startTimer() {

    console.log("timer started")
    disable()

    var startMinutes = totalTiming
    var startSeconds = 60  // also change on update time 


    var minutes = startMinutes
    var seconds = startSeconds
    
    minutes-=1
    document.querySelector("#minutes").innerHTML = minutes
    // document.getElementById("seconds").innerHTML = seconds - 1

    // loadNext(0)
    // document.getElementById("total-question").innerHTML = totalQuestions.toString()

    let interval = setInterval(() => {

        
        if((minutes == 0 && seconds == 0)) {

            // alert("Redirecting to Next section...")
            clearInterval(interval)
            // alert("timer ends")
            submitExam("TimeEnd")
            
        }
        if(seconds == 0) {
            //************************************************** */

            seconds = 60       // update seconds here also

            //**************************************************** */
            minutes-=1     
            if(minutes <= 9)
                document.querySelector("#minutes").innerHTML = "0"+minutes
            else
                document.querySelector("#minutes").innerHTML = minutes

            
        }
        

        seconds-=1      
        if(seconds <= 9)
            document.querySelector("#seconds").innerHTML = "0"+seconds
        else 
            document.querySelector("#seconds").innerHTML = seconds
        

            // console.log("seconds",secondsCounter)
            secondsCounter+=1
        // console.log(secondsCounter)

    }, 1000);
}







// function showResult() {

//     // hide the overlay
//     document.querySelector("#overlay").style.display = "none"
    

//     let resultSection = document.querySelector("#result-section")
//     console.log("in result section")

    


//     // btn0 is the id of first question btn
//     for(let i=0; i<indexList.length; i++) {

//         let flexItems = document.createElement("div")
//         flexItems.classList.add("flex-items")
//         // find index from questionbtn
//         let index = document.querySelector("#btn"+i+" .ques-index").innerHTML 
//         let selectedAnswer = document.querySelector("#btn"+i+" .ans-option").innerHTML 
       
//         let ques = document.createElement("p")
//         ques.style.cssText = `padding: 10px 0;`
//         ques.innerHTML = questions[index][0].question.toString();

//         let option = document.createElement("p")
//         option.style.cssText = `padding: 10px 0; margin: 5px 0;`





//         // el.innerHTML = '<div class="question" style="font-weight:bold; padding:10px;">'+(i+1)+". "+questions[index][0].question+'</div> <div class="option option-a" style="padding:10px;">'+"A. "+questions[index][0].optionA+'</div> <div class="option option-b" style="padding:10px;">'+"B. "+questions[index][0].optionB+'</div> <div class="option option-c" style="padding:10px;">'+"C. "+questions[index][0].optionC+'</div>  <div class="option option-d" style="padding:10px;">'+"D. "+questions[index][0].optionD+'</div>'

//         // resultSection.append(el)
//         // // console.log(i+"items added")

//         // console.log(selectedAnswer)
//         // console.log(questions[index][0]["option"+selectedAnswer] == questions[index][0].correctAnswer)

//         // if(questions[index][0]["option"+selectedAnswer] == questions[index][0].correctAnswer) {
//         //     switch(selectedAnswer) {
//         //         case "A": document.querySelector(".option-a").style.border = "1px solid green"; break;
//         //         case "B": document.querySelector(".option-b").style.border = "1px solid green"; break;
//         //         case "C": document.querySelector(".option-c").style.border = "1px solid green"; break;
//         //         case "D": document.querySelector(".option-d").style.border = "1px solid green"; break;
//         //         default: document.querySelector(".question").style.border = "1px solid red";
//         //     }
            
//         // }
//         // else {
            
//         //     switch(selectedAnswer) {
//         //         case "A": document.querySelector(".option-a").style.color = "red"; break;
//         //         case "B": document.querySelector(".option-b").style.color = "red"; break;
//         //         case "C": document.querySelector(".option-c").style.color = "red"; break;
//         //         case "D": document.querySelector(".option-d").style.color = "red"; break;
//         //         // default: document.querySelector(".question").style.color = "red";
//         //     }
//         //     // document.querySelector(".option-"+selectedAnswer.toLowerCase()).style.color = "red"
//         // }


        
            

        

//     }
//     // for(let j =0; j<questions.length; j++) {
//     //     if(questions[j][0].correctAnswer == questions[j][0].optionA || questions[j][0].correctAnswer == questions[j][0].optionB || questions[j][0].correctAnswer == questions[j][0].optionC || questions[j][0].correctAnswer == questions[j][0].optionD) {
//     //         console.log("correct"+j)
//     //     }
//     //     else {
//     //         console.log("incorrect : "+j)
//     //     }
//     // }

//     document.querySelector("#result-section").style.display = "flex"
// }





