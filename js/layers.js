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

function enterinfchallenge() {
  prestigeReset()
  player.p.TredBuyAmt = decimalOne
  player.p.TorangeBuyAmt = decimalZero
  player.p.TyellowBuyAmt = decimalZero
  player.p.TlimeBuyAmt = decimalZero
  player.p.TgreenBuyAmt = decimalZero
  player.p.TcyanBuyAmt = decimalZero
  player.p.TblueBuyAmt = decimalZero
  player.p.TvioletBuyAmt = decimalZero
  player.p.TpinkBuyAmt = decimalZero
  player.p.multExp = decimalOne
  player.p.extraMult = decimalOne
  player.p.prestotal = decimalZero
  player.p.presamt = decimalZero
  player.p.ascendAmt = decimalZero
  let basespeedmult = decimalOne
  if(hasAchievement("a",61)) basespeedmult = new Decimal(10)
  player.p.baseMult = basespeedmult
  player.p.baseSpeed = basespeedmult
  player.p.baseBoost = decimalOne.times(boostPower())
  player.p.baseAscend = decimalOne
  player.p.ascboostcheck = false
  player.inf.genpower = decimalZero
  player.inf.gen1 = player.inf.gen1bought
  player.inf.gen2 = player.inf.gen2bought
  player.inf.gen3 = player.inf.gen3bought
  player.inf.gen4 = player.inf.gen4bought
  player.inf.gen5 = player.inf.gen5bought
  player.inf.gen6 = player.inf.gen6bought
  player.inf.gen7 = player.inf.gen7bought
  player.inf.gen8 = player.inf.gen8bought
  player.inf.gen9 = player.inf.gen9bought
  player.inf.gen10 = player.inf.gen10bought
  player.p.TAsc = decimalZero
  player.p.infTime = decimalZero
  player.tab = "p"
}

function getRedTimes() {
  let times = decimalZero

  return times
}

function makeGarbledTemplate(input) {
      // Input might be either text or number
      const text = `${input}`;
      let garbled = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") garbled += " ";
        else {
          const n = text[i].charCodeAt();
          // Essentially seeded randomness so that the static parts of the randomized text are deterministic
          garbled += String.fromCharCode(33 + ((n * n + i * i) % 93));
        }
      }
      return garbled;
    }
    // When appropriate, garbles input text for achievements on the last row. Otherwise leaves it unchanged
function processText(unmodified, garbledTemplate) {
      if (this.isObscured) return unmodified;

      // The garbling effect often replaces spaces with non-spaces, which affects line length and can cause individual
      // lines to become long enough that they can't word-wrap. To address that, we take the template as a reference
      // and put spaces back into the same spots, ensuring that text can't overflow any worse than the original text
      const raw = randomCrossWords(garbledTemplate);
      if (raw == undefined) return;
      let modified = "";
      for (let i = 0; i < raw.length; i++) {
        if (garbledTemplate[i] === " ") modified += " ";
        // if ((garbledTemplate[i] === ">") && (garbledTemplate[i-1] === "r") && (garbledTemplate[i-2] === "b") && (garbledTemplate[i-3] === "<")) modified += "<br>";
        else modified += raw[i];
      }
      return "<h3>"+modified;
    }
function garbledNameTemplate(id) {
      return makeGarbledTemplate(tmp.inf.upgrades[id].realname);
    }
function garbledDescriptionTemplate(id) {
      return makeGarbledTemplate(tmp.inf.upgrades[id].realtooltip);
    }
function garbledCostTemplate(id) {
      return makeGarbledTemplate(tmp.inf.upgrades[id].realcost);
    }
function garbledEffectTemplate(id) {
      return makeGarbledTemplate(tmp.inf.upgrades[id].realeffect);
    }

function IEgen() {
  let ieGen = decimalOne
  if (hasAchievement("a",52)) ieGen = ieGen.times(2)
  if (hasUpgrade("inf",81)) ieGen = ieGen.times(upgradeEffect("inf",81))
  if (hasUpgrade("inf",101)) ieGen = ieGen.times(upgradeEffect("inf",101))
  if (hasUpgrade("inf",141)) ieGen = ieGen.times(upgradeEffect("inf",141))
  if (hasUpgrade("inf",144)) ieGen = ieGen.times(upgradeEffect("inf",144))

  if (hasUpgrade("inf",71)) {
  if (hasChallenge("chal",11)) ieGen = ieGen.add(1)
  if (hasChallenge("chal",12)) ieGen = ieGen.add(1)
  if (hasChallenge("chal",13)) ieGen = ieGen.add(1)
  if (hasChallenge("chal",14)) ieGen = ieGen.add(1)
  if (hasChallenge("chal",15)) ieGen = ieGen.add(1)
  if (hasChallenge("chal",16)) ieGen = ieGen.add(1)
  if (hasChallenge("chal",17)) ieGen = ieGen.add(1)
  if (hasChallenge("chal",18)) ieGen = ieGen.add(1)
  if (hasChallenge("chal",19)) ieGen = ieGen.add(1)
  }

  ieGen = ieGen.times((player.points.div(1.798).max(1).log10().div(308).max(1).pow(2.875)))
  ieGen = ieGen.times(player.inf.collIE)
  ieGen = ieGen.min("1.798e308")
  
  return ieGen
}

function InfinityGen() {
  let infGen = decimalOne

  if (hasUpgrade("inf",71)) {
  if (hasChallenge("chal",11)) infGen = infGen.add(1)
  if (hasChallenge("chal",12)) infGen = infGen.add(1)
  if (hasChallenge("chal",13)) infGen = infGen.add(1)
  if (hasChallenge("chal",14)) infGen = infGen.add(1)
  if (hasChallenge("chal",15)) infGen = infGen.add(1)
  if (hasChallenge("chal",16)) infGen = infGen.add(1)
  if (hasChallenge("chal",17)) infGen = infGen.add(1)
  if (hasChallenge("chal",18)) infGen = infGen.add(1)
  if (hasChallenge("chal",19)) infGen = infGen.add(1)
  }
  
  return infGen
}

function boostPower() {
  let base = decimalOne
  let inchal12 = decimalOne
  let chal12comp = decimalOne
  let chal18comp = decimalOne
  let ach82 = decimalOne
  if(inChallenge("chal",12)) inchal12 = new Decimal(0.2)
  if(hasChallenge("chal",12)) chal12comp = new Decimal(1.2)
  if(hasChallenge("chal",18)) chal18comp = new Decimal(2)
  if (hasUpgrade("inf",41)) base = ((base).times(1.5))
  if (hasAchievement("a",82)) ach82 = new Decimal(1.5)

  return (base.times(inchal12).times(chal12comp).times(chal18comp).times(ach82))
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

// function bar1Cost(x){
//   if (x === undefined) x = decimalOne
//   let cost = Decimal.pow(1.1,((x).div(4).pow((x).div(758).pow(1.1).max(1)))).pow(((x).div(20)).add(1)).times(x).max(1)
//   return cost
// }

// function buyMaxBars(){
//   let a = decimalOne
//   while(bar1Cost(x).lt(player.points)){
//     for(a=1; a<1000; a++){
//       let x = a.times(tmp.p.buyables[11].bought)
//       bar1Cost(x)
//     }
//   }
//   return a
// }

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
  player.p.baseBoost = ((player.p.ascendBoost).max(player.p.baseBoost))
  player.p.ascboostcheck = true
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
  player.inf.infinities = player.inf.infinities.add(InfinityGen())
  player.inf.infenergy = player.inf.infenergy.add(IEgen())
  player.inf.collparts = decimalZero
  ascend()
  if(player.p.ascendAmt == 0){
    player.p.infNoAscend = true
  }
  if(player.p.truepresamt == 0){
    player.p.infNoPres = true
  }
  if(player.p.TAsc == 0){
    player.p.infNoBst = true
  }
  let basespeedmult = decimalOne
  if(hasAchievement("a",61)) basespeedmult = new Decimal(10)
  player.p.ascendAmt = decimalZero
  player.p.truepresamt = decimalZero
  player.p.baseMult = basespeedmult
  player.p.baseSpeed = basespeedmult
  player.p.baseBoost = decimalOne.times(boostPower())
  player.p.baseAscend = decimalOne
  player.p.ascboostcheck = false
  if(player.p.TlimeBuyAmt.eq(0)){
    player.p.ach82check = true
  }
  else player.p.ach82check = false
  player.p.TredBuyAmt = decimalOne
  player.p.TorangeBuyAmt = decimalZero
  player.p.TyellowBuyAmt = decimalZero
  player.p.TlimeBuyAmt = decimalZero
  player.p.TgreenBuyAmt = decimalZero
  player.p.TcyanBuyAmt = decimalZero
  player.p.TblueBuyAmt = decimalZero
  player.p.TvioletBuyAmt = decimalZero
  player.p.TpinkBuyAmt = decimalZero
  player.p.TwhiteBuyAmt = decimalZero
  player.inf.genpower = decimalZero
  if(player.inf.gen1bought.lt(decimalOne)) player.inf.gen1bought = decimalOne
  player.inf.gen1 = new Decimal(player.inf.gen1bought)
  player.inf.gen2 = new Decimal(player.inf.gen2bought)
  player.inf.gen3 = new Decimal(player.inf.gen3bought)
  player.inf.gen4 = new Decimal(player.inf.gen4bought)
  player.inf.gen5 = new Decimal(player.inf.gen5bought)
  player.inf.gen6 = new Decimal(player.inf.gen6bought)
  player.inf.gen7 = new Decimal(player.inf.gen7bought)
  player.inf.gen8 = new Decimal(player.inf.gen8bought)
  player.inf.gen9 = new Decimal(player.inf.gen9bought)
  player.inf.gen10 = new Decimal(player.inf.gen10bought)
  if(player.p.infTime.lt(player.p.infRecord)){
    if (player.p.infTime.gt(0)) player.p.infRecord = player.p.infTime
  }
  player.p.TAsc = decimalZero
  player.p.infTime = decimalZero
}

function getChallengeCompletions() {
  let amt = decimalZero

  if(hasChallenge("chal",11)) amt = amt.add(1)
  if(hasChallenge("chal",12)) amt = amt.add(1)
  if(hasChallenge("chal",13)) amt = amt.add(1)
  if(hasChallenge("chal",14)) amt = amt.add(1)
  if(hasChallenge("chal",15)) amt = amt.add(1)
  if(hasChallenge("chal",16)) amt = amt.add(1)
  if(hasChallenge("chal",17)) amt = amt.add(1)
  if(hasChallenge("chal",18)) amt = amt.add(1)
  if(hasChallenge("chal",19)) amt = amt.add(1)

  return amt
}

function getCollChance(min, max) {
  let x = new Decimal(min).ceil()
  let y = new Decimal(max).floor()
  let z = Math.random() * 100
  return z
}




function eternity() {
  infinity()
  player.inf.upgrades = []
  player.inf.collchanceupg = decimalZero
  player.inf.collintupg = decimalZero
  player.inf.collmultupg = decimalZero
  player.inf.collparts = decimalZero
  player.inf.collchance = decimalZero
  player.inf.collinterval = decimalOne
  player.inf.collmult = decimalOne
  player.inf.collupg1 = decimalZero
  player.inf.collupg2 = decimalZero
  player.inf.collupg3 = decimalZero
  player.inf.collupg4 = decimalZero
  player.p.costscaling = new Decimal(20)
  player.inf.genexp = new Decimal(2/3)
  player.chal.challenges = []
  player.inf.infenergy = decimalZero
  player.inf.infinities = decimalZero
  player.p.infRecord = new Decimal(31536000)
  player.inf.gen1 = decimalZero
  player.inf.gen1bought = decimalZero
  player.inf.gen2 = decimalZero
  player.inf.gen2bought = decimalZero
  player.inf.gen3 = decimalZero
  player.inf.gen3bought = decimalZero
  player.inf.gen4 = decimalZero
  player.inf.gen4bought = decimalZero
  player.inf.gen5 = decimalZero
  player.inf.gen5bought = decimalZero
  player.inf.gen6 = decimalZero
  player.inf.gen6bought = decimalZero
  player.inf.gen7 = decimalZero
  player.inf.gen7bought = decimalZero
  player.inf.gen8 = decimalZero
  player.inf.gen8bought = decimalZero
  player.inf.gen9 = decimalZero
  player.inf.gen9bought = decimalZero
  player.inf.gen10 = decimalZero
  player.inf.gen10bought = decimalZero
}

//mult bonus
function getEterBonus1() {
  let et = player.eter.eternities.add(1).log(1.1)
  let eff = Decimal.pow(3,et).log(2).exp().pow(0.75).max(1)
  let cap = new Decimal(1e15)
  let sc = new Decimal(0.45)
  eff = softcapEterBonus(eff,cap,sc)
  return eff
}

//speed bonus
function getEterBonus2() {
  let et = player.eter.eternities.add(1).log(2)
  let eff = Decimal.pow(2,et).log(2).exp().pow(0.75).max(1)
  let cap = new Decimal(1e6)
  let sc = new Decimal(0.4)
  eff = softcapEterBonus(eff,cap,sc)
  return eff
}

//boost bonus
function getEterBonus3() {
  let et = player.eter.eternities.add(1).log(10/3)
  let eff = Decimal.pow(2,et).log(1.75).exp().pow(0.75).max(1)
  let cap = new Decimal(1e3)
  let cap2 = new Decimal(1e9)
  let sc = new Decimal(0.25)
  let sc2 = new Decimal(0.25)
  eff = softcapEterBonus(eff,cap2,sc2)
  eff = softcapEterBonus(eff,cap,sc)
  return eff
}

//infinity bonus
function getEterBonus4() {
  let et = player.eter.eternities.add(1).log(2)
  let eff = Decimal.pow(2,et).log(2).exp().pow(0.75).max(1)
  let cap = new Decimal(1e6)
  let sc = new Decimal(0.4)
  eff = softcapEterBonus(eff,cap,sc)
  return eff
}

//generator bonus
function getEterBonus5() {
  let et = player.eter.eternities.add(1).log(2)
  let eff = Decimal.pow(2,et).log(2).exp().pow(0.8).max(1)
  let cap = new Decimal(1e6)
  let cap2 = new Decimal(1e100)
  let sc = new Decimal(0.2)
  let sc2 = new Decimal(0.2)
  eff = softcapEterBonus(eff,cap2,sc2)
  eff = softcapEterBonus(eff,cap,sc)
  return eff
}

//collider particles bonus
function getEterBonus6() {
  let et = player.eter.eternities.add(1).log(1.75)
  let eff = Decimal.pow(2,et).log(2).exp().pow(0.7).max(1)
  let cap = new Decimal(100)
  let cap2 = new Decimal(1e33)
  let sc = new Decimal(0.2)
  let sc2 = new Decimal(0.2)
  eff = softcapEterBonus(eff,cap2,sc2)
  eff = softcapEterBonus(eff,cap,sc)
  return eff
}