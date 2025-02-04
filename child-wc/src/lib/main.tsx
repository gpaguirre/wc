import r2wc from "@r2wc/react-to-web-component";

import App from "../App";

class ChildWC extends r2wc(App, {
  props: { name: "string" },
  shadow: "open",
}) {
  connectedCallback() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    super.connectedCallback();
    const styleTag = document.getElementById("<child-wc>");
    if (styleTag) {
      this.shadowRoot?.append(styleTag.cloneNode(true));
    }
  }
}

customElements.define("child-wc", ChildWC);
