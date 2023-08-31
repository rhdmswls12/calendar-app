import { Component } from "../core/core";

export default class Schedule extends Component {
  
  render() {
    this.el.classList.add('added')
    this.el.textContent = 'hi'
  }
}