export const ripple = () => {
  var rippleContainer = document.querySelectorAll("#ripple-container");
  for (let i = 0; i < rippleContainer.length; i++) {
    rippleContainer[i].addEventListener("click", (e) => {
      let ripples = document.createElement("span");
      var diameter = Math.max(
        rippleContainer[i].clientHeight,
        rippleContainer[i].clientWidth
      );
      var radius = diameter / 2;
      ripples.style.width = ripples.style.height = `${diameter}px`;
      ripples.style.left = `${parseInt(
        rippleContainer[i].parentNode.scrollLeft +
          e.pageX -
          rippleContainer[i].offsetLeft -
          radius
      )}px`;
      if (rippleContainer[i].getAttribute("class") == "ripple fixed-inner") {
        ripples.style.top = `${parseInt(
          e.clientY - rippleContainer[i].getBoundingClientRect().top - radius
        )}px`;
        // console.log(
        //   `>>${e.clientY} - ${rippleContainer[i].offsetParent.offsetTop}`
        // );
      } else {
        ripples.style.top = `${parseInt(
          e.pageY - rippleContainer[i].offsetTop - radius
        )}px`;
      }
      rippleContainer[i].appendChild(ripples);
      setTimeout(() => {
        ripples.remove();
      }, 500);
    });
  }
};
