//showImg shows the image and hideImg hides the image
function showImg(x) {
    x.style.opacity = 1;                   
    x.style.height = "300px";
    x.style.width = "450px";
  }
  
  function hideImg(x) {
    x.style.opacity = 0;
    x.innerHTML = "text";
  }