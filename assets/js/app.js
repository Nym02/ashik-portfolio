const bars = document.querySelectorAll("#first-bar");
const mainBar = document.querySelector("#main-bar");

mainBar.addEventListener("click", (e) => {
  if (mainBar.classList.contains("cc")) {
    for (let i = 0; i < bars.length; i++) {
      if (i == 0) {
        bars[i].style.transform = "rotate(45deg) translateY(14px)";
      }
      if (i == 1) {
        bars[i].style.transform = "rotate(0) translateX(100px)";
        bars[i].style.opacity = "0";
      }
      if (i == bars.length - 1) {
        bars[i].style.transform = "rotate(-45deg) translateY(-14px)";
      }
    }
    mainBar.classList.remove("cc");
  } else {
    for (let i = 0; i < bars.length; i++) {
      if (i == 0) {
        bars[i].style.transform = "rotate(0deg) translateY(0px)";
      }
      if (i == 1) {
        bars[i].style.transform = "translateX(0px)";
        bars[i].style.opacity = "1";
      }
      if (i == bars.length - 1) {
        bars[i].style.transform = "rotate(0deg) translateY(0px)";
      }
    }
    mainBar.classList.add("cc");
  }
});
