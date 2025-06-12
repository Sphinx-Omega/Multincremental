function makeBlue(c){
    return "<span style='color:#4444bb'>" + c + "</span>"
}

function playAsc() {
  document.body.style.animationPlayState = "running, paused, paused";
}

function playBreakAsc() {
  document.body.style.animationPlayState = "paused, running, paused";
}

function playTransc() {
  document.body.style.animationPlayState = "paused, paused, running";
}

function getTrialComps() {
  let tr1 = challengeCompletions("asc",11)
  let tr2 = challengeCompletions("asc",12)
  let tr3 = challengeCompletions("asc",13)
  let tr4 = challengeCompletions("asc",21)
  let tr5 = challengeCompletions("asc",22)
  let tr6 = challengeCompletions("asc",23)
  let trcomps = tr1 + tr2 + tr3 + tr4 + tr5 + tr6
  return trcomps
}

function getAscUpg53Effect() {
  return (player.timePlayed)**(1/3)
}

function firstAscReward() {
  let num = Decimal.pow(2, ((player.asc.ap).times(10/3))).log(2).pow(0.775).max(1)
  return num
}

function secondAscReward() {
  let num = Decimal.pow(2, ((player.asc.ap).times(3/5))).log(2).pow(2/7).max(1)
  if(hasUpgrade("asc",44)) num = num.times(10)
  return num
}

function thirdAscReward() {
  let num = Decimal.pow(2, ((player.asc.ap).pow(2/5))).log(2).pow(4/9).max(1)
  if(hasUpgrade("asc",55)) num = num.times(20)
  return num
}

function fourthAscReward() {
  let num = Decimal.pow(2, ((player.asc.ap).pow(1/11))).log(2).pow(1/11).max(1)
  return num
}

function enterTrial() {
  if(canExitChallenge("asc",(player.asc.activeChallenge))) {
    player.p.buyables[11] = decimalZero
    player.p.gen = decimalZero
    player.p.buyables[12] = decimalZero
    player.p.boost = decimalZero
    player.p.buyables[13] = decimalZero
    player.p.charger = decimalZero
    player.p.buyables[31] = decimalZero
    player.p.power = decimalZero
    player.p.buyables[32] = decimalZero
    player.p.level = decimalZero
    player.p.buyables[33] = decimalZero
    player.p.od = decimalZero
    player.p.buyables[34] = decimalZero
    player.p.hm = decimalZero
    player.points = new Decimal(10)
    player.p.upgrades = []
  }
}

function exitTrial() {
  
}