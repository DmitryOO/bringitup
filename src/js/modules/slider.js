export default class Slider {
  constructor(page, btns) {
    this.page = document.querySelector(page);
    this.slides = Array.from(this.page.children);
    this.btns = this.page.querySelectorAll(btns);
    this.slideIndex = 1;
  }

  showSlides(n) {
    if (n > this.slides.length) {
        this.slideIndex = 1;
    }

    if (n < 1) {
        this.slideIndex = this.slides.length;
    }

    // for(let i = 0; i<=this.slides.length-1;i++) {
    //   this.slides[i].style.display = 'none';
    // }
    this.slides.forEach(slide => {
        slide.style.display = 'none';
        slide.classList.add('animated','slideInDown');
    });

    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlide (n) {
    this.showSlides(this.slideIndex +=n);
  }
  
  render () {
    this.btns.forEach((btn)=>{
      btn.addEventListener('click', ()=>{
        this.plusSlide(1);  
      });

      btn.parentNode.previousElementSibling.addEventListener('click', (e)=> {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.showSlides(this.slideIndex);
  }
}