document.querySelector(".playerSlide-switcher-prev").addEventListener('click', function  (){
   function moveClass (className, activeClassName){
      let active = document.querySelector('.'+ activeClassName);
      let prev = active.previousElementSibling;

         if (prev && prev.classList.contains(className)) {
         active.classList.remove(activeClassName);
         prev.classList.add(activeClassName);
   }};
   moveClass("timeLine-element", "timeLine-element-active")
   moveClass("playerSlide", "playerSlide-active");
});

document.querySelector(".playerSlide-switcher-next").addEventListener('click', function  (){
   function moveClass (activeClassName){
      let active = document.querySelector('.'+ activeClassName);
      let next = active.nextElementSibling

         if (next) {
         active.classList.remove(activeClassName);
         next.classList.add(activeClassName);
   }};
   moveClass("timeLine-element-active")
   moveClass("playerSlide-active");
});