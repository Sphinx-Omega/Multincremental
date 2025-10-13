addLayer("p", {
    name: "enrg", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🗲 Energy", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: decimalZero,
        total: decimalZero,
        best: decimalZero,
        prestotal: decimalZero,
        presmult: decimalOne,
        presexp: decimalOne,
        presamt: decimalZero,
        ascendAmt: decimalZero,
        ascendcheck: false,
        addEnergy: decimalOne,
        baseMult: decimalOne,
        baseSpeed: decimalOne,
        baseBoost: decimalOne,
        baseAscend: decimalOne,
        ascendMult: decimalOne,
        ascendSpeed: decimalOne,
        ascendBoost: decimalOne,
        ascendPower: decimalOne,
        extraMult: decimalOne,
        multExp: decimalOne,
        timer: decimalZero,
        multdisplay: decimalOne,
        truedisplay: decimalOne,
        maxMult: decimalOne,
        rAsc: decimalZero,
        oAsc: decimalZero,
        yAsc: decimalZero,
        lAsc: decimalZero,
        gAsc: decimalZero,
        cAsc: decimalZero,
        bAsc: decimalZero,
        vAsc: decimalZero,
        pAsc: decimalZero,
        wAsc: decimalZero,
        redAscCost: decimalZero,
        orangeAscCost: decimalZero,
        yellowAscCost: decimalZero,
        limeAscCost: decimalZero,
        greenAscCost: decimalZero,
        cyanAscCost: decimalZero,
        blueAscCost: decimalZero,
        violetAscCost: decimalZero,
        pinkAscCost: decimalZero,
        whiteAscCost: decimalZero,
        rMax: new Decimal(100),
        oMax: new Decimal(100),
        yMax: new Decimal(100),
        lMax: new Decimal(100),
        gMax: new Decimal(100),
        cMax: new Decimal(100),
        bMax: new Decimal(100),
        vMax: new Decimal(100),
        pMax: new Decimal(100),
        wMax: new Decimal(100),
        rProg: decimalZero,
        oProg: decimalZero,
        yProg: decimalZero,
        lProg: decimalZero,
        gProg: decimalZero,
        cProg: decimalZero,
        bProg: decimalZero,
        vProg: decimalZero,
        pProg: decimalZero,
        wProg: decimalZero,
        rTimes: decimalZero,
        oTimes: decimalZero,
        yTimes: decimalZero,
        lTimes: decimalZero,
        gTimes: decimalZero,
        cTimes: decimalZero,
        bTimes: decimalZero,
        vTimes: decimalZero,
        pTimes: decimalZero,
        wTimes: decimalZero,
        rMult: decimalOne,
        oMult: decimalOne,
        yMult: decimalOne,
        lMult: decimalOne,
        gMult: decimalOne,
        cMult: decimalOne,
        bMult: decimalOne,
        vMult: decimalOne,
        pMult: decimalOne,
        wMult: decimalOne,
        rBaseMult: new Decimal(0.01),
        oBaseMult: new Decimal(0.01),
        yBaseMult: new Decimal(0.01),
        lBaseMult: new Decimal(0.01),
        gBaseMult: new Decimal(0.01),
        cBaseMult: new Decimal(0.01),
        bBaseMult: new Decimal(0.01),
        vBaseMult: new Decimal(0.01),
        pBaseMult: new Decimal(0.01),
        wBaseMult: new Decimal(0.01),
        redBuyAmt: decimalOne,
        orangeBuyAmt: decimalZero,
        yellowBuyAmt: decimalZero,
        limeBuyAmt: decimalZero,
        greenBuyAmt: decimalZero,
        cyanBuyAmt: decimalZero,
        blueBuyAmt: decimalZero,
        violetBuyAmt: decimalZero,
        pinkBuyAmt: decimalZero,
        whiteBuyAmt: decimalZero,
        redSpd: new Decimal(1/1.5),
        orangeSpd: new Decimal(1/3),
        yellowSpd: new Decimal(1/4.5),
        limeSpd: new Decimal(1/6),
        greenSpd: new Decimal(1/7.5),
        cyanSpd: new Decimal(1/9),
        blueSpd: new Decimal(1/0.5),
        violetSpd: new Decimal(1/12),
        pinkSpd: new Decimal(1/13.5),
        whiteSpd: new Decimal(1/15),
    }},
    color: "#ffffff",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color"() {
            return ((player.tab == "p")?(rgba(141, 141, 141, 1)):((this.onHover)?("transparent"):(rgba(141, 141, 141, 1))))
        },
        "background-position":"center",
        "border-size":"2px",
        "border-color":"transparent",
        "color":"white",
        "font-size":"22px",
        }
    },
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "quarks", // Name of prestige currency
    baseResource: "energy", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    softcapPower: 0.6,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        pmult = new Decimal(1)
        return pmult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {
            key: "m", description: "M: Rapid buy all bars",
                onPress(){
                    for(i = 0; i<5 ; i++){
                        if (canBuyBuyable("p",11)) buyBuyable("p",11)
                        if (canBuyBuyable("p",12)) buyBuyable("p",12)
                        if (canBuyBuyable("p",13)) buyBuyable("p",13)
                        if (canBuyBuyable("p",14)) buyBuyable("p",14)
                        if (canBuyBuyable("p",15)) buyBuyable("p",15)
                        if (canBuyBuyable("p",16)) buyBuyable("p",16)
                        if (canBuyBuyable("p",17)) buyBuyable("p",17)
                        if (canBuyBuyable("p",18)) buyBuyable("p",18)
                        if (canBuyBuyable("p",19)) buyBuyable("p",19)
                        if (canBuyBuyable("p",21)) buyBuyable("p",21)
                    }
                }
        },

        {
            key: "b", description: "B: Boost all bars",
                onPress(){
                    for(i = 0; i<5 ; i++){
                        if (tmp.p.clickables[41].unlocked == true) clickClickable("p",41)
                        if (tmp.p.clickables[42].unlocked == true) clickClickable("p",42)
                        if (tmp.p.clickables[43].unlocked == true) clickClickable("p",43)
                        if (tmp.p.clickables[44].unlocked == true) clickClickable("p",44)
                        if (tmp.p.clickables[45].unlocked == true) clickClickable("p",45)
                        if (tmp.p.clickables[46].unlocked == true) clickClickable("p",46)
                        if (tmp.p.clickables[47].unlocked == true) clickClickable("p",47)
                        if (tmp.p.clickables[48].unlocked == true) clickClickable("p",48)
                        if (tmp.p.clickables[49].unlocked == true) clickClickable("p",49)
                        if (tmp.p.clickables[51].unlocked == true) clickClickable("p",51)
                    }
                }
        },
    ],
    shouldNotify: false,
    layerShown(){return true},
    tabFormat: {
        "Main" :{
            content: [
                ["raw-html",
                    function(){
                        return ""
                    }
                ],
                "blank",
                ["bar","redBar"],
                ["bar","orangeBar"],
                ["bar","yellowBar"],
                ["bar","limeBar"],
                ["bar","greenBar"],
                ["bar","cyanBar"],
                ["bar","blueBar"],
                ["bar","violetBar"],
                ["bar","pinkBar"],
                ["bar","whiteBar"],
                "blank",
                "blank",
                "blank",
                "blank",
                "blank",
                "blank",
                "blank",
                "blank",
                "blank",
                "blank",
                "blank",
                "blank",
                ["bar","infBar"],
                ["clickable",11],
                ["clickables",2],
                ["clickables",3],
                ["clickables",4],
                ["clickables",5],
                ["buyables",1],
                ["buyable",21],
                ["clickable",991],
                ["clickable",999],
            ],
            style: {
                "padding-bottom":"-400px",
                "position":"fixed",
                "left":"0px",
                "right":"0px",
                "height":"616px",
            },
            buttonStyle: {
                "border-radius":"0%",
                "visibility":"hidden"
            },
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
                let cost = Decimal.pow(1.1,((this.bought()).div(4))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1)
                return cost 
            },
            bought() {
                let b = ((player.p.redBuyAmt).add(player.p.redAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.redSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.rAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[11].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.redSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.redBuyAmt).gte(player.p.rMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.redBuyAmt).gte(player.p.rMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.redBuyAmt = player.p.redBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return true }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#e94141ff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"17.5%",
                "left":"2%"
            },
        },

        12: {
            cost() { 
                let cost = Decimal.pow(1.15,((this.bought()).div(3.6))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(100)
                return cost 
            },
            bought() {
                let b = ((player.p.orangeBuyAmt).add(player.p.orangeAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.orangeSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.oAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.orangeBuyAmt)+" / "+formatWhole(player.p.oMax)+"<br>"+"Mult: x"+format(((player.p.oBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[12].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.orangeSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.orangeBuyAmt).gte(player.p.oMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.orangeBuyAmt).gte(player.p.oMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.orangeBuyAmt = player.p.orangeBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return (((player.p.redBuyAmt).gte(5)) || ((player.p.rAsc).gte(1))) }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#e99241ff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"25%",
                "left":"2%"
            },
        },

        13: {
            cost() { 
                let cost = Decimal.pow(1.2,((this.bought()).div(3.2))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(2.5e3)
                return cost 
            },
            bought() {
                let b = ((player.p.yellowBuyAmt).add(player.p.yellowAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.yellowSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.yAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.yellowBuyAmt)+" / "+formatWhole(player.p.yMax)+"<br>"+"Mult: x"+format(((player.p.yBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[13].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.yellowSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.yellowBuyAmt).gte(player.p.yMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.yellowBuyAmt).gte(player.p.yMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.yellowBuyAmt = player.p.yellowBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return (((player.p.orangeBuyAmt).gte(5)) || ((player.p.oAsc).gte(1))) }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#e9de41ff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"32.5%",
                "left":"2%"
            },
        },

        14: {
            cost() { 
                let cost = Decimal.pow(1.25,((this.bought()).div(2.8))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(1e5)
                return cost 
            },
            bought() {
                let b = ((player.p.limeBuyAmt).add(player.p.limeAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.limeSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.lAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.limeBuyAmt)+" / "+formatWhole(player.p.lMax)+"<br>"+"Mult: x"+format(((player.p.lBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[14].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.limeSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.limeBuyAmt).gte(player.p.lMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.limeBuyAmt).gte(player.p.lMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.limeBuyAmt = player.p.limeBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return (((player.p.yellowBuyAmt).gte(5)) || ((player.p.yAsc).gte(1))) }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#aee941ff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"40%",
                "left":"2%"
            },
        },

        15: {
            cost() { 
                let cost = Decimal.pow(1.3,((this.bought()).div(2.4))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(5e6)
                return cost 
            },
            bought() {
                let b = ((player.p.greenBuyAmt).add(player.p.greenAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.greenSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.gAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.greenBuyAmt)+" / "+formatWhole(player.p.gMax)+"<br>"+"Mult: x"+format(((player.p.gBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[15].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.greenSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.greenBuyAmt).gte(player.p.gMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.greenBuyAmt).gte(player.p.gMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.greenBuyAmt = player.p.greenBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return (((player.p.limeBuyAmt).gte(5)) || ((player.p.lAsc).gte(1))) }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#31f31fff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"47.5%",
                "left":"2%"
            },
        },

        16: {
            cost() { 
                let cost = Decimal.pow(1.35,((this.bought()).div(2))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(2.5e9)
                return cost 
            },
            bought() {
                let b = ((player.p.cyanBuyAmt).add(player.p.cyanAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.cyanSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.cAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.cyanBuyAmt)+" / "+formatWhole(player.p.cMax)+"<br>"+"Mult: x"+format(((player.p.cBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[16].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.cyanSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.cyanBuyAmt).gte(player.p.cMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.cyanBuyAmt).gte(player.p.cMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.cyanBuyAmt = player.p.cyanBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return (((player.p.greenBuyAmt).gte(5)) || ((player.p.gAsc).gte(1))) }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#1ff3e1ff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"55%",
                "left":"2%"
            },
        },

        17: {
            cost() { 
                let cost = Decimal.pow(1.4,((this.bought()).div(1.6))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(1e13)
                return cost 
            },
            bought() {
                let b = ((player.p.blueBuyAmt).add(player.p.blueAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.blueSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.bAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.blueBuyAmt)+" / "+formatWhole(player.p.bMax)+"<br>"+"Mult: x"+format(((player.p.bBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[17].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.blueSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.blueBuyAmt).gte(player.p.bMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.blueBuyAmt).gte(player.p.bMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.blueBuyAmt = player.p.blueBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return (((player.p.cyanBuyAmt).gte(5)) || ((player.p.cAsc).gte(1))) }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#3c56ecff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"62.5%",
                "left":"2%"
            },
        },

        18: {
            cost() { 
                let cost = Decimal.pow(1.45,((this.bought()).div(1.2))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(5e18)
                return cost 
            },
            bought() {
                let b = ((player.p.violetBuyAmt).add(player.p.violetAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.violetSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.vAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.violetBuyAmt)+" / "+formatWhole(player.p.vMax)+"<br>"+"Mult: x"+format(((player.p.vBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[18].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.violetSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.violetBuyAmt).gte(player.p.vMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.violetBuyAmt).gte(player.p.vMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.violetBuyAmt = player.p.violetBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return (((player.p.blueBuyAmt).gte(5)) || ((player.p.bAsc).gte(1))) }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#a629eeff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"70%",
                "left":"2%"
            },
        },

        19: {
            cost() { 
                let cost = Decimal.pow(1.45,((this.bought()).div(0.8))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(1e24)
                return cost 
            },
            bought() {
                let b = ((player.p.pinkBuyAmt).add(player.p.pinkAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.pinkSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.pAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.pinkBuyAmt)+" / "+formatWhole(player.p.pMax)+"<br>"+"Mult: x"+format(((player.p.pBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[19].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.pinkSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.pinkBuyAmt).gte(player.p.pMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.pinkBuyAmt).gte(player.p.pMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.pinkBuyAmt = player.p.pinkBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return (((player.p.violetBuyAmt).gte(5)) || ((player.p.vAsc).gte(1))) }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#f065cdff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"77.5%",
                "left":"2%"
            },
        },

        21: {
            cost() { 
                let cost = Decimal.pow(1.5,((this.bought()).div(0.5))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(1e33)
                return cost 
            },
            bought() {
                let b = ((player.p.whiteBuyAmt).add(player.p.whiteAscCost))
                return b
            },
            extra(){
                let ex = decimalZero
                return ex
            },
            effect(){
                let eff = player.p.whiteSpd
                return eff
            },
            tooltip() {
                let ascnum = player.p.wAsc
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.whiteBuyAmt)+" / "+formatWhole(player.p.wMax)+"<br>"+"Mult: x"+format(((player.p.wBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult)), 3)
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[21].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let spddis = format(player.p.whiteSpd, 3) + " c/s"
                let dis = "<h3>Speed: " + spddis
                let costdis = " Energy"
                if((player.p.whiteBuyAmt).gte(player.p.wMax)) return "<h1>MAXED</h1>"
                return dis + "<h3>\n\n\
                " + format(this.cost(), 3) + costdis
            },
            canAfford() {
                if((player.p.whiteBuyAmt).gte(player.p.wMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.whiteBuyAmt = player.p.whiteBuyAmt.add(1)
            },

            // buyMax() {
            //     buyBuyable("p",11)
            // },

            unlocked() { return (((player.p.pinkBuyAmt).gte(5)) || ((player.p.pAsc).gte(1))) }, 
            style: {'height':'6.5%', 'width':'10.5%',
                "border-radius"(){
                    return "5%"
                },
                "border":"1px solid",
                "border-color":"#0000005d",
                "background-color"(){
                    return "#ffffffff"
                },
                "color":"black",
                "text-shadow":"0 0 1px white",
                "position":"fixed",
                "top":"85%",
                "left":"2%"
            },
        },
    },

    upgrades: {
        
        // 11: {
        //     title: "",
        //     description() {
        //         return "<h2>Particle Generators are x2 stronger"
        //     },
        //     canAfford(){
        //         if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
        //         if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
        //         return player.points.gte(250)
        //     },
        //     pay(){
        //         if(!hasUpgrade("asc",24)) player.points = player.points.sub(250)
        //         player.p.upgrades.push("11")
        //     },
        //     unlocked(){
        //         return true
        //     },
        //     style: {"width":"200px","height":"80px",
        //         "color"(){
        //             return (hasUpgrade("p",11))?"rgb(0, 0, 0)":((tmp.p.upgrades[11].canAfford)?"white":"black")
        //         },
        //         "background-color"() {
        //             let a = "rgb(0, 0, 0)"
        //             let b = "rgb(122, 77, 77)"
        //             return (hasUpgrade("p",11))?"rgb(221, 42, 42)":((tmp.p.upgrades[11].canAfford)?a:b)
        //         },
        //         "border-color"(){
        //             return (hasUpgrade("p",11))?"rgb(0, 0, 0)":((tmp.p.upgrades[11].canAfford)?"white":"black")
        //         },
        //         "border-radius":"5%"
        //     },
        // },
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
            style: {'height':'47.9%', 'width':'26%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(255, 255, 255, 1)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"25%",
                "left":"0%",
                "right":"10%"
            },
        },

        21: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.rMult, 2)
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
                "top":"7.5%",
                "left":"0%",
                "right":"90%",
                "z-index":"10",
                "color":"#ff3f3fff",
                "font-size"() {
                    if(player.p.rMult.lt(1e3)) return "32px"
                    if(player.p.rMult.lt(1e4)) return "30px"
                    if(player.p.rMult.lt(1e5)) return "28px"
                    if(player.p.rMult.lt(1e6)) return "26px"
                    if(player.p.rMult.lt(1e7)) return "24px"
                    if(player.p.rMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        22: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.oMult, 2)
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
                "top":"7.5%",
                "left":"0%",
                "right":"70%",
                "z-index":"10",
                "color":"#ff853fff",
                "font-size"() {
                    if(player.p.oMult.lt(1e3)) return "32px"
                    if(player.p.oMult.lt(1e4)) return "30px"
                    if(player.p.oMult.lt(1e5)) return "28px"
                    if(player.p.oMult.lt(1e6)) return "26px"
                    if(player.p.oMult.lt(1e7)) return "24px"
                    if(player.p.oMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        23: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.yMult, 2)
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
                "top":"7.5%",
                "left":"0%",
                "right":"50%",
                "z-index":"10",
                "color":"#ffec3fff",
                "font-size"() {
                    if(player.p.yMult.lt(1e3)) return "32px"
                    if(player.p.yMult.lt(1e4)) return "30px"
                    if(player.p.yMult.lt(1e5)) return "28px"
                    if(player.p.yMult.lt(1e6)) return "26px"
                    if(player.p.yMult.lt(1e7)) return "24px"
                    if(player.p.yMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        24: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.lMult, 2)
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
                "top":"7.5%",
                "left":"0%",
                "right":"30%",
                "z-index":"10",
                "color":"#b1ee6cff",
                "font-size"() {
                    if(player.p.lMult.lt(1e3)) return "32px"
                    if(player.p.lMult.lt(1e4)) return "30px"
                    if(player.p.lMult.lt(1e5)) return "28px"
                    if(player.p.lMult.lt(1e6)) return "26px"
                    if(player.p.lMult.lt(1e7)) return "24px"
                    if(player.p.lMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        25: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.gMult, 2)
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
                "top":"7.5%",
                "left":"0%",
                "right":"10%",
                "z-index":"10",
                "color":"#16f834ff",
                "font-size"() {
                    if(player.p.gMult.lt(1e3)) return "32px"
                    if(player.p.gMult.lt(1e4)) return "30px"
                    if(player.p.gMult.lt(1e5)) return "28px"
                    if(player.p.gMult.lt(1e6)) return "26px"
                    if(player.p.gMult.lt(1e7)) return "24px"
                    if(player.p.gMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        26: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.cMult, 2)
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
                "top":"7.5%",
                "left":"10%",
                "right":"0%",
                "z-index":"10",
                "color":"#16f8daff",
                "font-size"() {
                    if(player.p.cMult.lt(1e3)) return "32px"
                    if(player.p.cMult.lt(1e4)) return "30px"
                    if(player.p.cMult.lt(1e5)) return "28px"
                    if(player.p.cMult.lt(1e6)) return "26px"
                    if(player.p.cMult.lt(1e7)) return "24px"
                    if(player.p.cMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        27: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.bMult, 2)
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
                "top":"7.5%",
                "left":"30%",
                "right":"0%",
                "z-index":"10",
                "color":"#164bf8ff",
                "font-size"() {
                    if(player.p.bMult.lt(1e3)) return "32px"
                    if(player.p.bMult.lt(1e4)) return "30px"
                    if(player.p.bMult.lt(1e5)) return "28px"
                    if(player.p.bMult.lt(1e6)) return "26px"
                    if(player.p.bMult.lt(1e7)) return "24px"
                    if(player.p.bMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        28: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.vMult, 2)
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
                "top":"7.5%",
                "left":"50%",
                "right":"0%",
                "z-index":"10",
                "color":"#9216f8ff",
                "font-size"() {
                    if(player.p.vMult.lt(1e3)) return "32px"
                    if(player.p.vMult.lt(1e4)) return "30px"
                    if(player.p.vMult.lt(1e5)) return "28px"
                    if(player.p.vMult.lt(1e6)) return "26px"
                    if(player.p.vMult.lt(1e7)) return "24px"
                    if(player.p.vMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        29: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.pMult, 2)
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
                "top":"7.5%",
                "left":"70%",
                "right":"0%",
                "z-index":"10",
                "color":"#f148d5ff",
                "font-size"() {
                    if(player.p.pMult.lt(1e3)) return "32px"
                    if(player.p.pMult.lt(1e4)) return "30px"
                    if(player.p.pMult.lt(1e5)) return "28px"
                    if(player.p.pMult.lt(1e6)) return "26px"
                    if(player.p.pMult.lt(1e7)) return "24px"
                    if(player.p.pMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        31: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.wMult, 2)
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
                "top":"7.5%",
                "left":"90%",
                "right":"0%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size"() {
                    if(player.p.wMult.lt(1e3)) return "32px"
                    if(player.p.wMult.lt(1e4)) return "30px"
                    if(player.p.wMult.lt(1e5)) return "28px"
                    if(player.p.wMult.lt(1e6)) return "26px"
                    if(player.p.wMult.lt(1e7)) return "24px"
                    if(player.p.wMult.lt(1e9)) return "22px"
                    return "32px"
                }
            },
        },

        32: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                if(player.p.rTimes.lt(decimalOne)) dismult = decimalOne
                let a22 = decimalZero
                let a33 = decimalZero
                if(hasAchievement("a",22)) a22 = new Decimal(0.02)
                if(hasAchievement("a",33)) a33 = new Decimal(0.03)
                return "<h2>(</h2>x<h3>"+format((player.p.multdisplay), 3)+"</h3><b><sup>"+format(((player.p.multExp).add(a22).add(a33)), 3)+"</sup></b><h2>)</h2><h3>   →   </h3><h2>(</h2>+ <h3>"+format(player.p.truedisplay, 3)+"</h3><h2>)</h2>"
            },
            style: {'height':'60px', 'width':'600px',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"17.5%",
                "left":"0%",
                "right":"10%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size":"20px"
            },
        },

        33: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<b>Progress to Infinity: "+format(((player.points).div(1.79769).max(1).log10().div(3.08).min(100)), 2)+"%"
            },
            style: {'height':'8%', 'width':'50%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "bottom":"10%",
                "top":"90%",
                "left":"0%",
                "right":"10%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size":"16px"
            },
        },

        34: {
            canClick() {return true},
            onClick() {
                prestigeReset()
                player.p.presamt = player.p.presamt.add(1)
            },
            unlocked(){
                return ((player.p.points.gte(1e6)) && (player.p.points.gte(player.p.prestotal)))
            },
            display(){
                let a22 = decimalZero
                let a33 = decimalZero
                if(hasAchievement("a",22)) a22 = new Decimal(0.02)
                if(hasAchievement("a",33)) a33 = new Decimal(0.03)
                return "<h2>Prestige</h2><br><br><b>Prestige exp: <sup>^</sup>" + format(((player.p.multExp).add(a22).add(a33)), 3) + " → <sup>^</sup>" + format(((player.p.presexp).add(a22).add(a33)), 3) + "<br><br><b>Prestige mult: x" + format((player.p.extraMult), 3) + " → x" + format((player.p.presmult), 3)
            },
            style: {'height':'13%', 'width':'16%',
                "border":"3px solid",
                "border-radius":"5%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(63, 63, 63, 1)"
                },
                "border-top-color":"grey",
                "border-left-color":"grey",
                "border-bottom-color":"black",
                "border-right-color":"black",
                "position":"fixed",
                "bottom":"50%",
                "top":"11.5%",
                "left":"55%",
                "right":"10%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size":"12px"
            },
        },

        35: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "x"+format(player.p.extraMult, 3)
            },
            style: {'height':'56px', 'width':'280px',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "bottom":"60%",
                "top":"0%",
                "left":"55%",
                "right":"10%",
                "z-index":"10",
                "color":"#585858ff",
                "font-size":"32px"
            },
        },

        36: {
            canClick() {return true},
            onClick() {
                ascend1()
                player.p.ascendAmt = player.p.ascendAmt.add(1)
            },
            unlocked(){
                return ((player.p.presmult.gte(1e3)) || (player.p.extraMult.gte(1e3)))
            },
            display(){
                return "<h2>Mult Ascension</h2><br><br><b>x" + formatWhole(player.p.baseMult) + " → x" + formatWhole(((player.p.ascendMult).mul(player.p.baseAscend)).max(player.p.baseMult))
            },
            style: {'height':'13%', 'width':'11%',
                "border":"3px solid",
                "border-radius":"5%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(184, 100, 100, 1)"
                },
                "border-top-color":"white",
                "border-left-color":"white",
                "border-bottom-color":"black",
                "border-right-color":"black",
                "position":"fixed",
                "bottom":"50%",
                "top":"45%",
                "left":"43%",
                "right":"10%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size":"10px"
            },
        },

        37: {
            canClick() {return true},
            onClick() {
                ascend2()
                player.p.ascendAmt = player.p.ascendAmt.add(1)
            },
            unlocked(){
                return ((player.p.presmult.gte(1e3)) || (player.p.extraMult.gte(1e3)))
            },
            display(){
                return "<h2>Speed Ascension</h2><br><br><b>x" + format((player.p.baseSpeed), 3) + " → x" + format((((player.p.ascendSpeed).mul(player.p.baseAscend)).max(player.p.baseSpeed)), 3)
            },
            style: {'height':'13%', 'width':'11%',
                "border":"3px solid",
                "border-radius":"5%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(176, 196, 90, 1)"
                },
                "border-top-color":"white",
                "border-left-color":"white",
                "border-bottom-color":"black",
                "border-right-color":"black",
                "position":"fixed",
                "bottom":"50%",
                "top":"45%",
                "left":"67%",
                "right":"10%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size":"10px"
            },
        },

        38: {
            canClick() {return true},
            onClick() {
                ascend3()
                player.p.ascendAmt = player.p.ascendAmt.add(1)
            },
            unlocked(){
                return ((player.p.presmult.gte(1e3)) || (player.p.extraMult.gte(1e3)))
            },
            display(){
                return "<h2>Boost Ascension</h2><br><br><b>x" + formatWhole((player.p.baseBoost).times(10)) + " → x" + formatWhole((((player.p.ascendBoost).mul(player.p.baseAscend)).max(player.p.baseBoost)).times(10))
            },
            style: {'height':'13%', 'width':'11%',
                "border":"3px solid",
                "border-radius":"5%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(90, 196, 191, 1)"
                },
                "border-top-color":"white",
                "border-left-color":"white",
                "border-bottom-color":"black",
                "border-right-color":"black",
                "position":"fixed",
                "bottom":"30%",
                "top":"55%",
                "left":"43%",
                "right":"10%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size":"10px"
            },
        },

        39: {
            canClick() {return true},
            onClick() {
                ascend4()
                player.p.ascendAmt = player.p.ascendAmt.add(1)
            },
            unlocked(){
                return ((player.p.presmult.gte(1e3)) || (player.p.extraMult.gte(1e3)))
            },
            display(){
                return "<h2>Ascension Power</h2><br><br><b>x" + format((player.p.baseAscend), 3) + " → x" + format(((player.p.ascendPower).max(player.p.baseAscend)), 3)
            },
            style: {'height':'13%', 'width':'11%',
                "border":"3px solid",
                "border-radius":"5%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(166, 90, 196, 1)"
                },
                "border-top-color":"white",
                "border-left-color":"white",
                "border-bottom-color":"black",
                "border-right-color":"black",
                "position":"fixed",
                "bottom":"30%",
                "top":"55%",
                "left":"67%",
                "right":"10%",
                "z-index":"10",
                "color":"#ffffffff",
                "font-size":"10px"
            },
        },

        41: {
            canClick() {return true},
            onClick() {
                player.p.redAscCost = player.p.redAscCost.add((player.p.rMax).sub(1))
                player.p.rAsc = player.p.rAsc.add(1)
                player.p.redBuyAmt = decimalOne
                player.p.rMax = player.p.rMax.add(10)
            },
            unlocked(){
                return (player.p.redBuyAmt).gte(player.p.rMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2><br><h3>but reset its level</h3>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#e94141ff"
                },
                "position":"fixed",
                "top":"17.5%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        42: {
            canClick() {return true},
            onClick() {
                player.p.orangeAscCost = player.p.orangeAscCost.add((player.p.oMax).sub(1))
                player.p.oAsc = player.p.oAsc.add(1)
                player.p.orangeBuyAmt = decimalOne
                player.p.oMax = player.p.oMax.add(10)
            },
            unlocked(){
                return (player.p.orangeBuyAmt).gte(player.p.oMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#e99241ff"
                },
                "position":"fixed",
                "top":"25%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        43: {
            canClick() {return true},
            onClick() {
                player.p.yellowAscCost = player.p.yellowAscCost.add((player.p.yMax).sub(1))
                player.p.yAsc = player.p.yAsc.add(1)
                player.p.yellowBuyAmt = decimalOne
                player.p.yMax = player.p.yMax.add(10)
            },
            unlocked(){
                return (player.p.yellowBuyAmt).gte(player.p.yMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#e9de41ff"
                },
                "position":"fixed",
                "top":"32.5%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        44: {
            canClick() {return true},
            onClick() {
                player.p.limeAscCost = player.p.limeAscCost.add((player.p.lMax).sub(1))
                player.p.lAsc = player.p.lAsc.add(1)
                player.p.limeBuyAmt = decimalOne
                player.p.lMax = player.p.lMax.add(10)
            },
            unlocked(){
                return (player.p.limeBuyAmt).gte(player.p.lMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#aee941ff"
                },
                "position":"fixed",
                "top":"40%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        45: {
            canClick() {return true},
            onClick() {
                player.p.greenAscCost = player.p.greenAscCost.add((player.p.gMax).sub(1))
                player.p.gAsc = player.p.gAsc.add(1)
                player.p.greenBuyAmt = decimalOne
                player.p.gMax = player.p.gMax.add(10)
            },
            unlocked(){
                return (player.p.greenBuyAmt).gte(player.p.gMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#31f31fff"
                },
                "position":"fixed",
                "top":"47.5%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        46: {
            canClick() {return true},
            onClick() {
                player.p.cyanAscCost = player.p.cyanAscCost.add((player.p.cMax).sub(1))
                player.p.cAsc = player.p.cAsc.add(1)
                player.p.cyanBuyAmt = decimalOne
                player.p.cMax = player.p.cMax.add(10)
            },
            unlocked(){
                return (player.p.cyanBuyAmt).gte(player.p.cMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#1ff3e1ff"
                },
                "position":"fixed",
                "top":"55%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        47: {
            canClick() {return true},
            onClick() {
                player.p.blueAscCost = player.p.blueAscCost.add((player.p.bMax).sub(1))
                player.p.bAsc = player.p.bAsc.add(1)
                player.p.blueBuyAmt = decimalOne
                player.p.bMax = player.p.bMax.add(10)
            },
            unlocked(){
                return (player.p.blueBuyAmt).gte(player.p.bMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#3c56ecff"
                },
                "position":"fixed",
                "top":"62.5%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        48: {
            canClick() {return true},
            onClick() {
                player.p.violetAscCost = player.p.violetAscCost.add((player.p.vMax).sub(1))
                player.p.vAsc = player.p.vAsc.add(1)
                player.p.violetBuyAmt = decimalOne
                player.p.vMax = player.p.vMax.add(10)
            },
            unlocked(){
                return (player.p.violetBuyAmt).gte(player.p.vMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#a629eeff"
                },
                "position":"fixed",
                "top":"70%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        49: {
            canClick() {return true},
            onClick() {
                player.p.pinkAscCost = player.p.pinkAscCost.add((player.p.pMax).sub(1))
                player.p.pAsc = player.p.pAsc.add(1)
                player.p.pinkBuyAmt = decimalOne
                player.p.pMax = player.p.pMax.add(10)
            },
            unlocked(){
                return (player.p.pinkBuyAmt).gte(player.p.pMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#f065cdff"
                },
                "position":"fixed",
                "top":"77.5%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        51: {
            canClick() {return true},
            onClick() {
                player.p.whiteAscCost = player.p.whiteAscCost.add((player.p.wMax).sub(1))
                player.p.wAsc = player.p.wAsc.add(1)
                player.p.whiteBuyAmt = decimalOne
                player.p.wMax = player.p.wMax.add(10)
            },
            unlocked(){
                return (player.p.whiteBuyAmt).gte(player.p.wMax)
            },
            display(){
                return "B"
            },
            tooltip(){
                return "<h2><br>Boost this bar's multiplier</h2>"
            },
            style: {'height':'6.5%', 'width':'3.25%',
                "border-radius":"15%",
                "border-color"(){
                     return "#0000005d"
                }, 
                "background-color"(){
                    return "#ffffffff"
                },
                "position":"fixed",
                "top":"85%",
                "left":"13%",
                "z-index":"10",
                "color":"#000000ff",
                "font-size":"32px",
            },
        },

        991: {
            canClick() {return false},
            unlocked(){
                return (!hasAchievement("a",43))
            },
            display(){
                return "Locked"
            },
            style: {'height':'6.5%', 'width':'10.85%',
                "border-radius":"0%",
                "border-color":"transparent",
                "background-color"(){
                    return "rgba(94, 94, 94, 1)"
                },
                "position":"fixed",
                "top":"21.8%",
                "right":"0%",
                "z-index":"1",
                "color":"#414141ff",
                "font-size":"32px"
            },
        },

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
                "z-index":"-5",
            },
        },
    },

    bars: {
        redBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if ((player.p.redSpd).gte(30)) return decimalOne
                return (player.p.rProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"25%"
            },
            fillStyle: {
                "background-color"() {
                    return (getThemeName() == "grayscale")?"#2e2e2eff":"red"
                },
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        orangeBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if (((player.p.orangeSpd).gte(30)) && (player.p.orangeBuyAmt.gte(1))) return decimalOne
                return (player.p.oProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"29.8%"
            },
            fillStyle: {
                "background-color"() {
                    return (getThemeName() == "grayscale")?"#3d3d3dff":"orange"
                },
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        yellowBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if (((player.p.yellowSpd).gte(30)) && (player.p.yellowBuyAmt.gte(1))) return decimalOne
                return (player.p.yProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"34.6%"
            },
            fillStyle: {
                "background-color"() {
                    return (getThemeName() == "grayscale")?"#4d4d4dff":"yellow"
                },
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        limeBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if (((player.p.limeSpd).gte(30)) && (player.p.limeBuyAmt.gte(1))) return decimalOne
                return (player.p.lProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"39.4%"
            },
            fillStyle: {
                "background-color"() {
                    return (getThemeName() == "grayscale")?"#5f5f5fff":"greenyellow"
                },
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        greenBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if (((player.p.greenSpd).gte(30)) && (player.p.greenBuyAmt.gte(1))) return decimalOne
                return (player.p.gProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"44.2%"
            },
            fillStyle: {
                "background-color"() {
                    return (getThemeName() == "grayscale")?"#727272ff":"lime"
                },
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        cyanBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if (((player.p.cyanSpd).gte(30)) && (player.p.cyanBuyAmt.gte(1))) return decimalOne
                return (player.p.cProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"49%"
            },
            fillStyle: {
                "background-color"() {
                    return (getThemeName() == "grayscale")?"#888888ff":"mediumturquoise"
                },
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        blueBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if (((player.p.blueSpd).gte(30)) && (player.p.blueBuyAmt.gte(1))) return decimalOne
                return (player.p.bProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"53.8%"
            },
            fillStyle: {
                "background-color"() {
                    return (getThemeName() == "grayscale")?"#9b9b9bff":"mediumblue"
                },
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        violetBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if (((player.p.violetSpd).gte(30)) && (player.p.violetBuyAmt.gte(1))) return decimalOne
                return (player.p.vProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"58.6%"
            },
            fillStyle: {
                "background-color"() {
                    return (getThemeName() == "grayscale")?"#adadadff":"darkviolet"
                },
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        pinkBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if (((player.p.pinkSpd).gte(30)) && (player.p.pinkBuyAmt.gte(1))) return decimalOne
                return (player.p.pProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"63.4%"
            },
            fillStyle: {
                "background-color"() {
                    return (getThemeName() == "grayscale")?"#cfcfcfff":"magenta"
                },
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        whiteBar: {
            direction: RIGHT,
            width: 25.78,
            height: 4.25,
            progress() {
                if (((player.p.whiteSpd).gte(30)) && (player.p.whiteBuyAmt.gte(1))) return decimalOne
                return (player.p.wProg).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"180px",
                "opacity":"100%",
                "left":"32%",
                "top":"68.2%"
            },
            fillStyle: {
                "background-color":"white",
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%"
            },
            borderStyle: {
                "border-color":"transparent",
                "border":"0%",
            },
            style: {
                "position":"fixed"
            }
        },

        infBar: {
            direction: RIGHT,
            width: 40,
            height: 2,
            progress() {
                return (player.points).div(1.79769).max(1).log10().div(308).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            baseStyle: {
                "position":"fixed",
                "background-color":"transparent",
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%",
                "left":"25%",
                "bottom":"5%"
            },
            fillStyle: {
                "position":"fixed",
                "background-image":"url(images/bgs/Rainbow.gif)",
                "background-position":"center",
                "background-size":"cover",
                "opacity":"100%",
                "left":"25.1%",
                "bottom":"5.2%"
            },
            borderStyle: {
                "position":"fixed",
                "border-size":"2px",
                "border-color":"white",
                "border-radius":"10px/50%",
                "left":"25%",
                "bottom":"5%"
            },
            textStyle: {
                "font-size":"12px"
            },
            style: {
                "position":"fixed"
            }
        },
    },

    update(diff){

        let a13 = decimalOne
        if(hasAchievement("a",13)) a13 = new Decimal(1.1)

        let a22 = decimalZero
        if(hasAchievement("a","22")) a22 = new Decimal(0.02)

        let a32 = decimalOne
        if(hasAchievement("a",32)) a32 = new Decimal(1.2)

        let a33 = decimalZero
        if(hasAchievement("a","33")) a33 = new Decimal(0.03)

        let a41 = decimalOne
        if(hasAchievement("a",41)) a41 = new Decimal(1.05)

        player.p.presexp = (player.p.points).div(1e4).max(1).log10().max(1).pow(0.033).add(a22).add(a33)
        player.p.presmult = (player.p.points).div(1e6).pow(0.4).max(1).pow(0.7).times(2).times(a13)

        player.p.multdisplay = (player.p.addEnergy).add(0.01)
        player.p.truedisplay = (player.p.multdisplay).pow((player.p.multExp).add(a22).add(a33))

        player.p.maxMult = (player.p.presmult).max(player.p.extraMult)

        player.p.ascendMult = (player.p.maxMult).div(250).max(1).pow(0.4).floor().max(1).log2().pow(3.33).floor().times(2).add(2).mul(player.p.baseAscend)
        player.p.ascendSpeed = (player.p.maxMult).div(250).max(1).pow(0.25).floor().div(2).max(1).log2().pow(1.75).max(1).add(1).mul(player.p.baseAscend)
        player.p.ascendBoost = (player.p.maxMult).div(250).max(1).pow(0.4).floor().pow(0.2).max(1).log10().times(10).round().div(10).add(1.2).mul(player.p.baseAscend)
        player.p.ascendPower = (player.p.maxMult).max(1).log10().pow(0.05).max(1).times(a41)

        // player.p.redSpd = new Decimal(1/2).times((Decimal.pow(1.67, ((player.p.redBuyAmt).div(5)))).div(10)).add(0.2)
        // player.p.orangeSpd = new Decimal(1/4).times((Decimal.pow(1.67, ((player.p.orangeBuyAmt).div(4)))).div(10)).add(0.1)
        // player.p.yellowSpd = new Decimal(1/6).times((Decimal.pow(1.67, ((player.p.yellowBuyAmt).div(3)))).div(10)).add(0.05)
        // player.p.limeSpd = new Decimal(1/8).times((Decimal.pow(1.67, ((player.p.limeBuyAmt).div(2)))).div(10)).add(0.025)
        // player.p.greenSpd = new Decimal(1/10).times((Decimal.pow(1.67, ((player.p.greenBuyAmt).div(1)))).div(10)).add(0.0125)
        // player.p.cyanSpd = new Decimal(1/12).times((Decimal.pow(1.67, ((player.p.cyanBuyAmt).div(0.5)))).div(10)).add(0.00625)
        // player.p.blueSpd = new Decimal(1/14).times((Decimal.pow(1.67, ((player.p.blueBuyAmt).div(0.25)))).div(10)).add(0.003125)
        // player.p.violetSpd = new Decimal(1/16).times((Decimal.pow(1.67, ((player.p.violetBuyAmt).div(0.125)))).div(10)).add(0.0015625)
        // player.p.pinkSpd = new Decimal(1/18).times((Decimal.pow(1.67, ((player.p.pinkBuyAmt).div(0.0625)))).div(10)).add(0.00078125)
        // player.p.whiteSpd = new Decimal(1/20).times((Decimal.pow(1.67, ((player.p.whiteBuyAmt).div(0.03125)))).div(10)).add(0.000390625)

        player.p.redSpd = new Decimal(1/2).add((player.p.redBuyAmt).div(10)).times(player.p.baseSpeed).times(a32)
        player.p.orangeSpd = new Decimal(1/4).add((player.p.orangeBuyAmt).div(20)).times(player.p.baseSpeed).times(a32)
        player.p.yellowSpd = new Decimal(1/6).add((player.p.yellowBuyAmt).div(30)).times(player.p.baseSpeed).times(a32)
        player.p.limeSpd = new Decimal(1/8).add((player.p.limeBuyAmt).div(40)).times(player.p.baseSpeed).times(a32)
        player.p.greenSpd = new Decimal(1/10).add((player.p.greenBuyAmt).div(50)).times(player.p.baseSpeed).times(a32)
        player.p.cyanSpd = new Decimal(1/12).add((player.p.cyanBuyAmt).div(60)).times(player.p.baseSpeed).times(a32)
        player.p.blueSpd = new Decimal(1/14).add((player.p.blueBuyAmt).div(70)).times(player.p.baseSpeed).times(a32)
        player.p.violetSpd = new Decimal(1/16).add((player.p.violetBuyAmt).div(80)).times(player.p.baseSpeed).times(a32)
        player.p.pinkSpd = new Decimal(1/18).add((player.p.pinkBuyAmt).div(90)).times(player.p.baseSpeed).times(a32)
        player.p.whiteSpd = new Decimal(1/20).add((player.p.whiteBuyAmt).div(100)).times(player.p.baseSpeed).times(a32)

        player.p.rProg = player.p.rProg.add((player.p.redSpd).div(30)).min(1.01)
        if(player.p.rProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.rTimes = player.p.rTimes.add(1)
            player.p.rMult = player.p.rMult.add(((player.p.rBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.rAsc)))).times(tmp.a.effect).times((player.p.redSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.rProg = decimalZero
        }

        if((player.p.orangeBuyAmt).gte(1)) player.p.oProg = player.p.oProg.add((player.p.orangeSpd).div(30)).min(1.01)
        if(player.p.oProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.oTimes = player.p.oTimes.add(1)
            player.p.oMult = player.p.oMult.add(((player.p.oBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.oAsc)))).times(tmp.a.effect).times((player.p.orangeSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.oProg = decimalZero
        }

        if((player.p.yellowBuyAmt).gte(1)) player.p.yProg = player.p.yProg.add((player.p.yellowSpd).div(30)).min(1.01)
        if(player.p.yProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.yTimes = player.p.yTimes.add(1)
            player.p.yMult = player.p.yMult.add(((player.p.yBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.yAsc)))).times(tmp.a.effect).times((player.p.yellowSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.yProg = decimalZero
        }

        if((player.p.limeBuyAmt).gte(1)) player.p.lProg = player.p.lProg.add((player.p.limeSpd).div(30)).min(1.01)
        if(player.p.lProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.lTimes = player.p.lTimes.add(1)
            player.p.lMult = player.p.lMult.add(((player.p.lBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.lAsc)))).times(tmp.a.effect).times((player.p.limeSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.lProg = decimalZero
        }

        if((player.p.greenBuyAmt).gte(1)) player.p.gProg = player.p.gProg.add((player.p.greenSpd).div(30)).min(1.01)
        if(player.p.gProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.gTimes = player.p.gTimes.add(1)
            player.p.gMult = player.p.gMult.add(((player.p.gBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.gAsc)))).times(tmp.a.effect).times((player.p.greenSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.gProg = decimalZero
        }

        if((player.p.cyanBuyAmt).gte(1)) player.p.cProg = player.p.cProg.add((player.p.cyanSpd).div(30)).min(1.01)
        if(player.p.cProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.cTimes = player.p.cTimes.add(1)
            player.p.cMult = player.p.cMult.add(((player.p.cBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.cAsc)))).times(tmp.a.effect).times((player.p.cyanSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.cProg = decimalZero
        }

        if((player.p.blueBuyAmt).gte(1)) player.p.bProg = player.p.bProg.add((player.p.blueSpd).div(30)).min(1.01)
        if(player.p.bProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.bTimes = player.p.bTimes.add(1)
            player.p.bMult = player.p.bMult.add(((player.p.bBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.bAsc)))).times(tmp.a.effect).times((player.p.blueSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.bProg = decimalZero
        }

        if((player.p.violetBuyAmt).gte(1)) player.p.vProg = player.p.vProg.add((player.p.violetSpd).div(30)).min(1.01)
        if(player.p.vProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.vTimes = player.p.vTimes.add(1)
            player.p.vMult = player.p.vMult.add(((player.p.vBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.vAsc)))).times(tmp.a.effect).times((player.p.violetSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.vProg = decimalZero
        }

        if((player.p.pinkBuyAmt).gte(1)) player.p.pProg = player.p.pProg.add((player.p.pinkSpd).div(30)).min(1.01)
        if(player.p.pProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.pTimes = player.p.pTimes.add(1)
            player.p.pMult = player.p.pMult.add(((player.p.pBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.pAsc)))).times(tmp.a.effect).times((player.p.pinkSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.pProg = decimalZero
        }

        if((player.p.whiteBuyAmt).gte(1)) player.p.wProg = player.p.wProg.add((player.p.whiteSpd).div(30)).min(1.01)
        if(player.p.wProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.wTimes = player.p.wTimes.add(1)
            player.p.wMult = player.p.wMult.add(((player.p.wBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.wAsc)))).times(tmp.a.effect).times((player.p.whiteSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult))
            player.p.wProg = decimalZero
        }



        if(player.points.gte("1.798e308")) {
            player.points = player.points.min("1.798e308")
            player.p.addEnergy = player.p.addEnergy.min("1.798e308")
            player.p.truedisplay = player.p.truedisplay.min("1.798e308")
            infinity()
        }
        if(player.p.points.gte("1.798e308")) player.p.points = player.p.points.min("1.798e308")
    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer)}
    },
})