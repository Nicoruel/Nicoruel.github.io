function ChangeSpinnerDirection() {
       let spinDiv = document.querySelector(".logospin");
       if (spinDiv.style.animationDirection == "") {

           spinDiv.style.animationDirection = "reverse";
       }
       else {
           spinDiv.style.animationDirection = "";
       }
   } 
function ChangeSpinnerSpeed() {
       let spinDiv = document.querySelector(".logospin");
       if (spinDiv.style.animationDuration == "") {

           spinDiv.style.animationDuration = "600ms";
       }
       else {
           spinDiv.style.animationDuration = "";
       }
   }