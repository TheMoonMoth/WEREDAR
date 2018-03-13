// const currentMoonAPI = "https://api.usno.navy.mil/rstt/oneday?date=today&loc=Denver, CO"
// const moonCalendarAPI= "https://api.usno.navy.mil/moon/phase?date=today&nump=4"
// let curPhase = document.querySelector(".curphase")
// let curPhaseIMG = document.querySelector(".curphase-img")
// let nextFull = document.querySelector(".next-full")
//
// fetch(currentMoonAPI)
//   .then(res => res.json())
//   .then(res => {
//     curPhase.textContent = res.curphase
//     findCurrentPhaseIMG(res)
//     console.log(res)
//     // console.log(res)
//     return res
//   })
//
// fetch(moonCalendarAPI)
//   .then(res => res.json())
//   .then(res => {
//     findNextFull(res)
//     // console.log(res.phasedata)
//     return res
//   })
//
// function findNextFull(obj){
//   obj.phasedata.forEach(index => {
//     if(index.phase === "Full Moon"){
//       nextFull.textContent = `The next full moon will occur at ${index.date}`
//     }
//   })
// }
//
// function findCurrentPhaseIMG(obj){
//   switch (obj.curphase) {
//     case "Waxing Crescent":
//       console.log("true")
//       curPhaseIMG.src = "../assets/Waxing_crescent.png"
//       break;
//     default:
//
//   }
// }
