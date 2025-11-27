addLayer("inf", {
    name: "inf", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "∞ Infinity", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: decimalZero,
        total: decimalZero,
        best: decimalZero,
        infinities: decimalZero,
        infenergy: decimalZero,
        gen1: decimalZero,
        gen2: decimalZero,
        gen3: decimalZero,
        gen4: decimalZero,
        gen5: decimalZero,
        gen6: decimalZero,
        gen7: decimalZero,
        gen8: decimalZero,
        gen9: decimalZero,
        gen10: decimalZero,
        gen1bought: decimalZero,
        gen2bought: decimalZero,
        gen3bought: decimalZero,
        gen4bought: decimalZero,
        gen5bought: decimalZero,
        gen6bought: decimalZero,
        gen7bought: decimalZero,
        gen8bought: decimalZero,
        gen9bought: decimalZero,
        gen10bought: decimalZero,
        gen1mult: new Decimal(0.1),
        gen2mult: new Decimal(0.05),
        gen3mult: new Decimal(0.01),
        gen4mult: new Decimal(0.005),
        gen5mult: new Decimal(0.001),
        gen6mult: new Decimal(0.0005),
        gen7mult: new Decimal(0.0001),
        gen8mult: new Decimal(0.00005),
        gen9mult: new Decimal(0.00001),
        gen10mult: new Decimal(0.000005),
        gen1prod: new Decimal(0.1),
        gen2prod: decimalZero,
        gen3prod: decimalZero,
        gen4prod: decimalZero,
        gen5prod: decimalZero,
        gen6prod: decimalZero,
        gen7prod: decimalZero,
        gen8prod: decimalZero,
        gen9prod: decimalZero,
        gen10prod: decimalZero,
        genpower: decimalZero,
        genmult: decimalOne,
        genexp: new Decimal(2/3),
        collchance: decimalZero,
        collinterval: decimalOne,
        colltimer: decimalZero,
        collmult: decimalOne,
        collparts: decimalZero,
        collIE: decimalOne,
        collchanceupg: decimalZero,
        collintupg: decimalZero,
        collmultupg: decimalZero,
        collintlimit: new Decimal(0.067),
        collupg1: decimalZero,
        collupg2: decimalZero,
        collupg3: decimalZero,
        collupg4: decimalZero,
        collupg3power: decimalOne,
        collupg4root: new Decimal(1.5)
    }},
    color: "#ffffff",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color"() {
            return ((this.onHover)?("transparent"):(rgba(141, 141, 141, 1)))
        },
        "background-position":"center",
        "background-size":"180px",
        "border-size":"2px",
        "border-color":"transparent",
        "color":"white",
        "font-size":"22px"
        }
    },
    requires: decimalZero, // Can be a function that takes requirement increases into account
    resource: "points", // Name of prestige currency
    baseResource: "energy", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    softcapPower: 0.6,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        pmult = new Decimal(0)
        return pmult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(0)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    unlocked() {
        if(hasAchievement("a",43)) return true
    },
    hotkeys: [
        // {
        //     key: "m", description: "M: Rapid buy all bars",
        //         onPress(){
        //             for(i = 0; i<10 ; i++){
        //                 if (canBuyBuyable("p",11)) buyBuyable("p",11)
        //                 if (canBuyBuyable("p",12)) buyBuyable("p",12)
        //                 if (canBuyBuyable("p",13)) buyBuyable("p",13)
        //                 if (canBuyBuyable("p",14)) buyBuyable("p",14)
        //                 if (canBuyBuyable("p",15)) buyBuyable("p",15)
        //                 if (canBuyBuyable("p",16)) buyBuyable("p",16)
        //                 if (canBuyBuyable("p",17)) buyBuyable("p",17)
        //                 if (canBuyBuyable("p",18)) buyBuyable("p",18)
        //                 if (canBuyBuyable("p",19)) buyBuyable("p",19)
        //                 if (canBuyBuyable("p",21)) buyBuyable("p",21)
        //             }
        //         }
        // },
    ],
    shouldNotify: false,
    layerShown() {
        return player.inf.unlocked
    },
    tabFormat: {
        "Upgrades" :{
            content: [
                ["raw-html",
                    function(){
                        return ""
                    }
                ],
                "blank",
                "upgrades",
                ["clickables",1],
                ["clickables",2],
                ["clickables",4],
                ["clickable",999],
            ],
            style: {
                "right":"0",
                "left":"0",
                "height":"50%",
                "width"(){
                    if(hasUpgrade("inf",111)) return "265%"
                    else return "145%"
                },
                // "overflow-x":"scroll",
                // "scrollbar-color":"darkgray dimgray",
                "transition":"instant",
                "position":"static"
            },
            buttonStyle: {
                "border-radius":"0%",
                "border-top-left-radius":"50px 50px",
                "border-top-right-radius":"50px 50px",
                "border-color":"transparent",
                "background-color"(){
                    return ((player.subtabs.inf.mainTabs == "Upgrades")?"#1a1a1aff":"rgba(70, 70, 70, 1)")
                },
                "visibility":"visible",
                "position":"fixed",
                "height":"7.5%",
                "width":"26.85%",
                "top":"19.5%",
                "left":"3.9%",
                "z-index":"9",
                "font-size":"40px",
                "text-shadow":"4px 4px 2px #000000c7",
                "transition-duration":"0s"
            },
        },

        "Generators" :{
            content: [
                ["raw-html",
                    function(){
                        return ""
                    }
                ],
                "blank",
                ["clickables",1],
                ["clickables",2],
                ["clickables",3],
                ["clickable",999],
                ["buyables",[1]],
                ["buyables",[2]]
            ],
            style: {
                "background-size":"400px",
                "padding-bottom":"-400px",
                "position":"fixed",
                "right":"35%",
                "height":"616px",
            },
            buttonStyle: {
                "border-radius":"0%",
                "border-top-left-radius":"50px 50px",
                "border-top-right-radius":"50px 50px",
                "border-color":"transparent",
                "background-color"(){
                    return ((player.subtabs.inf.mainTabs == "Generators")?"#1a1a1aff":"rgba(70, 70, 70, 1)")
                },
                "visibility":"visible",
                "position":"fixed",
                "height":"7.5%",
                "width":"26.85%",
                "top":"19.5%",
                "left":"30.85%",
                "z-index":"9",
                "font-size":"40px",
                "text-shadow":"4px 4px 2px #000000c7",
                "transition-duration":"0s"
            },
            unlocked(){
                return (hasUpgrade("inf",11))
            }
        },

        "Collider" :{
            content: [
                ["raw-html",
                    function(){
                        return ""
                    }
                ],
                "blank",
                ["clickables",1],
                ["clickables",2],
                ["clickables",5],
                ["clickable",999],
                ["buyables",[3]],
                ["buyables",[4]]
            ],
            style: {
                "background-size":"400px",
                "padding-bottom":"-400px",
                "position":"fixed",
                "right":"35%",
                "height":"616px",
            },
            buttonStyle: {
                "border-radius":"0%",
                "border-top-left-radius":"50px 50px",
                "border-top-right-radius":"50px 50px",
                "border-color":"transparent",
                "background-color"(){
                    return ((player.subtabs.inf.mainTabs == "Collider")?"#1a1a1aff":"rgba(70, 70, 70, 1)")
                },
                "visibility":"visible",
                "position":"fixed",
                "height":"7.5%",
                "width":"26.8%",
                "top":"19.5%",
                "left":"57.75%",
                "z-index":"9",
                "font-size":"40px",
                "text-shadow":"4px 4px 2px #000000c7",
                "transition-duration":"0s"
            },
            unlocked(){
                return hasUpgrade("inf",121)
            }
        },
    },


    buyables: {
        
        // 11: {
        //     cost() { 
        //         let cost = Decimal.pow(10,(new Decimal(1.138).pow(player.p.gen)))
        //         if (hasUpgrade("p",32)) cost = cost.pow(1/3).max(1)
        //         if (hasUpgrade("asc",45)) cost = cost.pow(1/111)
        //         return cost.round()
        //     },
        //     bought() {
        //         let b = player.p.gen
        //         return b
        //     },
        //     extra(){
        //         let ex = decimalZero
        //         let divamt = new Decimal(10)
        //         if(hasUpgrade("asc",31)) divamt = new Decimal(5)
        //         if(hasUpgrade("p",22)) ex = (player.p.boost).div(divamt).floor()
        //         return ex
        //     },
        //     effect(){
        //         let eff = player.p.buyables[11]
        //         if(hasUpgrade("p",22)) eff = eff.add(this.extra())
        //         return eff
        //     },
        //     display() {
        //         if (player.tab != "p") return
        //         let x = tmp.p.buyables[11].extra
        //         let extra = ""
        //         let bonus = " (Maxed)"
        //         let bonusDis = ""
        //         let effbonus = 1
        //         let dis = ""
        //         let costdis = " particle"
        //         if(this.cost != decimalOne) costdis = " particles"
        //         return dis + "<h2>\
        //         Cost: " + formatWhole(this.cost()) + costdis
        //     },
        //     canAfford() {
        //         if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
        //     },

        //     buy() {
        //         if(!hasUpgrade("asc",12)) {player.points = player.points.sub(this.cost())}
        //         setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        //         player.p.gen = player.p.gen.add(1)
        //     },

        //     buyMax() {
        //         buyBuyable("p",11)
        //     },

        //     unlocked() { return true }, 
        //     style: {'height':'60px', 'width':'400px',
        //         "border-radius"(){
        //             return "0%"
        //         },
        //         "border-color":"white",
        //         "background-color"(){
        //             let a = "black"
        //             let b = "rgba(255, 0, 0, 0.75)"
        //             return (tmp.p.buyables[11].canAfford)?b:a
        //         },
        //         "color":"white",
        //         "text-shadow":"0 0 3px black"
        //     },
        // },

        11: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).sub(1))).max(1).times(10)
                return cost 
            },
            currencyInternalName:"infenergy",
            currencyLayer:"inf",
            currencyDisplayName:"IE",
            bought() {
                let b = player.inf.gen1bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[11].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen1mult, 2) + ")"
                let dis = "<h1>First generator:  " + format(player.inf.gen1, 2) + " (" + formatWhole(player.inf.gen1bought) + ") " + "<br><br><h2>GP/sec: " + format(player.inf.gen1prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen1bought = player.inf.gen1bought.add(1)
                player.inf.gen1 = player.inf.gen1.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[11].canAfford)?("#e94141ff"):("#613f3fff")
                },
                "background-image"(){
                    return "url(images/icons/generator1.png), url(images/icons/generator1.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"37.5%",
                "left":"7.5%",
                "transition":"instant"
            },
        },

        12: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).times(2))).max(1).times(100)
                return cost 
            },
            bought() {
                let b = player.inf.gen2bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[12].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen2mult, 2) + ")"
                let dis = "<h1>Second generator:  " + format(player.inf.gen2, 2) + " (" + formatWhole(player.inf.gen2bought) + ") " + "<br><br><h2>G1/sec: " + format(player.inf.gen2prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen2bought = player.inf.gen2bought.add(1)
                player.inf.gen2 = player.inf.gen2.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[12].canAfford)?("#ff853fff"):("#70522fff")
                },
                "background-image"(){
                    return "url(images/icons/generator2.png), url(images/icons/generator2.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"37.5%",
                "left":"46.5%",
                "transition":"instant"
            },
        },

        13: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).times(4))).max(1).times(1e4)
                return cost 
            },
            bought() {
                let b = player.inf.gen3bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[13].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen3mult, 2) + ")"
                let dis = "<h1>Third generator:  " + format(player.inf.gen3, 2) + " (" + formatWhole(player.inf.gen3bought) + ") " + "<br><br><h2>G2/sec: " + format(player.inf.gen3prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen3bought = player.inf.gen3bought.add(1)
                player.inf.gen3 = player.inf.gen3.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[13].canAfford)?("#ffec3fff"):("#555228ff")
                },
                "background-image"(){
                    return "url(images/icons/generator3.png), url(images/icons/generator3.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"47.5%",
                "left":"7.5%",
                "transition":"instant"
            },
        },

        14: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).times(6))).max(1).times(1e7)
                return cost 
            },
            bought() {
                let b = player.inf.gen4bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[14].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen4mult, 2) + ")"
                let dis = "<h1>Fourth generator:  " + format(player.inf.gen4, 2) + " (" + formatWhole(player.inf.gen4bought) + ") " + "<br><br><h2>G3/sec: " + format(player.inf.gen4prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen4bought = player.inf.gen4bought.add(1)
                player.inf.gen4 = player.inf.gen4.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[14].canAfford)?("#b1ee6cff"):("#627430ff")
                },
                "background-image"(){
                    return "url(images/icons/generator4.png), url(images/icons/generator4.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"47.5%",
                "left":"46.5%",
                "transition":"instant"
            },
        },

        15: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).times(9))).max(1).times(1e12)
                return cost 
            },
            bought() {
                let b = player.inf.gen5bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[15].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen5mult, 2) + ")"
                let dis = "<h1>Fifth generator:  " + format(player.inf.gen5, 2) + " (" + formatWhole(player.inf.gen5bought) + ") " + "<br><br><h2>G4/sec: " + format(player.inf.gen5prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen5bought = player.inf.gen5bought.add(1)
                player.inf.gen5 = player.inf.gen5.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[15].canAfford)?("#16f834ff"):("#234d25ff")
                },
                "background-image"(){
                    return "url(images/icons/generator5.png), url(images/icons/generator5.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"57.5%",
                "left":"7.5%",
                "transition":"instant"
            },
        },

        16: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).times(12))).max(1).times(1e18)
                return cost 
            },
            bought() {
                let b = player.inf.gen6bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[16].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen6mult, 2) + ")"
                let dis = "<h1>Sixth generator:  " + format(player.inf.gen6, 2) + " (" + formatWhole(player.inf.gen6bought) + ") " + "<br><br><h2>G5/sec: " + format(player.inf.gen6prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen6bought = player.inf.gen6bought.add(1)
                player.inf.gen6 = player.inf.gen6.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[16].canAfford)?("#16f8daff"):("#46887aff")
                },
                "background-image"(){
                    return "url(images/icons/generator6.png), url(images/icons/generator6.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"57.5%",
                "left":"46.5%",
                "transition":"instant"
            },
        },

        17: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).times(15))).max(1).times(1e25)
                return cost 
            },
            bought() {
                let b = player.inf.gen7bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[17].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen7mult, 2) + ")"
                let dis = "<h1>Seventh generator:  " + format(player.inf.gen7, 2) + " (" + formatWhole(player.inf.gen7bought) + ") " + "<br><br><h2>G6/sec: " + format(player.inf.gen7prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen7bought = player.inf.gen7bought.add(1)
                player.inf.gen7 = player.inf.gen7.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[17].canAfford)?("#164bf8ff"):("#2c305fff")
                },
                "background-image"(){
                    return "url(images/icons/generator7.png), url(images/icons/generator7.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"67.5%",
                "left":"7.5%",
                "transition":"instant"
            },
        },

        18: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).times(18))).max(1).times(1e35)
                return cost 
            },
            bought() {
                let b = player.inf.gen8bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[18].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen8mult, 2) + ")"
                let dis = "<h1>Eighth generator:  " + format(player.inf.gen8, 2) + " (" + formatWhole(player.inf.gen8bought) + ") " + "<br><br><h2>G7/sec: " + format(player.inf.gen8prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen8bought = player.inf.gen8bought.add(1)
                player.inf.gen8 = player.inf.gen8.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[18].canAfford)?("#9216f8ff"):("#503761ff")
                },
                "background-image"(){
                    return "url(images/icons/generator8.png), url(images/icons/generator8.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"67.5%",
                "left":"46.5%",
                "transition":"instant"
            },
        },

        19: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).times(21))).max(1).times(1e50)
                return cost 
            },
            bought() {
                let b = player.inf.gen9bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[19].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen9mult, 2) + ")"
                let dis = "<h1>Ninth generator:  " + format(player.inf.gen9, 2) + " (" + formatWhole(player.inf.gen9bought) + ") " + "<br><br><h2>G8/sec: " + format(player.inf.gen9prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen9bought = player.inf.gen9bought.add(1)
                player.inf.gen9 = player.inf.gen9.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[19].canAfford)?("#f148d5ff"):("#4b2d48ff")
                },
                "background-image"(){
                    return "url(images/icons/generator9.png), url(images/icons/generator9.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"77.5%",
                "left":"7.5%",
                "transition":"instant"
            },
        },

        21: {
            cost() { 
                let cost = Decimal.pow(10,((this.bought()).times(25))).max(1).times(1e75)
                return cost 
            },
            bought() {
                let b = player.inf.gen10bought
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                let x = tmp.inf.buyables[21].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let multdis = " (x"+ format(player.inf.gen10mult, 2) + ")"
                let dis = "<h1>Tenth generator:  " + format(player.inf.gen10, 2) + " (" + formatWhole(player.inf.gen10bought) + ") " + "<br><br><h2>G9/sec: " + format(player.inf.gen10prod, 2) + multdis
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.gen10bought = player.inf.gen10bought.add(1)
                player.inf.gen10 = player.inf.gen10.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'9.5%', 'width':'35%',
                "border-radius"(){
                    return "20px/20%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return (tmp.inf.buyables[21].canAfford)?("#ffffffff"):("#646464ff")
                },
                "background-image"(){
                    return "url(images/icons/generatorfinal.png), url(images/icons/generatorfinal.png)"
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"77.5%",
                "left":"46.5%",
                "transition":"instant"
            },
        },

        31: {
            cost() { 
                let sc = player.inf.collchanceupg.max(28).sub(27).pow(0.15).times((this.bought().max(28).sub(27)).root(100))
                let cost = Decimal.pow(10,(this.bought().times(3))).max(1).times(5e7).pow(0.625).pow(sc)
                if(hasUpgrade("inf",161)) cost = cost.div(upgradeEffect("inf",161))
                return cost 
            },
            bought() {
                let b = player.inf.collchanceupg
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                //let x = tmp.inf.buyables[31].extra
                //let extra = ""
                //let bonus = " (Maxed)"
                //let bonusDis = ""
                //let effbonus = 1
                //let multdis = " (x"+ format(player.inf.gen10mult, 2) + ")"
                let prog = "% ⮕ " + formatWhole(player.inf.collchance.add(1))+"%"
                if(player.inf.collchance.gte(100)) prog = "<h1>%"
                let dis = "<h1>Increase Chance<br>" + formatWhole(player.inf.collchance) + prog
                let costdis = " IE"
                let maxed = "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
                if(player.inf.collchance.gte(100)) maxed = "<h2>\n\nMAXED"
                return dis + maxed
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.collchanceupg = player.inf.collchanceupg.add(1)
                player.inf.collchance = player.inf.collchance.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            purchaseLimit: 100,

            unlocked() { return true }, 
            style: {'height':'7.5%', 'width':'10%',
                "border-radius"(){
                    return "10px/10%"
                },
                "border":"2px solid",
                "border-color"() {
                    let a = "#000000ff"
                    let b = "#ffffffff"
                    if(player.inf.collchance.gte(100)) return a
                    return (tmp.inf.buyables[31].canAfford)?(b):(a)
                },
                "background-color"() {
                    let a = "#482850ff"
                    let b = "#9d34b8ff"
                    if(player.inf.collchance.gte(100)) return b
                    return (tmp.inf.buyables[31].canAfford)?(b):(a)
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                //"text-shadow":"0 0 1px white",
                "font-size":"9px",
                "position":"fixed",
                "top":"50%",
                "left":"0%",
                "right":"40%",
                "transition":"instant"
            },
        },

        32: {
            cost() { 
                let sc = player.inf.collintupg.max(10).sub(9).pow(0.1).times((this.bought().max(10).sub(9)).root(500))
                let cost = Decimal.pow(10,(this.bought().times(3))).max(1).times(Decimal.pow((2),this.bought())).times(2e6).pow(1.1).pow(sc)
                if(hasUpgrade("inf",161)) cost = cost.div(upgradeEffect("inf",161))
                return cost 
            },
            bought() {
                let b = player.inf.collintupg
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                //let x = tmp.inf.buyables[31].extra
                //let extra = ""
                //let bonus = " (Maxed)"
                //let bonusDis = ""
                //let effbonus = 1
                //let multdis = " (x"+ format(player.inf.gen10mult, 2) + ")"
                let prog = " ⮕ " + formatTime(player.inf.collinterval.times(0.9).max(0.067))
                if(player.inf.collintupg.gte(26)) prog = ""
                let dis = "<h1>Decrease Interval<br>" + formatTime(player.inf.collinterval) + prog
                let costdis = " IE"
                let maxed = "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
                if(player.inf.collintupg.gte(26)) maxed = "<h2>\n\nMAXED"
                return dis + maxed
            },
            canAfford() {
                if(!player.inf.collinterval.gt(player.inf.collintlimit)) return false
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.collintupg = player.inf.collintupg.add(1)
                player.inf.collinterval = player.inf.collinterval.times(0.9).max(0.067)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'7.5%', 'width':'10%',
                "border-radius"(){
                    return "10px/10%"
                },
                "border":"2px solid",
                "border-color"() {
                    let a = "#000000ff"
                    let b = "#ffffffff"
                    if(player.inf.collintupg.gte(26)) return a
                    return (tmp.inf.buyables[32].canAfford)?(b):(a)
                },
                "background-color"() {
                    let a = "#482850ff"
                    let b = "#9d34b8ff"
                    if(player.inf.collintupg.gte(26)) return b
                    return (tmp.inf.buyables[32].canAfford)?(b):(a)
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                //"text-shadow":"0 0 1px white",
                "font-size":"9px",
                "position":"fixed",
                "top":"50%",
                "left":"0%",
                "right":"10%",
                "transition":"instant"
            },
        },

        33: {
            cost() { 
                let sc = player.inf.collmultupg.max(38).sub(37).pow(0.1).times((this.bought().max(38).sub(37)).root(100))
                let sc2 = player.inf.collmultupg.max(46).sub(45).pow(0.2175).times((this.bought().max(46).sub(45)).root(25))
                let cost = Decimal.pow(10,(this.bought().times(1.75))).times(Decimal.pow(2.5,this.bought())).max(1).times(1e9).pow(1.1).pow(sc).pow(sc2)
                if(hasUpgrade("inf",161)) cost = cost.div(upgradeEffect("inf",161))
                return cost 
            },
            bought() {
                let b = player.inf.collmultupg
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                //let x = tmp.inf.buyables[31].extra
                //let extra = ""
                //let bonus = " (Maxed)"
                //let bonusDis = ""
                //let effbonus = 1
                //let multdis = " (x"+ format(player.inf.gen10mult, 2) + ")"
                let dis = "<h1>Particles gained<br>x" + format(player.inf.collmult,2) +" ⮕ x" + format(player.inf.collmult.times(2.25).pow(1.055),2)
                let costdis = " IE"
                return dis + "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.infenergy = player.inf.infenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.collmultupg = player.inf.collmultupg.add(1)
                player.inf.collmult = player.inf.collmult.times(2.25).pow(1.055)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'7.5%', 'width':'10%',
                "border-radius"(){
                    return "10px/10%"
                },
                "border":"2px solid",
                "border-color"() {
                    let a = "#000000ff"
                    let b = "#ffffffff"
                    return (tmp.inf.buyables[33].canAfford)?(b):(a)
                },
                "background-color"() {
                    let a = "#482850ff"
                    let b = "#9d34b8ff"
                    return (tmp.inf.buyables[33].canAfford)?(b):(a)
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                //"text-shadow":"0 0 1px white",
                "font-size":"9px",
                "position":"fixed",
                "top":"50%",
                "left":"20%",
                "right":"0%",
                "transition":"instant"
            },
        },

        41: {
            cost() { 
                let sc = (this.bought().sub(5).max(0)).times(1.625)
                let cost = Decimal.pow(2,(this.bought().times(2.25))).max(1).times(Decimal.pow(5,this.bought())).times(Decimal.pow(100,sc)).times(10)
                if(hasUpgrade("inf",161)) cost = cost.div(upgradeEffect("inf",161))
                return cost 
            },
            bought() {
                let b = player.inf.collupg1
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                //let x = tmp.inf.buyables[31].extra
                //let extra = ""
                //let bonus = " (Maxed)"
                //let bonusDis = ""
                //let effbonus = 1
                //let multdis = " (x"+ format(player.inf.gen10mult, 2) + ")"
                let prog = " ⮕ x" + formatWhole(player.p.costscaling.sub(1))
                if(player.p.costscaling.lt(11)) prog = ""
                let dis = "<h1>Reduce Post-Infinity Cost Scaling<br>x" + formatWhole(player.p.costscaling) + prog
                let costdis = " Particles"
                let maxed = "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
                if(player.p.costscaling.lt(11)) maxed = "<h2>\n\nMAXED"
                return dis + maxed
            },
            canAfford() {
                if(player.inf.collupg4.gte(10)) return false
                if(player.inf.collparts.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.collparts = player.inf.collparts.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.collupg1 = player.inf.collupg1.add(1)
                player.p.costscaling = player.p.costscaling.sub(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            purchaseLimit: 10,

            unlocked() { return true }, 
            style: {'height':'8%', 'width':'12.5%',
                "border-radius"(){
                    return "10px/10%"
                },
                "border":"2px solid",
                "border-color"() {
                    let a = "#000000ff"
                    let b = "#ffffffff"
                    if(player.p.costscaling.lt(11)) return a
                    return (tmp.inf.buyables[41].canAfford)?(b):(a)
                },
                "background-color"() {
                    let a = "#283b50ff"
                    let b = "#3472b8ff"
                    if(player.p.costscaling.lt(11)) return b
                    return (tmp.inf.buyables[41].canAfford)?(b):(a)
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                //"text-shadow":"0 0 1px white",
                "font-size":"9px",
                "position":"fixed",
                "top":"70%",
                "left":"0%",
                "right":"55%",
                "transition":"instant"
            },
        },

        42: {
            cost() { 
                let sc = (this.bought().sub(9).max(0)).times(1.185)
                let base = Decimal.div(10,3)
                let cost = Decimal.pow(base,(this.bought())).max(1).times(Decimal.pow(1.5,this.bought())).times(Decimal.pow(1e5,sc)).times(25)
                if(hasUpgrade("inf",161)) cost = cost.div(upgradeEffect("inf",161))
                return cost 
            },
            bought() {
                let b = player.inf.collupg2
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                //let x = tmp.inf.buyables[31].extra
                //let extra = ""
                //let bonus = " (Maxed)"
                //let bonusDis = ""
                //let effbonus = 1
                //let multdis = " (x"+ format(player.inf.gen10mult, 2) + ")"
                let prog = " ⮕ x" + format(player.inf.genexp.add(1/30),3)
                if(this.bought().gte(25)) prog = ""
                let dis = "<h1>Increase Generator Power Exponent<br>x" + format(player.inf.genexp,3) + prog
                let costdis = " Particles"
                let maxed = "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
                if(this.bought().gte(25)) maxed = "<h2>\n\nMAXED"
                return dis + maxed
            },
            canAfford() {
                if(player.inf.collupg4.gte(25)) return false
                if(player.inf.collparts.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.collparts = player.inf.collparts.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.collupg2 = player.inf.collupg2.add(1)
                player.inf.genexp = player.inf.genexp.add(1/30)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            purchaseLimit: 25,

            unlocked() { return true }, 
            style: {'height':'8%', 'width':'12.5%',
                "border-radius"(){
                    return "10px/10%"
                },
                "border":"2px solid",
                "border-color"() {
                    let a = "#000000ff"
                    let b = "#ffffffff"
                    if(player.inf.collupg2.gte(25)) return a
                    return (tmp.inf.buyables[42].canAfford)?(b):(a)
                },
                "background-color"() {
                    let a = "#283b50ff"
                    let b = "#3472b8ff"
                    if(player.inf.collupg2.gte(25)) return b
                    return (tmp.inf.buyables[42].canAfford)?(b):(a)
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                //"text-shadow":"0 0 1px white",
                "font-size":"9px",
                "position":"fixed",
                "top":"70%",
                "left":"0%",
                "right":"25%",
                "transition":"instant"
            },
        },

        43: {
            cost() { 
                let sc = (this.bought().sub(9).max(0)).times(1.5)
                let cost = Decimal.pow(3,(this.bought())).max(1).times(new Decimal(50).times(this.bought().add(1))).times(Decimal.pow(1e4,sc))
                if(hasUpgrade("inf",161)) cost = cost.div(upgradeEffect("inf",161))
                return cost 
            },
            bought() {
                let b = player.inf.collupg3
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                //let x = tmp.inf.buyables[31].extra
                //let extra = ""
                //let bonus = " (Maxed)"
                //let bonusDis = ""
                //let effbonus = 1
                //let multdis = " (x"+ format(player.inf.gen10mult, 2) + ")"
                let prog = " ⮕ <sup>^</sup>" + format(player.inf.collupg3power.add(0.05),2)
                if(player.inf.collupg3.gte(20)) prog = ""
                let dis = "<h1>Increase Ascensions Strength<br><sup>^</sup>" + format(player.inf.collupg3power,2) + prog
                let costdis = " Particles"
                let maxed = "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
                if(player.inf.collupg3.gte(20)) maxed = "<h2>\n\nMAXED"
                return dis + maxed
            },
            canAfford() {
                if(player.inf.collupg4.gte(20)) return false
                if(player.inf.collparts.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.collparts = player.inf.collparts.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.collupg3 = player.inf.collupg3.add(1)
                player.inf.collupg3power = player.inf.collupg3power.add(0.05)   
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            purchaseLimit: 20,

            unlocked() { return true }, 
            style: {'height':'8%', 'width':'12.5%',
                "border-radius"(){
                    return "10px/10%"
                },
                "border":"2px solid",
                "border-color"() {
                    let a = "#000000ff"
                    let b = "#ffffffff"
                    if(player.inf.collupg3.gte(20)) return a
                    return (tmp.inf.buyables[43].canAfford)?(b):(a)
                },
                "background-color"() {
                    let a = "#283b50ff"
                    let b = "#3472b8ff"
                    if(player.inf.collupg3.gte(20)) return b
                    return (tmp.inf.buyables[43].canAfford)?(b):(a)
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                //"text-shadow":"0 0 1px white",
                "font-size":"9px",
                "position":"fixed",
                "top":"70%",
                "left":"5%",
                "right":"0%",
                "transition":"instant"
            },
        },

        44: {
            cost() { 
                let sc = (this.bought().sub(4).max(0)).times(1.75).pow(1.1)
                let cost = Decimal.pow(5,(this.bought())).max(1).times(new Decimal(100).pow(this.bought().div(2).add(1))).times(Decimal.pow(1e6,sc))
                if(hasUpgrade("inf",161)) cost = cost.div(upgradeEffect("inf",161))
                return cost 
            },
            bought() {
                let b = player.inf.collupg4
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = decimalOne
                return eff
            },
            // tooltip() {
            //     let ascnum = player.p.rAsc
            //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
            // },
            display() {
                if (player.tab != "inf") return
                //let x = tmp.inf.buyables[31].extra
                //let extra = ""
                //let bonus = " (Maxed)"
                //let bonusDis = ""
                //let effbonus = 1
                //let multdis = " (x"+ format(player.inf.gen10mult, 2) + ")"
                let prog = " ⮕ <sup>^</sup>(<sup>1</sup>/<sub>" + format(player.inf.collupg4root.sub(0.1),1)+"</sub>)"
                if(player.inf.collupg4.gte(10)) prog = ""
                let dis = "<h1>Improve Particle⮕IE Conversion<br><sup>^</sup>(<sup>1</sup>/<sub>" + format(player.inf.collupg4root,1) + "</sub>)" + prog
                let costdis = " Particles"
                let maxed = "<h2>\n\n\
                Cost: " + formatWhole(this.cost()) + costdis
                if(player.inf.collupg4.gte(10)) maxed = "<h2>\n\nMAXED"
                return dis + maxed
            },
            canAfford() {
                if(player.inf.collupg4.gte(10)) return false
                if(player.inf.collparts.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.inf.collparts = player.inf.collparts.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.inf.collupg4 = player.inf.collupg4.add(1)
                player.inf.collupg4root = player.inf.collupg4root.sub(0.1).max(0.1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            purchaseLimit: 10,

            unlocked() { return true }, 
            style: {'height':'8%', 'width':'12.5%',
                "border-radius"(){
                    return "10px/10%"
                },
                "border":"2px solid",
                "border-color"() {
                    let a = "#000000ff"
                    let b = "#ffffffff"
                    if(player.inf.collupg4.gte(10)) return a
                    return (tmp.inf.buyables[44].canAfford)?(b):(a)
                },
                "background-color"() {
                    let a = "#283b50ff"
                    let b = "#3472b8ff"
                    if(player.inf.collupg4.gte(10)) return b
                    return (tmp.inf.buyables[44].canAfford)?(b):(a)
                },
                "background-size":"20%, 20%",
                "background-position":"left, right",
                "background-repeat":"no-repeat",
                "color":"black",
                //"text-shadow":"0 0 1px white",
                "font-size":"9px",
                "position":"fixed",
                "top":"70%",
                "left":"35%",
                "right":"0%",
                "transition":"instant"
            },
        },
    },

    upgrades: {
        
        11: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                return "<h3>UPG-1<br><br>Unlock Generators<br><br>Cost: 1 IE"
            },
            canAfford(){
                return player.inf.infenergy.gte(1)
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1)
            },
            unlocked(){
                return true
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",11))?"rgb(0, 0, 0)":((tmp.inf.upgrades[11].canAfford)?"white":"black")
                },
                "background-image"() {
                    let a = "url(images/icons/generatorUPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/generatorUPG.png)"
                    return (hasUpgrade("inf",11))?"url(images/icons/generatorUPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[11].unlocked)?a:b)
                },
                "background-size":"110% 110%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",11))?"lime":((tmp.inf.upgrades[11].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"0%",
                "right":"70%"
            },
        },

        21: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",11)) return " "
                return "<h3>UPG-2a<br><br>Unlock Autoboost<br><br>Cost: 1 IE"
            },
            cost(){
                return decimalOne
            },
            canAfford(){
                return (player.inf.infenergy.gte(1) && hasUpgrade("inf",11))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1)
            },
            unlocked(){
                return true
            },
            branches(){
                return hasUpgrade("inf",21)?([['11',1,10,getFasterUndulatingColor()]]):(hasUpgrade("inf",11)?[['11',1,10,'white']]:[['11',3,10,'gray']])
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",21))?"rgb(0, 0, 0)":((tmp.inf.upgrades[21].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",11)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/autoboostUPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/autoboostUPG.png)"
                    return (hasUpgrade("inf",21))?"url(images/icons/autoboostUPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[21].unlocked)?a:b)
                },
                "background-size":"150% 150%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",21))?"lime":((tmp.inf.upgrades[21].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"0%",
                "bottom":"10%",
                "left":"0%",
                "right":"50%",
            },
        },

        22: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",11)) return " "
                return "<h3>UPG-2b<br><br>Unlock Autobuy<br><br>Cost: 1 IE"
            },
            cost(){
                return decimalOne
            },
            canAfford(){
                return (player.inf.infenergy.gte(1) && hasUpgrade("inf",11))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1)
            },
            unlocked(){
                return true
            },
            branches(){
                return hasUpgrade("inf",22)?([['11',1,10,getFasterUndulatingColor()]]):(hasUpgrade("inf",11)?[['11',1,10,'white']]:[['11',3,10,'gray']])
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",22))?"rgb(0, 0, 0)":((tmp.inf.upgrades[22].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",11)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/autobuyUPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/autobuyUPG.png)"
                    return (hasUpgrade("inf",22))?"url(images/icons/autobuyUPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[22].unlocked)?a:b)
                },
                "background-size":"112.5% 112.5%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",22))?"lime":((tmp.inf.upgrades[22].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"50%",
                "bottom":"0%",
                "left":"0%",
                "right":"50%"
            },
        },

        31: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",21)) && (!hasUpgrade("inf",22))) return " "
                return "<h3>UPG-3<br><br>x1.3 to cycle speed<br><br>Cost: 1 IE"
            },
            cost(){
                return decimalOne
            },
            canAfford(){
                return (player.inf.infenergy.gte(1) && hasUpgrade("inf",21) && hasUpgrade("inf",22))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1)
            },
            unlocked(){
                return true
            },
            branches(){
                let a = (hasUpgrade("inf",21)?true:false)
                let b = (hasUpgrade("inf",22)?true:false)
                let e = (hasUpgrade("inf",31)?true:false)
                let c = ['21',3,10,'gray']
                let d = ['22',3,10,'gray']
                if(a == true){
                    c = ['21',1,10,'white']
                }
                if(b == true){
                    d = ['22',1,10,'white']
                }
                if(e == true){
                    c = ['21',1,10,getFasterUndulatingColor()]
                    d = ['22',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",31))?"rgb(0, 0, 0)":((tmp.inf.upgrades[31].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",21)) && (!hasUpgrade("inf",22))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",31))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[31].unlocked)?a:b)
                },
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",31))?"lime":((tmp.inf.upgrades[31].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"0%",
                "right":"30%"
            },
        },

        41: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",31)) return " "
                return "<h3>UPG-4a<br><br>Boosts are x1.5 stronger<br><br>Cost: 3 IE"
            },
            cost(){
                return new Decimal(3)
            },
            canAfford(){
                return (player.inf.infenergy.gte(3) && hasUpgrade("inf",31))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(3)
            },
            unlocked(){
                return true
            },
            branches(){
                return hasUpgrade("inf",41)?([['31',1,10,getFasterUndulatingColor()]]):(hasUpgrade("inf",31)?[['31',1,10,'white']]:[['31',3,10,'gray']])
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",41))?"rgb(0, 0, 0)":((tmp.inf.upgrades[41].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",31)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/autoboostUPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/autoboostUPG.png)"
                    return (hasUpgrade("inf",41))?"url(images/icons/autoboostUPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[41].unlocked)?a:b)
                },
                "background-size":"150% 150%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",41))?"lime":((tmp.inf.upgrades[41].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"0%",
                "bottom":"10%",
                "left":"0%",
                "right":"10%",
            },
        },

        42: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",31)) return " "
                return "<h3>UPG-4b<br><br>Mults are stronger based on infinities<br><br>Currently: x" + format(this.effect(),2) + "<br><br>Cost: 3 IE"
            },
            cost(){
                return new Decimal(3)
            },
            canAfford(){
                return (player.inf.infenergy.gte(3) && hasUpgrade("inf",31))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(3)
            },
            unlocked(){
                return true
            },
            branches(){
                return hasUpgrade("inf",42)?([['31',1,10,getFasterUndulatingColor()]]):(hasUpgrade("inf",31)?[['31',1,10,'white']]:[['31',3,10,'gray']])
            },
            effect(){
                let infs = player.inf.infinities
                let eff = infs.add(2).log2()
                return eff
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",42))?"rgb(0, 0, 0)":((tmp.inf.upgrades[42].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",31)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/autoboostUPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/autoboostUPG.png)"
                    return (hasUpgrade("inf",42))?"url(images/icons/autoboostUPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[42].unlocked)?a:b)
                },
                "background-size":"150% 150%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",42))?"lime":((tmp.inf.upgrades[42].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"50%",
                "bottom":"0%",
                "left":"0%",
                "right":"10%",
            },
        },

        51: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",41)) && (!hasUpgrade("inf",42))) return " "
                return "<h3>UPG-5<br><br>Unlock Challenges<br><br>Cost: 5 IE"
            },
            cost(){
                return new Decimal(5)
            },
            canAfford(){
                return (player.inf.infenergy.gte(5) && hasUpgrade("inf",41) && hasUpgrade("inf",42))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(5)
            },
            unlocked(){
                return true
            },
            branches(){
                let a = (hasUpgrade("inf",41)?true:false)
                let b = (hasUpgrade("inf",42)?true:false)
                let e = (hasUpgrade("inf",51)?true:false)
                let c = ['41',3,10,'gray']
                let d = ['42',3,10,'gray']
                if(a == true){
                    c = ['41',1,10,'white']
                }
                if(b == true){
                    d = ['42',1,10,'white']
                }
                if(e == true){
                    c = ['41',1,10,getFasterUndulatingColor()]
                    d = ['42',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",51))?"rgb(0, 0, 0)":((tmp.inf.upgrades[51].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",41)) && (!hasUpgrade("inf",42))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",51))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[51].unlocked)?a:b)
                },
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",51))?"lime":((tmp.inf.upgrades[51].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"10%",
                "right":"0%"
            },
        },

        61: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",51)) return " "
                return "<h3>UPG-6a<br><br>Infinities boost cycle speed<br><br>Currently: x" + format(this.effect(),2) + "<br><br>Cost: 16 IE"
            },
            cost(){
                return new Decimal(10)
            },
            canAfford(){
                return (player.inf.infenergy.gte(16) && hasUpgrade("inf",51))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(16)
            },
            unlocked(){
                return true
            },
            branches(){
                return hasUpgrade("inf",61)?([['51',1,10,getFasterUndulatingColor()]]):(hasUpgrade("inf",51)?[['51',1,10,'white']]:[['51',3,10,'gray']])
            },
            effect(){
                let infs = player.inf.infinities
                let eff = infs.add(2).log2().times(0.85).pow(1.25).max(1)
                return eff
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",61))?"rgb(0, 0, 0)":((tmp.inf.upgrades[61].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",51)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/autoboostUPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/autoboostUPG.png)"
                    return (hasUpgrade("inf",61))?"url(images/icons/autoboostUPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[61].unlocked)?a:b)
                },
                "background-size":"150% 150%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",61))?"lime":((tmp.inf.upgrades[61].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"0%",
                "bottom":"10%",
                "left":"30%",
                "right":"0%",
            },
        },

        62: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",51)) return " "
                return "<h3>UPG-6b<br><br>IE boosts prestige mult gain<br><br>Currently: x" + format(this.effect(),2) + "<br><br>Cost: 16 IE"
            },
            cost(){
                return new Decimal(10)
            },
            canAfford(){
                return (player.inf.infenergy.gte(16) && hasUpgrade("inf",51))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(16)
            },
            unlocked(){
                return true
            },
            branches(){
                return hasUpgrade("inf",62)?([['51',1,10,getFasterUndulatingColor()]]):(hasUpgrade("inf",51)?[['51',1,10,'white']]:[['51',3,10,'gray']])
            },
            effect(){
                let ie = player.inf.infenergy
                let eff = ie.add(2).log2().times(2.3).max(1)
                return eff
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",62))?"rgb(0, 0, 0)":((tmp.inf.upgrades[62].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",51)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/autoboostUPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/autoboostUPG.png)"
                    return (hasUpgrade("inf",62))?"url(images/icons/autoboostUPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[62].unlocked)?a:b)
                },
                "background-size":"150% 150%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",62))?"lime":((tmp.inf.upgrades[62].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"50%",
                "bottom":"0%",
                "left":"30%",
                "right":"0%",
            },
        },

        71: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",61)) && (!hasUpgrade("inf",62))){
                    return (processText(this.realname, garbledNameTemplate(71)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(71)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(71)))
                }
                return "<h3>UPG-7<br><br>Completed challenges boost Infinity and IE gain by +1 each<br><br>Cost: 32 IE"
            },
            realtooltip(){
                return "Completed challenges boost Infinity and IE gain by +1 each"
            },
            realname(){
                return "UPG-7"
            },
            realcost(){
                return "Cost: 32 IE"
            },
            cost(){
                return new Decimal(32)
            },
            canAfford(){
                return (player.inf.infenergy.gte(32) && hasUpgrade("inf",61) && hasUpgrade("inf",62))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(32)
            },
            unlocked(){
                return true
            },
            branches(){
                let a = (hasUpgrade("inf",61)?true:false)
                let b = (hasUpgrade("inf",62)?true:false)
                let e = (hasUpgrade("inf",71)?true:false)
                let c = ['61',3,10,'gray']
                let d = ['62',3,10,'gray']
                if(a == true){
                    c = ['61',1,10,'white']
                }
                if(b == true){
                    d = ['62',1,10,'white']
                }
                if(e == true){
                    c = ['61',1,10,getFasterUndulatingColor()]
                    d = ['62',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",71))?"rgb(0, 0, 0)":((tmp.inf.upgrades[71].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",61)) && (!hasUpgrade("inf",62))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",71))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[71].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",71))?"lime":((tmp.inf.upgrades[71].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"50%",
                "right":"0%"
            },
        },

        81: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",71)){
                    return (processText(this.realname, garbledNameTemplate(81)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(81)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(81)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(81)))
                }
                return "<h3>UPG-8a<br><br>Gain more IE based on your fastest infinity<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 64 IE"
            },
            realtooltip(){
                return "Gain more IE based on your fastest infinity"
            },
            realname(){
                return "UPG-8a"
            },
            realcost(){
                return "Cost: 64 IE"
            },
            realeffect(){
                return "Currently: "
            },
            cost(){
                return new Decimal(64)
            },
            canAfford(){
                return (player.inf.infenergy.gte(64) && hasUpgrade("inf",71))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(64)
            },
            unlocked(){
                return true
            },
            effect(){
                let time = player.p.infRecord
                let eff = new Decimal(300).div(time).max(1).min(30000)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",71)?true:false)
                let b = (hasUpgrade("inf",81)?true:false)
                let c = ['71',3,10,'gray']
                if(a == true){
                    c = ['71',1,10,'white']
                }
                if(b == true){
                    c = ['71',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",81))?"rgb(0, 0, 0)":((tmp.inf.upgrades[81].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",71)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",81))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[81].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",81))?"lime":((tmp.inf.upgrades[81].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"0%",
                "bottom":"10%",
                "left":"70%",
                "right":"0%"
            },
        },

        82: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",71)){
                    return (processText(this.realname, garbledNameTemplate(82)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(82)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(82)))
                }
                return "<h3>UPG-8b<br><br>Unlock Auto prestige"+"<br><br>Cost: 128 IE"
            },
            realtooltip(){
                return "Unlock Auto prestige"
            },
            realname(){
                return "UPG-8b"
            },
            realcost(){
                return "Cost: 128 IE"
            },
            cost(){
                return new Decimal(64)
            },
            canAfford(){
                return (player.inf.infenergy.gte(128) && hasUpgrade("inf",71))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(128)
            },
            unlocked(){
                return true
            },
            branches(){
                let a = (hasUpgrade("inf",71)?true:false)
                let b = (hasUpgrade("inf",82)?true:false)
                let c = ['71',3,10,'gray']
                if(a == true){
                    c = ['71',1,10,'white']
                }
                if(b == true){
                    c = ['71',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",82))?"rgb(0, 0, 0)":((tmp.inf.upgrades[82].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",71)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",82))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[82].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",82))?"lime":((tmp.inf.upgrades[82].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"70%",
                "right":"0%"
            },
        },

        83: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",71)){
                    return (processText(this.realname, garbledNameTemplate(82)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(82)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(82)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(82)))
                }
                return "<h3>UPG-8c<br><br>Mults are stronger based on time spent in this infinity<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 64 IE"
            },
            realtooltip(){
                return "Mults are stronger based on time spent in this infinity"
            },
            realname(){
                return "UPG-8c"
            },
            realcost(){
                return "Cost: 64 IE"
            },
            realeffect(){
                return "Currently: x"+format(this.effect(),2)
            },
            cost(){
                return new Decimal(64)
            },
            canAfford(){
                return (player.inf.infenergy.gte(64) && hasUpgrade("inf",71))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(64)
            },
            unlocked(){
                return true
            },
            effect(){
                let time = player.p.infTime
                let eff = time.pow(1.2).max(1)
                if(eff.gte(100)) eff = eff.log2().pow(2.125).max(1)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",71)?true:false)
                let b = (hasUpgrade("inf",83)?true:false)
                let c = ['71',3,10,'gray']
                if(a == true){
                    c = ['71',1,10,'white']
                }
                if(b == true){
                    c = ['71',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",83))?"rgb(0, 0, 0)":((tmp.inf.upgrades[83].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",71)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",83))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[83].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",83))?"lime":((tmp.inf.upgrades[83].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"50%",
                "bottom":"0%",
                "left":"70%",
                "right":"0%"
            },
        },

        91: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",81)) && (!hasUpgrade("inf",82))){
                    return (processText(this.realname, garbledNameTemplate(91)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(91)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(91)))
                }
                return "<h3>UPG-9a<br><br>x3 to cycle speed<br><br>Cost: 256 IE"
            },
            realtooltip(){
                return "x3 to cycle speed"
            },
            realname(){
                return "UPG-9a"
            },
            realcost(){
                return "Cost: 256 IE"
            },
            cost(){
                return new Decimal(256)
            },
            canAfford(){
                return (player.inf.infenergy.gte(256) && hasUpgrade("inf",81) && hasUpgrade("inf",82))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(256)
            },
            unlocked(){
                return true
            },
            branches(){
                let a = (hasUpgrade("inf",81)?true:false)
                let b = (hasUpgrade("inf",82)?true:false)
                let c = (hasUpgrade("inf",91)?true:false)
                let d = ['81',3,10,'gray']
                let e = ['82',3,10,'gray']
                if(a == true){
                    d = ['81',1,10,'white']
                }
                if(b == true){
                    e = ['82',1,10,'white']
                }
                if(c == true){
                    d = ['81',1,10,getFasterUndulatingColor()]
                    e = ['82',1,10,getFasterUndulatingColor()]
                }
                return [d,e]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",91))?"rgb(0, 0, 0)":((tmp.inf.upgrades[91].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",81)) && (!hasUpgrade("inf",82))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",91))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[91].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",91))?"lime":((tmp.inf.upgrades[91].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"5%",
                "bottom":"0%",
                "left":"90%",
                "right":"0%"
            },
        },

        92: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",82)) && (!hasUpgrade("inf",83))){
                    return (processText(this.realname, garbledNameTemplate(92)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(92)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(92)))
                }
                return "<h3>UPG-9b<br><br>First Generator is x3 stronger<br><br>Cost: 512 IE"
            },
            realtooltip(){
                return "First Generator is x3 stronger"
            },
            realname(){
                return "UPG-9b"
            },
            realcost(){
                return "Cost: 512 IE"
            },
            cost(){
                return new Decimal(512)
            },
            canAfford(){
                return (player.inf.infenergy.gte(512) && hasUpgrade("inf",82) && hasUpgrade("inf",83))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(512)
            },
            unlocked(){
                return true
            },
            branches(){
                let a = (hasUpgrade("inf",82)?true:false)
                let b = (hasUpgrade("inf",83)?true:false)
                let c = (hasUpgrade("inf",92)?true:false)
                let d = ['82',3,10,'gray']
                let e = ['83',3,10,'gray']
                if(a == true){
                    d = ['82',1,10,'white']
                }
                if(b == true){
                    e = ['83',1,10,'white']
                }
                if(c == true){
                    d = ['82',1,10,getFasterUndulatingColor()]
                    e = ['83',1,10,getFasterUndulatingColor()]
                }
                return [d,e]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",92))?"rgb(0, 0, 0)":((tmp.inf.upgrades[92].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",82)) && (!hasUpgrade("inf",83))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",92))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[92].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",92))?"lime":((tmp.inf.upgrades[92].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"35%",
                "bottom":"0%",
                "left":"90%",
                "right":"0%"
            },
        },

        101: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",91)) && (!hasUpgrade("inf",92))){
                    return (processText(this.realname, garbledNameTemplate(101)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(101)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(101)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(101)))
                }
                return "<h3>UPG-10<br><br>IE gain boosted by total challenge time (< 1 hour)<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 5096 IE"
            },
            realtooltip(){
                return "IE gain boosted by total challenge time (< 1 hour)"
            },
            realname(){
                return "UPG-10"
            },
            realcost(){
                return "Cost: 5096 IE"
            },
            realeffect(){
                return "Currently: x"+format(this.effect(),2)
            },
            cost(){
                return new Decimal(5096)
            },
            canAfford(){
                return (player.inf.infenergy.gte(5096) && hasUpgrade("inf",91) && hasUpgrade("inf",92))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(5096)
            },
            unlocked(){
                return true
            },
            effect(){
                let time = player.chal.chaltotaltime
                let eff = new Decimal(3600).div(time).max(1)
                if(hasUpgrade("inf",132)) eff = eff.pow(2.5)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",91)?true:false)
                let b = (hasUpgrade("inf",92)?true:false)
                let c = (hasUpgrade("inf",101)?true:false)
                let d = ['91',3,10,'gray']
                let e = ['92',3,10,'gray']
                if(a == true){
                    d = ['91',1,10,'white']
                }
                if(b == true){
                    e = ['92',1,10,'white']
                }
                if(c == true){
                    d = ['91',1,10,getFasterUndulatingColor()]
                    e = ['92',1,10,getFasterUndulatingColor()]
                }
                return [d,e]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",101))?"rgb(0, 0, 0)":((tmp.inf.upgrades[101].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",91)) && (!hasUpgrade("inf",92))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",101))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[101].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",101))?"lime":((tmp.inf.upgrades[101].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"102.5%",
                "right":"0%"
            },
        },

        111: {
            title: " ",
            description() {
                if(hasUpgrade("inf",111)) return "<h1>INFINITY IS BROKEN</h1><h2><br><br><br><br>The rest of the Infinity Upgrade tree is now accessible"
                let upgamt = player.inf.upgrades.length
                let req1 = (getChallengeCompletions().gte(9))?(colorText("b","lime",(formatWhole(getChallengeCompletions())+"/9 Challenges completed<br><br>"))):(colorText("b","white",(formatWhole(getChallengeCompletions())+"/9 Challenges completed<br><br>")))
                let req2 = (player.inf.upgrades.length >= 16)?(colorText("b","lime",(formatWhole(upgamt)+"/16 Infinity Upgrades<br><br>"))):(colorText("b","white",(formatWhole(upgamt)+"/16 Infinity Upgrades<br><br>")))
                let req3 = (player.inf.infinities.gte(1000))?(colorText("b","lime",(formatWhole(player.inf.infinities)+"/1000 Infinities<br><br>"))):(colorText("b","white",(formatWhole(player.inf.infinities)+"/1000 Infinities<br><br>")))
                let req4 = (player.inf.infenergy.gte(25000))?(colorText("b","lime",(format(player.inf.infenergy,2)+"/25,000 IE"))):(colorText("b","white",(format(player.inf.infenergy,2)+"/25,000 IE")))
                let reqsmet = ((getChallengeCompletions().gte(9)) && (player.inf.upgrades.length >= 16) && (player.inf.infinities.gte(1000)) && (player.inf.infenergy.gte(25000)))?(colorText("h3","lime",("Requires<br><br>"))):(colorText("h3","white",("Requires<br><br>")))
                return "<h1>Break Infinity<br><br></h2><b>Breaking Infinity allows energy to go above 1.798e308 and costs begin increasing faster after this point<br><br>You get more IE based on your energy past Infinity<br><br><br>"+reqsmet+req1+req2+req3+req4
            },
            tooltip(){
                // if ((!hasUpgrade("inf",91)) && (!hasUpgrade("inf",92))){
                //     return (processText(this.realname, garbledNameTemplate(111)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(111)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(111)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(111)))
                // }
                //if(hasUpgrade("inf",111)) return "<h2><br>End of content for now :3<br><br>"
                //else return
            },
            // realtooltip(){
            //     return "IE gain boosted by total challenge time (< 1 hour)"
            // },
            // realname(){
            //     return "UPG-10"
            // },
            // realcost(){
            //     return "Cost: 25000IE"
            // },
            // realeffect(){
            //     return "Currently: x"+format(this.effect(),2)
            // },
            cost(){
                return new Decimal(25000)
            },
            canAfford(){
                return (player.inf.infenergy.gte(25000) && player.inf.infinities.gte(1000) && (player.inf.upgrades.length >= 16) && (getChallengeCompletions().gte(9)))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(25000)
            },
            unlocked(){
                return true
            },
            effect(){
                let time = player.chal.chaltotaltime
                let eff = new Decimal(3600).div(time).max(1)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",101)?true:false)
                let b = (hasUpgrade("inf",111)?true:false)
                let c = ['101',3,10,'gray']
                if(a == true){
                    c = ['101',1,10,'white']
                }
                if(b == true){
                    c = ['101',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"15%","height":"55%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",111))?"rgb(0, 0, 0)":((tmp.inf.upgrades[111].canAfford)?"darkviolet":"white")
                },
                // "background-image"() {
                //     // if (!hasUpgrade("inf",101)) return "url(images/bgs/fog.gif)"
                //     let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                //     let b = "url(images/icons/speed1UPG.png)"
                //     return (hasUpgrade("inf",111))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[111].unlocked)?a:b)
                // },
                "background-color"(){
                    return (hasUpgrade("inf",111))?"darkviolet":((tmp.inf.upgrades[111].canAfford)?"#000000ff":"#494350ff")
                },
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",111))?"black":((tmp.inf.upgrades[111].canAfford)?"darkviolet":"white")
                },
                "border-radius":"20px/20px",
                "top":"20%",
                "bottom":"0%",
                "left":"112.5%",
                "right":"0%",
                "font-size":"18px",
                "padding-right":"1%",
                "padding-left":"1%"
            },
        },

        121: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",111)){
                    return (processText(this.realname, garbledNameTemplate(121)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(121)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(121)))
                }
                return "<h3>UPG-12<br><br>Unlock the Particle Collider"+"<br><br>Cost: 1,000,000 IE"
            },
            realtooltip(){
                return "Unlock the Particle Collider"
            },
            realname(){
                return "UPG-12"
            },
            realcost(){
                return "Cost: 1,000,000 IE"
            },
            cost(){
                return new Decimal(1e6)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1e6) && hasUpgrade("inf",111))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1e6)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            branches(){
                let a = (hasUpgrade("inf",111)?true:false)
                let b = (hasUpgrade("inf",121)?true:false)
                let c = ['111',3,10,'gray']
                if(a == true){
                    c = ['111',1,10,'white']
                }
                if(b == true){
                    c = ['111',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",121))?"rgb(0, 0, 0)":((tmp.inf.upgrades[121].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",111)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",121))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[121].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",121))?"lime":((tmp.inf.upgrades[121].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"133%",
                "right":"0%"
            },
        },

        131: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",121)){
                    return (processText(this.realname, garbledNameTemplate(131)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(131)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(131)))
                }
                return "<h3>UPG-13a<br><br>First three generators are twice as strong"+"<br><br>Cost: 10,000,000 IE"
            },
            realtooltip(){
                return "First three Generators are twice as strong"
            },
            realname(){
                return "UPG-13a"
            },
            realcost(){
                return "Cost: 10,000,000 IE"
            },
            cost(){
                return new Decimal(1e7)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1e7) && hasUpgrade("inf",121))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1e7)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            branches(){
                let a = (hasUpgrade("inf",121)?true:false)
                let b = (hasUpgrade("inf",131)?true:false)
                let c = ['121',3,10,'gray']
                if(a == true){
                    c = ['121',1,10,'white']
                }
                if(b == true){
                    c = ['121',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",131))?"rgb(0, 0, 0)":((tmp.inf.upgrades[131].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",121)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",131))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[131].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",131))?"lime":((tmp.inf.upgrades[131].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"0%",
                "bottom":"5%",
                "left":"143.5%",
                "right":"0%"
            },
        },

        132: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",121)){
                    return (processText(this.realname, garbledNameTemplate(132)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(132)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(132)))
                }
                return "<h3>UPG-13b<br><br>UPG-10 effect raised <sup>^</sup>2.5"+"<br><br>Cost: 15,000,000 IE"
            },
            realtooltip(){
                return "UPG-10 effect raised <sup>^</sup>2.5"
            },
            realname(){
                return "UPG-13b"
            },
            realcost(){
                return "Cost: 15,000,000 IE"
            },
            cost(){
                return new Decimal(1.5e7)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1.5e7) && hasUpgrade("inf",121))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1.5e7)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            branches(){
                let a = (hasUpgrade("inf",121)?true:false)
                let b = (hasUpgrade("inf",132)?true:false)
                let c = ['121',3,10,'gray']
                if(a == true){
                    c = ['121',1,10,'white']
                }
                if(b == true){
                    c = ['121',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",132))?"rgb(0, 0, 0)":((tmp.inf.upgrades[132].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",121)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",132))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[132].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",132))?"lime":((tmp.inf.upgrades[132].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"45%",
                "bottom":"0%",
                "left":"143.5%",
                "right":"0%"
            },
        },

        141: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",131)){
                    return (processText(this.realname, garbledNameTemplate(141)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(141)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(141)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(141)))
                }
                return "<h3>UPG-14a<br><br>IE gain boosted by total Generators bought<br>(capped at 100)<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 500,000,000 IE"
            },
            realtooltip(){
                return "IE gain boosted by total Generators bought<br>(capped at 100)"
            },
            realname(){
                return "UPG-14a"
            },
            realcost(){
                return "Cost: 500,000,000 IE"
            },
            realeffect(){
                return "Currently: x"+format(this.effect(),2)
            },
            cost(){
                return new Decimal(5e8)
            },
            canAfford(){
                return (player.inf.infenergy.gte(5e8) && hasUpgrade("inf",131))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(5e8)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let g1 = player.inf.gen1bought
                let g2 = player.inf.gen2bought
                let g3 = player.inf.gen3bought
                let g4 = player.inf.gen4bought
                let g5 = player.inf.gen5bought
                let g6 = player.inf.gen6bought
                let g7 = player.inf.gen7bought
                let g8 = player.inf.gen8bought
                let g9 = player.inf.gen9bought
                let g10 = player.inf.gen10bought
                let gtot = g1.add(g2).add(g3).add(g4).add(g5).add(g6).add(g7).add(g8).add(g9).add(g10).min(100).max(1)
                let eff = gtot.pow(0.75)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",131)?true:false)
                let b = (hasUpgrade("inf",141)?true:false)
                let c = ['131',3,10,'gray']
                if(a == true){
                    c = ['131',1,10,'white']
                }
                if(b == true){
                    c = ['131',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",141))?"rgb(0, 0, 0)":((tmp.inf.upgrades[141].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",131)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",141))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[141].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",141))?"lime":((tmp.inf.upgrades[141].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"0%",
                "bottom":"17.5%",
                "left":"153.5%",
                "right":"0%"
            },
        },

        142: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",131)){
                    return (processText(this.realname, garbledNameTemplate(142)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(142)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(142)))
                }
                return "<h3>UPG-14b<br><br>+0.1 to Base Exponent<br><br>Cost: 2.500e9 IE"
            },
            realtooltip(){
                return "+0.1 to Base Exponent"
            },
            realname(){
                return "UPG-14b"
            },
            realcost(){
                return "Cost: 2.500e9 IE"
            },
            cost(){
                return new Decimal(2.5e9)
            },
            canAfford(){
                return (player.inf.infenergy.gte(2.5e9) && hasUpgrade("inf",131))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(2.5e9)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            branches(){
                let a = (hasUpgrade("inf",131)?true:false)
                let b = (hasUpgrade("inf",142)?true:false)
                let c = ['131',3,10,'gray']
                if(a == true){
                    c = ['131',1,10,'white']
                }
                if(b == true){
                    c = ['131',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",142))?"rgb(0, 0, 0)":((tmp.inf.upgrades[142].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",131)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",142))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[142].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",142))?"lime":((tmp.inf.upgrades[142].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"7.5%",
                "bottom":"0%",
                "left":"153.5%",
                "right":"0%"
            },
        },

        143: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",132)){
                    return (processText(this.realname, garbledNameTemplate(143)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(143)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(143)))
                }
                return "<h3>UPG-14c<br><br>x2.5 to cycle speed<br><br>Cost: 2.500e10 IE"
            },
            realtooltip(){
                return "x2.5 to cycle speed"
            },
            realname(){
                return "UPG-14c"
            },
            realcost(){
                return "Cost: 2.500e10 IE"
            },
            cost(){
                return new Decimal(2.5e10)
            },
            canAfford(){
                return (player.inf.infenergy.gte(2.5e10) && hasUpgrade("inf",132))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(2.5e10)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            branches(){
                let a = (hasUpgrade("inf",132)?true:false)
                let b = (hasUpgrade("inf",143)?true:false)
                let c = ['132',3,10,'gray']
                if(a == true){
                    c = ['132',1,10,'white']
                }
                if(b == true){
                    c = ['132',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",143))?"rgb(0, 0, 0)":((tmp.inf.upgrades[143].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",132)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",143))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[143].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",143))?"lime":((tmp.inf.upgrades[143].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"32.5%",
                "bottom":"0%",
                "left":"153.5%",
                "right":"0%"
            },
        },

        144: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",132)){
                    return (processText(this.realname, garbledNameTemplate(144)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(144)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(144)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(144)))
                }
                return "<h3>UPG-14d<br><br>Infinities boost IE gain<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 1.000e12 IE"
            },
            realtooltip(){
                return "Infinities boost IE gain"
            },
            realname(){
                return "UPG-14d"
            },
            realcost(){
                return "Cost: 1.000e12 IE"
            },
            realeffect(){
                return "Currently: x"+format(this.effect(),2)
            },
            cost(){
                return new Decimal(1e12)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1e12) && hasUpgrade("inf",132))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1e12)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let infs = player.inf.infinities
                let eff = infs.pow(0.42)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",132)?true:false)
                let b = (hasUpgrade("inf",144)?true:false)
                let c = ['132',3,10,'gray']
                if(a == true){
                    c = ['132',1,10,'white']
                }
                if(b == true){
                    c = ['132',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",144))?"rgb(0, 0, 0)":((tmp.inf.upgrades[144].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",132)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",144))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[144].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",144))?"lime":((tmp.inf.upgrades[144].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"57.5%",
                "bottom":"0%",
                "left":"153.5%",
                "right":"0%"
            },
        },

        151: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",141)) && (!hasUpgrade("inf",142))){
                    return (processText(this.realname, garbledNameTemplate(151)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(151)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(151)) +  "<br><br>" + processText(this.realcost, garbledCostTemplate(151)))
                }
                return "<h3>UPG-15a<br><br>Mults are stronger based on Infinities<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 1.000e14 IE"
            },
            realtooltip(){
                return "Mults are stronger based on Infinities"
            },
            realname(){
                return "UPG-15a"
            },
            realcost(){
                return "Cost: 1.000e14 IE"
            },
            realeffect(){
                return "Currently: x"+format(this.effect(),2)
            },
            cost(){
                return new Decimal(1e14)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1e14) && hasUpgrade("inf",141) && hasUpgrade("inf",142))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1e14)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let infs = player.inf.infinities.max(1).log2()
                let eff = infs.pow(1.2)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",141)?true:false)
                let b = (hasUpgrade("inf",142)?true:false)
                let c = (hasUpgrade("inf",151)?true:false)
                let d = ['141',3,10,'gray']
                let e = ['142',3,10,'gray']
                if(a == true){
                    d = ['141',1,10,'white']
                }
                if(b == true){
                    e = ['142',1,10,'white']
                }
                if(c == true){
                    d = ['141',1,10,getFasterUndulatingColor()]
                    e = ['142',1,10,getFasterUndulatingColor()]
                }
                return [d,e]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",151))?"rgb(0, 0, 0)":((tmp.inf.upgrades[151].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",141)) && (!hasUpgrade("inf",142))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",151))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[151].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",151))?"lime":((tmp.inf.upgrades[151].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"0%",
                "bottom":"5%",
                "left":"163.5%",
                "right":"0%"
            },
        },

        152: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",142)) && (!hasUpgrade("inf",143))){
                    return (processText(this.realname, garbledNameTemplate(152)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(152)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(151)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(152)))
                }
                return "<h3>UPG-15b<br><br>Passively generate Infinities based on your fastest Infinity<br><br>Currently: "+format(this.effect(),2)+"/s<br><br>Cost: 1.000e15 IE"
            },
            realtooltip(){
                return "Passively generate Infinities based on your fastest Infinity"
            },
            realname(){
                return "UPG-15b"
            },
            realcost(){
                return "Cost: 1.000e15 IE"
            },
            realeffect(){
                return "Currently: x"+format(this.effect(),2)
            },
            cost(){
                return new Decimal(1e15)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1e15) && hasUpgrade("inf",142) && hasUpgrade("inf",143))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1e15)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let time = player.p.infRecord
                let eff = new Decimal(5).div(time).max(1).min(1e9)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",142)?true:false)
                let b = (hasUpgrade("inf",143)?true:false)
                let c = (hasUpgrade("inf",152)?true:false)
                let d = ['142',3,10,'gray']
                let e = ['143',3,10,'gray']
                if(a == true){
                    d = ['142',1,10,'white']
                }
                if(b == true){
                    e = ['143',1,10,'white']
                }
                if(c == true){
                    d = ['142',1,10,getFasterUndulatingColor()]
                    e = ['143',1,10,getFasterUndulatingColor()]
                }
                return [d,e]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",152))?"rgb(0, 0, 0)":((tmp.inf.upgrades[152].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",142)) && (!hasUpgrade("inf",143))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",152))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[152].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",152))?"lime":((tmp.inf.upgrades[152].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"163.5%",
                "right":"0%"
            },
        },

        153: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",143)) && (!hasUpgrade("inf",144))){
                    return (processText(this.realname, garbledNameTemplate(153)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(153)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(153)))
                }
                return "<h3>UPG-15c<br><br>Generator mults are multiplied by how many of the next Generator you have bought ([amount+1]<sup>0.85</sup>)"+"<br><br>Cost: 2.500e16 IE"
            },
            realtooltip(){
                return "Generator mults are multiplied by how many of the next Generator you have bought ([amount+1]<sup>0.85</sup>)"
            },
            realname(){
                return "UPG-15c"
            },
            realcost(){
                return "Cost: 2.500e16 IE"
            },
            cost(){
                return new Decimal(2.5e16)
            },
            canAfford(){
                return (player.inf.infenergy.gte(2.5e16) && hasUpgrade("inf",143) && hasUpgrade("inf",144))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(2.5e16)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            branches(){
                let a = (hasUpgrade("inf",143)?true:false)
                let b = (hasUpgrade("inf",144)?true:false)
                let c = (hasUpgrade("inf",153)?true:false)
                let d = ['143',3,10,'gray']
                let e = ['144',3,10,'gray']
                if(a == true){
                    d = ['143',1,10,'white']
                }
                if(b == true){
                    e = ['144',1,10,'white']
                }
                if(c == true){
                    d = ['143',1,10,getFasterUndulatingColor()]
                    e = ['144',1,10,getFasterUndulatingColor()]
                }
                return [d,e]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",153))?"rgb(0, 0, 0)":((tmp.inf.upgrades[153].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",143)) && (!hasUpgrade("inf",144))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",153))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[153].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",153))?"lime":((tmp.inf.upgrades[153].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"45%",
                "bottom":"0%",
                "left":"163.5%",
                "right":"0%"
            },
        },

        161: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",151)) && (!hasUpgrade("inf",152))){
                    return (processText(this.realname, garbledNameTemplate(161)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(161)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(161)) +  "<br><br>" + processText(this.realcost, garbledCostTemplate(161)))
                }
                return "<h3>UPG-16a<br><br>Collider IE and Particle upgrades are cheaper based on Generator Power<br><br>Currently: /"+format(this.effect(),2)+"<br><br>Cost: 2.500e17 IE"
            },
            realtooltip(){
                return "Collider IE and Particle upgrades are cheaper based on Generator Power"
            },
            realname(){
                return "UPG-16a"
            },
            realcost(){
                return "Cost: 2.500e17 IE"
            },
            realeffect(){
                let capped = ""
                if(this.effect().gte(1e3)) capped = "<br>(CAPPED)"
                return "Currently: /"+format(this.effect(),2)+capped
            },
            cost(){
                return new Decimal(2.5e17)
            },
            canAfford(){
                return (player.inf.infenergy.gte(2.5e17) && hasUpgrade("inf",151) && hasUpgrade("inf",152))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(2.5e17)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let gp = player.inf.genpower.max(1).log10()
                let eff = gp.pow(0.75).min(1e3)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",151)?true:false)
                let b = (hasUpgrade("inf",152)?true:false)
                let c = (hasUpgrade("inf",161)?true:false)
                let d = ['151',3,10,'gray']
                let e = ['152',3,10,'gray']
                if(a == true){
                    d = ['151',1,10,'white']
                }
                if(b == true){
                    e = ['152',1,10,'white']
                }
                if(c == true){
                    d = ['151',1,10,getFasterUndulatingColor()]
                    e = ['152',1,10,getFasterUndulatingColor()]
                }
                return [d,e]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",161))?"rgb(0, 0, 0)":((tmp.inf.upgrades[161].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",151)) && (!hasUpgrade("inf",152))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",161))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[161].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",161))?"lime":((tmp.inf.upgrades[161].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"7.5%",
                "bottom":"0%",
                "left":"173.5%",
                "right":"0%"
            },
        },

        162: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",152)) && (!hasUpgrade("inf",153)) && (!hasUpgrade("inf",161))){
                    return (processText(this.realname, garbledNameTemplate(162)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(162)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(162)) +  "<br><br>" + processText(this.realcost, garbledCostTemplate(162)))
                }
                return "<h3>UPG-16b<br><br>Collider Particles boost the first 6 Generators' mults and passive Infinity generation<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 2.500e19 IE"
            },
            realtooltip(){
                return "Collider Particles boost the first 6 Generators' mults and passive Infinity generation"
            },
            realname(){
                return "UPG-16b"
            },
            realcost(){
                return "Cost: 2.500e19 IE"
            },
            realeffect(){
                let capped = ""
                if(this.effect().gte(1e6)) capped = "<br>(CAPPED)"
                return "Currently: x"+format(this.effect(),2)+capped
            },
            cost(){
                return new Decimal(2.5e19)
            },
            canAfford(){
                return (player.inf.infenergy.gte(2.5e19) && hasUpgrade("inf",152) && hasUpgrade("inf",153) && hasUpgrade("inf",161))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(2.5e19)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let cp = player.inf.collparts.max(1).root(2)
                let eff = cp.pow(0.75).min(1e6)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",152)?true:false)
                let b = (hasUpgrade("inf",153)?true:false)
                let c = (hasUpgrade("inf",161)?true:false)
                let d = (hasUpgrade("inf",162)?true:false)
                let e = ['152',3,10,'gray']
                let f = ['153',3,10,'gray']
                let g = ['161',3,10,'gray']
                if(a == true){
                    e = ['152',1,10,'white']
                }
                if(b == true){
                    f = ['153',1,10,'white']
                }
                if(c == true){
                    g = ['161',1,10,'white']
                }
                if(d == true){
                    e = ['152',1,10,getFasterUndulatingColor()]
                    f = ['153',1,10,getFasterUndulatingColor()]
                    g = ['161',1,10,getFasterUndulatingColor()]
                }
                return [e,f,g]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",162))?"rgb(0, 0, 0)":((tmp.inf.upgrades[162].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",152)) && (!hasUpgrade("inf",153))&& (!hasUpgrade("inf",161))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",162))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[162].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",162))?"lime":((tmp.inf.upgrades[162].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"32.5%",
                "bottom":"0%",
                "left":"173.5%",
                "right":"0%"
            },
        },

        171: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if ((!hasUpgrade("inf",161)) && (!hasUpgrade("inf",162))){
                    return (processText(this.realname, garbledNameTemplate(171)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(171)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(171)) +  "<br><br>" + processText(this.realcost, garbledCostTemplate(171)))
                }
                return "<h3>UPG-17<br><br>Prestige Mult gain is stronger based on total challenge time<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 1.000e33 IE"
            },
            realtooltip(){
                return "Prestige Mult gain is stronger based on total challenge time"
            },
            realname(){
                return "UPG-17"
            },
            realcost(){
                return "Cost: 1.000e33 IE"
            },
            realeffect(){
                let capped = ""
                if(this.effect().gte(1e3)) capped = "<br>(CAPPED)"
                return "Currently: x"+format(this.effect(),2)+capped
            },
            cost(){
                return new Decimal(1e33)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1e33) && hasUpgrade("inf",161) && hasUpgrade("inf",162))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1e33)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let time = player.chal.chaltotaltime
                let eff = new Decimal(100).div(time).max(1).min(1e3)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",161)?true:false)
                let b = (hasUpgrade("inf",162)?true:false)
                let c = (hasUpgrade("inf",171)?true:false)
                let d = ['161',3,10,'gray']
                let e = ['162',3,10,'gray']
                if(a == true){
                    d = ['161',1,10,'white']
                }
                if(b == true){
                    e = ['162',1,10,'white']
                }
                if(c == true){
                    d = ['161',1,10,getFasterUndulatingColor()]
                    e = ['162',1,10,getFasterUndulatingColor()]
                }
                return [d,e]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",171))?"rgb(0, 0, 0)":((tmp.inf.upgrades[171].canAfford)?"white":"black")
                },
                "background-image"() {
                    if ((!hasUpgrade("inf",161)) && (!hasUpgrade("inf",162))) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",171))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[171].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",171))?"lime":((tmp.inf.upgrades[171].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"183.5%",
                "right":"0%"
            },
        },

        181: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",171)){
                    return (processText(this.realname, garbledNameTemplate(181)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(181)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(181)) +  "<br><br>" + processText(this.realcost, garbledCostTemplate(181)))
                }
                return "<h3>UPG-18<br><br>IE boosts passive Infinity gain<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 1.000e42 IE"
            },
            realtooltip(){
                return "IE boosts passive Infinity gain"
            },
            realname(){
                return "UPG-18"
            },
            realcost(){
                return "Cost: 1.000e42 IE"
            },
            realeffect(){
                let capped = ""
                if(this.effect().gte(1e3)) capped = "<br>(CAPPED)"
                return "Currently: x"+format(this.effect(),2)+capped
            },
            cost(){
                return new Decimal(1e42)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1e42) && hasUpgrade("inf",171))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1e33)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let ie = player.inf.infenergy.max(1)
                let eff = ie.log2().max(1).exp().root(4)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",171)?true:false)
                let b = (hasUpgrade("inf",181)?true:false)
                let c = ['171',3,10,'gray']
                if(a == true){
                    d = ['171',1,10,'white']
                }
                if(b == true){
                    c = ['171',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",181))?"rgb(0, 0, 0)":((tmp.inf.upgrades[181].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",171)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",181))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[181].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",181))?"lime":((tmp.inf.upgrades[181].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"0%",
                "bottom":"5%",
                "left":"193.5%",
                "right":"0%"
            },
        },

        191: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",181)){
                    return (processText(this.realname, garbledNameTemplate(191)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(191)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(191)) +  "<br><br>" + processText(this.realcost, garbledCostTemplate(191)))
                }
                return "<h3>UPG-19<br><br>Collider Particles boost passive Infinity gain<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 1.000e69 IE"
            },
            realtooltip(){
                return "Collider Particles boost passive Infinity gain"
            },
            realname(){
                return "UPG-19"
            },
            realcost(){
                return "Cost: 1.000e69 IE"
            },
            realeffect(){
                let capped = ""
                if(this.effect().gte(1e3)) capped = "<br>(CAPPED)"
                return "Currently: x"+format(this.effect(),2)+capped
            },
            cost(){
                return new Decimal(1e69)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1e69) && hasUpgrade("inf",181))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1e33)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let cp = player.inf.collparts.max(1)
                let eff = cp.log2().max(1).pow(2.5)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",181)?true:false)
                let b = (hasUpgrade("inf",191)?true:false)
                let c = ['181',3,10,'gray']
                if(a == true){
                    d = ['181',1,10,'white']
                }
                if(b == true){
                    c = ['181',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",191))?"rgb(0, 0, 0)":((tmp.inf.upgrades[191].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",181)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",191))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[191].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",191))?"lime":((tmp.inf.upgrades[191].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"45%",
                "bottom":"0%",
                "left":"203.5%",
                "right":"0%"
            },
        },

        201: {
            title: " ",
            description() {
                return "<h2>"
            },
            tooltip(){
                if (!hasUpgrade("inf",191)){
                    return (processText(this.realname, garbledNameTemplate(201)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(201)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(201)) +  "<br><br>" + processText(this.realcost, garbledCostTemplate(201)))
                }
                return "<h3>UPG-20<br><br>Infinities boost all Generators and their own passive gain<br><br>Currently: x"+format(this.effect(),2)+"<br><br>Cost: 1.000e255 IE"
            },
            realtooltip(){
                return "Infinities boost all Generators and their own passive gain"
            },
            realname(){
                return "UPG-20"
            },
            realcost(){
                return "Cost: 1.000e255 IE"
            },
            realeffect(){
                let capped = ""
                if(this.effect().gte(1e3)) capped = "<br>(CAPPED)"
                return "Currently: x"+format(this.effect(),2)+capped
            },
            cost(){
                return new Decimal(1e255)
            },
            canAfford(){
                return (player.inf.infenergy.gte(1e255) && hasUpgrade("inf",191))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(1e255)
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            effect(){
                let infs = player.inf.infinities.max(1)
                let eff = infs.log2().max(1).exp().root(10)
                return eff
            },
            branches(){
                let a = (hasUpgrade("inf",191)?true:false)
                let b = (hasUpgrade("inf",201)?true:false)
                let c = ['191',3,10,'gray']
                if(a == true){
                    d = ['191',1,10,'white']
                }
                if(b == true){
                    c = ['191',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"5%","height":"10%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",201))?"rgb(0, 0, 0)":((tmp.inf.upgrades[201].canAfford)?"white":"black")
                },
                "background-image"() {
                    if (!hasUpgrade("inf",191)) return "url(images/bgs/fog.gif)"
                    let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                    let b = "url(images/icons/speed1UPG.png)"
                    return (hasUpgrade("inf",201))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[201].unlocked)?a:b)
                },
                "background-color":"transparent",
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",201))?"lime":((tmp.inf.upgrades[201].canAfford)?"yellow":"transparent")
                },
                "border-radius":"10%",
                "top":"20%",
                "bottom":"0%",
                "left":"213.5%",
                "right":"0%"
            },
        },

        211: {
            title: " ",
            description() {
                if(hasUpgrade("inf",211)) return "<h1>GO ETERNAL</h1><h2><br><br><br><br>Reset everything (except challenge times)<br><br><br><br>Eternities provide bonuses to many pre-Eternity resources, and reaching certain milestones will unlock QOL features<br><br><br><br>Spend Energy, IE and EE to gain Eternal Seeds (ES) which are used to progress through the Eternity Tree and unlock ECs (Eternity Challenges)"
                let upgamt = player.inf.upgrades.length
                let req1 = (player.inf.genpower.gte("1e475"))?(colorText("b","lime",(format(player.inf.genpower,2)+"/1.000e475 Generator Power<br><br>"))):(colorText("b","white",(format(player.inf.genpower,2)+"/1.000e475 Generator Power<br><br>")))
                let req2 = ((player.inf.upgrades.length) >= 33)?(colorText("b","lime",(formatWhole(upgamt)+"/33 Infinity Upgrades<br><br>"))):(colorText("b","white",(formatWhole(upgamt)+"/33 Infinity Upgrades<br><br>")))
                let req3 = (player.inf.infinities.gte(1e150))?(colorText("b","lime",(formatWhole(player.inf.infinities)+"/1.000e150 Infinities<br><br>"))):(colorText("b","white",(formatWhole(player.inf.infinities)+"/1.000e150 Infinities<br><br>")))
                let req4 = (player.inf.infenergy.gte("1.798e308"))?(colorText("b","lime",(format(player.inf.infenergy,3)+"/1.798e308 IE<br><br>"))):(colorText("b","white",(format(player.inf.infenergy,3)+"/1.798e308 IE<br><br>")))
                let req5 = (player.points.gte("1e50000"))?(colorText("b","lime",(format(player.points,2)+"/1.000e50,000 Energy"))):(colorText("b","white",(format(player.points,2)+"/1.000e50000 Energy")))
                let reqsmet = ((player.points.gte("1e50000")) && (player.inf.genpower.gte("1e475")) && (player.inf.upgrades.length >= 33) && (player.inf.infinities.gte(1e150)) && (player.inf.infenergy.gte("1.798e308")))?(colorText("h3","lime",("Requires<br><br>"))):(colorText("h3","white",("Requires<br><br>")))
                return "<h1>Unlock Eternity<br><br></h2><b>Eternity is the next prestige layer after Infinity<br><br>Going Eternal resets everything except challenge times<br><br><br>"+reqsmet+req1+req2+req3+req4+req5
            },
            tooltip(){
                // if ((!hasUpgrade("inf",91)) && (!hasUpgrade("inf",92))){
                //     return (processText(this.realname, garbledNameTemplate(111)) + "<br><br>" + processText(this.realtooltip, garbledDescriptionTemplate(111)) + "<br><br>" + processText(this.realeffect, garbledEffectTemplate(111)) + "<br><br>" + processText(this.realcost, garbledCostTemplate(111)))
                // }
                //if(hasUpgrade("inf",111)) return "<h2><br>End of content for now :3<br><br>"
                //else return
            },
            // realtooltip(){
            //     return "IE gain boosted by total challenge time (< 1 hour)"
            // },
            // realname(){
            //     return "UPG-10"
            // },
            // realcost(){
            //     return "Cost: 25000IE"
            // },
            // realeffect(){
            //     return "Currently: x"+format(this.effect(),2)
            // },
            cost(){
                return new Decimal("1.798e308")
            },
            canAfford(){
                return (player.inf.infenergy.gte("1.798e308") && player.inf.infinities.gte(1e150) && (player.inf.upgrades.length >= 33) && (getChallengeCompletions().gte(9)))
            },
            pay(){
                //player.inf.infenergy = player.inf.infenergy.sub("1.798e308")
            },
            unlocked(){
                return hasUpgrade("inf",111)
            },
            branches(){
                let a = (hasUpgrade("inf",201)?true:false)
                let b = (hasUpgrade("inf",211)?true:false)
                let c = ['201',3,10,'gray']
                if(a == true){
                    c = ['201',1,10,'white']
                }
                if(b == true){
                    c = ['201',1,10,getFasterUndulatingColor()]
                }
                return [c]
            },
            style: {"width":"25%","height":"55%","position":"absolute",
                "color"(){
                    return (hasUpgrade("inf",211))?"rgb(0, 0, 0)":((tmp.inf.upgrades[211].canAfford)?"mediumslateblue":"white")
                },
                // "background-image"() {
                //     // if (!hasUpgrade("inf",101)) return "url(images/bgs/fog.gif)"
                //     let a = "url(images/icons/speed1UPGlocked.png), url(images/bgs/Ascension.gif)"
                //     let b = "url(images/icons/speed1UPG.png)"
                //     return (hasUpgrade("inf",111))?"url(images/icons/speed1UPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[111].unlocked)?a:b)
                // },
                "background-color"(){
                    return (hasUpgrade("inf",211))?"mediumslateblue":((tmp.inf.upgrades[211].canAfford)?"#000000ff":"#434850ff")
                },
                "background-size":"125% 125%",
                "background-position":"center",
                "background-repeat":"no-repeat",
                "border-color"(){
                    return (hasUpgrade("inf",211))?"black":((tmp.inf.upgrades[211].canAfford)?"mediumslateblue":"white")
                },
                "border-radius":"20px/20px",
                "top":"20%",
                "bottom":"0%",
                "left":"223.5%",
                "right":"0%",
                "font-size":"18px",
                "padding-right":"1%",
                "padding-left":"1%"
            },
        },
    },

    clickables: {
        // 11: {
        //     display() {
        //         let state = ""
        //         if(getClickableState("p",11) == 1) state = "On"
        //         if(getClickableState("p",11) == 0) state = "Off"
        //         return "<h2>"+state
        //     },
        //     canClick() {return true},
        //     onClick() {
        //         if (getClickableState("p",11) == 0) return setClickableState("p",11,1)
        //         if (getClickableState("p",11) == 1) return setClickableState("p",11,0)
        //     },
        //     unlocked(){
        //         return hasUpgrade("asc",11)
        //     },
        //     style: {'height':'60px', 'width':'120px',
        //         "border-radius":"5%",
        //         "border-color"(){
        //             if (getClickableState("p",11) == 0) return "rgb(201, 45, 45)"
        //             if (getClickableState("p",11) == 1) return "rgb(50, 211, 64)"
        //         }, 
        //         "background-color"(){
        //             if (getClickableState("p",11) == 0) return "rgb(102, 49, 49)"
        //             if (getClickableState("p",11) == 1) return "rgb(62, 105, 65)"
        //         }, 
        //         "color"(){
        //             return "rgb(209, 209, 209)"
        //         }
        //     },
        // },

        11: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                //return rainbowText("b",formatWhole(player.inf.infinities)) + rainbowText("h3"," ∞")
                return "<b>"+((formatWhole(player.inf.infinities))+"<h3> ∞")
            },
            style: {'height':'5%', 'width':'14%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"5%",
                "right":"38%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-align":"center",
                "text-shadow":"2px 2px 3px #000000c7"
            },
        },

        12: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                //return rainbowText("b",(formatWhole(player.inf.points) + " IE"))
                return "<b>"+(format(player.inf.infenergy, 2) + " IE")
            },
            style: {'height':'5%', 'width':'14%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"5%",
                "right":"23%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-align":"center",
                "text-shadow":"2px 2px 3px #000000c7"
            },
        },

        13: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<b>"+(format(player.points, 3))+" 🗲"
            },
            style: {'height':'5%', 'width':'14%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"5%",
                "right":"8%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-align":"center",
                "text-shadow":"2px 2px 2px #000000c7"
            },
        },

        14: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>Infinity"
            },
            style: {'height':'5%', 'width':'8%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"5%",
                "left":"0%",
                "right":"50%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        15: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'7%', 'width':'45%',
                "border-radius":"16px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return "rgba(112, 112, 112, 1)"
                },
                "position":"fixed",
                "top":"4%",
                "right":"7.5%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                },
                "box-shadow":"2px 2px 5px #00000098"
            },
        },

        16: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'7%', 'width':'15%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"4%",
                "right":"22.5%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
            },
        },

        17: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'12.9%', 'width':'89%',
                "border-top":"0px solid",
                "border-left":"0px solid",
                "border-right":"0px solid",
                "border-bottom":"0px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(70, 70, 70, 1)"
                },
                "position":"fixed",
                "top":"14.45%",
                "right":"11%",
                "z-index":"2",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
            },
        },
        
        18: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'7%', 'width':'89%',
                "border-top":"0px solid",
                "border-left":"0px solid",
                "border-right":"0px solid",
                "border-bottom":"0px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(70, 70, 70, 1)"
                },
                "position":"fixed",
                "bottom":"0%",
                "right":"11%",
                "z-index":"2",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
            },
        },

        19: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'75%', 'width':'4.1%',
                "border-top":"0px solid",
                "border-left":"0px solid",
                "border-right":"0px solid",
                "border-bottom":"0px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(70, 70, 70, 1)"
                },
                "position":"fixed",
                "bottom":"0%",
                "left":"0%",
                "z-index":"2",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
            },
        },

        21: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'75%', 'width':'4.26%',
                "border-top":"0px solid",
                "border-left":"0px solid",
                "border-right":"0px solid",
                "border-bottom":"0px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(70, 70, 70, 1)"
                },
                "position":"fixed",
                "bottom":"0%",
                "right":"11%",
                "z-index":"2",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
            },
        },

        31: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                if(player.subtabs.inf.mainTabs != "Generators") return
                return colorText("h2","cyan"," You have ") + colorText("h1","cyan",(format(player.inf.genpower, 2))) + "<h2>" + colorText("sup","cyan",(format(player.inf.genexp, 3))) + colorText("h2","cyan",(" Generator Power (")+format(player.inf.gen1prod,2)+"/s)") + "<br><br>" + colorText("h3","lime"," boosting multiplier gains by x") + colorText("h2","lime",(format(player.inf.genmult, 2)))
            },
            style: {'height':'7.5%', 'width':'80%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"28.5%",
                "right":"10%",
                "left":"0%",
                "z-index":"9999",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
            },
        },

        41: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                if(player.subtabs.inf.mainTabs != "Upgrades") return
                return "<b>Scroll with shift + mouse wheel</b>"
            },
            style: {'height':'7.5%', 'width':'80%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "bottom":"6%",
                "right":"10%",
                "left":"0%",
                "z-index":"9999",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
            },
        },

        51: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                if(player.subtabs.inf.mainTabs != "Collider") return
                let sgl = " particle"
                let plr = " particles"
                let type = (player.inf.collparts.eq(1))?(sgl):(plr)
                let pwr = "<sup>"+format(decimalOne.div(player.inf.collupg4root),3)+"</sup>"
                return colorText("h2","hotpink"," You have ") + colorText("h1","hotpink",(format(player.inf.collparts, 2))) + colorText("h2","hotpink",(type)) + "<br><br>" + colorText("h3","blueviolet"," boosting IE gain by x") + colorText("h2","blueviolet",(format(player.inf.collIE, 2))) + colorText("h3","mediumslateblue",(" (" + (format(player.inf.collparts.add(1), 2)) + pwr + ")"))
            },
            style: {'height':'7.5%', 'width':'50%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"35%",
                "right":"10%",
                "left":"0%",
                "z-index":"9999",
                "color":"#ffffffff",
                "font-size"() {
                    return "22px"
                }
            },
        },

        // 52: {
        //     canClick() {return false},
        //     unlocked(){
        //         return true
        //     },
        //     display(){
        //         if(player.subtabs.inf.mainTabs != "Collider") return
        //         return "<h2>Chance: "+formatWhole(player.inf.collchance)+"%"
        //     },
        //     style: {'height':'7.5%', 'width':'50%',
        //         "border-radius":"0%",
        //         "border-color"(){
        //              return "rgba(0, 0, 0, 0)"
        //         }, 
        //         "background-color"(){
        //             return "rgba(0, 0, 0, 0)"
        //         },
        //         "position":"fixed",
        //         "top":"45%",
        //         "right":"40%",
        //         "left":"0%",
        //         "z-index":"9999",
        //         "color":"#ffffffff",
        //         "font-size"() {
        //             return "14px"
        //         }
        //     },
        // },

        // 53: {
        //     canClick() {return false},
        //     unlocked(){
        //         return true
        //     },
        //     display(){
        //         if(player.subtabs.inf.mainTabs != "Collider") return
        //         return "<h2>Interval: "+formatTime(player.inf.collinterval)
        //     },
        //     style: {'height':'7.5%', 'width':'50%',
        //         "border-radius":"0%",
        //         "border-color"(){
        //              return "rgba(0, 0, 0, 0)"
        //         }, 
        //         "background-color"(){
        //             return "rgba(0, 0, 0, 0)"
        //         },
        //         "position":"fixed",
        //         "top":"45%",
        //         "right":"10%",
        //         "left":"0%",
        //         "z-index":"9999",
        //         "color":"#ffffffff",
        //         "font-size"() {
        //             return "14px"
        //         }
        //     },
        // },

        // 54: {
        //     canClick() {return false},
        //     unlocked(){
        //         return true
        //     },
        //     display(){
        //         if(player.subtabs.inf.mainTabs != "Collider") return
        //         return "<h2>Particles gained: "+format(player.inf.collmult,2)
        //     },
        //     style: {'height':'7.5%', 'width':'50%',
        //         "border-radius":"0%",
        //         "border-color"(){
        //              return "rgba(0, 0, 0, 0)"
        //         }, 
        //         "background-color"(){
        //             return "rgba(0, 0, 0, 0)"
        //         },
        //         "position":"fixed",
        //         "top":"45%",
        //         "right":"0%",
        //         "left":"20%",
        //         "z-index":"9999",
        //         "color":"#ffffffff",
        //         "font-size"() {
        //             return "14px"
        //         }
        //     },
        // },

        52: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                if(player.subtabs.inf.mainTabs != "Collider") return
                return "<h3>Particles are reset on infinity"
            },
            style: {'height':'7.5%', 'width':'50%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"42.5%",
                "right":"10%",
                "left":"0%",
                "z-index":"9999",
                "color":"#ffffffff",
                "font-size"() {
                    return "14px"
                }
            },
        },

        // 21: {
        //     canClick() {return false},
        //     unlocked(){
        //         return true
        //     },
        //     display(){
        //         return "<h2>"
        //     },
        //     style: {'height':'7.5%', 'width':'25%',
        //         "border-radius":"0%",
        //         "border-color"(){
        //              return "rgba(0, 0, 0, 0)"
        //         }, 
        //         "background-color"(){
        //             return "transparent"
        //         },
        //         "position":"fixed",
        //         "top":"20%",
        //         "left":"4.15%",
        //         "z-index":"10",
        //         "color":"#ffffffff",
        //         "font-size"() {
        //             return "24px"
        //         },
        //         "text-shadow":"4px 4px 2px #000000c7"
        //     },
        // },



        999: {
            canClick() {return false},
            unlocked(){
                return true
            },
            style: {'height':'90%', 'width':'11%',
                "border-radius":"0%",
                "border-top"(){
                     return "8px solid #3f3f3fff"
                },
                "border-left"(){
                    return "2px solid black"
                },
                "background-color"(){
                    return "rgba(94, 94, 94, 1)"
                },
                "position":"fixed",
                "top":"14.45%",
                "right":"0%",
                "z-index":"3",
            },
        },
    },

    bars: {

    },

    update(diff){

      this.processedDescription = processText(tmp.inf.upgrades[id].tooltip, this.garbledDescriptionTemplate);

      // This uses key-swapping to force the garbled achievements to re-render their text, because otherwise they
      // would remain static. Keys for non-garbled achievements won't change, and all keys remain unique.
      this.garbleTimer++;
      if (this.isObscured) {
        this.garbleKey = 10 * this.id + Math.floor(this.garbleTimer / 3);
      } else {
        this.garbleKey = this.id;
      }

        if(hasAchievement("a",43)) player.inf.unlocked = true

        let inf92 = decimalOne
        if(hasUpgrade("inf",92)) inf92 = new Decimal(3)
            
        let inf132 = decimalOne
        if(hasUpgrade("inf",132)) inf132 = new Decimal(2)

        let inf162 = decimalOne
        if(hasUpgrade("inf",162)) inf162 = upgradeEffect("inf",162)

        let inf181 = decimalOne
        if(hasUpgrade("inf",181)) inf181 = upgradeEffect("inf",181)

        let inf191 = decimalOne
        if(hasUpgrade("inf",191)) inf191 = upgradeEffect("inf",191)

        let inf201 = decimalOne
        if(hasUpgrade("inf",201)) inf201 = upgradeEffect("inf",201)    

        if(hasUpgrade("inf",152)) player.inf.infinities = player.inf.infinities.add(upgradeEffect("inf",152).times(inf162).times(inf181).times(inf191).times(inf201).times(diff))

        let g2amt = decimalOne
        let g3amt = decimalOne
        let g4amt = decimalOne
        let g5amt = decimalOne
        let g6amt = decimalOne
        let g7amt = decimalOne
        let g8amt = decimalOne
        let g9amt = decimalOne
        let g10amt = decimalOne
        if(hasUpgrade("inf",153)){
            g2amt = new Decimal(player.inf.gen2bought).add(1).pow(0.85)
            g3amt = new Decimal(player.inf.gen3bought).add(1).pow(0.85)
            g4amt = new Decimal(player.inf.gen4bought).add(1).pow(0.85)
            g5amt = new Decimal(player.inf.gen5bought).add(1).pow(0.85)
            g6amt = new Decimal(player.inf.gen6bought).add(1).pow(0.85)
            g7amt = new Decimal(player.inf.gen7bought).add(1).pow(0.85)
            g8amt = new Decimal(player.inf.gen8bought).add(1).pow(0.85)
            g9amt = new Decimal(player.inf.gen9bought).add(1).pow(0.85)
            g10amt = new Decimal(player.inf.gen10bought).add(1).pow(0.85)
        }

        player.inf.gen1mult = Decimal.pow(2,((player.inf.gen1bought).sub(1))).div(10).times(inf92).times(inf132).times(g2amt).times(inf162).times(inf201)
        player.inf.gen1prod = player.inf.gen1mult.times(player.inf.gen1)

        player.inf.gen2mult = Decimal.pow(2,((player.inf.gen2bought).sub(1))).div(10).times(inf132).times(g3amt).times(inf162).times(inf201)
        player.inf.gen2prod = player.inf.gen2mult.times(player.inf.gen2)

        player.inf.gen3mult = Decimal.pow(2,((player.inf.gen3bought).sub(1))).div(10).times(inf132).times(g4amt).times(inf162).times(inf201)
        player.inf.gen3prod = player.inf.gen3mult.times(player.inf.gen3)

        player.inf.gen4mult = Decimal.pow(2,((player.inf.gen4bought).sub(1))).div(10).times(g5amt).times(inf162).times(inf201)
        player.inf.gen4prod = player.inf.gen4mult.times(player.inf.gen4)

        player.inf.gen5mult = Decimal.pow(2,((player.inf.gen5bought).sub(1))).div(10).times(g6amt).times(inf162).times(inf201)
        player.inf.gen5prod = player.inf.gen5mult.times(player.inf.gen5)

        player.inf.gen6mult = Decimal.pow(2,((player.inf.gen6bought).sub(1))).div(10).times(g7amt).times(inf162).times(inf201)
        player.inf.gen6prod = player.inf.gen6mult.times(player.inf.gen6)

        player.inf.gen7mult = Decimal.pow(2,((player.inf.gen7bought).sub(1))).div(10).times(g8amt).times(inf201)
        player.inf.gen7prod = player.inf.gen7mult.times(player.inf.gen7)

        player.inf.gen8mult = Decimal.pow(2,((player.inf.gen8bought).sub(1))).div(10).times(g9amt).times(inf201)
        player.inf.gen8prod = player.inf.gen8mult.times(player.inf.gen8)

        player.inf.gen9mult = Decimal.pow(2,((player.inf.gen9bought).sub(1))).div(10).times(g10amt).times(inf201)
        player.inf.gen9prod = player.inf.gen9mult.times(player.inf.gen9)

        player.inf.gen10mult = Decimal.pow(2,((player.inf.gen10bought).sub(1))).div(10).times(inf201)
        player.inf.gen10prod = player.inf.gen10mult.times(player.inf.gen10)

        // player.inf.genpower = player.inf.genpower.add(new Decimal(1/300).times(Decimal.pow(2,((player.inf.gen1bought).sub(1)))).times(player.inf.gen1).times((player.inf.gen1mult).div(8)))
        player.inf.genpower = player.inf.genpower.add(decimalOne.div(30).times(player.inf.gen1prod))
        player.inf.genmult = (player.inf.genpower).pow(player.inf.genexp).max(1)

        if(player.inf.gen2.gt(0)) player.inf.gen1 = player.inf.gen1.add((player.inf.gen2mult.div(30)).times(player.inf.gen2))
        if(player.inf.gen3.gt(0)) player.inf.gen2 = player.inf.gen2.add((player.inf.gen3mult.div(30)).times(player.inf.gen3))
        if(player.inf.gen4.gt(0)) player.inf.gen3 = player.inf.gen3.add((player.inf.gen4mult.div(30)).times(player.inf.gen4))
        if(player.inf.gen5.gt(0)) player.inf.gen4 = player.inf.gen4.add((player.inf.gen5mult.div(30)).times(player.inf.gen5))
        if(player.inf.gen6.gt(0)) player.inf.gen5 = player.inf.gen5.add((player.inf.gen6mult.div(30)).times(player.inf.gen6))
        if(player.inf.gen7.gt(0)) player.inf.gen6 = player.inf.gen6.add((player.inf.gen7mult.div(30)).times(player.inf.gen7))
        if(player.inf.gen8.gt(0)) player.inf.gen7 = player.inf.gen7.add((player.inf.gen8mult.div(30)).times(player.inf.gen8))
        if(player.inf.gen9.gt(0)) player.inf.gen8 = player.inf.gen8.add((player.inf.gen9mult.div(30)).times(player.inf.gen9))
        if(player.inf.gen10.gt(0)) player.inf.gen9 = player.inf.gen9.add((player.inf.gen10mult.div(30)).times(player.inf.gen10))

        
        if(player.inf.collchanceupg.gte(1)) player.inf.colltimer = player.inf.colltimer.add(diff)
        if(player.inf.colltimer.gte(player.inf.collinterval)){
            let chancepercent = getCollChance(1,100)
            if(player.inf.collchance.gte(chancepercent)) player.inf.collparts = player.inf.collparts.add(player.inf.collmult)
            player.inf.colltimer = decimalZero
        }
        player.inf.collIE = player.inf.collparts.add(1).root(player.inf.collupg4root).max(1)

        if(player.inf.infenergy.gte("1.798e308")) player.inf.infenergy = player.inf.infenergy.min("1.798e308")
    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer)}
    },
})