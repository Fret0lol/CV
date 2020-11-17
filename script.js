//  Navbar Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.getElementById("navWeb").style.backgroundColor = "#06101E";
    document.getElementById("navWeb").style.padding = "0 0";
    document.getElementById("navWeb").style.borderBottom = "1px solid #FFD66D";
    document.getElementById("navWeb").style.transition = "padding 0.5s";
  } else {
    document.getElementById("navWeb").style.backgroundColor = "transparent";
    document.getElementById("navWeb").style.padding = "1vh 0";
    document.getElementById("navWeb").style.borderBottom = "none";
  }
}

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.25,1],
    easing: "easeOutExpo",
    duration: 800
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width * 1.2],
    easing: "easeOutExpo",
    duration: 800,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 900,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 7000
  });