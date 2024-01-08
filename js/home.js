let openNav = document.getElementById("OpenNav");
let closeNav = document.getElementById("CloseNav");
let mobileNav =  document.getElementById("mobileNavMenu");

openNav.onclick = function(){
    mobileNav.style.display = "inline-block"
}

closeNav.onclick = function(){
    mobileNav.style.display = "none"
}

function myFunction(x) {
    if (x.matches) { // If media query matches
      mobileNav.style.display = "none";
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(min-width: 910px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });










// age calculation

let userAgeInput = document.getElementById("ageUerInput");
let resultText = document.getElementById("ageResult");

let toodler = document.getElementById("toodler");
let child = document.getElementById("child");
let teenager = document.getElementById("teenager");
let adult = document.getElementById("adult");
let middle_age = document.getElementById("middle_age");
let oldMan = document.getElementById("oldMan");


userAgeInput.onkeyup = function(){
    let age = Number(userAgeInput.value);
    let checkLength = userAgeInput.value;
    let result = ""

    if (isNaN(age)) {
      result = "Enter a number 🔢";
    } else if (checkLength.length == 0) {
        result = "Enter your age 😊";
    } else if (age >= 200) {
        result = "Don't lie 😒";
    } else if (age >= 100) {
        result = "Alhamdulillah, you are still alive ❤️";
    } else if (age >= 60) {
        result = "You are becoming an old man 🧓";
    } else if (age >= 40) {
        result = "You are a Middle-aged Adult 🧔🏻";
    } else if (age >= 18) {
        result = "You are a Young Adult 👩🏻‍💼";
    } else if (age >= 13) {
        result = "You are a Teenager 🧑🏻‍🎓";
    } else if (age >= 6) {
        result = "You are a Child 🧒";
    } else if (age >= 0) {
        result = "You are an Infant/Toddler 👶";
    } else {
        result = "Invalid age 🚫";
  }
  
  resultText.textContent = result;

  if(age >= 200) {
    toodler.style.display = "inline-block"
    child.style.display = "inline-block"
    teenager.style.display = "inline-block"
    adult.style.display = "inline-block"
    middle_age.style.display = "inline-block"
    oldMan.style.display = "inline-block"
  }else if (checkLength.length == 0) {
    toodler.style.display = "inline-block"
    child.style.display = "inline-block"
    teenager.style.display = "inline-block"
    adult.style.display = "inline-block"
    middle_age.style.display = "inline-block"
    oldMan.style.display = "inline-block"
} else if (age >= 60) {
    toodler.style.display = "none"
    child.style.display = "none"
    teenager.style.display = "none"
    adult.style.display = "none"
    middle_age.style.display = "none"
    oldMan.style.display = "inline-block"
  } else if (age >= 40) {
    toodler.style.display = "none"
    child.style.display = "none"
    teenager.style.display = "none"
    adult.style.display = "none"
    middle_age.style.display = "inline-block"
    oldMan.style.display = "none"
  } else if (age >= 18) {
    toodler.style.display = "none"
    child.style.display = "none"
    teenager.style.display = "none"
    adult.style.display = "inline-block"
    middle_age.style.display = "none"
    oldMan.style.display = "none"
  } else if (age >= 13) {
    toodler.style.display = "none"
    child.style.display = "none"
    teenager.style.display = "inline-block"
    adult.style.display = "none"
    middle_age.style.display = "none"
    oldMan.style.display = "none"
  } else if (age >= 6) {
    toodler.style.display = "none"
    child.style.display = "inline-block"
    teenager.style.display = "none"
    adult.style.display = "none"
    middle_age.style.display = "none"
    oldMan.style.display = "none"
  } else if(age >= 0) {
    toodler.style.display = "inline-block"
    child.style.display = "none"
    teenager.style.display = "none"
    adult.style.display = "none"
    middle_age.style.display = "none"
    oldMan.style.display = "none"
}
}



