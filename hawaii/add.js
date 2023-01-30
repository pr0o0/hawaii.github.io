let header = document.querySelector("header");
let t = document.querySelector("div h1");
let a = document.querySelectorAll("header div.nav ul li a ");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    (header.style.backgroundColor = "black"),
      (header.style.opacity = "60%"),
      (t.style.color = "white"),
      (a[0].style.color = "green"),
      (a[1].style.color = "green"),
      (a[2].style.color = "green"),
      (a[3].style.color = "green");
    // // a.forEach((a) => {
    // //   a.style.color = "pink";
    // });
  } else {
    header.style = "";
    t.style.color = "black";
    a.forEach((a) => {
      a.style.color = "rgb(0,200,200)";
    });
  }
});
