
var questions =["Which of the following is NOT one of the three macronutrients in food?","which of the following is a monosaccharide?","which mineral will help you relax/sleep better?","which of the following is a natural zero calorie sweetener?"];

var answer1 =['Fats','Sucrose','Calcium','Honey'];
var answer2 =['Sugar','Glucose','Magnesium','Stevia'];
var answer3=['Carbohydrates','Lactose','Zinc','Maple Syrup'];
var answer4=['Proteins','Maltose','Iron','Caramel'];
var imageTitles= ['The correct answer is sugar.','The correct answer is glucose.','The correct answer is Mg, magnesium.','The correct answer is stevia.'];
var images =['images/sugar.jpg','images/glucose.jpg','images/mg.jpg','images/stevia.jpg'];

var intervalId;
var number =30;
var i=0;
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement,1000);
}

function decrement(){
    number--;
    $('#timer').html('<div>Time Remaining: ' + number +' Seconds</div>');
    if (number === 0){
        stop();
        showAnswers(i);}
    }



function stop(){
    clearInterval(intervalId)
}


var showQuestions=function(i){

    $("#questions").html("<button>"+questions[i]+"</button>");
    $("#answer1").html("<button>"+answer1[i]+"</button>");
    $("#answer2").html("<button>"+answer2[i]+"</button>");
    $("#answer3").html("<button>"+answer3[i]+"</button>");
    $("#answer4").html("<button>"+answer4[i]+"</button>");

    setTimeout(function() {
        showAnswers(i);
    }, 3000);
}

var correct = 0;
var wrong =0;
var unanswered =0;

var showAnswers = function(i) {
    
   /* if(/*clickcorrect){$("#yesNo").html("<div>Correct!Congratulations!</div>");correct++;}else{$("#yesNo").html("<div>Nope!</div>");wrong++;}*/
    stop();
    $("#image-title").html("<div>"+imageTitles[i]+"</div>");
    $("#image-holder").html("<img src=" + images[i] + " width='400px'>");
    i=i+1;
    if(i===4){
        showRecord();
        stop();
    }
    else
    {
        setTimeout(function () {
            showQuestions(i);
        }, 3000);
    }
}



var showRecord = function(){
    $("#correct").html("Correct Answers:"+ correct);
    $("#wrong").html("Incorrect Answers:"+ wrong);
    $("#unanswered").html("Unanswered:"+ unanswered);

}

var startGame= function(){
    showQuestions(0);
    run();
}




$(".start").click(startGame);
$(".choices").click(function(){showAnswers(i);});



