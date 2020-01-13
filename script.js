function randomImg() {
    var randomNumber1 = Math.floor(Math.random() * 13) + 1;
    var randomcardn1 = Math.floor(Math.random() * 4) + 1;
    var imgName1
    var cardn1
    var valueofcard1

    // CARD NAMES FOR CARD 1
    if (randomcardn1 == 1) {
        cardn1 = "hearts"
    }
    else if (randomcardn1 == 2) {
        cardn1 = "spades"
    }
    else if (randomcardn1 == 3) {
        cardn1 = "diamonds"
    }
    else if (randomcardn1 == 4) {
        cardn1 = "clubs"
    }
    
    // CARD CONDITIONS FOR CARD 1
    if (randomNumber1 == 1) {
        valueofcard1 = 1
        imgName1 = "ace_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 2) {
        valueofcard1 = 2
        imgName1 = "2_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 3) {
        valueofcard1 = 3
        imgName1 = "3_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 4) {
        valueofcard1 = 4
        imgName1 = "4_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 5) {
        valueofcard1 = 5
        imgName1 = "5_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 6) {
        valueofcard1 = 6
        imgName1 = "6_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 7) {
        valueofcard1 = 7
        imgName1 = "7_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 8) {
        valueofcard1 = 8
        imgName1 = "8_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 9) {
        valueofcard1 = 9
        imgName1 = "9_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 10) {
        valueofcard1 = 10
        imgName1 = "10_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 11) {
        valueofcard1 = 11
        imgName1 = "jack_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 12) {
        valueofcard1 = 12
        imgName1 = "queen_of_" + cardn1 + ".png";
    } else if (randomNumber1 == 13) {
        valueofcard1 = 13
        imgName1 = "king_of_" + cardn1 + ".png";
    }

    var randomNumber2 = Math.floor(Math.random() * 13) + 1;
    var randomcardn2 = Math.floor(Math.random() * 4) + 1;
    var imgName2
    var cardn2
    var valueofcard2

    // CARD NAMES FOR CARD 2
    if (randomcardn2 == 1) {
        cardn2 = "hearts"
    }
    else if (randomcardn2 == 2) {
        cardn2 = "spades"
    }
    else if (randomcardn2 == 3) {
        cardn2 = "diamonds"
    }
    else if (randomcardn2 == 4) {
        cardn2 = "clubs"
    }
    
    // CARD CONDITIONS FOR CARD 2
    if (randomNumber2 == 1) {
        valueofcard2 = 1
        imgName2 = "ace_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 2) {
        valueofcard2 = 2
        imgName2 = "2_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 3) {
        valueofcard2 = 3
        imgName2 = "3_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 4) {
        valueofcard2 = 4
        imgName2 = "4_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 5) {
        valueofcard2 = 5
        imgName2 = "5_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 6) {
        valueofcard2 = 6
        imgName2 = "6_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 7) {
        valueofcard2 = 7
        imgName2 = "7_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 8) {
        valueofcard2 = 8
        imgName2 = "8_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 9) {
        valueofcard2 = 9
        imgName2 = "9_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 10) {
        valueofcard2 = 10
        imgName2 = "10_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 11) {
        valueofcard2 = 11
        imgName2 = "jack_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 12) {
        valueofcard2 = 12
        imgName2 = "queen_of_" + cardn2 + ".png";
    } else if (randomNumber2 == 13) {
        valueofcard2 = 13
        imgName2 = "king_of_" + cardn2 + ".png";
    }

    document.getElementById("imageCard1").src = "./assets/" + imgName1;
    document.getElementById("imageCard2").src = "./assets/" + imgName2;

    var total = valueofcard1 + valueofcard2
    document.getElementById("total").innerHTML = total
    if (total == 9) {
        document.getElementById("banner").innerHTML = "You Win!"
    }
    else{
        document.getElementById("banner").innerHTML = "You Lose!"
    }

    
}