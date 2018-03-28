const currentMoonAPI = "https://werewolf-tracker.herokuapp.com/current-moon"
const moonCalendarAPI= "https://werewolf-tracker.herokuapp.com/moon-calendar"

let curPhase = document.querySelector(".curphase")
let curPhaseIMG = document.querySelector(".curphase-img")
let nextFull = document.querySelector(".next-full")

fetch(currentMoonAPI)
  .then(res => res.json())
  .then(res => {
    curPhase.textContent = res.curphase
    findCurrentPhaseIMG(res)
    return res
  })

fetch(moonCalendarAPI)
  .then(res => res.json())
  .then(res => {
    findNextFull(res)
    return res
  })

function findNextFull(obj){
  obj.phasedata.forEach(index => {
    if(index.phase === "Full Moon"){
      nextFull.textContent = `The next full moon will occur at ${index.date}`
    }
  })
}

function findCurrentPhaseIMG(obj){
  switch (obj.curphase) {
    case "Waxing Crescent":
      curPhaseIMG.src = "../assets/Waxing_crescent.png"
      break;
    case "First Quarter":
      curPhaseIMG.src = "../assets/First_quarter.png"
      break;
    case "Waxing Gibbous":
      curPhaseIMG.src = "../assets/Waxing_gibbous.png"
      break;
    case "Full Moon":
      curPhaseIMG.src = "../assets/Full_moon.png"
      break;
    case "Waning Gibbous":
      curPhaseIMG.src = "../assets/Waning_gibbous.png"
      break;
    case "Last Quarter":
      curPhaseIMG.src = "../assets/Last_quarter.png"
      break;
    case "Waning Crescent":
      curPhaseIMG.src = "../assets/Waning_crescent.png"
      break;
    case "New Moon":
      curPhaseIMG.src = "../assets/New_moon.png"
      break;
    default:

  }
}
