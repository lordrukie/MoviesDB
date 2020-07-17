class footer extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = `<p class="text-center bg-info text-light pt-4 pb-4 mt-5 clr">&#169; 2020 by <a class="tebal">Yudistira Arya</a>. All Rights Reserved</p>`
	}
}
customElements.define("footer-ku", footer);