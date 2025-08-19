addLayer("inf", {
    name: "nfnt", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "∞ Infinity", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: decimalZero,
        total: decimalZero,
        best: decimalZero,
        infinities: decimalZero,
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
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "infps", // Name of prestige currency
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
        "Main" :{
            content: [
                ["raw-html",
                    function(){
                        return rainbowText("h1","Coming Soon™!<br><br><br><br>For now, you can go play Revolution Idle on Steam!!<br><br>(It's peak)")
                    }
                ],
                "blank",
                ["clickables",1],
                ["clickable",999]
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
                    return "18px"
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
                return "<b>"+(format(player.inf.points, 2) + " IE")
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
                    return "18px"
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

    },

    update(diff){
        
    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer)}
    },
})