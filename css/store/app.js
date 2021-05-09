const buttons = document.querySelectorAll(".x");
buttons.forEach(function(x){
    if (x.className === "list-group-item x active2"){
        x.style.opacity = "1"
    }
    else{
        x.style.opacity = "0.6"
    }
        
        x.addEventListener("click",function(e) {
            var current = document.getElementsByClassName("active2");
            current[0].style.opacity = "0.6";
            current[0].className = current[0].className.replace(" active2", "");
            this.className += " active2";
            this.style.opacity = "1";
        })    
 });
 let count=0;
 function dumb(number){
    for (let index = 0; index < number; index++) {
        addProduct();
     }
     addButton();
     count += number;
     let load = document.querySelector(".btn-lg")
     load.addEventListener("click", function(e) {
        if( count < 32){
            load.remove();
            dumb(8)
        }
     })
 }
 
 dumb(16);
 
 

 


 