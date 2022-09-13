var phrases = ["If you're going to try Go All the All","What we're doing in Life echos in Eternety","I will do something that was never seen before","You don't know me Soon","Can't hurt me"
,"God will help you"];
var addPhrase = document.getElementById("phrase-change");

var buttonClicked = document.getElementById("button-clicked");


buttonClicked.addEventListener("click",() => {

    let randomNumber = Math.floor( Math.random() * phrases.length);
    let chosePhrase = phrases[randomNumber];
    addPhrase.innerText = chosePhrase;
});