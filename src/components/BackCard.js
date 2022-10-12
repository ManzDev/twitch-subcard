class BackCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --line-color: #000;

        background: #fff;
        background-image:
          url("img/diagmonds.png"),
          var(--fancy-gradient);
        background-size: 50%, auto;
        backface-visibility: hidden;
        border: 10px solid #fff;
        border-bottom-color: #888;
        box-sizing: border-box;
        box-shadow:
          0 0 100px #000c inset,
          0 0 20px 5px #0008;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }

      .logo {
        display: flex;
        flex-direction: column;
      }

      .logo img {
        image-rendering: pixelated;
      }

      .text {
        font-family: "EnterCommand";
        font-size: 32px;
        color: #fff;
        border: 4px solid #fff;
        border-left: 0;
        border-right: 0;
        padding: 0 0.25em 1px 0.25em;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BackCard.styles}</style>
    <div class="logo">
      <img src="https://manz.dev/assets/stickers/manzdev.png" alt="ManzDev logo">
      <span class="text">Manz.dev</span>
    </div>
    `;
  }
}

customElements.define("back-card", BackCard);
