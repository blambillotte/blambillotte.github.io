(function(){


  var $nameDiv = document.getElementById('name-box');

  // TODO: Detect browser resizes and reset the height
  var viewportHeight = window.innerHeight;
  var viewportWidth = window.innerWidth;

  window.addEventListener('mousemove', handleMouseMove);

  function handleMouseMove(event) {

    var mouseX = event.pageX;
    var mouseY = event.pageY;

    var percentX = findPercentPosition(viewportWidth, mouseX);
    var percentY = findPercentPosition(viewportHeight, mouseY);

    rotateDiv($nameDiv, percentX, percentY);

  }

  function findPercentPosition(totalDist, mousePostion) {

    var percent = Math.floor((mousePostion / totalDist) * 100);
    return percent;

  }

  // Full Y rotation:  transform: rotateY(50deg)
  function getDegRotate(percentX, percentY) {

    var degrees = {
      x: percentX - 50,
      y: (percentY - 50) * -1
    }
    return degrees;

  }

  function getTransformValue(percentX, percentY) {

    var degrees = getDegRotate(percentX, percentY);
    return 'rotateY' + '(' + degrees.x + 'deg) ' + 'rotateX' + '(' + degrees.y + 'deg)';

  }

  function rotateDiv(div, percentX, percentY) {
    div.style.transform = getTransformValue(percentX, percentY);
  }


})();
