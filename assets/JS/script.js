const cross = document.getElementById("cross");
const comment = document.querySelector(".float__com");

cross.addEventListener("click", function() {
    comment.classList.add("cmtNone")
})

comment.addEventListener("click", function() {
    comment.classList.add("cmtHeight")
})

// setting sound
const setSounds = document.querySelectorAll(".setSound");
setSounds.forEach(element => {
  element.addEventListener("click", function() {
    setSounds.forEach(setSound => {
        setSound.classList.toggle("hidden");
    });
  });
});

const adminImg = document.querySelector(".adminImg");
const admine = document.querySelector(".admine");
const admin__logs = document.querySelector(".admin__logs");

adminImg.addEventListener("click", function() {
    admin__logs.classList.toggle("transform")
})

const mikeElements = document.querySelectorAll(".mike");
mikeElements.forEach(element => {
  element.addEventListener("click", function() {
    mikeElements.forEach(mikeElement => {
      mikeElement.classList.toggle("hidden");
    });
  });
});


const calls = document.querySelectorAll(".call");
calls.forEach(element => {
  element.addEventListener("click", function() {
    calls.forEach(call => {
      call.classList.toggle("hidden");
    });
  });
});

// settings sound js
const sounds = document.querySelectorAll(".sound");
sounds.forEach(element => {
  element.addEventListener("click", function() {
    sounds.forEach(sound => {
        sound.classList.toggle("hidden");
    });
  });
});

// full screen
// https://codepen.io/Spate/pen/OXNaQL


// sidebar js
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener("click", function() {
        sidebar.classList.toggle("sideOpen");
});


// window click js
window.addEventListener("click", function(event) {
    if (!sidebarBtn.contains(event.target) && !sidebar.contains(event.target)) {
        sidebar.classList.remove("sideOpen");
      }
    // if((!sidebar.contains(event.target)) ) {
    //     sidebar.classList.remove("sideOpen");
    // }

    if ((!admine.contains(event.target))  ) {
        admin__logs.classList.remove("transform")
      }

    
});  


