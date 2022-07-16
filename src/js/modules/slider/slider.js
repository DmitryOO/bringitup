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
    try{this.prev = document.querySelectorAll(prev);
    }catch(e){}
    try{this.next = document.querySelectorAll(next);
    } catch(e) {}
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
  }
}