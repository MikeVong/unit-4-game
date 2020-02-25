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

    randomNumber = Math.floor(Math.random() * 120);
    console.log(randomNumber);
    $(".match").html(randomNumber);
    //random generate each gem between 1 and 12
    //yellow gem
    $("#yellow").on("click",function(){
        yellowGem = Math.floor(Math.random() * 12);
        console.log(yellowGem);
        totalScore = yellowGem + totalScore;
        console.log(totalScore);
        if (totalScore === randomNumber)
        {
            wins++;
            alert("You won!");

        }
        else (totalScore > randomNumber)
        {
            losses++;
            alert("You lost!");
        }
        




    });
        
        //green gem
        //blue gem
        //red gem


    //variables for win and lost

    //fuction to counting lost

    //fuction to counting wins

    //function on click on each gem

        //yellow gem click

        //red gem click

        //green gem click

        //blue gem click
    
    //function to reset and play again
});
  

