
player_1= localStorage.getItem("player1_name");
player_2= localStorage.getItem("player2_name");

p1Score = 0;
p2Score = 0;

document.getElementById("p1").innerHTML=player_1 + ":";
document.getElementById("p2").innerHTML=player_2 + ":";
document.getElementById("p1score").innerHTML= p1Score;
document.getElementById("p2score").innerHTML= p2Score;

document.getElementById("QuestionTurn").innerHTML="Question Turn  " + player_1; 
document.getElementById("AnswerTurn").innerHTML="Answer Turn  " + player_2; 

function send()

{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    
    question_number= "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class='btn btn-info ' cnclick='check()'> Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";


}