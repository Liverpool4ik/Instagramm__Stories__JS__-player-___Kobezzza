// document.querySelector(".playerSlide-switcher-prev").addEventListener("click", function () {
//    moveClass('.timeLine-element-active', previousElementSibling);
//    moveClass('.playerSlide-active', previousElementSibling)
// });

document.querySelector(".playerSlide-switcher-next").addEventListener("click", next);

function moveClass(className, method) {
   const active = document.querySelector("." + className);
   const next = active[method];

   if (next) {
      active.classList.remove(className);
      next.classList.add(className);
   }
}

function next() {
   moveClass('timeLine-element-active', 'nextElementSibling');
   moveClass('playerSlide-active', 'nextElementSibling')
}

const step = 1;

setInterval(() => {
   const active = document.querySelector(".timeLine-element-active").querySelector(".timeLine-element-inner");

   let w = parseFloat(active.style.width) || 0;

   if (w === 100) {
      active.style.width = "";
      next();
      return;
   }

   active.style.width = String(w + step) + '%';

}, 2 * 1000 * step / 100);









