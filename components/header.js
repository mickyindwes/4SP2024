class Header extends HTMLElement {
    root;
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        const path = this.getAttribute("path") || '';
        const template = document.createElement("template");
        template.innerHTML = /*template*/`
            <style>
                header {
                    grid-area: header;
                    display: flex;
                    padding-bottom: 30px;
                    background-color: royalblue;
                    height: 40px;
                }

                slot::slotted(img) {
                    display: block;
                    width: 100%;
                }

                .logo {
                    align-self: center;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .logo-title {
                    position: absolute;
                    top: 10px;
                    text-align: center;
                    color: white;
                }

                .logo-title h1 {
                    margin: 0;
                }
            </style>
            <header>
                <a class="logo" href="${path}index.html">
                    <slot name="header-image"></slot>
                    <div class="logo-title">
                        <h1>School Supply</h1>
                    </div>
                </a>
            </header>
        `;
        this.root.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("header-component", Header);