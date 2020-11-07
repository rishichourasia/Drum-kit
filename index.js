var noOfButtons = document.querySelectorAll(".drum").length;

for ( var i = 0; i<noOfButtons; i++) { 

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimations(buttonInnerHTML);
});

}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimations(event.key);
});

function makeSound(key){
    switch (key) {
        case "w" :
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l" :
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML); 
    }
}

        function buttonAnimations(currentkey){

            var activeButton = document.querySelector("." + currentkey);

            activeButton.classList.add("pressed");

            setTimeout(function(){
                activeButton.classList.remove("pressed");
            },120);
        }