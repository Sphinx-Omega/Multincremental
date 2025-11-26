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
        truepresamt: decimalZero,
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
        ascboostcheck: false,
        ach82check: false,
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
        TAsc: decimalZero,
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
        TredBuyAmt: decimalZero,
        TorangeBuyAmt: decimalZero,
        TyellowBuyAmt: decimalZero,
        TlimeBuyAmt: decimalZero,
        TgreenBuyAmt: decimalZero,
        TcyanBuyAmt: decimalZero,
        TblueBuyAmt: decimalZero,
        TvioletBuyAmt: decimalZero,
        TpinkBuyAmt: decimalZero,
        TwhiteBuyAmt: decimalZero,
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
        infchallenge12: decimalOne,
        infTime: decimalZero,
        infRecord: new Decimal(31536000),
        infNoAscend: false,
        infNoPres: false,
        infNoBst: false,
        chal17eff: decimalOne,
        chal18eff: decimalOne,
        costscaling: new Decimal(20),
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
                    //for(i = 0; i<20 ; i++){
                    buyMaxBuyable("p",11)
                    buyMaxBuyable("p",12)
                    buyMaxBuyable("p",13)
                    buyMaxBuyable("p",14)
                    buyMaxBuyable("p",15)
                    buyMaxBuyable("p",16)
                    buyMaxBuyable("p",17)
                    buyMaxBuyable("p",18)
                    buyMaxBuyable("p",19)
                    buyMaxBuyable("p",21)
                    //}
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

        {
            key: "i", description: "I: Infinity",
                onPress(){
                    if (tmp.p.clickables[55].unlocked == true) clickClickable("p",55)
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
                ["bar","eterBar"],
                ["clickable",11],
                ["clickables",2],
                ["clickables",3],
                ["clickables",4],
                ["clickables",5],
                ["clickables",6],
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
                let cost = Decimal.pow(1.1,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal("1.798e308")
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost 
            },
            bought() {
                let b = ((player.p.redBuyAmt).add(player.p.redAscCost))
                return b
            },
            // boughtAfterInf() {
            //     let thresh = this.bought().sub(952).max(0).div(100).floor()
            //     return thresh
            // },
            // scTiers(){
            //     let base = new Decimal(952)
            //     let sct = base.add(this.boughtAfterInf().times(100))
            //     return sct
            // },
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp)), 3)
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
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.redBuyAmt = player.p.redBuyAmt.add(1)
                player.p.TredBuyAmt = player.p.TredBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.max(1)
                let cap = new Decimal("1.798e308")
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.1).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().sub(1).add(this.bought())
                let cost = Decimal.pow(1.1,(amt.pow(1.3))).max(1)
                let cap = new Decimal("1.798e308")
                let sc = player.p.costscaling

                cost = softcapBars(cost, cap, sc)
                return cost 
            },

            // maxBoosts() {
            //     let base = new Decimal(100)
            //     let extras = Decimal.times(10,player.p.rAsc)
            //     let mag = this.maxAfford().max(1).log10().floor()
            //     let times = decimalZero
            //     if (mag.eq(2)) times = this.maxAfford().div(base).floor()
            //     let lvls = new Decimal(5).times(times.sub(1))
            //     if (times.gte(2)) times = this.maxAfford().div(Decimal.add(100,lvls)).floor()
            //     let boostAmt = decimalZero
            //     if (player.p.rAsc.gte(1)) boostAmt = Decimal.add(100,lvls)
            //     let dif = times.sub(player.p.rAsc).max(0)
            //     let rem = this.maxAfford()

            //     return dif
            // },

            realMax() {
                let max = this.maxAfford().min(player.p.rMax.sub(player.p.redBuyAmt))
                return max
            },

            buyMax() {
                player.p.TredBuyAmt = player.p.TredBuyAmt.add(this.realMax())
                player.p.redBuyAmt = player.p.redBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                // let cost = Decimal.pow(1.15,((this.bought()).div(3.6).pow(this.bought().div(590).pow(1.125).max(1)))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(100)
                // return cost 
                let cost = Decimal.pow(1.133,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal(1.798e306)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                //.pow(this.bought().div(951).pow(1.2).max(1))          ////Cost scaling
                //.pow(((this.bought()).div(20)).add(1)).times(this.bought())    ////between both .max(1)s
                return cost.times(100) 
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.orangeBuyAmt)+" / "+formatWhole(player.p.oMax)+"<br>"+"Mult: x"+format(((player.p.oBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13)), 3)
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
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.orangeBuyAmt = player.p.orangeBuyAmt.add(1)
                player.p.TorangeBuyAmt = player.p.TorangeBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.div(100).max(1)
                let cap = new Decimal(1.798e306)
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.133).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().add(this.bought())
                let cost = Decimal.pow(1.133,(amt.pow(1.3))).max(1)
                let cap = new Decimal(1.798e306)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(100)
            },

            realMax() {
                let max = this.maxAfford().min(player.p.oMax.sub(player.p.orangeBuyAmt))
                return max
            },

            buyMax() {
                player.p.TorangeBuyAmt = player.p.TorangeBuyAmt.add(this.realMax())
                player.p.orangeBuyAmt = player.p.orangeBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                //let cost = Decimal.pow(1.2,((this.bought()).div(3.2).pow(this.bought().div(484).pow(1.15).max(1)))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(2.5e3)
                let cost = Decimal.pow(1.167,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal(7.192e304)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(2.5e3) 
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.yellowBuyAmt)+" / "+formatWhole(player.p.yMax)+"<br>"+"Mult: x"+format(((player.p.yBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13)), 3)
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
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.yellowBuyAmt = player.p.yellowBuyAmt.add(1)
                player.p.TyellowBuyAmt = player.p.TyellowBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.div(2.5e3).max(1)
                let cap = new Decimal(7.192e304)
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.167).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().add(this.bought())
                let cost = Decimal.pow(1.167,(amt.pow(1.3))).max(1)
                let cap = new Decimal(7.192e304)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(2.5e3) 
            },

            realMax() {
                let max = this.maxAfford().min(player.p.yMax.sub(player.p.yellowBuyAmt))
                return max
            },

            buyMax() {
                player.p.yellowBuyAmt = player.p.yellowBuyAmt.add(this.realMax())
                player.p.TyellowBuyAmt = player.p.TyellowBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                //let cost = Decimal.pow(1.25,((this.bought()).div(2.8).pow(this.bought().div(406).pow(1.175).max(1)))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(1e5)
                let cost = Decimal.pow(1.2,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal(1.798e303)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(1e5) 
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.limeBuyAmt)+" / "+formatWhole(player.p.lMax)+"<br>"+"Mult: x"+format(((player.p.lBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13)), 3)
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
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.limeBuyAmt = player.p.limeBuyAmt.add(1)
                player.p.TlimeBuyAmt = player.p.TlimeBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.div(1e5).max(1)
                let cap = new Decimal(1.798e303)
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.2).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().add(this.bought())
                let cost = Decimal.pow(1.2,(amt.pow(1.3))).max(1)
                let cap = new Decimal(1.798e303)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(1e5)
            },

            realMax() {
                let max = this.maxAfford().min(player.p.lMax.sub(player.p.limeBuyAmt))
                return max
            },

            buyMax() {
                player.p.limeBuyAmt = player.p.limeBuyAmt.add(this.realMax())
                player.p.TlimeBuyAmt = player.p.TlimeBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                //let cost = Decimal.pow(1.3,((this.bought()).div(2.4).pow(this.bought().div(345).pow(1.2).max(1)))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(5e6)
                let cost = Decimal.pow(1.225,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal(3.596e301)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(5e6) 
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.greenBuyAmt)+" / "+formatWhole(player.p.gMax)+"<br>"+"Mult: x"+format(((player.p.gBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13)), 3)
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
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.greenBuyAmt = player.p.greenBuyAmt.add(1)
                player.p.TgreenBuyAmt = player.p.TgreenBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.div(5e6).max(1)
                let cap = new Decimal(3.596e301)
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.225).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().add(this.bought())
                let cost = Decimal.pow(1.225,(amt.pow(1.3))).max(1)
                let cap = new Decimal(3.596e301)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(5e6) 
            },

            realMax() {
                let max = this.maxAfford().min(player.p.gMax.sub(player.p.greenBuyAmt))
                return max
            },

            buyMax() {
                player.p.greenBuyAmt = player.p.greenBuyAmt.add(this.realMax())
                player.p.TgreenBuyAmt = player.p.TgreenBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                //let cost = Decimal.pow(1.35,((this.bought()).div(2).pow(this.bought().div(291).pow(1.225).max(1)))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(2.5e9)
                let cost = Decimal.pow(1.25,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal(7.192e298)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(2.5e9) 
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.cyanBuyAmt)+" / "+formatWhole(player.p.cMax)+"<br>"+"Mult: x"+format(((player.p.cBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13)), 3)
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
                if(inChallenge("chal",19)) return false
                if((player.p.cyanBuyAmt).gte(player.p.cMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.cyanBuyAmt = player.p.cyanBuyAmt.add(1)
                player.p.TcyanBuyAmt = player.p.TcyanBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.div(2.5e9).max(1)
                let cap = new Decimal(7.192e298)
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.25).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().add(this.bought())
                let cost = Decimal.pow(1.25,(amt.pow(1.3))).max(1)
                let cap = new Decimal(7.192e298)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(2.5e9) 
            },

            realMax() {
                let max = this.maxAfford().min(player.p.cMax.sub(player.p.cyanBuyAmt))
                return max
            },

            buyMax() {
                player.p.cyanBuyAmt = player.p.cyanBuyAmt.add(this.realMax())
                player.p.TcyanBuyAmt = player.p.TcyanBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                //let cost = Decimal.pow(1.4,((this.bought()).div(1.6).pow(this.bought().div(243).pow(1.25).max(1)))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(1e13)
                let cost = Decimal.pow(1.275,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal(1.798e295)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(1e13) 
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.blueBuyAmt)+" / "+formatWhole(player.p.bMax)+"<br>"+"Mult: x"+format(((player.p.bBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13)), 3)
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
                if(inChallenge("chal",19)) return false
                if((player.p.blueBuyAmt).gte(player.p.bMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.blueBuyAmt = player.p.blueBuyAmt.add(1)
                player.p.TblueBuyAmt = player.p.TblueBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.div(1e13).max(1)
                let cap = new Decimal(1.798e295)
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.275).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().add(this.bought())
                let cost = Decimal.pow(1.275,(amt.pow(1.3))).max(1)
                let cap = new Decimal(1.798e295)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(1e13) 
            },

            realMax() {
                let max = this.maxAfford().min(player.p.bMax.sub(player.p.blueBuyAmt))
                return max
            },

            buyMax() {
                player.p.blueBuyAmt = player.p.blueBuyAmt.add(this.realMax())
                player.p.TblueBuyAmt = player.p.TblueBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                //let cost = Decimal.pow(1.45,((this.bought()).div(1.2).pow(this.bought().div(196).pow(1.275).max(1)))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(5e18)
                let cost = Decimal.pow(1.3,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal(3.596e289)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(5e18) 
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.violetBuyAmt)+" / "+formatWhole(player.p.vMax)+"<br>"+"Mult: x"+format(((player.p.vBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13)), 3)
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
                if(inChallenge("chal",19)) return false
                if((player.p.violetBuyAmt).gte(player.p.vMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.violetBuyAmt = player.p.violetBuyAmt.add(1)
                player.p.TvioletBuyAmt = player.p.TvioletBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.div(5e18).max(1)
                let cap = new Decimal(3.596e289)
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.3).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().add(this.bought())
                let cost = Decimal.pow(1.3,(amt.pow(1.3))).max(1)
                let cap = new Decimal(3.596e289)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(5e18) 
            },

            realMax() {
                let max = this.maxAfford().min(player.p.vMax.sub(player.p.violetBuyAmt))
                return max
            },

            buyMax() {
                player.p.violetBuyAmt = player.p.violetBuyAmt.add(this.realMax())
                player.p.TvioletBuyAmt = player.p.TvioletBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                //let cost = Decimal.pow(1.45,((this.bought()).div(0.8).pow(this.bought().div(157).pow(1.3).max(1)))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(1e24)
                let cost = Decimal.pow(1.3125,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal(1.798e284)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(1e24) 
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.pinkBuyAmt)+" / "+formatWhole(player.p.pMax)+"<br>"+"Mult: x"+format(((player.p.pBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13)), 3)
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
                if(inChallenge("chal",19)) return false
                if((player.p.pinkBuyAmt).gte(player.p.pMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.pinkBuyAmt = player.p.pinkBuyAmt.add(1)
                player.p.TpinkBuyAmt = player.p.TpinkBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.div(1e24).max(1)
                let cap = new Decimal(1.798e284)
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.3125).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().add(this.bought())
                let cost = Decimal.pow(1.3125,(amt.pow(1.3))).max(1)
                let cap = new Decimal(1.798e284)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(1e24) 
            },

            realMax() {
                let max = this.maxAfford().min(player.p.pMax.sub(player.p.pinkBuyAmt))
                return max
            },

            buyMax() {
                player.p.pinkBuyAmt = player.p.pinkBuyAmt.add(this.realMax())
                player.p.TpinkBuyAmt = player.p.TpinkBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                //let cost = Decimal.pow(1.5,((this.bought()).div(0.5).pow(this.bought().div(114).pow(1.325).max(1)))).pow(((this.bought()).div(20)).add(1)).times(this.bought()).max(1).times(1e33)
                let cost = Decimal.pow(1.325,(this.bought().pow(1.3))).max(1)
                let cap = new Decimal(1.798e275)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(1e33) 
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
                let inf42 = decimalOne
                let ichal13 = decimalOne
                let chal13comp = decimalOne
                if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)
                if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)
                if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)
                return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.whiteBuyAmt)+" / "+formatWhole(player.p.wMax)+"<br>"+"Mult: x"+format(((player.p.wBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum)).times(player.inf.genmult).times(inf42).pow(ichal13)), 3)
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
                if(inChallenge("chal",19)) return false
                if((player.p.whiteBuyAmt).gte(player.p.wMax)) return false
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.whiteBuyAmt = player.p.whiteBuyAmt.add(1)
                player.p.TwhiteBuyAmt = player.p.TwhiteBuyAmt.add(1)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

            maxAfford() {
                let amount = player.points.div(1e33).max(1)
                let cap = new Decimal(1.798e275)
                let sc = player.p.costscaling
                
                amount = softcapBarsInverted(amount,cap,sc)
                return amount.log(1.325).root(1.3).floor().sub(this.bought()).add(1).max(0)
            },

            maxCost() {
                let amt = this.maxAfford().add(this.bought())
                let cost = Decimal.pow(1.325,(amt.pow(1.3))).max(1)
                let cap = new Decimal(1.798e275)
                let sc = player.p.costscaling
                cost = softcapBars(cost, cap, sc)
                return cost.times(1e33) 
            },

            realMax() {
                let max = this.maxAfford().min(player.p.wMax.sub(player.p.whiteBuyAmt))
                return max
            },

            buyMax() {
                player.p.whiteBuyAmt = player.p.whiteBuyAmt.add(this.realMax())
                player.p.TwhiteBuyAmt = player.p.TwhiteBuyAmt.add(this.realMax())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(this.realMax()))
                if(!hasChallenge("chal",17)) player.points = player.points.sub(this.maxCost()).max(0)
                if(inChallenge("chal",17)) player.p.chal17eff = new Decimal(1000)
            },

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
                let inf142 = decimalZero
                if(hasAchievement("a",22)) a22 = new Decimal(0.02)
                if(hasAchievement("a",33)) a33 = new Decimal(0.03)
                if(hasUpgrade("inf",142)) inf142 = new Decimal(0.1)
                return "<h2>(</h2>x<h3>"+format((player.p.multdisplay), 3)+"</h3><b><sup>"+format(((player.p.multExp).add(a22).add(a33).add(inf142)), 3)+"</sup></b><h2>)</h2><h3>   →   </h3><h2>(</h2>+ <h3>"+format(player.p.truedisplay, 3)+"</h3><h2>)</h2>"
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
                return (player.points.lt("1.8e308"))
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
                player.p.truepresamt = player.p.truepresamt.add(1)
            },
            unlocked(){
                return ((player.p.points.gte(1e6)) && (player.p.points.gte(player.p.prestotal)))
            },
            display(){
                let a22 = decimalZero
                let a33 = decimalZero
                let inf142 = decimalZero
                if(hasAchievement("a",22)) a22 = new Decimal(0.02)
                if(hasAchievement("a",33)) a33 = new Decimal(0.03)
                if(hasUpgrade("inf",142)) inf142 = new Decimal(0.1)
                return "<h2>Prestige</h2><br><br><b>Prestige exp: <sup>^</sup>" + format(((player.p.multExp).add(a22).add(a33).add(inf142)), 3) + " → <sup>^</sup>" + format(((player.p.presexp).add(a22).add(a33).add(inf142)), 3) + "<br><br><b>Prestige mult: x" + format((player.p.extraMult), 3) + " → x" + format((player.p.presmult), 3)
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
            canClick() {
                if(inChallenge("chal",19)) return false
                else return true
            },
            onClick() {
                ascend1()
                player.p.ascendAmt = player.p.ascendAmt.add(1)
            },
            unlocked(){
                return ((player.p.presmult.gte(1e3)) || (player.p.extraMult.gte(1e3)))
            },
            display(){
                if(inChallenge("chal",19)) return "<h2>Mult Ascension</h2><br><br>"+colorText("h3","red","DISABLED")
                return "<h2>Mult Ascension</h2><br><br><b>x" + formatWhole(player.p.baseMult) + " → x" + formatWhole(((player.p.ascendMult).mul(player.p.baseAscend)).max(player.p.baseMult))
            },
            style: {'height':'13%', 'width':'11%',
                "border":"3px solid",
                "border-radius":"5%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    if(inChallenge("chal",19)) return "rgba(75, 41, 41, 1)"
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
            canClick() {
                if(inChallenge("chal",19)) return false
                if(inChallenge("chal",17)) return false
                else return true
            },
            onClick() {
                ascend2()
                player.p.ascendAmt = player.p.ascendAmt.add(1)
            },
            unlocked(){
                return ((player.p.presmult.gte(1e3)) || (player.p.extraMult.gte(1e3)))
            },
            display(){
                if(inChallenge("chal",19)) return "<h2>Speed Ascension</h2><br><br>"+colorText("h3","red","DISABLED")
                if(inChallenge("chal",17)) return "<h2>Speed Ascension</h2><br><br>"+colorText("h3","red","DISABLED")
                return "<h2>Speed Ascension</h2><br><br><b>x" + format((player.p.baseSpeed), 3) + " → x" + format((((player.p.ascendSpeed).mul(player.p.baseAscend)).max(player.p.baseSpeed)), 3)
            },
            style: {'height':'13%', 'width':'11%',
                "border":"3px solid",
                "border-radius":"5%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    if(inChallenge("chal",19)) return "rgba(62, 75, 41, 1)"
                    if(inChallenge("chal",17)) return "rgba(62, 75, 41, 1)"
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
            canClick() {
                if(inChallenge("chal",19)) return false
                else return true
            },
            onClick() {
                ascend3()
                player.p.ascendAmt = player.p.ascendAmt.add(1)
            },
            unlocked(){
                return ((player.p.presmult.gte(1e3)) || (player.p.extraMult.gte(1e3)))
            },
            display(){
                if(inChallenge("chal",19)) return "<h2>Boost Ascension</h2><br><br>"+colorText("h3","red","DISABLED")
                let chalnerf = decimalOne
                if(inChallenge("chal",12)) chalnerf = new Decimal(0.2)
                return "<h2>Boost Ascension</h2><br><br><b>x" + formatWhole((player.p.baseBoost).times(10)) + " → x" + formatWhole(((player.p.ascendBoost)).times(10).max((player.p.baseBoost).times(10)))
            },
            style: {'height':'13%', 'width':'11%',
                "border":"3px solid",
                "border-radius":"5%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    if(inChallenge("chal",19)) return "rgba(41, 75, 73, 1)"
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
            canClick() {
                if(inChallenge("chal",19)) return false
                if(inChallenge("chal",11)) return false
                else return true
            },
            onClick() {
                ascend4()
                player.p.ascendAmt = player.p.ascendAmt.add(1)
            },
            unlocked(){
                return ((player.p.presmult.gte(1e3)) || (player.p.extraMult.gte(1e3)))
            },
            display(){
                if(inChallenge("chal",19)) return "<h2>Ascension Power</h2><br><br>"+colorText("h3","red","DISABLED")
                if(inChallenge("chal",11)) return "<h2>Ascension Power</h2><br><br>"+colorText("h3","red","DISABLED")
                return "<h2>Ascension Power</h2><br><br><b>x" + format((player.p.baseAscend), 3) + " → x" + format(((player.p.ascendPower).max(player.p.baseAscend)), 3)
            },
            style: {'height':'13%', 'width':'11%',
                "border":"3px solid",
                "border-radius":"5%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    if(inChallenge("chal",19)) return "rgba(66, 41, 75, 1)"
                    if(inChallenge("chal",11)) return "rgba(66, 41, 75, 1)"
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.redAscCost = player.p.redAscCost.add((player.p.rMax).sub(1))
                player.p.rAsc = player.p.rAsc.add(1)
                player.p.redBuyAmt = decimalOne
                player.p.rMax = player.p.rMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.orangeAscCost = player.p.orangeAscCost.add((player.p.oMax).sub(1))
                player.p.oAsc = player.p.oAsc.add(1)
                player.p.orangeBuyAmt = decimalOne
                player.p.oMax = player.p.oMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
            },
            unlocked(){
                return (player.p.orangeBuyAmt).gte(player.p.oMax)
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.yellowAscCost = player.p.yellowAscCost.add((player.p.yMax).sub(1))
                player.p.yAsc = player.p.yAsc.add(1)
                player.p.yellowBuyAmt = decimalOne
                player.p.yMax = player.p.yMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
            },
            unlocked(){
                return (player.p.yellowBuyAmt).gte(player.p.yMax)
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.limeAscCost = player.p.limeAscCost.add((player.p.lMax).sub(1))
                player.p.lAsc = player.p.lAsc.add(1)
                player.p.limeBuyAmt = decimalOne
                player.p.lMax = player.p.lMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
            },
            unlocked(){
                return (player.p.limeBuyAmt).gte(player.p.lMax)
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.greenAscCost = player.p.greenAscCost.add((player.p.gMax).sub(1))
                player.p.gAsc = player.p.gAsc.add(1)
                player.p.greenBuyAmt = decimalOne
                player.p.gMax = player.p.gMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
            },
            unlocked(){
                return (player.p.greenBuyAmt).gte(player.p.gMax)
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.cyanAscCost = player.p.cyanAscCost.add((player.p.cMax).sub(1))
                player.p.cAsc = player.p.cAsc.add(1)
                player.p.cyanBuyAmt = decimalOne
                player.p.cMax = player.p.cMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
            },
            unlocked(){
                return (player.p.cyanBuyAmt).gte(player.p.cMax)
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.blueAscCost = player.p.blueAscCost.add((player.p.bMax).sub(1))
                player.p.bAsc = player.p.bAsc.add(1)
                player.p.blueBuyAmt = decimalOne
                player.p.bMax = player.p.bMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
            },
            unlocked(){
                return (player.p.blueBuyAmt).gte(player.p.bMax)
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.violetAscCost = player.p.violetAscCost.add((player.p.vMax).sub(1))
                player.p.vAsc = player.p.vAsc.add(1)
                player.p.violetBuyAmt = decimalOne
                player.p.vMax = player.p.vMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
            },
            unlocked(){
                return (player.p.violetBuyAmt).gte(player.p.vMax)
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.pinkAscCost = player.p.pinkAscCost.add((player.p.pMax).sub(1))
                player.p.pAsc = player.p.pAsc.add(1)
                player.p.pinkBuyAmt = decimalOne
                player.p.pMax = player.p.pMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
            },
            unlocked(){
                return (player.p.pinkBuyAmt).gte(player.p.pMax)
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
            canClick() {
                if(inChallenge("chal",18)) return false
                else return true
            },
            onClick() {
                player.p.whiteAscCost = player.p.whiteAscCost.add((player.p.wMax).sub(1))
                player.p.wAsc = player.p.wAsc.add(1)
                player.p.whiteBuyAmt = decimalOne
                player.p.wMax = player.p.wMax.add(10)
                player.p.TAsc = player.p.TAsc.add(1)
            },
            unlocked(){
                return (player.p.whiteBuyAmt).gte(player.p.wMax)
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

        52: {
            canClick() {return false},
            unlocked(){
                let x = player.chal.activeChallenge
                if(inChallenge("chal",x)) return true
                return false
            },
            display(){
                let dis = "inactive"
                if(inChallenge("chal",11)) dis = "Infinity Challenge 1"
                if(inChallenge("chal",12)) dis = "Infinity Challenge 2"
                if(inChallenge("chal",13)) dis = "Infinity Challenge 3"
                if(inChallenge("chal",14)) dis = "Infinity Challenge 4"
                if(inChallenge("chal",15)) dis = "Infinity Challenge 5"
                if(inChallenge("chal",16)) dis = "Infinity Challenge 6"
                if(inChallenge("chal",17)) dis = "Infinity Challenge 7"
                if(inChallenge("chal",18)) dis = "Infinity Challenge 8"
                if(inChallenge("chal",19)) dis = "Infinity Challenge 9"
                return "<b>Currently in: "+dis
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
                "bottom":"15%",
                "top":"85%",
                "left":"0%",
                "right":"10%",
                "z-index":"10",
                "color":"#ff0000ff",
                "font-size":"24px"
            },
        },

        53: {
            canClick() {return false},
            unlocked(){
                let x = player.chal.activeChallenge
                if(inChallenge("chal",17)) return true
                return false
            },
            display(){
                let dis = format((new Decimal(100).div(player.p.chal17eff)),2)
                return "<b>All bars' speed and mults are at "+dis+"% efficiency"
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
                "bottom":"15%",
                "top":"77.5%",
                "left":"0%",
                "right":"10%",
                "z-index":"10",
                "color"(){
                    return "hsla("+String(new Decimal(100).div(player.p.chal17eff))+", 100%, 50%, 1.00)"
                },
                "transition":"instant",
                "font-size":"24px"
            },
        },

        54: {
            canClick() {return false},
            unlocked(){
                let x = player.chal.activeChallenge
                if(inChallenge("chal",18)) return true
                return false
            },
            display(){
                let dis = format((player.p.chal18eff),2)
                return "<b>Mult gain is being divided by "+dis
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
                "bottom":"15%",
                "top":"77.5%",
                "left":"0%",
                "right":"10%",
                "z-index":"10",
                "color"(){
                    return "hsla("+String((new Decimal(100).sub((player.p.chal18eff).pow(0.33))).max(0))+", 100%, 50%, 1.00)"
                },
                "transition":"instant",
                "font-size":"24px"
            },
        },

        // 55: {
        //     canClick() {return true},
        //     unlocked(){
        //         let x = player.points
        //         if (x.gte("1.8e308") && hasUpgrade("inf",111)) return true
        //         else return false
        //     },
        //     display(){
        //         let dis = "<b>Infinity for<br>"+format(IEgen(),2)+" IE"
        //         return dis
        //     },
        //     style: {'height':'15%', 'width':'24.6%',
        //         "border-radius":"0%",
        //         "border-color"(){
        //              return "darkviolet"
        //         }, 
        //         "background-color"(){
        //             return "rgba(0, 0, 0, 1)"
        //         },
        //         "position":"fixed",
        //         "bottom":"15%",
        //         "top":"12.8125%",
        //         "left":"0%",
        //         "right":"10%",
        //         "z-index":"10",
        //         "color"(){
        //             return "darkviolet"
        //         },
        //         "transition":"instant",
        //         "font-size":"20px"
        //     },
        // },

        55: {
            canClick() {return true},
            onClick() {
                infinity()
            },
            unlocked(){
                let x = player.points
                if (x.gte("1.8e308") && hasUpgrade("inf",111)) return true
                else return false
            },
            display(){
                let dis = "<b>Infinity for<br>"+format(IEgen(),2)+" IE"
                return dis
            },
            style: {'height':'6.25%', 'width':'12.5%',
                "border-radius":"0%",
                "border-color"(){
                     return "darkviolet"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 1)"
                },
                "position":"fixed",
                "bottom":"15%",
                "top":"85%",
                "left":"0%",
                "right":"10%",
                "z-index":"10",
                "color"(){
                    return "#af24ffff"
                },
                "transition":"instant",
                "font-size":"18px"
            },
        },

        56: {
            canClick() {return false},
            unlocked(){
                return ((player.points.gte("1.8e308")) && (player.inf.infenergy.lt("1e1000")))
            },
            display(){
                return "<b>Progress to Eternity: "+format(((player.inf.infenergy).max(1).log10().div(10).min(100)), 2)+"%"
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
                "z-index":"5",
                "color":"#ffffffff",
                "font-size":"16px"
            },
        },

        // 61: {
        //     canClick() {return true},
        //     onClick() {
        //         if (getClickableState("p",61) == 0) return setClickableState("p",61,1)
        //         if (getClickableState("p",61) == 1) return setClickableState("p",61,0)
        //     },
        //     unlocked(){
        //         if (hasUpgrade("inf",111)) return true
        //         else return false
        //     },
        //     display(){
        //         let hideshow = getClickableState("p",61)
        //         let dis = ((hideshow == 1)?"<b>Show Infinity button":"<b>Hide Infinity button")
        //         return dis
        //     },
        //     style: {'height':'5%', 'width':'7.5%',
        //         "border-radius":"0%",
        //         "border-color"(){
        //              return "white"
        //         }, 
        //         "background-color"(){
        //             return "rgba(99, 99, 99, 1)"
        //         },
        //         "position":"fixed",
        //         "bottom":"15%",
        //         "top":"90%",
        //         "left":"60%",
        //         "right":"10%",
        //         "z-index":"10",
        //         "color"(){
        //             return "white"
        //         },
        //         "transition":"instant",
        //         "font-size":"16px"
        //     },
        // },

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
            unlocked() {return player.points.lt("1.8e308")},
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

        eterBar: {
            direction: RIGHT,
            width: 40,
            height: 2,
            progress() {
                return (player.inf.infenergy).max(1).log10().div(1000).min(1)
            },
            display() {
                return ""
            },
            instant() {return true},
            unlocked() {return (player.inf.infenergy.lt("1e1000")) && (player.points.gte("1.8e308"))},
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

        player.p.infTime = player.p.infTime.add(diff)

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

        let a63 = decimalOne
        if(hasAchievement("a",63)) a63 = new Decimal(1.2)

        let inf31 = decimalOne
        if(hasUpgrade("inf",31)) inf31 = new Decimal(1.3)

        let inf41 = decimalOne
        if(hasUpgrade("inf",41)) inf41 = new Decimal(1.5)

        let inf42 = decimalOne
        if(hasUpgrade("inf",42)) inf42 = upgradeEffect("inf",42)

        let inf61 = decimalOne
        if(hasUpgrade("inf",61)) inf61 = upgradeEffect("inf",61)

        let inf62 = decimalOne
        if(hasUpgrade("inf",62)) inf62 = upgradeEffect("inf",62)

        let inf83 = decimalOne
        if(hasUpgrade("inf",83)) inf83 = upgradeEffect("inf",83)

        let inf91 = decimalOne
        if(hasUpgrade("inf",91)) inf91 = new Decimal(3)

        let inf142 = decimalZero
        if(hasUpgrade("inf",142)) inf142 = new Decimal(0.1)

        let inf143 = decimalOne
        if(hasUpgrade("inf",143)) inf143 = new Decimal(2.5)

        let inf151 = decimalOne
        if(hasUpgrade("inf",151)) inf151 = upgradeEffect("inf",151)

        let inf171 = decimalOne
        if(hasUpgrade("inf",171)) inf171 = upgradeEffect("inf",171)

        let chal11comp = decimalOne
        if(hasChallenge("chal",11)) chal11comp = new Decimal(1.05)

        let ichal13 = decimalOne
        if(inChallenge("chal",13)) ichal13 = new Decimal(2/3)

        let chal13comp = decimalOne
        if(hasChallenge("chal",13)) chal13comp = new Decimal(1.05)

        let chal14eff = decimalOne
        if(inChallenge("chal",14)) chal14eff = decimalOne.div(((player.points).max(2).log2()).pow(0.075))
        if((hasChallenge("chal",14)) && (!inChallenge("chal",14))) chal14eff = (((player.points).max(10).log10()).pow(0.05))

        let chal15rew = decimalOne
        if(inChallenge("chal",15)) {
            player.p.ascendMult = (player.p.maxMult).div(250).max(1).pow(0.45).floor().max(1).log2().pow(2.625).floor().times(1.5).add(2).log10().mul(player.p.baseAscend)
            player.p.ascendSpeed = (player.p.maxMult).div(250).max(1).pow(0.25).floor().div(2).max(1).log2().pow(1.75).max(1).add(1).log10().mul(player.p.baseAscend)
            player.p.ascendBoost = (player.p.maxMult).div(5e3).max(1).pow(0.225).floor().pow(0.12).max(1).log10().times(10).round().div(10).add(1.2).times(10).log10().mul(player.p.baseAscend).mul(boostPower()).mul(player.p.infchallenge12).max(0.1)
            player.p.ascendPower = (player.p.maxMult).max(1).log10().pow(0.075).max(1).times(a41).log10().times(chal11comp)
        }
        if((hasChallenge("chal",15)) && (!inChallenge("chal",15))) chal15rew = new Decimal(1.25)

        player.p.presexp = (player.p.points).div(1e4).max(1).log10().max(1).pow(0.042).add(a22).add(a33).add(inf142).pow(chal14eff).times(a63).pow(decimalOne.div((player.p.points.div(1.798).max(1).log10().div(308).max(1).pow(0.01))))
        player.p.presmult = ((player.p.points).div(1e6).pow(0.4).max(1).pow(0.7).times(2).times(a13).times(inf62).times(inf171).pow(chal14eff)).pow(decimalOne.div((player.p.points.div(1.798).max(1).log10().div(308).max(1).pow(0.1))))

        player.p.multdisplay = (player.p.addEnergy).add(0.01)
        player.p.truedisplay = (player.p.multdisplay).pow((player.p.multExp).add(a22).add(a33).add(inf142))

        player.p.maxMult = (player.p.presmult).max(player.p.extraMult)

        let ascM = new Decimal(0.45)
        let ascS = new Decimal(0.25)
        let ascB = new Decimal(0.225)
        let ascP = new Decimal(0.075)

        if(hasChallenge("chal",19)){
            ascM = new Decimal(0.5)
            ascS = new Decimal(0.3)
            ascB = new Decimal(0.25)
            ascP = new Decimal(0.1)
        }

        if(!inChallenge("chal",15)){
        player.p.ascendMult = (player.p.maxMult).div(250).max(1).pow(ascM).floor().max(1).log2().pow(2.625).floor().times(1.5).add(2).pow(chal15rew).pow(player.inf.collupg3power).mul(player.p.baseAscend)
        player.p.ascendSpeed = (player.p.maxMult).div(250).max(1).pow(ascS).floor().div(2).max(1).log2().pow(1.75).max(1).add(1).pow(chal15rew).pow(player.inf.collupg3power).mul(player.p.baseAscend)
        player.p.ascendBoost = (player.p.maxMult).div(5e3).max(1).pow(ascB).floor().pow(0.12).max(1).log10().times(10).round().div(10).add(1.2).times(10).pow(chal15rew).pow(player.inf.collupg3power).mul(player.p.baseAscend).mul(boostPower()).mul(player.p.infchallenge12).max(0.1)
        player.p.ascendPower = (player.p.maxMult).max(1).log10().pow(ascP).max(1).times(a41).pow(chal15rew).times(chal11comp).pow(player.inf.collupg3power)
        }

        let chal16Reff = decimalOne
        let chal16Oeff = decimalOne
        let chal16Yeff = decimalOne
        let chal16Leff = decimalOne
        let chal16Geff = decimalOne
        let chal16Ceff = decimalOne
        let chal16Beff = decimalOne
        let chal16Veff = decimalOne
        let chal16Peff = decimalOne
        let chal16Weff = decimalOne

        if(inChallenge("chal",16)){
            chal16Reff = decimalOne.div((player.p.redSpd).pow(2))
            chal16Oeff = decimalOne.div((player.p.orangeSpd).pow(2))
            chal16Yeff = decimalOne.div((player.p.yellowSpd).pow(2))
            chal16Leff = decimalOne.div((player.p.limeSpd).pow(2))
            chal16Geff = decimalOne.div((player.p.greenSpd).pow(2))
            chal16Ceff = decimalOne.div((player.p.cyanSpd).pow(2))
            chal16Beff = decimalOne.div((player.p.blueSpd).pow(2))
            chal16Veff = decimalOne.div((player.p.violetSpd).pow(2))
            chal16Peff = decimalOne.div((player.p.pinkSpd).pow(2))
            chal16Weff = decimalOne.div((player.p.whiteSpd).pow(2))
        }

        if((hasChallenge("chal",16)) && (!inChallenge("chal",16))){
            chal16Reff = (player.p.redSpd).pow(0.5)
            chal16Oeff = (player.p.orangeSpd).pow(0.5)
            chal16Yeff = (player.p.yellowSpd).pow(0.5)
            chal16Leff = (player.p.limeSpd).pow(0.5)
            chal16Geff = (player.p.greenSpd).pow(0.5)
            chal16Ceff = (player.p.cyanSpd).pow(0.5)
            chal16Beff = (player.p.blueSpd).pow(0.5)
            chal16Veff = (player.p.violetSpd).pow(0.5)
            chal16Peff = (player.p.pinkSpd).pow(0.5)
            chal16Weff = (player.p.whiteSpd).pow(0.5)
        }

        if(inChallenge("chal",17)) player.p.chal17eff = player.p.chal17eff.sub(player.p.chal17eff.log10().div(new Decimal(1000).div(player.p.chal17eff))).max(1)
        if(!inChallenge("chal",17)) player.p.chal17eff = decimalOne

        if(inChallenge("chal",18)){
            player.p.rMax = new Decimal(5)
            player.p.oMax = new Decimal(5)
            player.p.yMax = new Decimal(5)
            player.p.lMax = new Decimal(5)
            player.p.gMax = new Decimal(5)
            player.p.cMax = new Decimal(5)
            player.p.bMax = new Decimal(5)
            player.p.vMax = new Decimal(5)
            player.p.pMax = new Decimal(5)
            player.p.wMax = new Decimal(5)

            player.p.chal18eff = player.p.chal18eff.times(1.01)
        }
        if(!inChallenge("chal",18)) player.p.chal18eff = decimalOne
        

        while(player.p.ascboostcheck = false) player.p.baseBoost = decimalOne.times(boostPower())

        if(inChallenge("chal",11)) player.p.ascendPower = decimalOne
        if(inChallenge("chal",12)) player.p.infchallenge12 = new Decimal(0.2)
        if(inChallenge("chal",17)) player.p.baseSpeed = decimalOne
        if(inChallenge("chal",19)){
            player.p.baseMult = decimalOne
            player.p.baseSpeed = decimalOne
            player.p.baseBoost = decimalOne
            player.p.baseAscend = decimalOne
        }
        

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

        player.p.redSpd = new Decimal(1/2).add((player.p.redBuyAmt).div(10)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)
        player.p.orangeSpd = new Decimal(1/4).add((player.p.orangeBuyAmt).div(20)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)
        player.p.yellowSpd = new Decimal(1/6).add((player.p.yellowBuyAmt).div(30)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)
        player.p.limeSpd = new Decimal(1/8).add((player.p.limeBuyAmt).div(40)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)
        player.p.greenSpd = new Decimal(1/10).add((player.p.greenBuyAmt).div(50)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)
        player.p.cyanSpd = new Decimal(1/12).add((player.p.cyanBuyAmt).div(60)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)
        player.p.blueSpd = new Decimal(1/14).add((player.p.blueBuyAmt).div(70)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)
        player.p.violetSpd = new Decimal(1/16).add((player.p.violetBuyAmt).div(80)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)
        player.p.pinkSpd = new Decimal(1/18).add((player.p.pinkBuyAmt).div(90)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)
        player.p.whiteSpd = new Decimal(1/20).add((player.p.whiteBuyAmt).div(100)).times(player.p.baseSpeed).times(a32).times(inf31).times(inf61).times(inf91).times(inf143).div(player.p.chal17eff)

        player.p.rProg = player.p.rProg.add((player.p.redSpd).div(30)).min(1.01)
        if(player.p.rProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.rTimes = player.p.rTimes.add(1)
            player.p.rMult = player.p.rMult.add(((player.p.rBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.rAsc)))).times(tmp.a.effect).times((player.p.redSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Reff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.rProg = decimalZero
        }

        if((player.p.orangeBuyAmt).gte(1)) player.p.oProg = player.p.oProg.add((player.p.orangeSpd).div(30)).min(1.01)
        if(player.p.oProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.oTimes = player.p.oTimes.add(1)
            player.p.oMult = player.p.oMult.add(((player.p.oBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.oAsc)))).times(tmp.a.effect).times((player.p.orangeSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Oeff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.oProg = decimalZero
        }

        if((player.p.yellowBuyAmt).gte(1)) player.p.yProg = player.p.yProg.add((player.p.yellowSpd).div(30)).min(1.01)
        if(player.p.yProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.yTimes = player.p.yTimes.add(1)
            player.p.yMult = player.p.yMult.add(((player.p.yBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.yAsc)))).times(tmp.a.effect).times((player.p.yellowSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Yeff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.yProg = decimalZero
        }

        if((player.p.limeBuyAmt).gte(1)) player.p.lProg = player.p.lProg.add((player.p.limeSpd).div(30)).min(1.01)
        if(player.p.lProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.lTimes = player.p.lTimes.add(1)
            player.p.lMult = player.p.lMult.add(((player.p.lBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.lAsc)))).times(tmp.a.effect).times((player.p.limeSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Leff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.lProg = decimalZero
        }

        if((player.p.greenBuyAmt).gte(1)) player.p.gProg = player.p.gProg.add((player.p.greenSpd).div(30)).min(1.01)
        if(player.p.gProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.gTimes = player.p.gTimes.add(1)
            player.p.gMult = player.p.gMult.add(((player.p.gBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.gAsc)))).times(tmp.a.effect).times((player.p.greenSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Geff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.gProg = decimalZero
        }

        if((player.p.cyanBuyAmt).gte(1)) player.p.cProg = player.p.cProg.add((player.p.cyanSpd).div(30)).min(1.01)
        if(player.p.cProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.cTimes = player.p.cTimes.add(1)
            player.p.cMult = player.p.cMult.add(((player.p.cBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.cAsc)))).times(tmp.a.effect).times((player.p.cyanSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Ceff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.cProg = decimalZero
        }

        if((player.p.blueBuyAmt).gte(1)) player.p.bProg = player.p.bProg.add((player.p.blueSpd).div(30)).min(1.01)
        if(player.p.bProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.bTimes = player.p.bTimes.add(1)
            player.p.bMult = player.p.bMult.add(((player.p.bBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.bAsc)))).times(tmp.a.effect).times((player.p.blueSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Beff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.bProg = decimalZero
        }

        if((player.p.violetBuyAmt).gte(1)) player.p.vProg = player.p.vProg.add((player.p.violetSpd).div(30)).min(1.01)
        if(player.p.vProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.vTimes = player.p.vTimes.add(1)
            player.p.vMult = player.p.vMult.add(((player.p.vBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.vAsc)))).times(tmp.a.effect).times((player.p.violetSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Veff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.vProg = decimalZero
        }

        if((player.p.pinkBuyAmt).gte(1)) player.p.pProg = player.p.pProg.add((player.p.pinkSpd).div(30)).min(1.01)
        if(player.p.pProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.pTimes = player.p.pTimes.add(1)
            player.p.pMult = player.p.pMult.add(((player.p.pBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.pAsc)))).times(tmp.a.effect).times((player.p.pinkSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Peff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.pProg = decimalZero
        }

        if((player.p.whiteBuyAmt).gte(1)) player.p.wProg = player.p.wProg.add((player.p.whiteSpd).div(30)).min(1.01)
        if(player.p.wProg >= 1) {
            player.p.addEnergy = decimalOne.times(player.p.rMult).times(player.p.oMult).times(player.p.yMult).times(player.p.lMult).times(player.p.gMult).times(player.p.cMult).times(player.p.bMult).times(player.p.vMult).times(player.p.pMult).times(player.p.wMult).times(player.p.extraMult)
            player.points = player.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.points = player.p.points.add((player.p.addEnergy).pow((player.p.multExp).add(a22).add(a33)))
            player.p.wTimes = player.p.wTimes.add(1)
            player.p.wMult = player.p.wMult.add(((player.p.wBaseMult).times(Decimal.pow(((player.p.baseBoost).times(10)),(player.p.wAsc)))).times(tmp.a.effect).times((player.p.whiteSpd).div(100/3).max(1)).times(player.p.baseMult).times(player.inf.genmult).times(inf42).pow(ichal13).pow(chal13comp).times(inf83).times(inf151).times(chal16Weff).div(player.p.chal17eff).div(player.p.chal18eff))
            player.p.wProg = decimalZero
        }



        if(player.points.gte("1.798e308") && !hasUpgrade("inf",111)) {
            player.points = player.points.min("1.798e308")
            player.p.addEnergy = player.p.addEnergy.min("1.798e308")
            player.p.truedisplay = player.p.truedisplay.min("1.798e308")
            if(!inChallenge("chal",11) && !inChallenge("chal",12) && !inChallenge("chal",13) && !inChallenge("chal",14) && !inChallenge("chal",15) && !inChallenge("chal",16) && !inChallenge("chal",17) && !inChallenge("chal",18) && !inChallenge("chal",19)) infinity()
        }
        if((player.p.points.gte("1.798e308")) && (!hasUpgrade("inf",111))) player.p.points = player.p.points.min("1.798e308")
    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer)}
    },
})