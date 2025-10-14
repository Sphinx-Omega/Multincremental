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

// function getIChalComps() {
//   let tr1 = challengeCompletions("asc",11)
//   let tr2 = challengeCompletions("asc",12)
//   let tr3 = challengeCompletions("asc",13)
//   let tr4 = challengeCompletions("asc",21)
//   let tr5 = challengeCompletions("asc",22)
//   let tr6 = challengeCompletions("asc",23)
//   let trcomps = tr1 + tr2 + tr3 + tr4 + tr5 + tr6
//   return trcomps
// }

// function enterTrial() {
//   if(canExitChallenge("asc",(player.asc.activeChallenge))) {
//     player.p.buyables[11] = decimalZero
//     player.p.gen = decimalZero
//     player.p.buyables[12] = decimalZero
//     player.p.boost = decimalZero
//     player.p.buyables[13] = decimalZero
//     player.p.charger = decimalZero
//     player.p.buyables[31] = decimalZero
//     player.p.power = decimalZero
//     player.p.buyables[32] = decimalZero
//     player.p.level = decimalZero
//     player.p.buyables[33] = decimalZero
//     player.p.od = decimalZero
//     player.p.buyables[34] = decimalZero
//     player.p.hm = decimalZero
//     player.points = new Decimal(10)
//     player.p.upgrades = []
//   }
// }

// function exitTrial() {
  
// }

function getRedTimes() {
  let times = decimalZero

  return times
}

function IEgen() {
  let ieGen = decimalOne
  if (hasAchievement("a",52)) ieGen = ieGen.times(2)
  
  return ieGen
}

function boostPower() {
  let base = player.p.baseBoost
  if (hasUpgrade("inf",41)) base = base.times(1.5)

  return base.times(10)
}

function getEnergyLimit() {
  let lim = new Decimal(100)
  if(getEnergyBarFilledTimes() >= 1) lim = new Decimal(1e4)
  if(getEnergyBarFilledTimes() >= 2) lim = new Decimal(1e6)
  if(getEnergyBarFilledTimes() >= 3) lim = new Decimal(1e9)
  if(getEnergyBarFilledTimes() >= 4) lim = new Decimal(1e13)
  if(getEnergyBarFilledTimes() >= 5) lim = new Decimal(1e18)
  if(getEnergyBarFilledTimes() >= 6) lim = new Decimal(1e24)
  if(getEnergyBarFilledTimes() >= 7) lim = new Decimal(1e33)
  return lim
}

function getEnergyProgress() {
  return (((player.points).add(50).div(getEnergyLimit())).min(1))
}

function redMult() {
  return ""
}

function prestigeReset() {
  player.p.multExp = player.p.presexp
  player.p.extraMult = player.p.presmult
  player.p.prestotal = player.p.points
  player.p.points = decimalZero
  player.points = decimalZero
  player.p.rMax = new Decimal(100)
  player.p.oMax = new Decimal(100)
  player.p.yMax = new Decimal(100)
  player.p.lMax = new Decimal(100)
  player.p.gMax = new Decimal(100)
  player.p.cMax = new Decimal(100)
  player.p.bMax = new Decimal(100)
  player.p.vMax = new Decimal(100)
  player.p.pMax = new Decimal(100)
  player.p.wMax = new Decimal(100)
  player.p.redBuyAmt = decimalOne
  player.p.orangeBuyAmt = decimalZero
  player.p.yellowBuyAmt = decimalZero
  player.p.limeBuyAmt = decimalZero
  player.p.greenBuyAmt = decimalZero
  player.p.cyanBuyAmt = decimalZero
  player.p.blueBuyAmt = decimalZero
  player.p.violetBuyAmt = decimalZero
  player.p.pinkBuyAmt = decimalZero
  player.p.whiteBuyAmt = decimalZero
  player.p.rMult = decimalOne
  player.p.oMult = decimalOne
  player.p.yMult = decimalOne
  player.p.lMult = decimalOne
  player.p.gMult = decimalOne
  player.p.cMult = decimalOne
  player.p.bMult = decimalOne
  player.p.vMult = decimalOne
  player.p.pMult = decimalOne
  player.p.wMult = decimalOne
  player.p.rAsc = decimalZero
  player.p.oAsc = decimalZero
  player.p.yAsc = decimalZero
  player.p.lAsc = decimalZero
  player.p.gAsc = decimalZero
  player.p.cAsc = decimalZero
  player.p.bAsc = decimalZero
  player.p.vAsc = decimalZero
  player.p.pAsc = decimalZero
  player.p.wAsc = decimalZero
  player.p.redAscCost = decimalZero
  player.p.orangeAscCost = decimalZero
  player.p.yellowAscCost = decimalZero
  player.p.limeAscCost = decimalZero
  player.p.greenAscCost = decimalZero
  player.p.cyanAscCost = decimalZero
  player.p.blueAscCost = decimalZero
  player.p.violetAscCost = decimalZero
  player.p.pinkAscCost = decimalZero
  player.p.whiteAscCost = decimalZero
  player.p.rProg = decimalZero
  player.p.oProg = decimalZero
  player.p.yProg = decimalZero
  player.p.lProg = decimalZero
  player.p.gProg = decimalZero
  player.p.cProg = decimalZero
  player.p.bProg = decimalZero
  player.p.vProg = decimalZero
  player.p.pProg = decimalZero
  player.p.wProg = decimalZero
  player.p.addEnergy = decimalOne
}

function ascend() {
  prestigeReset()
  player.p.ascendcheck = true
  player.p.multExp = decimalOne
  player.p.extraMult = decimalOne
  player.p.prestotal = decimalZero
  if(player.p.presamt.gt(0)) player.p.ascendcheck = false
  player.p.presamt = decimalZero
}

function ascend1() {
  player.p.baseMult = (((player.p.ascendMult).mul(player.p.baseAscend)).max(player.p.baseMult))
  ascend()
}

function ascend2() {
  player.p.baseSpeed = (((player.p.ascendSpeed).mul(player.p.baseAscend)).max(player.p.baseSpeed))
  ascend()
}

function ascend3() {
  player.p.baseBoost = (((player.p.ascendBoost).mul(player.p.baseAscend)).max(player.p.baseBoost))
  ascend()
}

function ascend4() {
  player.p.baseMult = ((player.p.baseMult).div(player.p.baseAscend))
  player.p.baseSpeed = ((player.p.baseSpeed).div(player.p.baseAscend))
  player.p.baseBoost = ((player.p.baseBoost).div(player.p.baseAscend))
  player.p.baseAscend = ((player.p.ascendPower).max(player.p.baseAscend))
  player.p.baseMult = ((player.p.baseMult).mul(player.p.baseAscend))
  player.p.baseSpeed = ((player.p.baseSpeed).mul(player.p.baseAscend))
  player.p.baseBoost = ((player.p.baseBoost).mul(player.p.baseAscend))
  ascend()
}

function infinity() {
  ascend()
  player.p.ascendAmt = decimalZero
  player.p.baseMult = decimalOne
  player.p.baseSpeed = decimalOne
  player.p.baseBoost = decimalOne
  player.p.baseAscend = decimalOne
  player.inf.infinities = player.inf.infinities.add(1)
  player.inf.infenergy = player.inf.infenergy.add(IEgen())
  player.inf.genpower = decimalZero
  player.inf.gen1 = decimalOne
  player.inf.gen2 = decimalZero
  player.inf.gen3 = decimalZero
  player.inf.gen4 = decimalZero
  player.inf.gen5 = decimalZero
  player.inf.gen6 = decimalZero
  player.inf.gen7 = decimalZero
  player.inf.gen8 = decimalZero
  player.inf.gen9 = decimalZero
  player.inf.gen10 = decimalZero
  if(player.p.infTime.lt(player.p.infRecord)){
    player.p.infRecord = player.p.infTime
  }
  player.p.infTime = decimalZero
}