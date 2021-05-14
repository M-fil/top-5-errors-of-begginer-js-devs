import Footer from '../footer';
import MainSlider from '../slider';

class App {
  constructor() {
    const numberOfSlides = 10;
    this.footer = new Footer();
    this.mainSlider = new MainSlider(numberOfSlides);
  }

  render() {
    const mainContainer = document.createElement('div');
    document.body.appendChild(mainContainer);
    mainContainer.append(this.footer.render());
    mainContainer.append(this.mainSlider.render());
  }

  run() {
    this.render();
  }
}

export default App;
