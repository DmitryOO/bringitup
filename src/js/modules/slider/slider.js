export default class Slider {
  constructor({
    container = null,
    btns = null, 
    next = null, 
    prev = null,
    activeClass = '',
    animate,
    autoplay,} = {}) {
    this.container = document.querySelector(container);    
    this.btns = this.container.querySelectorAll(btns);
    this.slideIndex = 1;
    this.slides = this.container.children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
  }
}