(()=>{const{customElements:e,HTMLElement:t}=window;e.define("ex-footer-dropdown",class extends t{constructor(){super();this.querySelector("button").addEventListener("click",this.toggleCountriesDropdown.bind(this)),this.ownerDocument.defaultView.addEventListener("click",(e=>this.handleModalCloseOnClick(e))),this.ownerDocument.defaultView.addEventListener("keydown",(e=>this.handleModalCloseOnKeyDown(e)))}handleModalCloseOnClick(e){e.target.closest(".footer-dropdown")||this.closeModal()}handleModalCloseOnKeyDown(e){"Escape"===e.key&&(e.preventDefault(),this.closeModal())}closeModal(){this.parentNode.removeAttribute("active")}toggleCountriesDropdown(){this.parentNode.toggleAttribute("active")}})})();