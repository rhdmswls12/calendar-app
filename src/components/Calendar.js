//Calendar.js
import { Component } from "../core/core";
import plannerStore from "../store/planner";

export default class Calendar extends Component {
  render() {
    this.el.classList.add('wrapper')
    this.el.innerHTML = /* html */`
    <header>
      <p class="current-date">
        <span class="month"></span> 
        <span class="year"></span>
      </p>
      <div class="icons">
        <span id="prev" class="material-symbols-outlined">chevron_left</span>
        <span id="next" class="material-symbols-outlined">chevron_right</span>
      </div>
    </header>
    <div class="calendar">
      <ul class="weeks">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      <ul class="days">
        
      </ul>
    </div>
    `
    let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
    const months = [
      "January", "February", "March", 
      "April", "May", "June", "July", 
      "August", "September", "October", 
      "November", "December"
    ]
    
    const currentMonth = this.el.querySelector('.month')
    const currentYear = this.el.querySelector('.year')
    const daysTag = this.el.querySelector('.days')
    const prevNextIcon = this.el.querySelectorAll('.icons span')
   

    const renderCalendar = () => {
      let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay()
      let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate()
      let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay()
      let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate()
      let liTag = "";
      
      for (let i=firstDayOfMonth; i>0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`
      }

      for (let i=1; i<=lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                      && currYear === new Date().getFullYear() 
                      ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`
      }

      for (let i=lastDayOfMonth; i<6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
      }

      currentMonth.innerText = `${months[currMonth]}`
      currentYear.innerText = `${currYear}`
      daysTag.innerHTML = liTag
    }
    renderCalendar()
    
    
    prevNextIcon.forEach(icon => {
      icon.addEventListener('click', () => {
        
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1
        
        if (currMonth < 0 || currMonth > 11) {
          date = new Date(currYear, currMonth);
          console.log(date)
          currYear = date.getFullYear();
          currMonth = date.getMonth();
        } else {
          date = new Date();
        }
        renderCalendar()
      })
    })
    
  } 
}