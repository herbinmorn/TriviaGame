

var questions =["Which of the following is NOT one of the three macronutrients in food?","which of the following is a monosaccharide?","which mineral will help you relax/sleep better?","which of the following is a natural zero calorie sweetener?"];

var answer1 =['Fats','Sucrose','Calcium','Honey'];
var answer2 =['Sugar','Glucose','Magnesium','Stevia'];
var answer3=['Carbohydrates','Lactose','Zinc','Maple Syrup'];
var answer4=['Proteins','Maltose','Iron','Caramel'];
var imageTitles= ['The correct answer is sugar.','The correct answer is glucose.','The correct answer is Mg, magnesium.','The correct answer is stevia.'];
var images =['assets/images/sugar.jpg','assets/images/glucose.jpg','assets/images/mg.jpg','assets/images/stevia.jpg'];

var timelimit = 30;
var intervalId;
var number = timelimit;
var i=0;


var correct = 0;
var wrong =0;
var unanswered =0;

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement,1000);
}

function decrement(){
    number--;
    $('#timer').html('<div>Time Remaining: ' + number +' Seconds</div>');
    if (number === 0){
        stop();
        unanswered++;
        $('#yesNo').html('<div>Time Out!</div>');
        showAnswers(i);
        }
    }



function stop(){
    clearInterval(intervalId)
}


var showQuestions=function(){
    $('.start-canvas').hide();
    $('.question-canvas').show();
    $('.answer-canvas').hide();
    $('.summary-canvas').hide();
    number = timelimit;
    run();
    $("#questions").html("<button>"+questions[i]+"</button>");
    $("#answer1").html("<button id=\"answer1\">"+answer1[i]+"</button>");
    $("#answer2").html("<button id=\"answer2\">"+answer2[i]+"</button>");
    $("#answer3").html("<button id=\"answer3\">"+answer3[i]+"</button>");
    $("#answer4").html("<button id=\"answer4\">"+answer4[i]+"</button>");
    $("#image-title").html("");
    $("#image-holder").html("");
}


var showAnswers = function() {
    $('.start-canvas').hide();
    $('.answer-canvas').show();
    $('.question-canvas').hide();
    $('.summary-canvas').hide();
    
    stop();
    $("#image-title").html("<div>"+imageTitles[i]+"</div>");
    $("#image-holder").html("<img src=" + images[i] + " width='400px'>");
    i=i+1;
    if(i===4){
        stop();
        setTimeout(showRecord,3000);
        
    }
    else
    {
        setTimeout(function () {
            showQuestions(i);
        }, 3000);
    }
}



var showRecord = function(){
    $('.start-canvas').hide();
    $('.summary-canvas').show();
    $('.question-canvas').hide();
    $('.answer-canvas').hide();
    $("#correct").html("Correct Answers:"+ correct);
    $("#wrong").html("Incorrect Answers:"+ wrong);
    $("#unanswered").html("Unanswered:"+ unanswered);

}

function yes(){
    correct = correct + 1;
    showAnswers();
    $('#yesNo').html('<div>Correct! Congratulations!</div>');
    
    
}

function no(){
    wrong = wrong + 1;
    showAnswers();
    $('#yesNo').html('<div>Nope!</div>');
    
}

var startGame= function(){
    i=0;
    correct = 0;
    wrong =0;
    unanswered =0;   
    showQuestions();
    
}

$('.start-canvas').show();
$('.question-canvas').hide();
$('.answer-canvas').hide();
$('.summary-canvas').hide();

$(".start").click(startGame);

$('#answer2').click(yes);
$('#answer1').click(no);
$('#answer3').click(no);
$('#answer4').click(no);

