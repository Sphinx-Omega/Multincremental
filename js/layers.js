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
        if(hasUpgrade("p",21)) pmult = pmult.mul(upgradeEffect("p",21))
        if(hasUpgrade("p",22)) pmult = pmult.mul(upgradeEffect("p",22))
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
            description: "Start generating 0.1 particles /s",
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
            description: "Get more particles based on quarks",
            cost: new Decimal(5),
            unlocked(){
                return true
            }
        },

        21: {
            title: "Duplicate",
            description: "Quark gain is boosted by particles",
            cost: new Decimal(30),
            unlocked(){
                return true
            },
            effect(){
                let eff = format(player.points.root(3))
                return eff
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

        22: {
            title: "Clone",
            description: "Quarks boost their own gain",
            cost: new Decimal(150),
            unlocked(){
                return true
            },
            effect(){
                let eff = format(player.p.points.root(player.p.points.pow(0.5).max(1)))
                // let p22sc = new Decimal(1e3)
                // if(eff.gte(p22sc))
                return eff
            },
            effectDisplay(){
                return this.effect()+"x"
            }
        },

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
        cols: 5,
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
            tooltip: "Create 500 quarks.<br>Reward: 1 AP",
            done() {
                return player.p.total.gte(500)
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
    },

    effect() {
        let eff = player.a.points
        eff = Decimal.pow(1.02, eff)
        return eff
    },
    effectDescription() {
        return "speeding up particle creation by " + format(tmp.a.effect)
    },
    milestones: {
        0: {
            requirementDescription: "5 achievement particles",
            effectDescription: "Keep Quark upgrades on Electron reset",
            done() { return player.a.points.gte(5) }
        },
        1: {
            requirementDescription: "25 achievement particles",
            effectDescription: "Keep Electron milestones on Molecule reset",
            done() { return player.a.points.gte(25) }
        },
        2: {
            requirementDescription: "50 achievement particles",
            effectDescription: "Keep Atom milestones on Cell reset",
            done() { return player.a.points.gte(50) }
        },
        3: {
            requirementDescription: "75 achievement particles",
            effectDescription: "Keep Molecule milestones",
            done() { return player.a.points.gte(75) }
        },
        4: {
            requirementDescription: "100 achievement particles",
            effectDescription: "Keep Cell milestones",
            done() { return player.a.points.gte(100) }
        },
        5: {
            requirementDescription: "150 achievement particles",
            effectDescription: "Keep Organism milestones",
            done() { return player.a.points.gte(150) }
        },
        6: {
            requirementDescription: "200 achievement particles",
            effectDescription: "Keep Stardust milestones",
            done() { return player.a.points.gte(200) }
        },
        7: {
            requirementDescription: "275 achievement particles",
            effectDescription: "Keep Dark Matter milestones",
            done() { return player.a.points.gte(275) }
        },
        8: {
            requirementDescription: "225 achievement particles",
            effectDescription: "Keep Sol milestones",
            done() { return player.a.points.gte(225) }
        },
        9: {
            requirementDescription: "400 achievement particles",
            effectDescription: "Keep Nebula milestones",
            done() { return player.a.points.gte(400) }
        },
        10: {
            requirementDescription: "750 achievement particles",
            effectDescription: "Keep Galaxy milestones",
            done() { return player.a.points.gte(750) }
        },
        11: {
            requirementDescription: "1308 achievement particles",
            effectDescription: "Discover a Parallel Universe...",
            done() { return player.a.points.gte(1308) }
        }
    },
})