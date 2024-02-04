const accordion = document.getElementsByClassName("accordion");

Object.keys(accordion).forEach(key => {
  accordion[key].addEventListener("click", function() {
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.style.backgroundImage = "url('./assets/images/icon-plus.svg')";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.style.backgroundImage = "url('./assets/images/icon-minus.svg')";
      } 
    });
});

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }