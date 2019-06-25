var startGame= function(){
    setTimeout(showQuestions,30000);
}

var showQuestions=function(){
    var countTime = function(){
        for(var i =30;i>0;i--){
            $("#timer").html("<div>Time Remaining:"+ i+"Seconds</div>");}
        clearInterval(countTime);
        showAnswers(i);
        }

    setInterval(countTime,1000);

    $("#questions").html("<button>"+questions[0]+"</button>");
    $("answer1").html("<button>"+answer1[0]+"</button>");
    $("answer2").html("<button>"+answer2[0]+"</button>");
    $("answer3").html("<button>"+answer3[0]+"</button>");
    $("answer4").html("<button>"+answer4[0]+"</button>");
}

var correct = 0;
var wrong =0;
var showAnswers = function(i){
    
    if(/*clickcorrect*/){$("#yesNo").html("<div>Correct!Congratulations!</div>");correct++;}else{$("#yesNo").html("<div>Nope!</div>");wrong++;}
    $("#image-title").html("<div>"+imageTitles[i]+"</div>");
    $("#image-holder").html("<img src=" + images[i] + " width='400px'>");
}

var showRecord = function(){

}




$("#start").click(showQuestions);
$(".choices").click(showAnswers(i));
