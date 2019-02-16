// Run everything inside when the page is loaded
document.addEventListener('DOMContentLoaded', function() {

  // Selects the area where the image is
  const productImage = document.querySelector('.productImage');

  // Selects all divs with the class of 'swatch'
  const childrens = document.querySelectorAll('.swatch');

  // Selects just a single div with the class of 'swatch'
  const child = document.querySelector('.swatch');

  // Loops through swatches
  Array.prototype.forEach.call(document.querySelectorAll('.swatch'), function(
    element
  ) {
    element.onclick = addActive;
  });
  function addActive(element) {
    childrens.forEach(function(elem) {
      elem.classList.remove('active');
    });
    element = this;
    // Removes the 'active' class if it's already there
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    } else {
      // Adds the 'active' class and changes the image
      element.classList.add('active');
      productImage.style.backgroundImage = `url('../img/${element.classList[1]}.png')`;
    }
  }
});
