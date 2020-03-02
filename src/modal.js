// var span = document.querySelector('#time-now');

// const sayHello = (message) => {
//    span.innerHTML = message;
// }

// export default sayHello;
 


export default class ModalWC extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        #button {
          height: 40px;
          width: 100px;
          background-color: #0275d8;
          color: #FFFFFF;
        }
      </style>
     <button id="button">Open Modal</button>`;
  }
}


