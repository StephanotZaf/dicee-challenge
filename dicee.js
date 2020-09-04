var image2 = document.getElementsByClassName("img2");

// console.log(elem2);
    var i = Math.floor(Math.random()*6)+1;
    console.log(i);

    var elem = document.querySelector("img").setAttribute("src", "images/dice"+i+".png");

    var j = Math.floor(Math.random()*6)+1;

    console.log(j);
    var elem2 = document.querySelectorAll('img')[1].setAttribute("src", "images/dice"+j+".png");

    if(i>j){
        var win1 = document.querySelector("h1").innerHTML="Player 1 wins";
    }
    else if(i==j){
        document.querySelector("h1").innerText="Draws";
    }
    else {
        document.querySelector("h1").innerHTML="Player 2 wins";
    }

