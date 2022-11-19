function handleActive(ev) {
    // remove active class from all children
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active")
    });
    ev.target.classList.add("active");
};

const dots = document.querySelectorAll(".dots span");
// loop on every span
dots.forEach((span) => {

    span.addEventListener("click", (e) => {
        pages(span);
        handleActive(e);
    })
});

// bullets code in home section //
let homePageContainer = document.querySelector(".home .container");
let htmls = {
    html1: "<div class='paragraph'><p>Build your <br/><span>Dream</span> website.</p></div>",
    html2: '<div class="paragraph2"><p>A clean-code Responsive Website the way you want it to be, visit <a href="https://abdo1code.github.io" class="mainweb">My Main Website</a> for more info.</p></div><img src="./images/Untitled-3.png" alt="page2">',
    html3: '<div class="paragraph3"><p>With a Professional like me working on your UX UI Design I guarantee you the result you desire quickly.</p></div>'
  }
function pages(e) {
    if (e.dataset.page == "1") {
        homePageContainer.innerHTML = htmls.html1;
    }
    if (e.dataset.page == "2") {
        homePageContainer.innerHTML = htmls.html2;
    }
    if (e.dataset.page == "3") {
        homePageContainer.innerHTML = htmls.html3;
    }
}
// counter (skills section) //

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".projects");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
      el.style.transition = "2s";
      el.classList.remove("num")
      el.classList.add("numclass")
      el.classList.add("num")
    }
  }, 2000 / goal);
}

// show bars-button (minwidth: 1035px)

let headerbutton = document.querySelector("#headerbutton");
let container2 = document.querySelector(".container2")
headerbutton.addEventListener("click", function () {
  container2.classList.toggle("show")
});

let container2all = document.querySelectorAll(".navbarlinks2 a");
container2all.forEach(function(el) {
  el.addEventListener("click", () => container2.classList.toggle("show"));
});