window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.zIndex = "100";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("navbar").style.marginTop = "-76px";
  } else {
    document.getElementById("navbar").style.marginTop = "0px";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("logo").style.fontSize = "1.25rem";
    document.getElementById("navbar").style.position = "relative";
  }
}
