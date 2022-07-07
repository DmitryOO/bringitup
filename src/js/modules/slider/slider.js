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
    try{this.btns = this.container.querySelectorAll(btns);
    } catch(e) {}
    this.slideIndex = 1;
    try{this.slides = this.container.children;} catch(e) {}
    
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
  }
}