import { Component } from "../core/core";

export default class Footer extends Component {
  render() {
    this.el.classList.add('footer')
    this.el.innerHTML = /* HTML */`
    <div>
      <a href="">GitHub<br>Repository</a>
    </div>
    <div>
      <a href="https://github.com/rhdmswls12">
        ${new Date().getFullYear()}
        <span>Eunjin</span>
      </a>
    </div>
    `
  }
}