import './styles/styles.scss';
import { Carousel } from './modules/carousel';
import { toggleDropdown } from './modules/toggleDropdown';

toggleDropdown.setupDropdown('.dropdown-btn', '.dropdown-content');

const carouselElement = document.querySelector('.carousel');
const carousel = new Carousel(carouselElement);
