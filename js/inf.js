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
        gen1mult: decimalOne,
        gen2mult: decimalOne,
        gen3mult: decimalOne,
        gen4mult: decimalOne,
        gen5mult: decimalOne,
        gen6mult: decimalOne,
        gen7mult: decimalOne,
        gen8mult: decimalOne,
        gen9mult: decimalOne,
        gen10mult: decimalOne,
        gen1prod: decimalOne,
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
        genexp: new Decimal(1/3)
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
        return tmp.inf.unlocked
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
                ["clickables",1],
                ["clickables",2],
                ["clickable",999],
                "upgrades"
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
                let cost = Decimal.pow(10,(this.bought())).max(1).times(10)
                return cost 
            },
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
                    return "#e94141ff"
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
                    return "#ff853fff"
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
                    return "#ffec3fff"
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
                    return "#b1ee6cff"
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
                    return "#16f834ff"
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
                    return "#16f8daff"
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
                    return "#164bf8ff"
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
                    return "#9216f8ff"
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
                    return "#f148d5ff"
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
                    return "#ffffffff"
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
            style: {"width":"5%","height":"10%","position":"fixed",
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
                "top":"52.5%",
                "left":"15%",
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

        player.inf.genpower = player.inf.genpower.add(new Decimal(1/30).times(Decimal.pow(2,(player.inf.gen1bought))))
        player.inf.genmult = (player.inf.genpower).pow(player.inf.genexp)
        
    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer)}
    },
})