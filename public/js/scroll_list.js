"use strict";

// get button element
const mammal_l = document.getElementById('mammal-l');
const mammal_r = document.getElementById('mammal-r');
// const bird_l = document.getElementById('bird-l');
// const bird_r = document.getElementById('bird-r');
// const reptile_l = document.getElementById('reptile-l');
// const reptile_r = document.getElementById('reptile-r');

// get div element
const mammal = document.getElementById("mammal");
// const bird = document.getElementById("bird");
// const reptile = document.getElementById("reptile");

// get ul element
const mammal_list = document.getElementById('mammal-list');
// const bird_list = document.getElementById('bird-list');
// const reptile_list = document.getElementById('reptile-list');

// mammal lists
show_hide(mammal, mammal_l, mammal_r);
scroll_list(mammal_l, mammal_list, -400);
scroll_list(mammal_r, mammal_list, 400);

// bird lists
show_hide(bird, bird_l, bird_r);
// scroll_list(bird_l, bird_list, -400);
// scroll_list(bird_r, bird_list, 400);

// reptile lists
show_hide(reptile, reptile_l, reptile_r);
// scroll_list(reptile_l, reptile_list, -400);
// scroll_list(reptile_r, reptile_list, 400);



// create function to make buttons dynamic
function show_hide(box, prev, next) {
  box.addEventListener('mouseenter', function () {
    prev.style.display = "block";
    next.style.display = "block";
  })
  box.addEventListener('mouseleave', function () {
    prev.style.display = "none";
    next.style.display = "none";
  })
}

// create function to scroll lists
function scroll_list(left, lists, n) {
  left.addEventListener('click', function () {
    lists.scrollBy({
      left: n,
      behavior: "smooth"
    });
  })
}
