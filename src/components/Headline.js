import { Component } from "../core/core";

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */`
    <div class="title">
      <h1>
        My<br>
        <span>Diary</span>
      </h1>
    </div>
    `
  }
}