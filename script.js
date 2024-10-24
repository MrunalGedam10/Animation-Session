var t1 = gsap.timeline();
t1.to("#loader", {
  top: "-100vh",
  duration: 2,
  delay: 4,
  opacity: 0,
});
t1.from("#navbar", {
  y: -200,
  duration: 0.5,
  opacity: 0,
});
t1.from("#part1, #part2, #part3", {
  y: -100,
  duration: 0.2,
  stagger: 0.5,
});
t1.from("#main h1", {
  x: -1500,
  duration: 1,
  stagger: 0.5,
});
t1.from("#main img", {
  x: 100,
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
});

gsap.from("#page2 img", {
  scale: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    duration: 1,
  },
});
gsap.from("#page2part2 h1 span", {
  y: 100,
  stagger: 0.2,
  opacity: 0,
  yoyo: true,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top-center",
    end: "bottom-center",
    duration: 2,
  },
});
function cursor() {
  var page1cursor = document.querySelector("body");
  var cursor = document.querySelector("#cursor");
  page1cursor.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });
}
cursor();
