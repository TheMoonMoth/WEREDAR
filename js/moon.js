const currentMoonAPI = "http://api.usno.navy.mil/rstt/oneday?date=today&loc=Denver, CO"
const moonCalendarAPI= "http://api.usno.navy.mil/moon/phase?date=today&nump=4"
let curPhase = document.querySelector(".curphase")

fetch(currentMoonAPI)
  .then(res => res.json())
  .then(res => {
    curPhase.textContent = res.curphase
    console.log(res)
    return res
  })

fetch(moonCalendarAPI)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    return res
  })
