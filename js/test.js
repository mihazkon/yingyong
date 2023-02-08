var lis = document.querySelectorAll('nav li');
var items = document.querySelectorAll(".item");
    for(var i = 0; i < lis.length; i++){
        lis[i].setAttribute("index", i);
        lis[i].onclick = function(){
            for(var j = 0; j < lis.length; j++){
                lis[j].className = "";
            }
            this.className = "current";
            var index = this.getAttribute("index")
            for (var k = 0; k < items.length; k++){
                items[k].style.display = "none";
            }
            items[index].style.display = "block";
        }
    }
var b_1 = document.querySelectorAll('.b-1');
var c_2 = document.querySelectorAll('.c-2');
    for(var i = 0; i < b_1.length; i++){
        b_1[i].setAttribute("index",i);
        b_1[i].onclick = function(){
            for(var j = 0; j < b_1.length; j++){
                if(this == b_1[j]){
                    this.style.background = "rgb(84,174,247)";
                }else{
                    b_1[j].className = "";
                    b_1[j].style.background = "rgb(238,241,246)";
                }
            }
            this.className = "b-1";
            var index = this.getAttribute("index")
            for (var k = 0; k < c_2.length; k++){
                c_2[k].style.display = "none";
            }
            c_2[index].style.display = 'block';
        }
    }
var dropdown = document.getElementsByClassName("nav_dropdown1");  
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
}
var dropdown = document.getElementsByClassName("nav_dropdown2");  
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
}