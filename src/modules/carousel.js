import { images } from './assetsLoader';

export class Carousel {
  constructor(carouselElement, interval = 5000) {
    this.carouselElement = carouselElement;
    this.images = carouselElement.querySelectorAll('.carousel-images img');
    this.prevButton = carouselElement.querySelector('.prev');
    this.nextButton = carouselElement.querySelector('.next');
    this.bulletContainer = carouselElement.querySelector('.bullets');

    this.currentIndex = 0;
    this.interval = interval;
    this.autoSlideInterval = null;

    this.createBullets();

    this.prevButton.addEventListener('click', () => {
      this.showPreviousImage();
      this.resetAutoSlide();
    });
    this.nextButton.addEventListener('click', () => {
      this.showNextImage();
      this.resetAutoSlide();
    });
    this.startAutoSlide();
  }

  createBullets() {
    this.images.forEach((image, index) => {
      const bullet = document.createElement('div');
      bullet.classList.add('bullet');

      bullet.addEventListener('click', () => this.goToImage(index));
      this.bulletContainer.appendChild(bullet);
    });
  }
  goToImage(index) {
    this.images[this.currentIndex].classList.add('hidden');
    this.currentIndex = index;
    this.images[this.currentIndex].classList.remove('hidden');
    this.resetAutoSlide();
    this.updatebullet();
  }

  updatebullet() {
    const bullets = this.bulletContainer.querySelectorAll('.bullet');
    bullets.forEach((bullet, index) => {
      if (index === this.currentIndex) {
        bullet.classList.add('active');
      } else {
        bullet.classList.remove('active');
      }
    });
  }

  showPreviousImage() {
    this.images[this.currentIndex].classList.add('hidden');
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.images[this.currentIndex].classList.remove('hidden');
    this.updatebullet();
  }

  showNextImage() {
    this.images[this.currentIndex].classList.add('hidden');
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.images[this.currentIndex].classList.remove('hidden');
    this.updatebullet();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.showNextImage(), this.interval);
  }

  resetAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }
}
