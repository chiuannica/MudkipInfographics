function Stat(className, percentage) {
  this.className = className,
  this.percentage = percentage
  this.makeWider = function() {
    let start = Date.now()
    let timer = setInterval(function() {
      let timePassed = Date.now() - start
      let getElement = document.getElementsByClassName(className)[0]
      let totalTime = 1500
      let percentagePerSecond = percentage / totalTime
      getElement.style.width = percentagePerSecond * timePassed + "%"
      if (timePassed >= totalTime) {
        clearInterval(timer)
        getElement.innerHTML = "<p>" + percentage + "%</p>"
        return 
      }
    })
  }
}

let maleStat = new Stat("male", 91.7)
let femaleStat = new Stat("female", 7.9)
let nonBStat = new Stat("non-binary", 1.2)

maleStat.makeWider()
femaleStat.makeWider()
nonBStat.makeWider()



