        var y = Math.floor(Math.random() * 10 + 1);
        var guess = 1;

        function CheckNumber(){
            var x = document.getElementById("UserInput").value;
            if(x == y){
                document.getElementById('Result').innerHTML = 'Congratulations! You Guessed It Right in ' + guess + ' Guesses';
            }
            else if(x > y){
                guess++;
                document.getElementById('Result').innerHTML = 'Sorry Number is Smaller';
            }
            else{
                guess++;
                document.getElementById('Result').innerHTML = 'Sorry Number is Greater';
            }
        }