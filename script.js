var typed = new Typed(".text", {
  strings: ["frontend developer", "UI/UX developer", "Web Developer"],
  typeSpeed: 30,
  backSpeed: 30,
  backDelay: 100,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-line");
  progressBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-percentage");
    bar.querySelector("span").style.width = percentage + "%";
  });

  const circularProgress = document.querySelectorAll(".circular");
  circularProgress.forEach((circle) => {
    const percentage = circle.getAttribute("data-percentage");
    const rightBar = circle.querySelector(".bar.right .progress");
    const leftBar = circle.querySelector(".bar.left .progress");

    if (percentage > 50) {
      const rotateValue = (percentage - 50) * 3.6;
      rightBar.style.transform = "rotate(180deg)";
      leftBar.style.transform = `rotate(${rotateValue}deg)`;
    } else {
      const rotateValue = percentage * 3.6;
      rightBar.style.transform = `rotate(${rotateValue}deg)`;
    }
  });
});
