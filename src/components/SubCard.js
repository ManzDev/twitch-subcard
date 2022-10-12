import "./BackCard.js";

const AVATAR = "https://static-cdn.jtvnw.net/jtv_user_pictures/c5194af2-e0c9-4754-8ae3-3cdfc0b5f328-profile_image-150x150.png";
const NAME = "keniiis";
const MESSAGE = "Esto es un mensaje de ejemplo enviado en una suscripción. Aprovecho para saludar a mi madre.";

class SubCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 225px;
        --height: 350px;
        --fancy-gradient: linear-gradient(to bottom, #884ced, #ec1cce);

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .container {
        display: inline-flex;
        position: relative;
        width: var(--width);
        height: var(--height);
        transform-origin: 50% 50%;
        transform-style: preserve-3d;
        perspective: 3000px;
        transition: transform 1s;
        transform: rotateX(10deg) rotateY(0deg) rotateZ(-2deg);
      }

      :host(.flip) .container {
        transform: rotateX(10deg) rotateY(180deg) rotateZ(-2deg);
      }

      .card {
        width: 100%;
        height: 100%;
        border-radius: 25px;
        position: absolute;
      }

      .front {
        background: #fff;
      }

      .sub-info {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-top: 20px;
        filter: drop-shadow(0 0 5px indigo);
        background: #0008;
        border-radius: 20px;
        padding: 10px 50px;
        max-width: 450px;
      }

      .sub-info .text {
        font-family: "EnterCommand";
        font-size: 38px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .sub-info .text .sub-time {
        font-size: 26px;
        color: gold;
        word-break: break-word;
        text-align: left;
        hyphens: auto;
      }

      .sub-info img {
        --size: 75px;

        width: var(--size);
        height: var(--size);
        border: 4px solid #1b0a27;
        border-radius: 50%;
      }

      .sub-info .text {
        text-align: center;
        text-shadow: 3px 3px 1px #000;
      }
    `;
  }

  flip() {
    this.classList.toggle("flip");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SubCard.styles}</style>
    <div class="container">
      <div class="front card"></div>
      <back-card class="back card"></back-card>
    </div>
    <div class="sub-info">
      <img src="${AVATAR}" alt="${NAME}">
      <div class="text">
        <span class="name">${NAME}</span>
        <span class="sub-time">${MESSAGE}</span>
      </div>
    </div>
    `;
  }
}

customElements.define("sub-card", SubCard);
