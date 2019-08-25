
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
        getElement.innerHTML = "<p class='stat-percent'>" + percentage + "%</p>"
        return 
      }
    })
  }
}
let maleStat = new Stat("male", 91.7)
let femaleStat = new Stat("female", 7.9)
let nonBStat = new Stat("non-binary", 1.2)

let maleStatComp = new Stat("male-comp", 67.7)
let nonBStatComp = new Stat("nonb-comp", 59.1)
let femaleStatComp = new Stat("female-comp", 53.4)

maleStat.makeWider()
femaleStat.makeWider()
nonBStat.makeWider()

maleStatComp.makeWider()
nonBStatComp.makeWider()
femaleStatComp.makeWider()

let genderOfAllRespondents = document.getElementById("gender-chart")
let size = 500
genderOfAllRespondents.width = size
genderOfAllRespondents.height = size
var ctxGender = genderOfAllRespondents.getContext("2d");

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(centerX, centerY)
  ctx.arc(centerX, centerY, radius, startAngle, endAngle)
  ctx.closePath()
  ctx.fill()
}
function calcAngle(percent) {
  let startAngle = (percent / 100) * 2 * Math.PI
  return startAngle
}
let genderChartPercentages = [91.7, 7.9, 1.2]
const genderChartPercentagesPieSlice = genderChartPercentages.map(percent => calcAngle(percent))

let endMale = genderChartPercentagesPieSlice[0]
let endFemale = endMale + genderChartPercentagesPieSlice[1]
let endNonB = endFemale + genderChartPercentagesPieSlice[2] 

drawPieSlice(ctxGender, size/2, size/2, size/2, 0, endMale, '#EC9F48')
drawPieSlice(ctxGender, size/2, size/2, size/2, endMale, endFemale, '#ab9F10')
drawPieSlice(ctxGender, size/2, size/2, size/2, endFemale, endNonB, '#ae2e31')



