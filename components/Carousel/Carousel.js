class Carousel {
  constructor(element) {
    this.element = element;
    this.rightButton = this.element.querySelector('.right-button');
    this.leftButton = this.element.querySelector('.left-button');
    this.currentIndex = 0;
    this.images = this.element.querySelectorAll('img');
    this.defaultImage = this.element.querySelector('img')
    this.defaultImage.style.display = 'block';
    this.rightButton.addEventListener('click', this.slideRight);
    this.leftButton.addEventListener('click', this.slideLeft);
  }

  slideLeft = () => {
    this.currentIndex < 1 ? this.currentIndex = 3 : this.currentIndex--
    this.images.forEach(image => image.style.display = 'none');
    this.images[this.currentIndex].style.display = 'block';
    TweenMax.from(this.images[this.currentIndex], 1, {x: 1500})
  }

  slideRight = () => {
    this.currentIndex > 2 ? this.currentIndex = 0 : this.currentIndex++
    this.images.forEach(image => image.style.display = 'none');
    this.images[this.currentIndex].style.display = 'block';
    TweenMax.from(this.images[this.currentIndex], 1, {x: -1500})
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
