function makeBlue(c){
    return "<span style='color:#4444bb'>" + c + "</span>"
}

addLayer("p", {
    name: "quarks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        total: new Decimal(0),
        best: new Decimal(0),
    }},
    color: "#737373",
    // nodeStyle() {return {
    //     "background": ((inChallenge("m",21) && hasMilestone("m",7))?"radial-gradient(rgb(78, 78, 78),rgb(255, 255, 255))": "radial-gradient( #737373,#737373)"),
    //     color: ((inChallenge("m",21) && hasMilestone("m",7))?"rgb(255, 233, 34)":"rgb(61, 61, 61)"),
    // }},
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "quarks", // Name of prestige currency
    baseResource: "particles", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    softcapPower: 0.6,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        pmult = new Decimal(1)
        if(hasUpgrade("p",22)) pmult = pmult.times(upgradeEffect("p",22))
        if(hasUpgrade("p",32)) pmult = pmult.times(upgradeEffect("p",32))
        if(hasUpgrade("e",13)) pmult = pmult.times(upgradeEffect("e",13))
        return pmult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "q", description: "Q: Quark reset", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

    upgrades: {
        
        11: {
            title: "Beginning",
            description() {
                let num = new Decimal(0.1)
                num = num.mul(tmp.a.effect)
                if(player.e.total.gte(1)) num = num.times(tmp.e.effect2)
                return "Start generating "+format(num)+" particles /s"
            },
            cost: new Decimal(1),
            unlocked(){
                return true
            }
        },

        12: {
            title: "Expand",
            description: "Double particle gain",
            cost: new Decimal(2),
            unlocked(){
                return true
            }
        },

        13: {
            title: "Copy",
            description: "Quarks boost particle gain",
            cost: new Decimal(5),
            unlocked(){
                return true
            },
            effect(){
                let eff = player.p.points.add(1).pow(2).pow(5).log10().max(1).add(1).pow(1.2)
                let exp = decimalOne
                let sc = decimalOne
                if(hasUpgrade("p",23)) exp = 1.5
                if(hasUpgrade("p",33)) exp = 2
                // if(eff.gte(1e3)) sc = player.p.points.pow(0.0025)
                // if(eff.gte(5e3)) sc = player.p.points.pow(0.005)
                // if(eff.gte(7.5e3)) sc = player.p.points.pow(0.0075)
                // if(eff.gte(1e5)) exp -= (player.p.points.add(0.0001).pow(-6))
                eff = eff.pow(exp).mul(decimalOne.div(sc))
                return format(eff)
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

        21: {
            title: "Duplicate",
            description: "Particles boost their own gain",
            cost: new Decimal(30),
            unlocked(){
                return true
            },
            effect(){
                let eff = (player.points.max(1).pow(2).log10())
                let exp = decimalOne
                if(hasUpgrade("p",31)) exp = 2
                eff = eff.pow(exp).max(1)
                if(hasUpgrade("e",11)) eff = eff.times(tmp.e.chargeEffect)
                return format(eff)
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

        22: {
            title: "Clone",
            description: "Particles reduce quark cost",
            cost: new Decimal(250),
            unlocked(){
                return true
            },
            effect(){
                let eff = (player.points.max(1).pow((player.points.slog(player.points.pow(2).pow(1.5))))).max(1)
                if(hasUpgrade("e",22)) eff = eff.times(upgradeEffect("e",22))
                return format(eff)
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

        23: {
            title: "Split",
            description() {
                let a = "^1.5"
                let b = "^2"
                let str = (hasUpgrade("p",33))?b:a
                return "'<b>Copy</b>' effect is raised " + str
            },
            cost: new Decimal(2500),
            unlocked(){
                return true
            },
        },

        31: {
            title: "Derive",
            description: "'<b>Duplicate</b>' effect is squared",
            cost: new Decimal(50000),
            unlocked(){
                return true
            },
        },

        32: {
            title: "Stabilize",
            description: "Quarks boost their own gain",
            cost: new Decimal(2.5e6),
            unlocked(){
                return true
            },
            effect(){
                let eff = (player.points.max(1).pow(10).log10().max(1).pow(10).log10())
                let exp = decimalOne
                eff = eff.pow(exp).max(1)
                return format(eff)
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

        33: {
            title: "Diffuse",
            description: "'<b>Split</b>' effect is stronger<br>(^1.5 -> ^2)",
            cost: new Decimal(1e8),
            unlocked(){
                return true
            },
        },

    },

    passiveGeneration(){
        let passive = new Decimal(0)
        if (hasMilestone('e', 2)) passive = decimalOne
        return passive
        },

    doReset(resettingLayer) {
        let keep = []
        if (hasMilestone("a", 0) && resettingLayer == "e") keep.push("upgrades")
        if (resettingLayer == "e" && !hasMilestone("e",1)) keep.pop("upgrades")
            if (resettingLayer == "e" && hasMilestone("e",1)) keep.push("upgrades")
        // if (hasMilestone("m", 0) && resettingLayer == "m") {
        //     if (hasMilestone("m", 1) && resettingLayer == "m") {
        //         if (hasMilestone("m", 2) && resettingLayer == "m") player.p.upgrades = player.p.upgrades.filter(x=>x<9)
        //         else player.p.upgrades = player.p.upgrades.filter(x=>x<6)}
        //     else player.p.upgrades = player.p.upgrades.filter(x=>x<5)}
        if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer, keep)}
    },
})



addLayer("e", {
    name: "electrons", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        total: new Decimal(0),
        best: new Decimal(0),
        resettime: new Decimal(0.001),
        charge: decimalZero
    }},
    color: "#0066ff",
    // nodeStyle() {return {
    //     "background": ((inChallenge("m",21) && hasMilestone("m",7))?"radial-gradient(rgb(78, 78, 78),rgb(255, 255, 255))": "radial-gradient( #737373,#737373)"),
    //     color: ((inChallenge("m",21) && hasMilestone("m",7))?"rgb(255, 233, 34)":"rgb(61, 61, 61)"),
    // }},
    requires() { 
        let req = new Decimal(1e9)
        if(hasUpgrade("e",12)) req = req.sub(player.e.charge.max(0.0001).pow(2.25).min(9.999e8))
            return req
        },
    resource: "electrons", // Name of prestige currency
    baseResource: "quarks", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    softcapPower: 0.75,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        emult = new Decimal(1)
        if(hasUpgrade("e",33)) emult = emult.times(upgradeEffect("e",33))
        return emult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Electron reset", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        let shown = player.p.total.gte(100)
        if(player.e.unlocked) shown = true
        return shown
    },
    unlocked() {
        if(player.p.points.gte(1e9)) return true
        else return false
    },
    branches:['p'],

    tabFormat: {
        "Main": {
        content:[
            function() {if (player.tab == "e") return "main-display"},
            "prestige-button",
            "blank",
            ["raw-html",
            function() {
            let limit = (new Decimal(2).pow(getBuyableAmount("e",11)).max(1).pow(new Decimal(1.1).pow(getBuyableAmount("e",13))))
            let a = "<br>You have " + layerText("h2", "e", format(player.e.charge)) +  " <b>negative charge</b>, which boosts '<b>Duplicate</b>' effect by " + layerText("h2", "e", format(tmp.e.chargeEffect)) + "x<br><b>negative charge</b> limit: "+format(limit)
            return "You have "+formatWhole(player.p.points)+" quarks<br><br>Your best electrons is "+formatWhole(player.e.best)+"<br>You have made a total of "+formatWhole(player.e.total)+" electrons<br>"+a}],
            "blank",
            "upgrades"
            ]
        },
        "Milestones": {
            content:[
                function() {if (player.tab == "e") return "main-display"},
            "prestige-button",
            "blank",
            ["raw-html"],
            ["display-text"
            ],
            "milestones"
            ],
        },
        "Buyables": {
            content:[
                function() {if (player.tab == "e") return "main-display"},
            "prestige-button",
            "blank",
            ["raw-html",
            function() {
                let limit = (new Decimal(2).pow(getBuyableAmount("e",11)).max(1).pow(new Decimal(1.1).pow(getBuyableAmount("e",13))))
                let a = "You have " + layerText("h2", "e", format(player.e.charge)) +  " <b>negative charge</b>, which boosts '<b>Duplicate</b>' effect by " + layerText("h2", "e", format(tmp.e.chargeEffect)) + "x<br><b>negative charge</b> limit: "+format(limit)
                return a}],
            "blank",
            ["display-text"
            ],
            "buyables"
            ],
            unlocked() {return hasMilestone("e",0)}
        },
    },
    effbase() {
        let eff = new Decimal(1.0001)
        // if (hasUpgrade("e",22)) eff = eff.add(upgradeEffect("e",22))
        // if (hasUpgrade("e",26)) eff = eff.add(tmp.e.upgrades[26].effect2)
        // if (hasUpgrade("e",66)) eff = eff.mul(upgradeEffect("e",66))
        // if (hasUpgrade("e",73)) eff = eff.mul(upgradeEffect("e",73))
        // if (hasMilestone("Uu",7)) eff = eff.mul(10)
        // eff = eff.mul(tmp.c.buyables[12].effect)
        return eff
    },

    effect(){
        let eff = player.e.points
        eff = Decimal.pow(this.effbase(),eff).sub(1)
        eff = eff.min(Decimal.tetrate(10,8))
        return eff
    },

    effect2(){
        let eff = player.e.points.add(1).max(1)
        if(player.e.best.gte(1)) eff = eff.add(0.25)
        eff = Decimal.pow(10,eff.log10().pow(0.875)).max(1)
        if (eff.gte("eee25")) eff = eff.log10().log10().pow(4e23).pow10()
        return eff
    },

    chargeEffect(){
        let eff = player.e.charge.add(1).max(1)
        eff = Decimal.pow(10,eff.log10().pow(1.25).log2().max(0.001)).max(1)
        if (hasUpgrade("e",32)) eff = eff.times(3)
        // if (hasUpgrade("e",135)) eff = eff.pow(upgradeEffect("e",135))
        // if (hasUpgrade("e",106)) eff = Decimal.pow(10,eff.add(10).max(10).max(1).log10().pow(1.1))
        // if (hasUpgrade("e",156)) eff = Decimal.pow(10,eff.add(10).max(10).max(1).log10().pow(upgradeEffect("e",156)))
        // if (hasUpgrade("e",204)) eff = eff.pow(tmp.e.upgrades[204].effect)
        if (eff.gte("eee25")) eff = eff.log10().log10().pow(4e23).pow10()
        return eff
    },

    effectDescription() {
        return "boosting '<b>Beginning</b>' by "+layerText("h2", "e", format(tmp.e.effect2)) + "x"
    },

    upgrades: {
        
        11: {
            title: "Boost",
            description()
            {
                let gain = new Decimal(0.01)
                if(getBuyableAmount("e",11).gte(1)) gain = gain.times(getBuyableAmount("e",11).times(2))
                if(getBuyableAmount("e",12).gte(1)) gain = gain.times(getBuyableAmount("e",12).times(1.5))
                if(hasUpgrade("e",23)) gain = gain.times(upgradeEffect("e",23))
                if(hasMilestone("e",3)) gain = gain.times(3)    
                if(getBuyableAmount("e",13).gte(1)) gain = gain.pow(new Decimal(1.1).pow(getBuyableAmount("e",13)))
                if(hasMilestone("e",4)) gain = gain.pow(1.5)
                if(hasMilestone("e",6)) gain = gain.times(2)
                return "Start generating "+format(gain)+" <b>negative charge</b> /s"
            },
            cost: new Decimal(2),
            unlocked(){
                return true
            },
            effect(){
                let eff = new Decimal(0.01)
                return eff
            }
        },

        12: {
            title: "Supercharged",
            description: "<b>Negative charge</b> reduces electron cost",
            cost: new Decimal(5),
            unlocked(){
                return true
            },
            effect(){
                let eff = player.e.charge.max(0.0001).pow(2.25).min(9.999e8)
                return format(eff)
            },
            effectDisplay(){
                return "-"+this.effect()
            }
        },

        13: {
            title: "Negative quarks",
            description: "Electrons boost quark gain",
            cost: new Decimal(15),
            unlocked(){
                return true
            },
            effect(){
                let eff = player.e.points.max(1).pow(2.5).log10().max(1)
                if(hasMilestone("e",5)) eff = eff.pow(2.5)
                return format(eff)
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

        21: {
            title: "Break",
            description: "Electrons boost particle gain",
            cost: new Decimal(35),
            unlocked(){
                return true
            },
            effect(){
                let eff = player.e.points.max(1).pow(3).log10().max(1)
                if(hasUpgrade("e",31)) eff = eff.pow(2)
                return format(eff)
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

        22: {
            title: "Doppel",
            description: "Electrons boost '<b>Clone</b>' effect",
            cost: new Decimal(150),
            unlocked(){
                return true
            },
            effect(){
                let eff = player.e.points.max(1).log10().max(1)
                return format(eff)
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

        23: {
            title: "Overcharged",
            description: "Electrons boost '<b>negative charge</b>' gain",
            cost: new Decimal(500),
            unlocked(){
                return true
            },
            effect(){
                let eff = player.e.points.max(1).log10().pow(1.125).max(1)
                return format(eff)
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

        31: {
            title: "Annihilate",
            description: "'<b>Break</b>' effect is squared",
            cost: new Decimal(1000),
            unlocked(){
                return true
            },
        },

        32: {
            title: "Extended charge",
            description: "'<b>Negative charge</b>' effect is 3x stronger",
            cost: new Decimal(2500),
            unlocked(){
                return true
            },
        },

        33: {
            title: "Self-charging",
            description: "Electrons boost their own gain",
            cost: new Decimal(15000),
            unlocked(){
                return true
            },
            effect(){
                let eff = player.e.points.max(1).log10().pow(10).log10().max(1)
                return format(eff)
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },
    },

    milestones: {
        0: {
            requirementDescription: "3 total electrons",
            effectDescription: "Unlock electron buyables",
            done() { return player.e.total.gte(3) }
        }, 
        1: {
            requirementDescription: "8 total electrons",
            effectDescription: "Keep quark upgrades on reset",
            done() { return player.e.total.gte(8) }
        }, 
        2: {
            requirementDescription: "250 total electrons",
            effectDescription: "Gain 100% of quarks /s",
            done() { return player.e.total.gte(250) }
        }, 
        3: {
            requirementDescription: "2,500 total electrons",
            effectDescription: "<b>Negative charge</b> gain speed x3",
            done() { return player.e.total.gte(2500) }
        }, 
        4: {
            requirementDescription: "5,000 total electrons",
            effectDescription: "<b>Negative charge</b> gain speed ^1.5",
            done() { return player.e.total.gte(5000) }
        }, 
        5: {
            requirementDescription: "125,000 total electrons",
            effectDescription: "'<b>Negative quarks</b>' effect ^2.5",
            done() { return player.e.total.gte(1.25e5) }
        }, 
        6: {
            requirementDescription: "500,000 total electrons",
            effectDescription: "<b>Negative charge</b> gain speed x2",
            done() { return player.e.total.gte(5e5) }
        }, 
    },

    buyablePower(x) {
        x = new Decimal(x)
        let eff = decimalOne
        return eff
    },

    buyables: {
        11: {
            title: "Charger 1",
            cost() { 
                let base = tmp.e.buyables[11].costb
                let exp = tmp.e.buyables[11].coste
                let x = player.e.buyables[11]
                let cost = Decimal.pow(base,x.pow(exp)).mul(1)
                return cost
            },
            costb() {
                let cost = new Decimal(2)
                // if(getBuyableAmount("e",11).gte(50)) cost = new Decimal(3.33)
                // if(getBuyableAmount("e",11).gte(300)) cost = new Decimal(3.67)
                return cost
            },
            coste() { 
                let cost = new Decimal(1)
                if(getBuyableAmount("e",11).gte(100)) cost = new Decimal(1.75)
                return cost
            },
            base() { 
                let exp = decimalOne
                let base = player.e.charge.add(10).log10().add(10).log10().pow(exp)
                if (player.e.buyables[11].gte(1)) base = base.mul(layers.e.buyablePower(player.e.buyables[11]))
                return base
            },
            display() {
                if (player.tab != "e" || player.subtabs.e.mainTabs != "Buyables") return
                let x = tmp.e.buyables[11].extra
                let extra = ""
                let bonus = ""
                let bonusDis = ""
                let effbonus = 1
                // if(hasUpgrade("t",22)){
                //     bonus = formatWhole(upgradeEffect("t",22))}
                // if(hasUpgrade("t",23)){
                //     effbonus = format(upgradeEffect("t",23))}
                if(getBuyableAmount("e", 11).gte(1)){
                extra = formatWhole(x)}
                //if(hasUpgrade("t",22)) bonusDis = "(+"+bonus+")"
                let dis = "Boost <b>negative charge</b> gain and limit"
                return dis + ".\n\
                Cost: " + formatWhole(tmp[this.layer].buyables[this.id].cost)+" <b>negative charge</b>\n\
                Effect: x" + format(new Decimal(2).mul(effbonus))+"\n\
                Amount: " + formatWhole(getBuyableAmount("e", 11))+bonusDis+"\n\
                Currently: x" + format(new Decimal(2).pow(getBuyableAmount("e", 11)).max(1))
            },
            canAfford() {
                return player.e.charge.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() {
                //if(!hasMilestone("e",13))
                    //{
                    player.e.charge = player.e.charge.sub(this.cost()).add(0.001)
                    //}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                // if(hasUpgrade("t",22)) getBuyableAmount("t",11).add(upgradeEffect("t",22))
                // if(hasMilestone("m",13)) this.buyMax()
            },
            // maxAfford() {
            //     let s = player.r.points.log10().pow(1.4)
            //     let base = tmp.m.buyables[11].costb
            //     let exp = tmp.m.buyables[11].coste
            //     let target = s.log(base).root(exp)
            //     return target.floor().add(1)
            // },
            // buyMax() { 
            //     let target = tmp.m.buyables[11].maxAfford
            //     let base = tmp.m.buyables[11].costb
            //     let exp = tmp.m.buyables[11].coste
            //     let cost = Decimal.pow(base,target.pow(exp)).pow10()
            //     if (tmp[this.layer].buyables[this.id].canAfford) {
            //         player.m.buyables[11] = player.m.buyables[11].max(target)
                
            //     }
            effect() {
                let eff = new Decimal(2)
                //if(hasUpgrade("r",31)) eff = eff.add(upgradeEffect("r",31))
                if(getBuyableAmount("e", 11).gte(1)) eff = eff.mul(getBuyableAmount("e", 11))
                return eff
            },
            // bulkbase() { 
            //     let base = new Decimal(2)
            //     return base
            // },
            total() {
                let total = getBuyableAmount("e", 11)
                return total
            },
			// speed() { 
            //     let x = tmp.m.buyables[this.id].total
            //     let base = tmp.m.buyables[this.id].speedbase
            //     return Decimal.pow(base, x).div(1.25).min(10);
            // },
            // bulk() { 
            //     let x = tmp.m.buyables[this.id].total
            //     let base = tmp.m.buyables[this.id].bulkbase
            //     let eff = Decimal.pow(base, x)
            //     // if (hasUpgrade("e",21)) eff = eff.mul(1e6)
            //     // if (hasUpgrade("e",143)) eff = Decimal.tetrate(10,1.79e308)
            //     return eff;
            // },    
        },
        12: {
            title: "Charger 2",
            cost() { 
                let base = tmp.e.buyables[12].costb
                let exp = tmp.e.buyables[12].coste
                let x = player.e.buyables[12]
                let cost = Decimal.pow(base,x.pow(exp)).mul(50)
                return cost
            },
            costb() {
                let cost = new Decimal(5)
                // if(getBuyableAmount("e",11).gte(50)) cost = new Decimal(3.33)
                // if(getBuyableAmount("e",11).gte(300)) cost = new Decimal(3.67)
                return cost
            },
            coste() { 
                let cost = new Decimal(1.2)
                if(getBuyableAmount("e",12).gte(50)) cost = new Decimal(1.875)
                return cost
            },
            base() { 
                let exp = decimalOne
                let base = player.e.charge.add(10).log10().add(10).log10().pow(exp)
                if (player.e.buyables[12].gte(1)) base = base.mul(layers.e.buyablePower(player.e.buyables[12]))
                return base
            },
            display() {
                if (player.tab != "e" || player.subtabs.e.mainTabs != "Buyables") return
                let x = tmp.e.buyables[12].extra
                let extra = ""
                let bonus = ""
                let bonusDis = ""
                let effbonus = 1
                // if(hasUpgrade("t",22)){
                //     bonus = formatWhole(upgradeEffect("t",22))}
                // if(hasUpgrade("t",23)){
                //     effbonus = format(upgradeEffect("t",23))}
                if(getBuyableAmount("e", 12).gte(1)){
                extra = formatWhole(x)}
                //if(hasUpgrade("t",22)) bonusDis = "(+"+bonus+")"
                let dis = "Boost <b>negative charge</b> gain"
                return dis + ".\n\
                Cost: " + formatWhole(tmp[this.layer].buyables[this.id].cost)+" <b>negative charge</b>\n\
                Effect: x" + format(new Decimal(1.5).mul(effbonus))+"\n\
                Amount: " + formatWhole(getBuyableAmount("e", 12))+bonusDis+"\n\
                Currently: x" + format(new Decimal(1.5).pow(getBuyableAmount("e", 12)).max(1))
            },
            canAfford() {
                return player.e.charge.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() {
                //if(!hasMilestone("e",13))
                    //{
                    player.e.charge = player.e.charge.sub(this.cost()).add(0.001)
                    //}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                // if(hasUpgrade("t",22)) getBuyableAmount("t",11).add(upgradeEffect("t",22))
                // if(hasMilestone("m",13)) this.buyMax()
            },
            effect() {
                let eff = new Decimal(1.25)
                //if(hasUpgrade("r",31)) eff = eff.add(upgradeEffect("r",31))
                if(getBuyableAmount("e", 12).gte(1)) eff = eff.mul(getBuyableAmount("e", 12))
                return eff
            },
            total() {
                let total = getBuyableAmount("e", 12)
                return total
            },
        },
        13: {
            title: "Charger 3",
            cost() { 
                let base = tmp.e.buyables[13].costb
                let exp = tmp.e.buyables[13].coste
                let x = player.e.buyables[13]
                let cost = Decimal.pow(base,x.pow(exp)).mul(5000)
                return cost
            },
            costb() {
                let cost = new Decimal(20)
                // if(getBuyableAmount("e",11).gte(50)) cost = new Decimal(3.33)
                // if(getBuyableAmount("e",11).gte(300)) cost = new Decimal(3.67)
                return cost
            },
            coste() { 
                let cost = new Decimal(1.5)
                if(getBuyableAmount("e",13).gte(25)) cost = new Decimal(2.25)
                return cost
            },
            base() { 
                let exp = decimalOne
                let base = player.e.charge.add(10).log10().add(10).log10().pow(exp)
                if (player.e.buyables[13].gte(1)) base = base.mul(layers.e.buyablePower(player.e.buyables[13]))
                return base
            },
            display() {
                if (player.tab != "e" || player.subtabs.e.mainTabs != "Buyables") return
                let x = tmp.e.buyables[13].extra
                let extra = ""
                let bonus = ""
                let bonusDis = ""
                let effbonus = 1
                // if(hasUpgrade("t",22)){
                //     bonus = formatWhole(upgradeEffect("t",22))}
                // if(hasUpgrade("t",23)){
                //     effbonus = format(upgradeEffect("t",23))}
                if(getBuyableAmount("e", 13).gte(1)){
                extra = formatWhole(x)}
                //if(hasUpgrade("t",22)) bonusDis = "(+"+bonus+")"
                let dis = "Boost <b>negative charge</b> gain and limit"
                return dis + ".\n\
                Cost: " + formatWhole(tmp[this.layer].buyables[this.id].cost)+" <b>negative charge</b>\n\
                Effect: ^" + format(new Decimal(1.1).mul(effbonus))+"\n\
                Amount: " + formatWhole(getBuyableAmount("e", 13))+bonusDis+"\n\
                Currently: ^" + format(new Decimal(1.1).pow(getBuyableAmount("e", 13)).max(1))
            },
            canAfford() {
                return player.e.charge.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() {
                //if(!hasMilestone("e",13))
                    //{
                    player.e.charge = player.e.charge.sub(this.cost()).add(0.001)
                    //}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                // if(hasUpgrade("t",22)) getBuyableAmount("t",11).add(upgradeEffect("t",22))
                // if(hasMilestone("m",13)) this.buyMax()
            },
            effect() {
                let eff = new Decimal(1.1)
                //if(hasUpgrade("r",31)) eff = eff.add(upgradeEffect("r",31))
                if(getBuyableAmount("e", 13).gte(1)) eff = eff.pow(getBuyableAmount("e", 13)).max(1)
                return eff
            },
            total() {
                let total = getBuyableAmount("e", 13)
                return total
            },
        }
    },
    
    update(diff) {
        let buy11 = getBuyableAmount("e",11).times(2).max(1)
        let buy12 = getBuyableAmount("e",12).times(1.5).max(1)
        let eUpg23 = decimalOne
        let eMile3 = decimalOne
        let eMile4 = decimalOne
        let eMile6 = decimalOne
        let addForm = (upgradeEffect("e",11))
        let powForm = decimalOne
        let buy13 = (new Decimal(1.1).pow(getBuyableAmount("e",13)))
        if (hasUpgrade("e",23)) eUpg23 = upgradeEffect("e",23)
        if (hasMilestone("e",3)) eMile3 = 3
        if (hasMilestone("e",4)) eMile4 = 1.5
        if (!hasUpgrade("e",11)) player.e.charge = decimalZero
        addForm = addForm.times(diff).times(buy11).times(buy12).times(eUpg23).times(eMile3).times(eMile6).max(0.0001)
        powForm = addForm.exp(buy13).pow(eMile4).pow(1.33)
        if (player.e.unlocked && hasUpgrade("e",11)) player.e.charge = player.e.charge.add(powForm).min(upgradeEffect("e",11).mul(100).times(new Decimal(2).pow(getBuyableAmount("e",11))).max(1).pow(buy13))
    },

    // passiveGeneration(){
    //     let passive = new Decimal(0)
    //     if (hasMilestone('e', 0)) passive = passive.add(1) //100% Prestige Points depending on Reset
    //     return passive
    //     },

    // doReset(resettingLayer) {
    //     let keep = []
    //     if (hasMilestone("a", 0) && resettingLayer == "e") keep.push("upgrades")
    //     if (hasMilestone("t", 0) && resettingLayer == "t") keep.push("upgrades")
    //     if (resettingLayer == "m" && !hasMilestone("m",0)) player.p.upgrades = player.p.upgrades.filter(x=>x<0)    
    //     if (hasMilestone("m", 0) && resettingLayer == "m") {
    //         if (hasMilestone("m", 1) && resettingLayer == "m") {
    //             if (hasMilestone("m", 2) && resettingLayer == "m") player.p.upgrades = player.p.upgrades.filter(x=>x<9)
    //             else player.p.upgrades = player.p.upgrades.filter(x=>x<6)}
    //         else player.p.upgrades = player.p.upgrades.filter(x=>x<5)}
    //     if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer, keep)}
    // },
})



addLayer("at", {
    name: "atoms", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        total: new Decimal(0),
        best: new Decimal(0),
        resettime: new Decimal(0.001),
    }},
    color: "#99ff33",
    // nodeStyle() {return {
    //     "background": ((inChallenge("m",21) && hasMilestone("m",7))?"radial-gradient(rgb(78, 78, 78),rgb(255, 255, 255))": "radial-gradient( #737373,#737373)"),
    //     color: ((inChallenge("m",21) && hasMilestone("m",7))?"rgb(255, 233, 34)":"rgb(61, 61, 61)"),
    // }},
    requires() { 
        let req = new Decimal(1e9)
            return req
        },
    resource: "atoms", // Name of prestige currency
    baseResource: "electrons", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    softcapPower: 0.75,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        atmult = new Decimal(1)
        return atmult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Atom reset", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        let shown = player.e.total.gte(100)
        if(player.at.unlocked) shown = true
        return shown
    },
    unlocked() {
        if(player.p.points.gte(1e9)) return true
        else return false
    },
    branches:['p'],

    tabFormat: {
        "Main": {
        content:[
            function() {if (player.tab == "at") return "main-display"},
            "prestige-button",
            "blank",
            ["raw-html",
            function() {
            //let limit = (new Decimal(2).pow(getBuyableAmount("e",11)).max(1).pow(new Decimal(1.1).pow(getBuyableAmount("e",13))))
            // let a = "<br>You have " + layerText("h2", "e", format(player.e.charge)) +  " <b>negative charge</b>, which boosts '<b>Duplicate</b>' effect by " + layerText("h2", "e", format(tmp.e.chargeEffect)) + "x<br><b>negative charge</b> limit: "+format(limit)
            return "You have "+formatWhole(player.p.points)+" quarks<br><br>Your best electrons is "+formatWhole(player.e.best)+"<br>You have made a total of "+formatWhole(player.e.total)+" electrons<br>"}],
            "blank",
            "upgrades"
            ]
        },
        "Milestones": {
            content:[
                function() {if (player.tab == "at") return "main-display"},
            "prestige-button",
            "blank",
            ["raw-html"],
            ["display-text"
            ],
            "milestones"
            ],
        },
        "Buyables": {
            content:[
                function() {if (player.tab == "at") return "main-display"},
            "prestige-button",
            "blank",
            ["raw-html",
            function() {
                let limit = (new Decimal(2).pow(getBuyableAmount("e",11)).max(1).pow(new Decimal(1.1).pow(getBuyableAmount("e",13))))
                let a = "You have " + layerText("h2", "e", format(player.e.charge)) +  " <b>negative charge</b>, which boosts '<b>Duplicate</b>' effect by " + layerText("h2", "e", format(tmp.e.chargeEffect)) + "x<br><b>negative charge</b> limit: "+format(limit)
                return a}],
            "blank",
            ["display-text"
            ],
            "buyables"
            ],
            unlocked() {return hasMilestone("e",0)}
        },
    },
    effbase() {
        let eff = new Decimal(1.0001)
        // if (hasUpgrade("e",22)) eff = eff.add(upgradeEffect("e",22))
        // if (hasUpgrade("e",26)) eff = eff.add(tmp.e.upgrades[26].effect2)
        // if (hasUpgrade("e",66)) eff = eff.mul(upgradeEffect("e",66))
        // if (hasUpgrade("e",73)) eff = eff.mul(upgradeEffect("e",73))
        // if (hasMilestone("Uu",7)) eff = eff.mul(10)
        // eff = eff.mul(tmp.c.buyables[12].effect)
        return eff
    },

    effect(){
        let eff = player.at.points
        eff = Decimal.pow(this.effbase(),eff).sub(1)
        eff = eff.min(Decimal.tetrate(10,8))
        return eff
    },

    effect2(){
        let eff = player.at.points.add(1).max(1)
        if(player.at.best.gte(1)) eff = eff.add(0.25)
        eff = Decimal.pow(10,eff.log10().pow(0.875)).max(1)
        if (eff.gte("eee25")) eff = eff.log10().log10().pow(4e23).pow10()
        return eff
    },

    // chargeEffect(){
    //     let eff = player.e.charge.add(1).max(1)
    //     eff = Decimal.pow(10,eff.log10().pow(1.25).log2().max(0.001)).max(1)
    //     if (hasUpgrade("e",32)) eff = eff.times(3)
    //     // if (hasUpgrade("e",135)) eff = eff.pow(upgradeEffect("e",135))
    //     // if (hasUpgrade("e",106)) eff = Decimal.pow(10,eff.add(10).max(10).max(1).log10().pow(1.1))
    //     // if (hasUpgrade("e",156)) eff = Decimal.pow(10,eff.add(10).max(10).max(1).log10().pow(upgradeEffect("e",156)))
    //     // if (hasUpgrade("e",204)) eff = eff.pow(tmp.e.upgrades[204].effect)
    //     if (eff.gte("eee25")) eff = eff.log10().log10().pow(4e23).pow10()
    //     return eff
    // },

    effectDescription() {
        return "Producing "+layerText("h2", "at", format(tmp.at.effect2)) + " <b>Protons</b> /s"
    },

    upgrades: {
        
        11: {
            title: "Boost",
            description()
            {
                let gain = new Decimal(0.01)
                if(getBuyableAmount("e",11).gte(1)) gain = gain.times(getBuyableAmount("e",11).times(2))
                if(getBuyableAmount("e",12).gte(1)) gain = gain.times(getBuyableAmount("e",12).times(1.5))
                if(hasUpgrade("e",23)) gain = gain.times(upgradeEffect("e",23))
                if(hasMilestone("e",3)) gain = gain.times(3)    
                if(getBuyableAmount("e",13).gte(1)) gain = gain.pow(new Decimal(1.1).pow(getBuyableAmount("e",13)))
                if(hasMilestone("e",4)) gain = gain.pow(1.5)
                if(hasMilestone("e",6)) gain = gain.times(2)
                return "Start generating "+format(gain)+" <b>negative charge</b> /s"
            },
            cost: new Decimal(2),
            unlocked(){
                return true
            },
            effect(){
                let eff = new Decimal(0.01)
                return eff
            }
        },
    },

    milestones: {
        0: {
            requirementDescription: "3 total electrons",
            effectDescription: "Unlock electron buyables",
            done() { return player.at.total.gte(1) }
        }, 
    },

    buyablePower(x) {
        x = new Decimal(x)
        let eff = decimalOne
        return eff
    },

    buyables: {
        11: {
            title: "Charger 1",
            cost() { 
                let base = tmp.e.buyables[11].costb
                let exp = tmp.e.buyables[11].coste
                let x = player.e.buyables[11]
                let cost = Decimal.pow(base,x.pow(exp)).mul(1)
                return cost
            },
            costb() {
                let cost = new Decimal(2)
                // if(getBuyableAmount("e",11).gte(50)) cost = new Decimal(3.33)
                // if(getBuyableAmount("e",11).gte(300)) cost = new Decimal(3.67)
                return cost
            },
            coste() { 
                let cost = new Decimal(1)
                if(getBuyableAmount("e",11).gte(100)) cost = new Decimal(1.75)
                return cost
            },
            base() { 
                let exp = decimalOne
                let base = player.e.charge.add(10).log10().add(10).log10().pow(exp)
                if (player.e.buyables[11].gte(1)) base = base.mul(layers.e.buyablePower(player.e.buyables[11]))
                return base
            },
            display() {
                if (player.tab != "e" || player.subtabs.e.mainTabs != "Buyables") return
                let x = tmp.e.buyables[11].extra
                let extra = ""
                let bonus = ""
                let bonusDis = ""
                let effbonus = 1
                // if(hasUpgrade("t",22)){
                //     bonus = formatWhole(upgradeEffect("t",22))}
                // if(hasUpgrade("t",23)){
                //     effbonus = format(upgradeEffect("t",23))}
                if(getBuyableAmount("e", 11).gte(1)){
                extra = formatWhole(x)}
                //if(hasUpgrade("t",22)) bonusDis = "(+"+bonus+")"
                let dis = "Boost <b>negative charge</b> gain and limit"
                return dis + ".\n\
                Cost: " + formatWhole(tmp[this.layer].buyables[this.id].cost)+" <b>negative charge</b>\n\
                Effect: x" + format(new Decimal(2).mul(effbonus))+"\n\
                Amount: " + formatWhole(getBuyableAmount("e", 11))+bonusDis+"\n\
                Currently: x" + format(new Decimal(2).pow(getBuyableAmount("e", 11)).max(1))
            },
            canAfford() {
                return player.e.charge.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() {
                //if(!hasMilestone("e",13))
                    //{
                    player.e.charge = player.e.charge.sub(this.cost()).add(0.001)
                    //}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                // if(hasUpgrade("t",22)) getBuyableAmount("t",11).add(upgradeEffect("t",22))
                // if(hasMilestone("m",13)) this.buyMax()
            },
            // maxAfford() {
            //     let s = player.r.points.log10().pow(1.4)
            //     let base = tmp.m.buyables[11].costb
            //     let exp = tmp.m.buyables[11].coste
            //     let target = s.log(base).root(exp)
            //     return target.floor().add(1)
            // },
            // buyMax() { 
            //     let target = tmp.m.buyables[11].maxAfford
            //     let base = tmp.m.buyables[11].costb
            //     let exp = tmp.m.buyables[11].coste
            //     let cost = Decimal.pow(base,target.pow(exp)).pow10()
            //     if (tmp[this.layer].buyables[this.id].canAfford) {
            //         player.m.buyables[11] = player.m.buyables[11].max(target)
                
            //     }
            effect() {
                let eff = new Decimal(2)
                //if(hasUpgrade("r",31)) eff = eff.add(upgradeEffect("r",31))
                if(getBuyableAmount("e", 11).gte(1)) eff = eff.mul(getBuyableAmount("e", 11))
                return eff
            },
            // bulkbase() { 
            //     let base = new Decimal(2)
            //     return base
            // },
            total() {
                let total = getBuyableAmount("e", 11)
                return total
            },
			// speed() { 
            //     let x = tmp.m.buyables[this.id].total
            //     let base = tmp.m.buyables[this.id].speedbase
            //     return Decimal.pow(base, x).div(1.25).min(10);
            // },
            // bulk() { 
            //     let x = tmp.m.buyables[this.id].total
            //     let base = tmp.m.buyables[this.id].bulkbase
            //     let eff = Decimal.pow(base, x)
            //     // if (hasUpgrade("e",21)) eff = eff.mul(1e6)
            //     // if (hasUpgrade("e",143)) eff = Decimal.tetrate(10,1.79e308)
            //     return eff;
            // },    
        },
    },
    
    // update(diff) {
    //     let buy11 = getBuyableAmount("e",11).times(2).max(1)
    //     let buy12 = getBuyableAmount("e",12).times(1.5).max(1)
    //     let eUpg23 = decimalOne
    //     let eMile3 = decimalOne
    //     let eMile4 = decimalOne
    //     let eMile6 = decimalOne
    //     let addForm = (upgradeEffect("e",11))
    //     let powForm = decimalOne
    //     let buy13 = (new Decimal(1.1).pow(getBuyableAmount("e",13)))
    //     if (hasUpgrade("e",23)) eUpg23 = upgradeEffect("e",23)
    //     if (hasMilestone("e",3)) eMile3 = 3
    //     if (hasMilestone("e",4)) eMile4 = 1.5
    //     if (!hasUpgrade("e",11)) player.e.charge = decimalZero
    //     addForm = addForm.times(diff).times(buy11).times(buy12).times(eUpg23).times(eMile3).times(eMile6).max(0.0001)
    //     powForm = addForm.exp(buy13).pow(eMile4).pow(1.33)
    //     if (player.e.unlocked && hasUpgrade("e",11)) player.e.charge = player.e.charge.add(powForm).min(upgradeEffect("e",11).mul(100).times(new Decimal(2).pow(getBuyableAmount("e",11))).max(1).pow(buy13))
    // },

    // passiveGeneration(){
    //     let passive = new Decimal(0)
    //     if (hasMilestone('e', 0)) passive = passive.add(1) //100% Prestige Points depending on Reset
    //     return passive
    //     },

    // doReset(resettingLayer) {
    //     let keep = []
    //     if (hasMilestone("a", 0) && resettingLayer == "e") keep.push("upgrades")
    //     if (hasMilestone("t", 0) && resettingLayer == "t") keep.push("upgrades")
    //     if (resettingLayer == "m" && !hasMilestone("m",0)) player.p.upgrades = player.p.upgrades.filter(x=>x<0)    
    //     if (hasMilestone("m", 0) && resettingLayer == "m") {
    //         if (hasMilestone("m", 1) && resettingLayer == "m") {
    //             if (hasMilestone("m", 2) && resettingLayer == "m") player.p.upgrades = player.p.upgrades.filter(x=>x<9)
    //             else player.p.upgrades = player.p.upgrades.filter(x=>x<6)}
    //         else player.p.upgrades = player.p.upgrades.filter(x=>x<5)}
    //     if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer, keep)}
    // },
})



addLayer("a", {
    name: "Achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: decimalZero,
    }},
    tooltip() {
      return "Achievements"
    },
    color: "#FFFF00",
    nodeStyle() {return {
        "background": "radial-gradient(#FFFF00, #d5ad83)" ,
    }},
    requires: decimalZero, // Can be a function that takes requirement increases into account
    resource: "Achievement Particles",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    achievementPopups: true,
    tabFormat: {
        "Achievements" :{
            content: ["main-display",
            "achievements"]
        },
        "Milestones" :{
            content: ["milestones"]
        }
    },
    achievements: {
        rows: 4,
        cols: 7,
        11: {
            name: "In the beginning...",
            tooltip: "Start generating particles.<br>Reward: 1 AP",
            done() {
                return hasUpgrade("p",11)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"90px","height":"90px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",11)) color = "#77BF5F"
                    return color
                }
            },
        },
        12: {
            name: "Expansion",
            tooltip: "Get 100 total quarks.<br>Reward: 1 AP",
            done() {
                return player.p.total.gte(100)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"90px","height":"90px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",12)) color = "#77BF5F"
                    return color
                }
            },
        },
        13: {
            name: "Faster!",
            tooltip: "Get 1,000,000 particles.<br>Reward: 1 AP",
            done() {
                return player.points.gte(1e6)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"90px","height":"90px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",13)) color = "#77BF5F"
                    return color
                }
            },
        },
        14: {
            name: "Think <h3>bigger</h3>...",
            tooltip: "Get an electron.<br>Reward: 1 AP",
            done() {
                return player.e.points.gte(1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"90px","height":"90px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",14)) color = "#77BF5F"
                    return color
                }
            },
        },
        15: {
            name: "Charging extra",
            tooltip: "Get 5 total electrons.<br>Reward: 1 AP",
            done() {
                return player.e.total.gte(5)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"90px","height":"90px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",15)) color = "#77BF5F"
                    return color
                }
            },
        },
        16: {
            name: "Double-negative",
            tooltip: "Get 1500 total electrons.<br>Reward: 1 AP",
            done() {
                return player.e.total.gte(1500)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"90px","height":"90px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",16)) color = "#77BF5F"
                    return color
                }
            },
        },
        17: {
            name: "Vibrations",
            tooltip: "Get 5000 negative charge.<br>Reward: 1 AP",
            done() {
                return player.e.charge.gte(5000)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"90px","height":"90px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",17)) color = "#77BF5F"
                    return color
                }
            },
        },
    },

    effect() {
        let eff = player.a.points
        eff = Decimal.pow(1.100, eff)
        return eff
    },
    effectDescription() {
        return "speeding up particle gain by " + format(tmp.a.effect) + "x"
    },
    milestones: {
        0: {
            requirementDescription: "25 achievement particles",
            effectDescription: "Keep E,A upgrades and milestones",
            done() { return player.a.points.gte(25) }
        },
        1: {
            requirementDescription: "100 achievement particles",
            effectDescription: "Keep M,C,SD upgrades, milestones and challenges",
            done() { return player.a.points.gte(100) }
        },
        2: {
            requirementDescription: "500 achievement particles",
            effectDescription: "Keep DM,S upgrades, milestones and challenges",
            done() { return player.a.points.gte(500) }
        },
        3: {
            requirementDescription: "1000 achievement particles",
            effectDescription: "Keep N,G upgrades, milestones and challenges",
            done() { return player.a.points.gte(1000) }
        },
        // 4: {
        //     requirementDescription: "100 achievement particles",
        //     effectDescription: "Keep Cell milestones",
        //     done() { return player.a.points.gte(100) }
        // },
        // 5: {
        //     requirementDescription: "150 achievement particles",
        //     effectDescription: "Keep Organism milestones",
        //     done() { return player.a.points.gte(150) }
        // },
        // 6: {
        //     requirementDescription: "200 achievement particles",
        //     effectDescription: "Keep Stardust milestones",
        //     done() { return player.a.points.gte(200) }
        // },
        // 7: {
        //     requirementDescription: "275 achievement particles",
        //     effectDescription: "Keep Dark Matter milestones",
        //     done() { return player.a.points.gte(275) }
        // },
        // 8: {
        //     requirementDescription: "225 achievement particles",
        //     effectDescription: "Keep Sol milestones",
        //     done() { return player.a.points.gte(225) }
        // },
        // 9: {
        //     requirementDescription: "400 achievement particles",
        //     effectDescription: "Keep Nebula milestones",
        //     done() { return player.a.points.gte(400) }
        // },
        // 10: {
        //     requirementDescription: "750 achievement particles",
        //     effectDescription: "Keep Galaxy milestones",
        //     done() { return player.a.points.gte(750) }
        // },
        // 11: {
        //     requirementDescription: "1308 achievement particles",
        //     effectDescription: "Discover a Parallel Universe...",
        //     done() { return player.a.points.gte(1308) }
        // }
    },
})