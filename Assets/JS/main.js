(function(){

  var $nameDiv = document.getElementById('name-box');
  var viewportWidth, viewportHeight;

  function getWindowSize() {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
  }

  //Call on Load & on window resize
  getWindowSize();
  window.onresize = getWindowSize;

  window.addEventListener('mousemove', handleMouseMove);

  function handleMouseMove(event) {

    var percentX = findPercentPosition(viewportWidth, event.pageX);
    var percentY = findPercentPosition(viewportHeight, event.pageY);

    cancelAnimationFrame(rotateRequest);
    var rotateRequest = window.requestAnimationFrame(rotateDiv($nameDiv, percentX, percentY));
    cssShadow($nameDiv, percentX, percentY);

  }

  function findPercentPosition(totalDist, mousePostion) {
    var percent = Math.floor((mousePostion / totalDist) * 100);
    return percent;
  }

  // Full Y rotation:  transform: rotateY(50deg)
  function getDegRotate(percentX, percentY) {

    var MULTIPLIER = (1/3);
    var degrees = {
      x: Math.floor((percentX - 50) * MULTIPLIER),
      y: Math.floor(((percentY - 50) * -1) * MULTIPLIER)
    }
    return degrees;
  }

  function getTransformValue(percentX, percentY) {

    var degrees = getDegRotate(percentX, percentY);
    return 'rotateY' + '(' + degrees.x + 'deg) ' + 'rotateX' + '(' + degrees.y + 'deg)';

  }

  function rotateDiv(div, percentX, percentY) {
    var transformValue = getTransformValue(percentX, percentY);
    div.style.transform = transformValue;
  }


 /****** Text Shadow *****
   Example text-shadow: 1px 1px 2px black;
 */

 function getPxMovement(percentX, percentY) {

   var MULTIPLIER = (1/5);
   var px = {
     x: Math.floor(((percentX - 50) * -1) * MULTIPLIER),
     y: Math.floor(((percentY - 50) * -1) * MULTIPLIER)
   }
   return px;
 }

 function getShadowCss(percentX, percentY, blurPx) {
   var COLOR = '#006b5d';
   var pixles = getPxMovement(percentX, percentY);
   return pixles.x + 'px ' + pixles.y + 'px ' + blurPx + 'px ' + COLOR;
 }

 function cssShadow(div, percentX, percentY) {
   div.style.textShadow = getShadowCss(percentX, percentY, 4);
 }


  console.log('%cNothing to see here... 🙈','color:blue; font-size: 20px; line-height: 35px');

})();
