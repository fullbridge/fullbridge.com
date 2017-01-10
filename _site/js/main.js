document.addEventListener('DOMContentLoaded', function() {
  var triggers = document.querySelectorAll(".trigger");

  for (var i = 0;i < triggers.length;i++) {
    triggers[i].addEventListener('click',function (){
      var actives = document.querySelectorAll(".active");

      for (var j = 0;j < actives.length;j++) {
       if (actives[j] != this) {
         actives[j].classList.remove("active");
       }

      }
      this.classList.toggle("active");
    });
  }
});
