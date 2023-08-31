import { Component } from "../core/core";
// import store from "../store/planner";
import plannerStore from "../store/planner";

export default class SchedulePlanner extends Component {
  constructor() {
    super()
    plannerStore.subscribe('month', () => {
      this.render()
    })
    plannerStore.subscribe('date', () => {
      this.render()
    })
  }
  render() {
    console.log(plannerStore.state.date)
    this.el.classList.add('planner')

    this.el.innerHTML = /* HTML */`
    <div class="container">
      <h3>${plannerStore.state.month} ${plannerStore.state.date}</h3>
      <h4>Schedule</h4>
      <div class="input">
        <input type="text" />
        <button>
          <span class="material-symbols-outlined">
            add
          </span>
        </button>
      </div>
    </div>
    <div class="container">
      <h4>Todo</h4>
      <div class="input">
        <input type="text" />
        <button>
          <span class="material-symbols-outlined">
            add
          </span>
        </button>
      </div>
    </div>
    `
  }
}