document.getElementById('rotateOnHover').addEventListener('mouseenter', startRotation);
document.getElementById('rotateOnHover').addEventListener('mouseleave', reverseRotation);

function startRotation() {
  const outerCircle = document.querySelector('.outer-circle');
  outerCircle.style.animation = 'rotateAnimation 2s linear';
}

function reverseRotation() {
  const outerCircle = document.querySelector('.outer-circle');
  outerCircle.style.animation = 'rotateAnimationReverse 2s linear';
}


const styleSheet = document.styleSheets[0];
styleSheet.insertRule('@keyframes rotateAnimationReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }', styleSheet.cssRules.length);
