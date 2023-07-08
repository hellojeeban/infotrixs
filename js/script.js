function myFunction() {
  var x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
function changeImage(image) {
  image.src = 'assets/menuclose.png';
}
(function () {
  var words = ["Frontend developer","Photographer","Youtuber","Happy Person" ],
  i = 0;
  setInterval(function(){ $('#words').fadeOut(function(){
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    }); }, 3000)
})();