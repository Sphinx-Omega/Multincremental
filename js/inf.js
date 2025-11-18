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
        gen1: decimalOne,
        gen2: decimalZero,
        gen3: decimalZero,
        gen4: decimalZero,
        gen5: decimalZero,
        gen6: decimalZero,
        gen7: decimalZero,
        gen8: decimalZero,
        gen9: decimalZero,
        gen10: decimalZero,
        gen1bought: decimalOne,
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
        genexp: new Decimal(2/3)
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
                "height":"10%",
                "width":"125%",
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
                "buyables"
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

        "Challenges" :{
            content: [
                ["raw-html",
                    function(){
                        return ""
                    }
                ],
                "blank",
                ["clickables",1],
                ["clickables",2],
                ["clickable",999]
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
                    return ((player.subtabs.inf.mainTabs == "Challenges")?"#1a1a1aff":"rgba(70, 70, 70, 1)")
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
                return false
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
                "left":"7.5%"
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
                "left":"46.5%"
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
                "left":"7.5%"
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
                "left":"46.5%"
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
                "left":"7.5%"
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
                "left":"46.5%"
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
                "left":"7.5%"
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
                "left":"46.5%"
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
                "left":"7.5%"
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
                "left":"46.5%"
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
                player.inf.upgrades.push(11)
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
                player.inf.upgrades.push(21)
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
                player.inf.upgrades.push(22)
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
                player.inf.upgrades.push(31)
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
                player.inf.upgrades.push(41)
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
                player.inf.upgrades.push(42)
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
                player.inf.upgrades.push(51)
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
                player.inf.upgrades.push(61)
            },
            unlocked(){
                return true
            },
            branches(){
                return hasUpgrade("inf",61)?([['51',1,10,getFasterUndulatingColor()]]):(hasUpgrade("inf",51)?[['51',1,10,'white']]:[['51',3,10,'gray']])
            },
            effect(){
                let infs = player.inf.infinities
                let eff = infs.add(2).log2().times(0.42).max(1)
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
                player.inf.upgrades.push(62)
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
                return "<h3>UPG-7<br><br>Completed challenges boost IE gain by +1 each<br><br>Cost: 32 IE"
            },
            realtooltip(){
                return "Completed challenges boost IE gain by +1 each"
            },
            realname(){
                return "UPG-7"
            },
            realcost(){
                return "Cost: 32IE"
            },
            cost(){
                return new Decimal(32)
            },
            canAfford(){
                return (player.inf.infenergy.gte(32) && hasUpgrade("inf",61) && hasUpgrade("inf",62))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(32)
                player.inf.upgrades.push(71)
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
                return "Cost: 64IE"
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
                player.inf.upgrades.push(81)
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
                return "Cost: 128IE"
            },
            cost(){
                return new Decimal(64)
            },
            canAfford(){
                return (player.inf.infenergy.gte(128) && hasUpgrade("inf",71))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(128)
                player.inf.upgrades.push(82)
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
                return "Cost: 64IE"
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
                player.inf.upgrades.push(83)
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
                return "Cost: 256IE"
            },
            cost(){
                return new Decimal(256)
            },
            canAfford(){
                return (player.inf.infenergy.gte(256) && hasUpgrade("inf",81) && hasUpgrade("inf",82))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(256)
                player.inf.upgrades.push(91)
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
                return "<h3>UPG-9b<br><br>First Generator is x3 stronger<br><br>Cost: 256 IE"
            },
            realtooltip(){
                return "First Generator is x3 stronger"
            },
            realname(){
                return "UPG-9b"
            },
            realcost(){
                return "Cost: 256IE"
            },
            cost(){
                return new Decimal(256)
            },
            canAfford(){
                return (player.inf.infenergy.gte(256) && hasUpgrade("inf",82) && hasUpgrade("inf",83))
            },
            pay(){
                player.inf.infenergy = player.inf.infenergy.sub(256)
                player.inf.upgrades.push(92)
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
            style: {'height':'10%', 'width':'89%',
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
                return colorText("h2","cyan"," You have ") + colorText("h1","cyan",(format(player.inf.genpower, 2))) + "<h2>" + colorText("sup","cyan",(format(player.inf.genexp, 3))) + colorText("h2","cyan"," Generator Power") + "<br><br>" + colorText("h3","lime"," boosting multiplier gains by x") + colorText("h2","lime",(format(player.inf.genmult, 2)))
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
                "bottom":"8%",
                "right":"10%",
                "left":"0%",
                "z-index":"9999",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
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

        player.inf.gen1mult = Decimal.pow(2,((player.inf.gen1bought).sub(1))).div(10).times(inf92)
        player.inf.gen1prod = player.inf.gen1mult.times(player.inf.gen1)

        player.inf.gen2mult = Decimal.pow(2,((player.inf.gen2bought).sub(1))).div(10)
        player.inf.gen2prod = player.inf.gen2mult.times(player.inf.gen2)

        player.inf.gen3mult = Decimal.pow(2,((player.inf.gen3bought).sub(1))).div(10)
        player.inf.gen3prod = player.inf.gen3mult.times(player.inf.gen3)

        player.inf.gen4mult = Decimal.pow(2,((player.inf.gen4bought).sub(1))).div(10)
        player.inf.gen4prod = player.inf.gen4mult.times(player.inf.gen4)

        player.inf.gen5mult = Decimal.pow(2,((player.inf.gen5bought).sub(1))).div(10)
        player.inf.gen5prod = player.inf.gen5mult.times(player.inf.gen5)

        player.inf.gen6mult = Decimal.pow(2,((player.inf.gen6bought).sub(1))).div(10)
        player.inf.gen6prod = player.inf.gen6mult.times(player.inf.gen6)

        player.inf.gen7mult = Decimal.pow(2,((player.inf.gen7bought).sub(1))).div(10)
        player.inf.gen7prod = player.inf.gen7mult.times(player.inf.gen7)

        player.inf.gen8mult = Decimal.pow(2,((player.inf.gen8bought).sub(1))).div(10)
        player.inf.gen8prod = player.inf.gen8mult.times(player.inf.gen8)

        player.inf.gen9mult = Decimal.pow(2,((player.inf.gen9bought).sub(1))).div(10)
        player.inf.gen9prod = player.inf.gen9mult.times(player.inf.gen9)

        player.inf.gen10mult = Decimal.pow(2,((player.inf.gen10bought).sub(1))).div(10)
        player.inf.gen10prod = player.inf.gen10mult.times(player.inf.gen10)

        player.inf.genpower = player.inf.genpower.add(new Decimal(1/300).times(Decimal.pow(2,((player.inf.gen1bought).sub(1)))).times(player.inf.gen1))
        player.inf.genmult = (player.inf.genpower).pow(player.inf.genexp)

        if(player.inf.gen2.gt(0)) player.inf.gen1 = player.inf.gen1.add(player.inf.gen2mult.div(30))
        if(player.inf.gen3.gt(0)) player.inf.gen1 = player.inf.gen2.add(player.inf.gen3mult.div(30))
        if(player.inf.gen4.gt(0)) player.inf.gen1 = player.inf.gen3.add(player.inf.gen4mult.div(30))
        if(player.inf.gen5.gt(0)) player.inf.gen1 = player.inf.gen4.add(player.inf.gen5mult.div(30))
        if(player.inf.gen6.gt(0)) player.inf.gen1 = player.inf.gen5.add(player.inf.gen6mult.div(30))
        if(player.inf.gen7.gt(0)) player.inf.gen1 = player.inf.gen6.add(player.inf.gen7mult.div(30))
        if(player.inf.gen8.gt(0)) player.inf.gen1 = player.inf.gen7.add(player.inf.gen8mult.div(30))
        if(player.inf.gen9.gt(0)) player.inf.gen1 = player.inf.gen8.add(player.inf.gen9mult.div(30))
        if(player.inf.gen10.gt(0)) player.inf.gen1 = player.inf.gen9.add(player.inf.gen10mult.div(30))


    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer)}
    },
})