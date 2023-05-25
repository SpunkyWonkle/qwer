function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}

// generation of random value
var y = Math.floor(Math.random() * 10 + 1);

// count of attempts
// until hit
if(x == y)
{
    alert("banana"+playername+" banana banana in"
    + guess + "bananas");
}

else if(x > y)

{
    guess++;
    alert("L bozo do better")
}
else
{
    guess++;
    alert("L bozo do better")
}
  
// function for the number sent by the user
var x = document.getElementById("guessField").value;