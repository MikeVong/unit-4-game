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
    reset();

    function reset()
        {
            //random generate a number between 1 and 12
            yellowGem = Math.floor(Math.random() * 11 + 1);
            console.log("Yellow Gem " + yellowGem);
            greenGem = Math.floor(Math.random() * 11 + 1);
            console.log("Green Gem " + greenGem);
            redGem = Math.floor(Math.random() * 11 + 1);
            console.log("Red Gem " + redGem);
            blueGem = Math.floor(Math.random() * 11 + 1);
            console.log("Blue Gem " + blueGem);
            //reseting totalScore and random number
            totalScore = 0;
            $("#totalScore").html(totalScore);
            randomNum();
        };
    
    
     //random generate a number between 19 and 120 and displaying it
    function randomNum()
        {
            randomNumber = Math.floor(Math.random() * 119 + 1);
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

    
    function condition()
        {
            $("#totalScore").html(totalScore);
            //when totalScore equal to randomNumber Win
            if (totalScore === randomNumber)
                {
                    win();
                    reset();
                }
            //when totalScore greater than randomNumber lose
            else if (totalScore > randomNumber)
                {
                    lost();
                    reset();
                }
        };
    
    
    //yellow gem
    $("#yellow").on("click",function()
        {
            //adding up the clicks to totalScore
            totalScore += yellowGem;
            condition();
        });
    //green gem
    $("#green").on("click",function()
        {
            totalScore += greenGem;
            condition();
        });
    //red gem
    $("#red").on("click",function()
        {
            totalScore += redGem;
            condition();
        });
    //blue gem
    $("#blue").on("click",function()
        {
            totalScore += blueGem;
            condition();
        });
});