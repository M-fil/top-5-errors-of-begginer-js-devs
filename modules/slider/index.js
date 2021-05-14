class MainSlider {
  constructor(numberOfSlides) {
    this.numberOfSlides = numberOfSlides;
  }

  renderSlides(container) {
    for (let i = 0; i < this.numberOfSlides; i += 1) {
      const slideHTML = document.createElement('div');
      slideHTML.textContent = i;
      container.append(slideHTML);
    }
  }

  render() {
    const sliderHTML = document.createElement('footer');
    this.renderSlides(sliderHTML);
    return sliderHTML;
  }
}

export default MainSlider;
