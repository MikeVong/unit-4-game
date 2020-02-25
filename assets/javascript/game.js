$(document).ready(function()
{
    //var for number
    var randomNumber;
    var redGem;
    var greenGem;
    var blueGem;
    var yellowGem;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    //start the random number at the begin of the game
    randomNum();
    
    
     //random generate a number between 19 and 120 and displaying it
    function randomNum()
        {
        randomNumber = Math.floor(Math.random() * 120);
        console.log(randomNumber);
        $(".match").html(randomNumber);
        };
    
    function win()
        {
        //adding 1 to wins
        wins++;
        alert("You won!");
        $("#totalWins").html(wins);
        };
    
    function lost()
        {
        //adding 1 to losses
        losses++;
        alert("You lost!");
        $("#totalLosses").html(losses);
        };
    function reset()
        {
        //reseting totalScore and random number
        totalScore = 0;
        $("#totalScore").html(totalScore);
        };
    
    function condition()
        {
        //when totalScore equal to randomNumber Win
        if (totalScore === randomNumber)
            {
            win();
            reset();
            randomNum();
            }
        //when totalScore greater than randomNumber lose
        else if (totalScore > randomNumber)
            {
            lost();
            reset();
            randomNum();
            }
        };
    
    
    //yellow gem
    $("#yellow").on("click",function()
        {
            // //random generate a number between 1 and 12
            yellowGem = Math.floor(Math.random() * 12);
            console.log("Yellow Gem click " +yellowGem);
            //adding up the clicks to totalScore
            totalScore = yellowGem + totalScore;
            $("#totalScore").html(totalScore);
            condition();
        });
    //green gem
    $("#green").on("click",function()
        {
            greenGem = Math.floor(Math.random() * 12);
            console.log("Green Gem click " + greenGem);
            totalScore = greenGem + totalScore;
            $("#totalScore").html(totalScore);
            condition();
        });
    //red gem
    $("#red").on("click",function()
        {
            redGem = Math.floor(Math.random() * 12);
            console.log("Red Gem click " +redGem);
            totalScore = redGem + totalScore;
            $("#totalScore").html(totalScore);
            condition();
        });
    //blue gem
    $("#blue").on("click",function()
        {
            blueGem = Math.floor(Math.random() * 12);
            console.log("Blue Gem click " +blueGem);
            totalScore = blueGem + totalScore;
            $("#totalScore").html(totalScore);
            condition();
        });
});