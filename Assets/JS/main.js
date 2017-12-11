(function(){


  var $nameDiv = document.getElementById('name-box');

  // TODO: Detect browser resizes and reset the height
  var viewportHeight = window.innerHeight;
  var viewportWidth = window.innerWidth;

  window.addEventListener('mousemove', handleMouseMove);

  function handleMouseMove(event) {

    var percentX = findPercentPosition(viewportWidth, event.pageX);
    var percentY = findPercentPosition(viewportHeight, event.pageY);

    rotateDiv($nameDiv, percentX, percentY);
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
    console.log(degrees);
    return degrees;

  }

  function getTransformValue(percentX, percentY) {

    var degrees = getDegRotate(percentX, percentY);
    return 'rotateY' + '(' + degrees.x + 'deg) ' + 'rotateX' + '(' + degrees.y + 'deg)';

  }

  function rotateDiv(div, percentX, percentY) {
    div.style.transform = getTransformValue(percentX, percentY);
  }


 /****** Text Shadow *****
  * Example text-shadow: 1px 1px 2px black;
 */

 function getPxMovement(percentX, percentY) {

   var MULTIPLIER = (1/5);
   var px = {
     x: ((percentX - 50) * -1) * MULTIPLIER,
     y: ((percentY - 50) * -1) * MULTIPLIER
   }
   console.log(px);
   return px;

 }

 function getShadowCss(percentX, percentY, blurPx) {

   var pixles = getPxMovement(percentX, percentY);
   var COLOR = '#006b5d';
   return pixles.x + 'px ' + pixles.y + 'px ' + blurPx + 'px ' + COLOR;
 }

 function cssShadow(div, percentX, percentY) {
   div.style.textShadow = getShadowCss(percentX, percentY, 2);
 }

})();
