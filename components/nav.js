class Nav extends HTMLElement {
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
          nav {
              background-color: royalblue;
              height: 40px;
          }

          nav {
              grid-area: nav;
              display: flex;
              align-items: center;
              justify-content: space-evenly;
              flex-direction: row;
          }

          a {
              color: white;
              text-decoration: none;
          }

          a:hover {
              color: darkblue;
          }
      </style>
      <nav>
          <a href="${path}about.html">About Us</a>
          <a href="${path}parents.html">Parents</a>
          <a href="${path}faculty.html">Faculty</a>
          <a href="${path}supplies.html">Supplies</a>
          <a href="${path}info.html">Request Info</a>
      </nav>
    `;

    this.root.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("nav-component", Nav);
