class Footer {
  constructor() {
    this.footerHTML = document.createElement('footer');
  }

  render() {
    this.footerHTML.className = 'footer-container';
    return this.footerHTML;
  }
}

export default Footer;
