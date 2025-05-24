const stringforparam = window.location.search;
const params = new URLSearchParams(stringforparam);
const mobileallow = params.get("m");
  function loadturtles() {
     const exampleturtle = document.getElementById("examplepost");
  let totalposts = 1;
  let poststofetch = 8;
  fetch("/posts.json")
    .then((res) => res.json())
    .then((data) => {
      totalposts = data.length;
      if (totalposts < 8) {
        poststofetch = totalposts;
      }
      const shuffledobjects = data.sort(() => 0.5 - Math.random());
      const objectsfromfeed = shuffledobjects.slice(0, poststofetch);
      objectsfromfeed.forEach((turtle) => {
        const newturtle = exampleturtle.cloneNode(true);
        newturtle.id = turtle.t;
        newturtle.style = "";
        newturtle.src = `/library/posts/index.html?t=${btoa(turtle.t)}&i=${btoa(turtle.i)}`;
        exampleturtle.parentNode.appendChild(newturtle);
      });
    });
  }
document.addEventListener("DOMContentLoaded", function () {
  loadturtles();
    // mobile stuff
  if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) && mobileallow === null) {
    window.location.href = "/mobile.html";
  } else if (mobileallow === "1") {
    const postbutton = document.querySelector(".postbutton");
        postbutton.remove();
        document.querySelector(".logo").textContent = "Turtle Net: Mobile"
        document.body.style.textAlign = "center";
  }
  // mobile stuff end :O
  });
    window.addEventListener('message', (event) => { 
  if (event.origin === 'https://turtlenet.netlify.app') {
    window.location.href = event.data.replace("index.html", "big.html");
  } 
});
