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

// show/hide sidebar
const menu = document.querySelector(".menu");
mainBar.addEventListener("click", (e) => {
  if (menu.classList.contains("-left-full")) {
    menu.classList.remove("-left-full");
    menu.classList.add("left-0");
  } else {
    menu.classList.remove("left-0");
    menu.classList.add("-left-full");
  }
});
// show/hide sidebar

//tab-big screen

const bigTab = document.querySelectorAll(".big-tab-item");
const bigContents = document.querySelectorAll(".big-tab-body");

console.log(bigTab);

for (let i = 0; i < bigTab.length; i++) {
  bigTab[i].addEventListener("click", (e) => {
    bigTab.forEach((tab) => {
      tab.classList.remove("bg-accetnLight");
      tab.classList.remove("border-r-2");
      tab.classList.remove("border-heighlight");
    });

    bigTab[i].classList.add("bg-accetnLight");
    bigTab[i].classList.add("border-r-2");
    bigTab[i].classList.add("border-heighlight");

    bigContents.forEach((c) => {
      c.style.visibility = "hidden";
      c.style.opacity = "0";
      c.style.transform = "scale(0.95)";
    });

    bigContents[i].style.visibility = "visible";
    bigContents[i].style.opacity = "1";
    bigContents[i].style.transform = "scale(1)";
  });
}
bigTab[0].click();

//tab-big screen

//tab

const tabs = document.querySelectorAll(".tab-item");
const contents = document.querySelectorAll(".tab-body");

// console.log(tabs);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("bg-accent");
      tab.classList.remove("border-b");
      tab.classList.remove("border-heighlight");
      tab.classList.remove("font-bold");
    });

    tabs[i].classList.add("bg-accent");
    tabs[i].classList.add("border-b");
    tabs[i].classList.add("border-heighlight");
    tabs[i].classList.add("font-bold");

    contents.forEach((c) => {
      c.style.visibility = "hidden";
      c.style.opacity = "0";
      c.style.transform = "scale(0.95)";
    });

    contents[i].style.visibility = "visible";
    contents[i].style.opacity = "1";
    contents[i].style.transform = "scale(1)";
  });
}
tabs[0].click();

//tab

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    dots: true,
    lazyLoad: true,
    smartSpeed: 1000,
  });
});

//add active class on nav item

// const item = document.querySelectorAll(".nav-item");

// item.forEach((b) => {
//   b.addEventListener("click", (e) => {
//     item.forEach((el) => el.classList.remove("font-bold"));
//     b.classList.add("font-bold");
//   });
// });
// item[0].click();

//sticky menu
function stickyElement(e) {
  var navbar = document.querySelector(".navigation");
  var scrollValue = window.scrollY;

  if (scrollValue > 0) {
    navbar.classList.add("fixed");
    // navbar.classList.add("translate-y-0");
  } else if (scrollValue < 0) {
    navbar.classList.remove("fixed");
    // navbar.classList.remove("translate-y-0");
  }
}

window.addEventListener("scroll", stickyElement);

// particle js implementation
particlesJS("particles-js", {
  particles: {
    number: {
      value: 52,
      density: {
        enable: true,
        value_area: 631.3280775270874,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
// particle js implementation
