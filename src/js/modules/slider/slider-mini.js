import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor (container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorizeSlides () {
    for(let slide of this.slides) {
      if(this.activeClass) {
      slide.classList.remove(this.activeClass);}
      
      if(this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    }
    // this.slides.forEach((slide)=>{
    //   slide.classList.remove(this.activeClass);
    //   if(this.animate) {
    //     this.slides[0].querySelector('.card-tite').style.opacity = '0.4';
    //     this.slides[0].querySelector('.card__controls-arrow').style.opacity = '0';
    //   }
    // });
    if(this.activeClass || !this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }

    if(this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide () {
    if(this.slides[1].tagName == 'BUTTON' && this.slides[2].tagName =='BUTTON') {
      this.container.appendChild(this.slides[0]); //slide
      this.container.appendChild(this.slides[0]); //btn
      this.container.appendChild(this.slides[0]);
      this.decorizeSlides(); //btn
    } else if (this.slides[1].tagName =='BUTTON') {
      this.container.appendChild(this.slides[0]); //slide
      this.container.appendChild(this.slides[1]);
      this.decorizeSlides(); //btn
    } else {
      this.container.appendChild(this.slides[0]);
      this.decorizeSlides();
    }
  }

  bindTriggers() {

    this.next.addEventListener('click', () => this.nextSlide());

    this.prev.addEventListener('click', ()=>{
      for(let i=this.slides.length-1; i>0; i--) {
        if(this.slides[i].tagName !== 'BUTTON') {
          let active = this.slides[i];
          // this.container.insertBefore(active, this.slides[0]);
          this.container.prepend(active);
          this.decorizeSlides();
          break;
        }
      }
    });
  }

  init() {
    try{
      this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      overflow: hidden;
      `;

      this.bindTriggers();
      this.decorizeSlides();

      if(this.autoplay) {
        setInterval(() => this.nextSlide(), 5000);
      }
    } catch(e) {}
  }
}