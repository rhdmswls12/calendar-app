//Home.js
import { Component } from "../core/core";
import Calendar from "../components/Calendar";
import SchedulePlanner from "../components/SchedulePlanner";
import Schedule from "../components/Schedule";
import Headline from "../components/Headline";
import Footer from "../components/Footer";
import plannerStore from '../store/planner';

export default class Home extends Component {
  render() {
    this.el.classList.add('schedule')
    
    const headline = new Headline().el
    const calendar = new Calendar().el
    const planner = new SchedulePlanner().el
    const footer = new Footer().el
    this.el.append(headline, calendar, planner, footer)

    const currentMonth = this.el.querySelector('.month')
    const currentYear = this.el.querySelector('.year')
    const daysTag = this.el.querySelector('.days')
    const dayTag = this.el.querySelector('.days li.active')

    dayTag.append(new Schedule().el)
    const wrapperEl = this.el.querySelector('.wrapper')
    const headerEl = this.el.querySelector('header')
    const daysEl = this.el.querySelectorAll('.days li')
    const plannerEl = this.el.querySelector('.planner')


    let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
    const months = [
      "January", "February", "March", 
      "April", "May", "June", "July", 
      "August", "September", "October", 
      "November", "December"
    ]
    daysEl.forEach(day => {
      day.addEventListener('click', (event) => {
        plannerStore.state.date = event.currentTarget.innerText

        
        let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay()
        let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate()
        let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay()
        let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate()
        let liTag = "";

        wrapperEl.classList.add('modifying')
        headerEl.classList.add('modifying')
        daysTag.classList.add('modifying')
        dayTag.remove()
        plannerEl.classList.add('active')

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

        plannerStore.state.month = currentMonth.innerText
      })
    })
    

  } 
}
