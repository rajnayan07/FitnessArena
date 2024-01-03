//Js
function home(){
  document.getElementById("homes").style.color="rgb(20, 251, 20)";
  document.getElementById("plans").style.color="white";
  document.getElementById("contacts").style.color="white";
  document.getElementById("blogs").style.color="white";
  document.getElementById("programs").style.color="white";

}

function program(){
  document.getElementById("homes").style.color="white";
  document.getElementById("plans").style.color="white";
  document.getElementById("contacts").style.color="white";
  document.getElementById("blogs").style.color="white";
  document.getElementById("programs").style.color="rgb(20, 251, 20)";

}
function plan(){
  document.getElementById("homes").style.color="white";
  document.getElementById("plans").style.color="rgb(20, 251, 20)";
  document.getElementById("contacts").style.color="white";
  document.getElementById("blogs").style.color="white";
  document.getElementById("programs").style.color="white";

}
function blog(){
  document.getElementById("homes").style.color="white";
  document.getElementById("plans").style.color="white";
  document.getElementById("contacts").style.color="white";
  document.getElementById("blogs").style.color="rgb(20, 251, 20)";
  document.getElementById("programs").style.color="white";

}
function contact(){
  document.getElementById("homes").style.color="white";
  document.getElementById("plans").style.color="white";
  document.getElementById("contacts").style.color="rgb(20, 251, 20)";
  document.getElementById("blogs").style.color="white";
  document.getElementById("programs").style.color="white";

}

// submit
function submit(){
  let name = document.getElementById("name");
  let Password = document.getElementById("Password");

  if(name.value == ""){
      alert("Please Enter Email")
  }else if(Password.value == ""){
      alert("Please Enter Password")
  }else{
      alert("Thanks For Join : " + name.value)
  }
}


let slide = document.querySelectorAll(".slider");
let card = document.querySelectorAll(".crd");
let connectBtn = document.getElementById("connect");
let count = 0 ;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun()
}, 2000)

