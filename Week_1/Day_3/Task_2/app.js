var res1 = 0, res2 = 0;

function Player1() {
    var y = Math.floor(Math.random() * 6 + 1);
    res1 += y;
    document.getElementById('scr1').setAttribute('placeholder', 'Score: ' + res1);
    result();
}

function Player2() {
    var y = Math.floor(Math.random() * 6 + 1);
    res2 += y;
    document.getElementById('scr2').setAttribute('placeholder', 'Score: ' + res2);
    result();
}

function result() {
    if (res1 >= 30 && res2 < 30) {
        document.getElementById('res').setAttribute('placeholder', 'Player 1 Won!!');
        res1 = 0, res2 = 0;
        document.getElementById('scr2').setAttribute('placeholder', 'Score: ' + res2);
        document.getElementById('scr1').setAttribute('placeholder', 'Score: ' + res1);
    }
    else if (res2 >= 30 && res1 < 30) {
        document.getElementById('res').setAttribute('placeholder', 'Player 2 Won!!');
        res1 = 0, res2 = 0;
        document.getElementById('scr2').setAttribute('placeholder', 'Score: ' + res2);
        document.getElementById('scr1').setAttribute('placeholder', 'Score: ' + res1);
    } else {
        document.getElementById('res').setAttribute('placeholder', 'Player to hit 30 wins');
    }
}