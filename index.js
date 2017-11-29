const today = new Date()
console.log(today.getDate()
)

const doors = Array.from(document.getElementsByClassName('door'))

// doors.forEach(let index = 0; index < doors.length; ++index) {
//   let value = doors[index]
// }

const openDoor =(event) => {
  event.target.classList.toggle("door-clicked")
  setTimeout(() => {
    event.target.children[0].classList.remove("hidden");
  }, 500)
}

const showTooltip = (event) => {
  event.target.classList.add("tooltip")
}

doors.forEach((doornumber, index) => {
  const date = new Date(`2017-11-${index+1}`)
  if (date < today) {
    doornumber.classList.add("open")
    doornumber.addEventListener("click", openDoor)
  } else {
    doornumber.classList.add("closed")
    doornumber.addEventListener("click", showTooltip)
  }
})

// console.log(doors)







// -----function-----------

// ----------function end---------------
