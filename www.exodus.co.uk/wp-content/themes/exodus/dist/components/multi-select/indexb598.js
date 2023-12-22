(()=>{const{customElements:e,HTMLElement:t,Choices:l}=window;e.define("ex-multi-select",class extends t{constructor(){super(),this.optionsSelected=0,this.selectEl=this.querySelector("select"),this.overlay=this.querySelector(".multi-select__overlay"),this.placeholder=this.getAttribute("placeholder"),this.isMultiple=!!this.getAttribute("is-multiple"),this.hideOptionChips=!!this.getAttribute("hide-option-chips"),this.options=JSON.parse(this.getAttribute("options")),this.sortOptions=!!this.getAttribute("sort-options"),this.selectedOptions=JSON.parse(this.getAttribute("selected-options")),this.selectAllOptionLabel=this.getAttribute("select-all-label"),this.hasSelectAllOption=this.getAttribute("show-select-all-option"),this.overlay&&this.isMultiple&&this.overlay.addEventListener("click",this.handleOverlayClick.bind(this)),this.initializeMultiSelect(),this.togglePlaceholder.bind(this)()}static get observedAttributes(){return["options","loading"]}attributeChangedCallback(e,t,l){if("options"===e){const e=JSON.parse(l);if(!e.length)return;var i;if(this.options=e,this.hasSelectAllOption&&e.unshift({label:this.selectAllOptionLabel,value:-1}),this.select.clearStore(),this.select.setChoices(e,"value","label",!0),this.isMultiple)this.selectedChoicesValues=this.getSelectedValuesFromOptions(e),this.optionsSelected=null===(i=this.selectedChoicesValues)||void 0===i?void 0:i.length,this.hasSelectAllOption&&this.optionsSelected===e.filter((e=>!e.disabled)).length-1&&this.select.setChoiceByValue(-1),this.showSelectedOptionCount();this.togglePlaceholder()}if("loading"===e&&this.placeholder){let e="";"true"===l?(this.select.clearStore(),this.select.disable()):(e=this.select._currentState.choices.length?this.placeholder:"Not available",this.select.enable()),this.setAttribute("placeholder",e),this.isMultiple?setTimeout((()=>{this.togglePlaceholder()}),300):this.togglePlaceholder()}}getSelectedValuesFromOptions(e){if(!this.isMultiple)return[];const t=[];return e.forEach((e=>{if(e.choices&&Array.isArray(e.choices))e.choices.forEach((e=>{var l;e.selected&&t.push(null!==(l=null==e?void 0:e.value)&&void 0!==l?l:"")}));else if(e.selected){var l;t.push(null!==(l=null==e?void 0:e.value)&&void 0!==l?l:"")}})),t.filter(Number)}initializeMultiSelect(){var e,t;this.select=new l(this.selectEl,{removeItemButton:this.isMultiple,shouldSort:this.sortOptions,searchEnabled:!1,placeholder:!1,allowHTML:!0,renderSelectedChoices:"always",classNames:{containerInner:"multi-select__inner",input:"multi-select__input",listItems:"multi-select__list--multiple",disabledState:"multi-select--disabled",listDropdown:"multi-select__list--dropdown",group:"multi-select__group",groupHeading:"multi-select__group--heading"}}).setChoices(this.options,"value","label"),this.searchInputEl=this.querySelector('[type="search"]'),this.searchInputEl&&this.searchInputEl.addEventListener("input",this.togglePlaceholder.bind(this)),this.removedValue=null,this.select.passedElement.element.addEventListener("addItem",this.handleAddItem.bind(this)),this.select.passedElement.element.addEventListener("removeItem",this.togglePlaceholder.bind(this)),this.select.passedElement.element.addEventListener("choice",this.handleChoice.bind(this)),this.overlay&&this.isMultiple&&this.select.passedElement.element.addEventListener("showDropdown",this.handleShowDropdown.bind(this)),this.hideOptionChips&&this.select.passedElement.element.addEventListener("change",this.showSelectedOptionCount.bind(this)),this.selectedOptions&&this.select.setChoiceByValue(this.selectedOptions),this.optionsSelected=null===(e=this.select.getValue(!0))||void 0===e?void 0:e.length,this.selectListEl=this.querySelector(".multi-select__list--multiple"),null===(t=this.querySelector('input[name="search_terms"]'))||void 0===t||t.removeAttribute("name"),this.multiSelect=this.select}togglePlaceholder(){var e,t,l;let i=this.select.getValue(!0);Array.isArray(i)&&(i=i.filter((e=>e>0))),this.optionsSelected=null===(e=i)||void 0===e?void 0:e.length,(null===(t=this.select)||void 0===t||null===(t=t.getValue(!0))||void 0===t?void 0:t.length)>0||(null===(l=this.searchInputEl)||void 0===l||null===(l=l.value)||void 0===l?void 0:l.length)>0?this.classList.remove("multi-select--placeholder"):this.classList.add("multi-select--placeholder")}handleAddItem(){this.removedValue&&(this.select.removeActiveItemsByValue(this.removedValue),this.removedValue=null),this.togglePlaceholder()}showSelectedOptionCount(){var e,t;this.textNode&&(null===(t=this.selectListEl)||void 0===t||null===(t=t.parentElement)||void 0===t||t.removeChild(this.textNode),this.textNode=null);this.optionsSelected&&(this.textNode=document.createTextNode("".concat(this.optionsSelected," option selected")),null===(e=this.selectListEl)||void 0===e||null===(e=e.parentElement)||void 0===e||e.appendChild(this.textNode))}handleChoice(e){var t;const{detail:l}=e;if(null==l||null===(t=l.choice)||void 0===t||!t.value)return;const i=this.select.getValue(!0);this.isMultiple&&-1===l.choice.value&&(null!=i&&i.includes(l.choice.value)?this.select.removeActiveItems():this.options.forEach((e=>{e.choices?e.choices.forEach((e=>{e.disabled||this.select.setChoiceByValue(e.value)})):e.value&&!e.disabled&&-1!==e.value&&this.select.setChoiceByValue(e.value)}))),null!=i&&i.includes(l.choice.value)&&(this.select.removeActiveItemsByValue(l.choice.value),this.removedValue=l.choice.value,this.isMultiple&&null!=i&&i.includes(-1)&&this.select.removeActiveItemsByValue(-1))}handleShowDropdown(){this.overlay.classList.add("multi-select__overlay--show")}handleOverlayClick(e){this.select.hideDropdown(),this.overlay.classList.remove("multi-select__overlay--show"),e.stopPropagation()}})})();