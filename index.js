function Stat(className, percentage) {
  this.className = className,
  this.percentage = percentage
  this.makeWider = function() {
    let start = Date.now()
    let timer = setInterval(function() {
      let timePassed = Date.now() - start
      let getElement = document.getElementsByClassName(className)[0]
      let totalTime = 2000
      let percentagePerSecond = percentage / totalTime
      getElement.style.width = percentagePerSecond * timePassed + "%"
      if (timePassed >= totalTime) {
        clearInterval(timer)
        return 
      }
    })
  }
}

let maleStat = new Stat("male", 20)
let femaleStat = new Stat("female", 10)

maleStat.makeWider()
femaleStat.makeWider()


