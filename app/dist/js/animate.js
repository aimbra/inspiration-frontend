function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);

  node.addEventListener('mouseover', function () {
    node.classList.add('animated', animationName);
  });

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);
    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

animateCSS(
  '.fa-play-circle',
  'pulse'
);
