class CariData extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = `<form class="form-inline my-2 my-lg-0 cari">
        <input id="cari" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button id="submit" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>`
	}
}
customElements.define("cari-data", CariData);