let letters = document.getElementsByClassName("letter");
for(let b = 0; b < letters.length; b++){
    document.getElementsByClassName("letter")[b].addEventListener("mouseenter", function(){
        document.getElementsByClassName("letter")[b].classList.add("color");
    });

    document.getElementsByClassName("letter")[b].addEventListener("mouseout", function(){
        document.getElementsByClassName("letter")[b].classList.remove("color");
    })
}