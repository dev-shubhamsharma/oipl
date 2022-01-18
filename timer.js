
var totalTiming = 60




var secondsCounter = 0

function startTimer() {

    if(window.localStorage.getItem("username") == null || window.localStorage.getItem("username") == undefined)
    {
        window.open("signin.html","_self")
    }

    var startMinutes = totalTiming
    var startSeconds = 60  // also change on update time 


    var minutes = startMinutes
    var seconds = startSeconds
    
    minutes-=1
    document.getElementById("minutes").innerHTML = minutes
    // document.getElementById("seconds").innerHTML = seconds - 1

    loadNext(0)
    document.getElementById("total-question").innerHTML = totalQuestions.toString()

    let interval = setInterval(() => {

        
        if((minutes == 0 && seconds == 0)) {

            alert("Time end")
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
                document.getElementById("minutes").innerHTML = "0"+minutes
            else
                document.getElementById("minutes").innerHTML = minutes

            
        }
        

        seconds-=1      
        if(seconds <= 9)
            document.getElementById("seconds").innerHTML = "0"+seconds
        else 
            document.getElementById("seconds").innerHTML = seconds
        

            console.log("seconds",secondsCounter)
            secondsCounter+=1
        // console.log(secondsCounter)

    }, 1000);
}

