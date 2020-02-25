$(document).ready(function()
{
  
  //random generate a number between 19 and 120
        //var for number
    var randomNumber;
    var redGem;
    var greenGem;
    var blueGem;
    var yellowGem;
    var wins = 0;
    var losses = 0;

    var totalScore = 0;
    randomNum();

    function randomNum()
        {
        randomNumber = Math.floor(Math.random() * 120);
        console.log(randomNumber);
        $(".match").html(randomNumber);
        };

    
    //random generate each gem between 1 and 12
    //yellow gem
    $("#yellow").on("click",function()
        {
            yellowGem = Math.floor(Math.random() * 12);
            console.log(yellowGem);
            totalScore = yellowGem + totalScore;
            $("#totalScore").html(totalScore);
            if (totalScore === randomNumber)
                {
                wins++;
                alert("You won!");
                $("#totalWins").html(wins);
                totalScore = 0;
                randomNum();
                }
            else if (totalScore > randomNumber)
                {
                losses++;
                alert("You lost!");
                $("#totalLosses").html(losses);
                totalScore = 0;
                randomNum();
                }
        });
    //green gem
    $("#green").on("click",function()
        {
            greenGem = Math.floor(Math.random() * 12);
            console.log(yellowGem);
            totalScore = yellowGem + totalScore;
            $("#totalScore").html(totalScore);
            if (totalScore === randomNumber)
                {
                wins++;
                alert("You won!");
                $("#totalWins").html(wins);
                totalScore = 0;
                randomNum();
                }
            else if (totalScore > randomNumber)
                {
                losses++;
                alert("You lost!");
                $("#totalLosses").html(losses);
                totalScore = 0;
                randomNum();
                }
        });
    //red gem
    $("#red").on("click",function()
        {
            redGem = Math.floor(Math.random() * 12);
            console.log(yellowGem);
            totalScore = yellowGem + totalScore;
            $("#totalScore").html(totalScore);
            if (totalScore === randomNumber)
                {
                wins++;
                alert("You won!");
                $("#totalWins").html(wins);
                totalScore = 0;
                randomNum();
                }
            else if (totalScore > randomNumber)
                {
                losses++;
                alert("You lost!");
                $("#totalLosses").html(losses);
                totalScore = 0;
                randomNum();
                }
        });
    //blue gem
    $("#blue").on("click",function()
        {
            blueGem = Math.floor(Math.random() * 12);
            console.log(yellowGem);
            totalScore = yellowGem + totalScore;
            $("#totalScore").html(totalScore);
            if (totalScore === randomNumber)
                {
                wins++;
                alert("You won!");
                $("#totalWins").html(wins);
                totalScore = 0;
                randomNum();
                }
            else if (totalScore > randomNumber)
                {
                losses++;
                alert("You lost!");
                $("#totalLosses").html(losses);
                totalScore = 0;
                randomNum();
                }
        });
});