window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.background = "crimson";
    document.getElementById("navbar").style.padding = "10px 0";

    } else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.padding = "30px 0";

    }
}