// document.querySelector(".playerSlide-switcher-prev").addEventListener("click", function () {
//    
//   
// });

document.querySelector(".playerSlide-switcher-prev").addEventListener("click", function () {
   moveClass('playerSlide-active', 'previousElementSibling');
   const elementIsBack = moveClass('timeLine-element-active', 'previousElementSibling');
   if (elementIsBack) {
      elementIsBack.querySelector(".timeLine-element-inner").style.width = "";
   }
});


document.querySelector(".playerSlide-switcher-next").addEventListener("click", next);



function moveClass(className, method, pred) {
   const active = document.querySelector("." + className);
   const next = active[method];
   if (pred && !pred(active)) {
      return;
   }


   if (next) {
      active.classList.remove(className);
      next.classList.add(className);
      return active; // true
   }
   return null;
}


function next() {
   moveClass('playerSlide-active', 'nextElementSibling');
   const elementIsBack = moveClass('timeLine-element-active', 'nextElementSibling');
   if (elementIsBack) {
      elementIsBack.querySelector(".timeLine-element-inner").style.width = "";
   }
};


const step = 1;
setInterval(() => {
   const active = document.querySelector(".timeLine-element-active").querySelector(".timeLine-element-inner");

   let w = parseFloat(active.style.width) || 0; /// if parsefloat(active.style.width) = false,  ===>> so we use "0" ("|| 0") 
   if (w === 100) {
      next();
      return;
   }
   active.style.width = String(w + step) + '%';
}, 2 * 1000 * step / 100);



