const myAcc = document.getElementsByClassName("accordion-header");
let mySpan =document.getElementsByClassName("accardionSpan");

for (let i = 0; i < myAcc.length; i++) {
	myAcc[i].addEventListener("click", function() {
	 for(let j=0;j<myAcc.length;j++){
		if(i != j){
		let allOpen=myAcc[j].nextElementSibling;
		allOpen.style.display = "none";
		mySpan[j].innerHTML="+";
		}
	}
    this.classList.toggle("active");
    var myContent = this.nextElementSibling;
    if (myContent.style.display === "block") {
      myContent.style.display = "none";
	  mySpan[i].innerHTML="+";
	  
    } else {
      myContent.style.display = "block";
	  mySpan[i].innerHTML="-";
	  
    }
  });
}

