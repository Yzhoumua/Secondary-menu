
function ej() {
    for (var i = 0; i < tp.length; i++) {
        tp[i].addEventListener('mouseover', function () {
            this.firstElementChild.style.display = "block";
           
            for(var j = 0; j < boxa.length; j ++){
                boxa[j].addEventListener('mouseover',function(){
                  this.firstElementChild.style.display = "block";
                },false)
            }
        
        }, false)
        tp[i].addEventListener('mouseout', function () {
            this.firstElementChild.style.display = "none";
            for(var j = 0; j < boxa.length; j ++){
                boxa[j].addEventListener('mouseout',function(){
                  this.firstElementChild.style.display = "none";
                },false)
            }
        }, false)
    }
}

