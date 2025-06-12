addLayer("p", {
    name: "parts", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Particles", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: decimalZero,
        total: decimalZero,
        best: decimalZero,
        gen: decimalZero,
        boost: decimalZero,
        charger: decimalZero,
        accel: decimalZero,
        power: decimalZero,
        level: decimalZero,
        od: decimalZero,
        hm: decimalZero,
        asc: decimalZero,
    }},
    color: "#ffffff",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color":"black",
        "background-position":"center",
        "border-size":"10px",
        "border-color":"rgb(250, 34, 34)",
        "color":"white",
        "font-size":"20px",
        }
    },
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "quarks", // Name of prestige currency
    baseResource: "particles", // Name of resource prestige is based on
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
        {key: "1", description: "1: Buy Particle Generator", onPress(){if (canBuyBuyable("p",11)) buyBuyable("p",11)}},
        {key: "2", description: "2: Buy Particle Booster", onPress(){if (canBuyBuyable("p",12)) buyBuyable("p",12)}},
        {key: "3", description: "3: Buy Particle Charger", onPress(){if (canBuyBuyable("p",13)) buyBuyable("p",13)}},
        {key: "p", description: "P: Power Up", onPress(){if (canBuyBuyable("p",31)) buyBuyable("p",31)}},
        {key: "l", description: "L: Level Up", onPress(){if (canBuyBuyable("p",32)) buyBuyable("p",32)}},
        {key: "o", description: "O: Overdrive", onPress(){if (canBuyBuyable("p",33)) buyBuyable("p",33)}},
        {key: "h", description: "H: Hypermode", onPress(){if (canBuyBuyable("p",34)) buyBuyable("p",34)}},
        {key: "a", description: "A: Ascend", onPress(){if (canBuyBuyable("p",35)) buyBuyable("p",35)}},
    ],
    shouldNotify: false,
    layerShown(){return true},
    tabFormat: {
        "Main" :{
            content: [
                ["raw-html",
                    function(){
                        return "<b>Buy 50 multipliers: [x2.0] / [x1.5] / [x1.1]"
                    }
                ],
                "blank",
                ["row",[
                    ["column",[
                        ["raw-html",
                            function(){
                                let ex = ")"
                                //let amt = (player.p.boost).div(10).floor()
                                //if(hasUpgrade("p",22)) ex = " + "+amt+")"
                                return "<b>Particle Generator ("+formatWhole(tmp.p.buyables[11].effect)+ex
                            }
                        ],
                        ["blank",["60px","60px"]],
                        ["raw-html",
                            function(){
                                let ex = ")"
                                //let amt = (player.p.charger).div(3).floor()
                                //if(hasUpgrade("p",31)) ex = " + "+amt+")"
                                return "<b>Particle Booster ("+formatWhole(tmp.p.buyables[12].effect)+ex
                            }
                        ],
                        ["blank",["60px","60px"]],
                        ["raw-html",
                            function(){
                                return "<b>Particle Charger ("+formatWhole(player.p.buyables[13])+")"
                            }
                        ]
                    ]],
                    ["blank",["60px","100px"]],
                    ["column",[
                        ["buyable",[11]],
                        ["blank",["60px","20px"]],
                        ["buyable",[12]],
                        ["blank",["60px","20px"]],
                        ["buyable",[13]]
                    ]],
                    ["blank",["16px","16px"]],
                    ["column",[
                        ["clickable",[11]],
                        ["blank",["60px","20px"]],
                        ["clickable",[12]],
                        ["blank",["60px","20px"]],
                        ["clickable",[13]]
                    ]],
                    // ["blank",["60px","100px"]],
                    // ["column",[
                    //     ["raw-html",
                    //         function(){
                    //             let bstmult = new Decimal(1.5)
                    //             if(hasUpgrade("p",14)) bstmult = bstmult.times(2)
                    //             let mult1 = Decimal.pow((bstmult),(player.p.boost))
                    //             let mult2 = (Decimal.pow((Decimal.pow((2.5),player.p.power)),(Decimal.pow((1.3),(player.p.level)))))
                    //             let mult3 = Decimal.pow((1.13),(player.p.charger))
                    //             let totalmult = ((mult1.times(mult2)).pow(mult3)).pow(tmp.a.effect)
                    //             if(hasUpgrade("p",11)) totalmult = totalmult.times(2)
                    //             return "<b>Mult: x"+format(totalmult, 2)
                    //         }
                    //     ],
                    //     ["blank",["60px","60px"]],
                    //     ["raw-html",
                    //         function(){
                    //             let mult1 = Decimal.pow(2,((player.p.boost).div(50).floor()))
                    //             let totalmult = mult1
                    //             if(hasUpgrade("p",14)) totalmult = totalmult.times(2)
                    //             return "<b>Mult: x"+format(totalmult, 2)
                    //         }
                    //     ],
                    //     ["blank",["60px","60px"]],
                    //     ["raw-html",
                    //         function(){
                    //             let mult1 = Decimal.pow(1.2,((player.p.charger).div(50).floor()))
                    //             let totalmult = mult1
                    //             return "<b>Mult: x"+format(totalmult, 2)
                    //         }
                    //     ]
                    // ]],
                    ["blank",["60px","100px"]],
                    ["column",[
                        ["raw-html",
                            function(){
                                let genbought = formatWhole((player.p.gen)%50) + " / 50</b>"
                                return "<b>Bought: "+genbought
                            }
                        ],
                        ["blank",["60px","60px"]],
                        ["raw-html",
                            function(){
                                let boostbought = formatWhole((player.p.boost)%50) + " / 50</b>"
                                return "<b>Bought: "+boostbought
                            }
                        ],
                        ["blank",["60px","60px"]],
                        ["raw-html",
                            function(){
                                let chargerbought = formatWhole((player.p.charger)%50) + " / 50</b>"
                                return "<b>Bought: "+chargerbought
                            }
                        ]
                    ]],
                    ["blank",["60px","100px"]],
                    ["column",[
                        ["raw-html",
                            function(){
                                let genbought = "("+formatWhole(player.p.gen)+")"
                                return "<b>"+genbought
                            }
                        ],
                        ["blank",["60px","60px"]],
                        ["raw-html",
                            function(){
                                let boostbought = "("+formatWhole(player.p.boost)+")"
                                return "<b>"+boostbought
                            }
                        ],
                        ["blank",["60px","60px"]],
                        ["raw-html",
                            function(){
                                let chargerbought = "("+formatWhole(player.p.charger)+")"
                                return "<b>"+chargerbought
                            }
                        ]
                    ]]
                ]
            ],
            ["row",[
                ["clickable",[25]],
                ["buyable",[35]],
                ["buyable",[31]],
                ["buyable",[32]],
                ["buyable",[33]],
                ["buyable",[34]],
                ["clickable",[21]],
                ["clickable",[22]],
                ["clickable",[23]],
                ["clickable",[24]]
            ]]
        ],
        buttonStyle: {
            "border-radius":"0%"
        },
        },
        "Upgrades" :{
            content: [
            "blank",
            ["row",[
            ["column",[
                    ["upgrade",[11]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>250 particles"
                        }
                    ],
                    ["blank",["60px","60px"]],
                    ["upgrade",[21]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>5e16 particles"
                        }
                    ],
                    ["blank",["60px","60px"]],
                    ["upgrade",[31]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>1.33e133 particles"
                        }
                    ],
                ]
            ],
            ["blank",["60px","100px"]],
            ["column",[
                    ["upgrade",[12]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>2500 particles"
                        }
                    ],
                    ["blank",["60px","60px"]],
                    ["upgrade",[22]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>3.6e36 particles"
                        }
                    ],
                    ["blank",["60px","60px"]],
                    ["upgrade",[32]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>2.5e151 particles"
                        }
                    ],
                ]
            ],
            ["blank",["60px","100px"]],
            ["column",[
                    ["upgrade",[13]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>500,000 particles"
                        }
                    ],
                    ["blank",["60px","60px"]],
                    ["upgrade",[23]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>3.5e74 particles"
                        }
                    ],
                    ["blank",["60px","60px"]],
                    ["upgrade",[33]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>2.82e282 particles"
                        }
                    ],
                ]
            ],
            ["blank",["60px","100px"]],
            ["column",[
                    ["upgrade",[14]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>20,000,000 particles"
                        }
                    ],
                    ["blank",["60px","60px"]],
                    ["upgrade",[24]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>5e100 particles"
                        }
                    ],
                    ["blank",["60px","60px"]],
                    ["upgrade",[34]],
                    ["raw-html",
                        function(){
                            return "<br><h3>Cost:</h3><br><b>1.798e308 particles"
                        }
                    ],
                ]
            ],
        ]
        ]
        ],
        buttonStyle: {
            "border-radius":"0%"
        },
        }
    },

    buyables: {
        
        11: {
            cost() { 
                let cost = Decimal.pow(10,(new Decimal(1.138).pow(player.p.gen)))
                if (hasUpgrade("p",32)) cost = cost.pow(1/3).max(1)
                if (hasUpgrade("asc",45)) cost = cost.pow(1/111)
                return cost.round()
            },
            bought() {
                let b = player.p.gen
                return b
            },
            extra(){
                let ex = decimalZero
                let divamt = new Decimal(10)
                if(hasUpgrade("asc",31)) divamt = new Decimal(5)
                if(hasUpgrade("p",22)) ex = (player.p.boost).div(divamt).floor()
                return ex
            },
            effect(){
                let eff = player.p.buyables[11]
                if(hasUpgrade("p",22)) eff = eff.add(this.extra())
                return eff
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[11].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let dis = ""
                let costdis = " particle"
                if(this.cost != decimalOne) costdis = " particles"
                return dis + "<h2>\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasUpgrade("asc",12)) {player.points = player.points.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.gen = player.p.gen.add(1)
            },

            buyMax() {
                buyBuyable("p",11)
            },

            unlocked() { return true }, 
            style: {'height':'60px', 'width':'400px',
                "border-radius"(){
                    return "0%"
                },
                "border-color":"white",
                "background-color"(){
                    let a = "black"
                    let b = "rgba(255, 0, 0, 0.75)"
                    return (tmp.p.buyables[11].canAfford)?b:a
                },
                "color":"white",
                "text-shadow":"0 0 3px black"
            },
        },

        12: {
            cost() { 
                let cost = Decimal.pow(10,(new Decimal(1.235).pow(player.p.boost))).mul(500)
                if ((player.p.boost).gte(20)) cost = cost.pow(Decimal.pow((1.02),((player.p.boost).sub(9))))
                if (hasUpgrade("asc",45)) cost = cost.pow(1/5)
                return cost.round()
            },
            bought() {
                let b = player.p.boost
                return b
            },
            extra(){
                let ex = decimalZero
                if(hasUpgrade("p",31)) ex = (player.p.charger).div(3).floor()
                return ex
            },
            effect(){
                let eff = player.p.buyables[12]
                if(hasUpgrade("p",31)) eff = eff.add(this.extra())
                return eff
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[12].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let dis = ""
                let costdis = " particle"
                if(this.cost != decimalOne) costdis = " particles"
                return dis + "<h2>\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasUpgrade("asc",12)) {player.points = player.points.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.boost = player.p.boost.add(1)
            },

            buyMax() {
                buyBuyable("p",12)
            },

            unlocked() { return true }, 
            style: {'height':'60px', 'width':'400px',
                "border-radius"(){
                    return "0%"
                },
                "border-color":"white",
                "background-color"(){
                    let a = "black"
                    let b = "rgba(255, 123, 0, 0.75)"
                    return (tmp.p.buyables[12].canAfford)?b:a
                },
                "color":"white",
                "text-shadow":"0 0 3px black"
            },
        },

        13: {
            cost() { 
                let cost = Decimal.pow(10,(new Decimal(1.515).pow(player.p.charger))).mul(1e12)
                if ((player.p.charger).gte(20)) cost = cost.pow(Decimal.pow((1.02),((player.p.charger).sub(9))))
                if (hasUpgrade("asc",45)) cost = cost.pow(3/7)
                return cost.round()
            },
            bought() {
                let b = player.p.charger
                return b
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[13].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let dis = ""
                let costdis = " particle"
                if(this.cost != decimalOne) costdis = " particles"
                return dis + "<h2>\
                Cost: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasUpgrade("asc",12)) {player.points = player.points.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.charger = player.p.charger.add(1)
            },

            buyMax() {
                buyBuyable("p",13)
            },

            unlocked() { return true }, 
            style: {'height':'60px', 'width':'400px',
                "border-radius"(){
                    return "0%"
                },
                "border-color":"white",
                "background-color"(){
                    let a = "black"
                    let b = "rgba(255, 238, 0, 0.75)"
                    return (tmp.p.buyables[13].canAfford)?b:a
                },
                "color":"white",
                "text-shadow":"0 0 3px black"
            },
        },



        31: {
            cost() { 
                let cost = Decimal.pow(1.195,(player.p.power)).mul(8)
                let cred = new Decimal(4/3)
                if (hasUpgrade("asc",28)) cred = new Decimal(2)
                if (hasUpgrade("p",32)) cost = cost.div(cred)
                if (hasUpgrade("asc",46)) cost = cost.pow(0.4125)
                if (hasUpgrade("asc",53)) cost = cost.div(getAscUpg53Effect())
                if (hasUpgrade("asc",54)) cost = cost.pow(0.9)
                if (getTrialComps() >= 6) cost = cost.div(fourthAscReward())
                return cost.round()
            },
            bought() {
                let b = player.p.power
                return b
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[31].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let odmult = new Decimal(1.5)
                if(player.p.buyables[34] > 0) odmult = odmult.pow(Decimal.pow((1.5),(player.p.hm)))
                let levelmult = new Decimal(1.3).times(Decimal.pow((odmult),(player.p.od)))
                let powermult = new Decimal(2.5).times(Decimal.pow((levelmult),(player.p.level)))
                if(getTrialComps() >= 2) powermult = powermult.times(secondAscReward())
                let dis = "<h1>Power Up</h1><br><br><h2>(" + formatWhole(player.p.power) + ")\n"
                let costdis = " Generators"
                return dis + "<h3>Reset particles and generators, but generators are x" + format(powermult,1) + " stronger\n\n\
                Req: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if((tmp.p.buyables[11].effect).gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasUpgrade("asc",13)){
                player.p.buyables[11] = decimalOne
                player.p.gen = decimalOne
                player.points = decimalZero
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.power = player.p.power.add(1)
            },

            buyMax() {
                buyBuyable("p",31)
            },

            unlocked() { return hasUpgrade("p",12) }, 
            style: {'height':'140px', 'width':'320px',
                "color"(){
                    return (tmp.p.buyables[31].canAfford)?"black":"white"
                },
                "border-radius"(){
                    return "0%"
                },
                "border-color":"white",
                "background"(){
                    let a = "black"
                    let b = "rgba(0, 255, 13, 0.75)"
                    return (tmp.p.buyables[31].canAfford)?b:a
                },
                "position":"absolute",
                "bottom":"12px",
                "left":"300px",
                "text-shadow"(){
                    return (tmp.p.buyables[31].canAfford)?"0, 0, 0 black":"0 0 2px white"
                }
            },
        },

        32: {
            cost() { 
                let cost = Decimal.pow(1.45,(player.p.level)).mul(3)
                if (hasUpgrade("asc",47)) cost = cost.pow(0.75)
                if (hasUpgrade("asc",54)) cost = cost.pow(0.95)
                if (getTrialComps() >= 6) cost = cost.div(fourthAscReward())
                return cost.round()
            },
            bought() {
                let b = player.p.level
                return b
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[32].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let odmult = new Decimal(1.5)
                if(player.p.buyables[34] > 0) odmult = odmult.pow(Decimal.pow((1.5),(player.p.hm)))
                let levelmult = new Decimal(1.3).times(Decimal.pow((odmult),(player.p.od)))
                let dis = "<h1>Level Up</h1><br><br><h2>(" + formatWhole(player.p.level) + ")\n"
                let costdis = " Power Ups"
                return dis + "<h3>Reset everything up to Power Up (inclusive), but Power Up is x" + format(levelmult,1) + " stronger\n\n\
                Req: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(inChallenge("asc",23) && (player.p.level).gte(6)) return false
                if((player.p.buyables[31]).gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasUpgrade("asc",15)){
                player.p.buyables[11] = decimalOne
                player.p.gen = decimalOne
                player.p.buyables[12] = decimalZero
                player.p.boost = decimalZero
                player.p.buyables[31] = decimalZero
                player.p.power = decimalZero
                player.points = decimalZero
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.level = player.p.level.add(1)
            },

            buyMax() {
                buyBuyable("p",32)
            },

            unlocked() { return hasUpgrade("p",13) }, 
            style: {'height':'140px', 'width':'320px',
                "border-radius"(){
                    return "0%"
                },
                "border-color":"white",
                "background-color"(){
                    let a = "black"
                    let b = "rgba(0, 238, 255, 0.75)"
                    return (tmp.p.buyables[32].canAfford)?b:a
                },
                "color"(){
                    return (tmp.p.buyables[32].canAfford)?"black":"white"
                },
                "position":"absolute",
                "bottom":"12px",
                "left":"640px",
                "text-shadow"(){
                    return (tmp.p.buyables[32].canAfford)?"0, 0, 0 black":"0 0 5px white"
                }
            },
        },

        33: {
            cost() { 
                let cost = Decimal.pow(1.3,(player.p.od)).mul(3)
                if (hasUpgrade("asc",48)) cost = cost.pow(0.85)
                if (hasUpgrade("asc",56)) cost = cost.pow(0.925)
                if (getTrialComps() >= 6) cost = cost.div(fourthAscReward())
                return cost.round()
            },
            bought() {
                let b = player.p.od
                return b
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[33].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let odmult = new Decimal(1.5)
                if(player.p.buyables[34] > 0) odmult = odmult.pow(Decimal.pow((1.5),(player.p.hm)))
                let dis = "<h1>Overdrive</h1><br><br><h2>(" + formatWhole(player.p.od) + ")\n"
                let costdis = " Level Ups"
                return dis + "<h3>Reset everything up to Level Up (inclusive), but Level Up is x" + format(odmult,1) + " stronger\n\n\
                Req: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(inChallenge("asc",13) && (player.p.od).gte(2)) return false
                if(inChallenge("asc",23)) return false
                if((player.p.buyables[32]).gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasUpgrade("asc",16)){
                player.p.buyables[11] = decimalOne
                player.p.gen = decimalOne
                player.p.buyables[12] = decimalZero
                player.p.boost = decimalZero
                player.p.buyables[13] = decimalZero
                player.p.charger = decimalZero
                player.p.buyables[31] = decimalZero
                player.p.power = decimalZero
                player.p.buyables[32] = decimalZero
                player.p.level = decimalZero
                player.points = decimalZero
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.od = player.p.od.add(1)
            },

            buyMax() {
                buyBuyable("p",33)
            },

            unlocked() { return hasUpgrade("p",21) }, 
            style: {'height':'140px', 'width':'320px',
                "border-radius"(){
                    return "0%"
                },
                "border-color":"white",
                "background-color"(){
                    let a = "black"
                    let b = "rgba(76, 0, 255, 0.75)"
                    return (tmp.p.buyables[33].canAfford)?b:a
                },
                "color"(){
                    return (tmp.p.buyables[33].canAfford)?"black":"white"
                },
                "position":"absolute",
                "bottom":"12px",
                "left":"980px",
                "text-shadow"(){
                    return (tmp.p.buyables[33].canAfford)?"0, 0, 0 black":"0 0 15px white"
                }
            },
        },

        34: {
            cost() { 
                let cost = new Decimal(2).add(player.p.hm)
                if (hasUpgrade("p",33)) cost = cost.sub(1).max(0)
                if (hasUpgrade("asc",29)) cost = cost.sub(1).max(0)
                if (hasUpgrade("asc",51)) cost = cost.div(2)
                if (hasUpgrade("asc",56)) cost = cost.div(4/3)
                if (getTrialComps() >= 6) cost = cost.div(fourthAscReward())
                return cost.round()
            },
            bought() {
                let b = player.p.hm
                return b
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[34].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let dis = "<h1>Hypermode</h1><br><br><h2>(" + formatWhole(player.p.hm) + ")\n"
                let costdis = " Overdrives"
                return dis + "<h3>Reset everything up to Overdrive (inclusive), but Overdrive is <sup>^</sup>1.5 stronger\n\n\
                Req: " + formatWhole(this.cost()) + costdis
            },
            canAfford() {
                if(inChallenge("asc",13)) return false
                if(inChallenge("asc",23)) return false
                if((player.p.buyables[33]).gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                if(!hasUpgrade("asc",17)){
                player.p.buyables[11] = decimalOne
                player.p.gen = decimalOne
                player.p.buyables[12] = decimalZero
                player.p.boost = decimalZero
                player.p.buyables[13] = decimalZero
                player.p.charger = decimalZero
                player.p.buyables[31] = decimalZero
                player.p.power = decimalZero
                player.p.buyables[32] = decimalZero
                player.p.level = decimalZero
                player.p.buyables[33] = decimalZero
                player.p.od = decimalZero
                player.points = decimalZero
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.hm = player.p.hm.add(1)
            },

            buyMax() {
                buyBuyable("p",34)
            },

            unlocked() { return hasUpgrade("p",24) }, 
            style: {'height':'140px', 'width':'320px',
                "border-radius"(){
                    return "0%"
                },
                "border-color":"white",
                "background-color"(){
                    let a = "black"
                    let b = "rgba(255, 0, 234, 0.75)"
                    return (tmp.p.buyables[34].canAfford)?b:a
                },
                "color"(){
                    return (tmp.p.buyables[34].canAfford)?"black":"white"
                },
                "position":"absolute",
                "bottom":"12px",
                "left":"1320px",
                "text-shadow"(){
                    return (tmp.p.buyables[34].canAfford)?"0, 0, 0 black":"0 0 33px white"
                }
            },
        },

        35: {
            cost() { 
                let cost = new Decimal("1.798e308")
                // if (cost.gte("1.797693e308")) {
                //     let scalereduce = decimalOne
                // }
                return cost.round()
            },
            brkAscApAmt() {
                let aamt = ((player.points).div(1.797692e308)).floor()
                if(player.points.gte("1.798e308")) aamt = ((player.points).div(1.797692e308)).max(1).log2().max(1).floor()
                if(hasUpgrade("asc",27)) aamt = aamt.times(2)
                if(hasUpgrade("asc",42)) aamt = aamt.times(2)
                if(getTrialComps() >= 4) aamt = aamt.times(thirdAscReward())
                if(hasUpgrade("asc",57)) aamt = aamt.times(2.025e3)
                return aamt
            },
            brkAscendsAmt() {
                let ascsamt = ((player.points).div(1.797692e308)).floor()
                if(player.points.gte("1.798e308")) ascsamt = ((player.points).div(1.797692e308)).max(1).log10().pow(0.875).floor()
                if(hasUpgrade("asc",41)) ascsamt = ascsamt.times(2)
                if(getTrialComps() >= 4) ascsamt = ascsamt.times(thirdAscReward())
                if(hasUpgrade("asc",58)) ascsamt = ascsamt.times(20.25)
                return ascsamt
            },
            bought() {
                let b = player.p.asc
                return b
            },
            display() {
                if (player.tab != "p") return
                let x = tmp.p.buyables[35].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let dis = "<h1>Ascend\n\n</h1>"
                let reqdis = "\n\n\nReq: "
                let actcost = formatWhole(this.cost())
                actcost = "Infinity"
                if(hasUpgrade("asc",34)) actcost = ""
                let brkascdis = ""
                if(hasUpgrade("asc",34)) brkascdis = "<br><br>(+"+formatWhole(this.brkAscApAmt())+" AP)<br><br>(+"+formatWhole(this.brkAscendsAmt())+" Ascensions)"
                let costdis = " particles"
                if(hasUpgrade("asc",34)) {
                    costdis = ""
                    reqdis = ""
                }
                return dis + "<h3>Reset everything and reach a higher plane"+brkascdis+"\
                "+ reqdis + actcost + costdis
            },
            canAfford() {
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                let ascamt = decimalOne
                let apamt = decimalOne

                if(hasUpgrade("asc",27)) apamt = apamt.times(2)
                if(hasUpgrade("asc",34)){
                    apamt = this.brkAscApAmt()
                    ascamt = this.brkAscendsAmt()
                }
                

                let up1 = []
                let up2 = []
                let up3 = []
                let up4 = []
                let up5 = []
                let up6 = []
                let up7 = []
                let up8 = []
                let up9 = []
                let up10 = []
                let up11 = []
                let up12 = []

                if(hasUpgrade("asc",21)){
                    if(hasUpgrade("p",11)) up1 = '11'
                    if(hasUpgrade("p",12)) up2 = '12'
                    if(hasUpgrade("p",13)) up3 = '13'
                    if(hasUpgrade("p",14)) up4 = '14'
                }
                if(hasUpgrade("asc",22)){
                    if(hasUpgrade("p",21)) up5 = '21'
                    if(hasUpgrade("p",22)) up6 = '22'
                    if(hasUpgrade("p",23)) up7 = '23'
                    if(hasUpgrade("p",24)) up8 = '24'
                }
                if(hasUpgrade("asc",23)){
                    if(hasUpgrade("p",31)) up9 = '31'
                    if(hasUpgrade("p",32)) up10 = '32'
                    if(hasUpgrade("p",33)) up11 = '33'
                    if(hasUpgrade("p",34)) up12 = '34'
                }

                if((player.p.buyables[35]).lt(3)) playAsc()

                player.p.buyables[11] = decimalZero
                player.p.gen = decimalZero
                player.p.buyables[12] = decimalZero
                player.p.boost = decimalZero
                player.p.buyables[13] = decimalZero
                player.p.charger = decimalZero
                player.p.buyables[31] = decimalZero
                player.p.power = decimalZero
                player.p.buyables[32] = decimalZero
                player.p.level = decimalZero
                player.p.buyables[33] = decimalZero
                player.p.od = decimalZero
                player.p.buyables[34] = decimalZero
                player.p.hm = decimalZero
                player.points = new Decimal(10)
                player.p.upgrades = [up1,up2,up3,up4,up5,up6,up7,up8,up9,up10,up11,up12]
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.asc = player.p.asc.add(ascamt)
                player.asc.points = player.asc.points.add(apamt)
                player.asc.ap = player.asc.ap.add(ascamt)
            },

            // buyMax() {
            //     buyBuyable("p",35)
            // },

            unlocked() { return hasUpgrade("p",34) && !inChallenge("asc",(player.asc.activeChallenge)) }, 
            style: {'height':'160px', 'width':'360px',
                "border-radius"(){
                    return "0%"
                },
                "border-color"(){
                    return (tmp.p.buyables[35].canAfford)?getFasterUndulatingColor():"white"
                },
                "background-color"(){
                    let a = "rgb(102, 102, 102)"
                    let b = "black"
                    return (tmp.p.buyables[35].canAfford)?b:a
                },
                "color"(){
                    return (tmp.p.buyables[35].canAfford)?getFasterUndulatingColor():"white"
                },
                "position":"absolute",
                "bottom":"210px",
                "left":"790px",
            },
        },
    },

    upgrades: {
        
        11: {
            title: "",
            description() {
                return "<h2>Particle Generators are x2 stronger"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(250)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(250)
                player.p.upgrades.push("11")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",11))?"rgb(0, 0, 0)":((tmp.p.upgrades[11].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(122, 77, 77)"
                    return (hasUpgrade("p",11))?"rgb(221, 42, 42)":((tmp.p.upgrades[11].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",11))?"rgb(0, 0, 0)":((tmp.p.upgrades[11].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        12: {
            title: "",
            description() {
                return "<h2>Unlock 'Power Up'"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(2500)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(2500)
                player.p.upgrades.push("12")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",12))?"rgb(0, 0, 0)":((tmp.p.upgrades[12].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(122, 84, 77)"
                    return (hasUpgrade("p",12))?"rgb(221, 69, 42)":((tmp.p.upgrades[12].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",12))?"rgb(0, 0, 0)":((tmp.p.upgrades[12].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        13: {
            title: "",
            description() {
                return "<h2>Unlock 'Level Up'"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(5e5)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(5e5)
                player.p.upgrades.push("13")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",13))?"rgb(0, 0, 0)":((tmp.p.upgrades[13].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(122, 95, 77)"
                    return (hasUpgrade("p",13))?"rgb(221, 114, 42)":((tmp.p.upgrades[13].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",13))?"rgb(0, 0, 0)":((tmp.p.upgrades[13].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        14: {
            title: "",
            description() {
                return "<h2>Particle Boosters are x2 stronger"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(2e7)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(1e7)
                player.p.upgrades.push("14")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",14))?"rgb(0, 0, 0)":((tmp.p.upgrades[14].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(122, 110, 77)"
                    return (hasUpgrade("p",14))?"rgb(221, 164, 42)":((tmp.p.upgrades[14].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",14))?"rgb(0, 0, 0)":((tmp.p.upgrades[14].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        21: {
            title: "",
            description() {
                return "<h2>Unlock 'Overdrive'"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(5e16)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(5e16)
                player.p.upgrades.push("21")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",21))?"rgb(0, 0, 0)":((tmp.p.upgrades[21].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(121, 122, 77)"
                    return (hasUpgrade("p",21))?"rgb(203, 221, 42)":((tmp.p.upgrades[21].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",21))?"rgb(0, 0, 0)":((tmp.p.upgrades[21].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        22: {
            title: "",
            description() {
                let divtxt = new Decimal(10)
                if(hasUpgrade("asc",31)) divtxt = new Decimal(5)
                return "<h2>Every " + divtxt + " Particle Boosters bought give an extra Particle Generator"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(3.6e36)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(3.6e36)
                player.p.upgrades.push("22")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",22))?"rgb(0, 0, 0)":((tmp.p.upgrades[22].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(91, 122, 77)"
                    return (hasUpgrade("p",22))?"rgb(114, 221, 42)":((tmp.p.upgrades[22].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",22))?"rgb(0, 0, 0)":((tmp.p.upgrades[22].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        23: {
            title: "",
            description() {
                let chmul = format(new Decimal(1.025),3)
                if(hasUpgrade("asc",32)) chmul = format(new Decimal(1.033),3)
                return "<h2>x" + chmul + " to Particle Charger boost to generator exponent"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(3.5e74)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(3.5e74)
                player.p.upgrades.push("23")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",23))?"rgb(0, 0, 0)":((tmp.p.upgrades[23].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(77, 122, 92)"
                    return (hasUpgrade("p",23))?"rgb(42, 221, 117)":((tmp.p.upgrades[23].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",23))?"rgb(0, 0, 0)":((tmp.p.upgrades[23].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        24: {
            title: "",
            description() {
                return "<h2>Unlock 'Hypermode'"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(5e100)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(5e100)
                player.p.upgrades.push("24")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",24))?"rgb(0, 0, 0)":((tmp.p.upgrades[24].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(77, 122, 112)"
                    return (hasUpgrade("p",24))?"rgb(42, 221, 182)":((tmp.p.upgrades[24].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",24))?"rgb(0, 0, 0)":((tmp.p.upgrades[24].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        31: {
            title: "",
            description() {
                return "<h2>Every 3 Particle Chargers bought gives an extra Particle Booster"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(1.33e133)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(1.33e133)
                player.p.upgrades.push("31")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",31))?"rgb(0, 0, 0)":((tmp.p.upgrades[31].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(77, 104, 122)"
                    return (hasUpgrade("p",31))?"rgb(42, 164, 221)":((tmp.p.upgrades[31].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",31))?"rgb(0, 0, 0)":((tmp.p.upgrades[31].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        32: {
            title: "",
            description() {
                let divby = format(new Decimal(1.3),1)
                if(hasUpgrade("asc",28)) divby = format(new Decimal(2),1)
                return "<h2>Particle Generator cost cube-rooted, and 'Power Up' requirement / "+divby
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(2.5e151)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(2.5e155)
                player.p.upgrades.push("32")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",32))?"rgb(0, 0, 0)":((tmp.p.upgrades[32].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(77, 78, 122)"
                    return (hasUpgrade("p",32))?"rgb(42, 75, 221)":((tmp.p.upgrades[32].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",32))?"rgb(0, 0, 0)":((tmp.p.upgrades[32].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        33: {
            title: "",
            description() {
                let hmred = decimalOne
                if(hasUpgrade("asc",29)) hmred = new Decimal(2)
                return "<h2>-" + hmred + " to Hypermode requirement"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(2.82e282)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(2.82e282)
                player.p.upgrades.push("33")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",33))?"rgb(0, 0, 0)":((tmp.p.upgrades[33].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(102, 77, 122)"
                    return (hasUpgrade("p",33))?"rgb(126, 42, 221)":((tmp.p.upgrades[33].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",33))?"rgb(0, 0, 0)":((tmp.p.upgrades[33].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },

        34: {
            title: "",
            description() {
                return "<h2>Unlock Ascension"
            },
            canAfford(){
                if(inChallenge("asc",12) && ((player.p.upgrades.length) >= (12))) return false
                if(inChallenge("asc",22) && ((player.p.upgrades.length) >= (8))) return false
                return player.points.gte(1.797e308)
            },
            pay(){
                if(!hasUpgrade("asc",24)) player.points = player.points.sub(1.797e308)
                player.p.upgrades.push("34")
            },
            unlocked(){
                return true
            },
            style: {"width":"200px","height":"80px",
                "color"(){
                    return (hasUpgrade("p",34))?"rgb(0, 0, 0)":((tmp.p.upgrades[34].canAfford)?"white":"black")
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(122, 77, 114)"
                    return (hasUpgrade("p",34))?"rgb(221, 42, 167)":((tmp.p.upgrades[34].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("p",34))?"rgb(0, 0, 0)":((tmp.p.upgrades[34].canAfford)?"white":"black")
                },
                "border-radius":"5%"
            },
        },
    },

    clickables: {
        11: {
            display() {
                let state = ""
                if(getClickableState("p",11) == 1) state = "On"
                if(getClickableState("p",11) == 0) state = "Off"
                return "<h2>"+state
            },
            canClick() {return true},
            onClick() {
                if (getClickableState("p",11) == 0) return setClickableState("p",11,1)
                if (getClickableState("p",11) == 1) return setClickableState("p",11,0)
            },
            unlocked(){
                return hasUpgrade("asc",11)
            },
            style: {'height':'60px', 'width':'120px',
                "border-radius":"5%",
                "border-color"(){
                    if (getClickableState("p",11) == 0) return "rgb(201, 45, 45)"
                    if (getClickableState("p",11) == 1) return "rgb(50, 211, 64)"
                }, 
                "background-color"(){
                    if (getClickableState("p",11) == 0) return "rgb(102, 49, 49)"
                    if (getClickableState("p",11) == 1) return "rgb(62, 105, 65)"
                }, 
                "color"(){
                    return "rgb(209, 209, 209)"
                }
            },
        },

        12: {
            display() {
                let state = ""
                if(getClickableState("p",12) == 1) state = "On"
                if(getClickableState("p",12) == 0) state = "Off"
                return "<h2>"+state
            },
            canClick() {return true},
            onClick() {
                if (getClickableState("p",12) == 0) return setClickableState("p",12,1)
                if (getClickableState("p",12) == 1) return setClickableState("p",12,0)
            },
            unlocked(){
                return hasUpgrade("asc",11)
            },
            style: {'height':'60px', 'width':'120px',
                "border-radius":"5%",
                "border-color"(){
                    if (getClickableState("p",12) == 0) return "rgb(201, 45, 45)"
                    if (getClickableState("p",12) == 1) return "rgb(50, 211, 64)"
                }, 
                "background-color"(){
                    if (getClickableState("p",12) == 0) return "rgb(102, 49, 49)"
                    if (getClickableState("p",12) == 1) return "rgb(62, 105, 65)"
                }, 
                "color"(){
                    return "rgb(209, 209, 209)"
                }
            },
        },

        13: {
            display() {
                let state = ""
                if(getClickableState("p",13) == 1) state = "On"
                if(getClickableState("p",13) == 0) state = "Off"
                return "<h2>"+state
            },
            canClick() {return true},
            onClick() {
                if (getClickableState("p",13) == 0) return setClickableState("p",13,1)
                if (getClickableState("p",13) == 1) return setClickableState("p",13,0)
            },
            unlocked(){
                return hasUpgrade("asc",11)
            },
            style: {'height':'60px', 'width':'120px',
                "border-radius":"5%",
                "border-color"(){
                    if (getClickableState("p",13) == 0) return "rgb(201, 45, 45)"
                    if (getClickableState("p",13) == 1) return "rgb(50, 211, 64)"
                }, 
                "background-color"(){
                    if (getClickableState("p",13) == 0) return "rgb(102, 49, 49)"
                    if (getClickableState("p",13) == 1) return "rgb(62, 105, 65)"
                }, 
                "color"(){
                    return "rgb(209, 209, 209)"
                }
            },
        },

        21: {
            display() {
                let state = ""
                if(getClickableState("p",21) == 1) state = "On"
                if(getClickableState("p",21) == 0) state = "Off"
                return "<h2>"+state
            },
            canClick() {return true},
            onClick() {
                if (getClickableState("p",21) == 0) return setClickableState("p",21,1)
                if (getClickableState("p",21) == 1) return setClickableState("p",21,0)
            },
            unlocked(){
                return (hasUpgrade("asc",14) && hasUpgrade("p",12))
            },
            style: {'height':'40px', 'width':'320px',
                "border-radius":"5%",
                "border-color"(){
                    if (getClickableState("p",21) == 0) return "rgb(201, 45, 45)"
                    if (getClickableState("p",21) == 1) return "rgb(50, 211, 64)"
                }, 
                "background-color"(){
                    if (getClickableState("p",21) == 0) return "rgb(102, 49, 49)"
                    if (getClickableState("p",21) == 1) return "rgb(62, 105, 65)"
                }, 
                "color"(){
                    return "rgb(209, 209, 209)"
                },
                "position":"absolute",
                "top":"720px",
                "left":"300px"
            },
        },

        22: {
            display() {
                let state = ""
                if(getClickableState("p",22) == 1) state = "On"
                if(getClickableState("p",22) == 0) state = "Off"
                return "<h2>"+state
            },
            canClick() {return true},
            onClick() {
                if (getClickableState("p",22) == 0) return setClickableState("p",22,1)
                if (getClickableState("p",22) == 1) return setClickableState("p",22,0)
            },
            unlocked(){
                return (hasUpgrade("asc",18) && hasUpgrade("p",13))
            },
            style: {'height':'40px', 'width':'320px',
                "border-radius":"5%",
                "border-color"(){
                    if (getClickableState("p",22) == 0) return "rgb(201, 45, 45)"
                    if (getClickableState("p",22) == 1) return "rgb(50, 211, 64)"
                }, 
                "background-color"(){
                    if (getClickableState("p",22) == 0) return "rgb(102, 49, 49)"
                    if (getClickableState("p",22) == 1) return "rgb(62, 105, 65)"
                }, 
                "color"(){
                    return "rgb(209, 209, 209)"
                },
                "position":"absolute",
                "top":"720px",
                "left":"640px"
            },
        },

        23: {
            display() {
                let state = ""
                if(getClickableState("p",23) == 1) state = "On"
                if(getClickableState("p",23) == 0) state = "Off"
                return "<h2>"+state
            },
            canClick() {return true},
            onClick() {
                if (getClickableState("p",23) == 0) return setClickableState("p",23,1)
                if (getClickableState("p",23) == 1) return setClickableState("p",23,0)
            },
            unlocked(){
                return (hasUpgrade("asc",19) && hasUpgrade("p",21))
            },
            style: {'height':'40px', 'width':'320px',
                "border-radius":"5%",
                "border-color"(){
                    if (getClickableState("p",23) == 0) return "rgb(201, 45, 45)"
                    if (getClickableState("p",23) == 1) return "rgb(50, 211, 64)"
                }, 
                "background-color"(){
                    if (getClickableState("p",23) == 0) return "rgb(102, 49, 49)"
                    if (getClickableState("p",23) == 1) return "rgb(62, 105, 65)"
                }, 
                "color"(){
                    return "rgb(209, 209, 209)"
                },
                "position":"absolute",
                "top":"720px",
                "left":"980px"
            },
        },

        24: {
            display() {
                let state = ""
                if(getClickableState("p",24) == 1) state = "On"
                if(getClickableState("p",24) == 0) state = "Off"
                return "<h2>"+state
            },
            canClick() {return true},
            onClick() {
                if (getClickableState("p",24) == 0) return setClickableState("p",24,1)
                if (getClickableState("p",24) == 1) return setClickableState("p",24,0)
            },
            unlocked(){
                return (hasUpgrade("asc",26) && hasUpgrade("p",24))
            },
            style: {'height':'40px', 'width':'320px',
                "border-radius":"5%",
                "border-color"(){
                    if (getClickableState("p",24) == 0) return "rgb(201, 45, 45)"
                    if (getClickableState("p",24) == 1) return "rgb(50, 211, 64)"
                }, 
                "background-color"(){
                    if (getClickableState("p",24) == 0) return "rgb(102, 49, 49)"
                    if (getClickableState("p",24) == 1) return "rgb(62, 105, 65)"
                }, 
                "color"(){
                    return "rgb(209, 209, 209)"
                },
                "position":"absolute",
                "top":"720px",
                "left":"1320px"
            },
        },

        25: {
            display() {
                let state = ""
                if(getClickableState("p",25) == 1) state = "On"
                if(getClickableState("p",25) == 0) state = "Off"
                return "<h2>"+state
            },
            canClick() {return true},
            onClick() {
                if (getClickableState("p",25) == 0) return setClickableState("p",25,1)
                if (getClickableState("p",25) == 1) return setClickableState("p",25,0)
            },
            unlocked(){
                return (hasUpgrade("asc",26) && hasUpgrade("p",34) && !inChallenge("asc",(player.asc.activeChallenge)))
            },
            style: {'height':'40px', 'width':'360px',
                "border-radius":"5%",
                "border-color"(){
                    if (getClickableState("p",25) == 0) return "rgb(201, 45, 45)"
                    if (getClickableState("p",25) == 1) return "rgb(50, 211, 64)"
                }, 
                "background-color"(){
                    if (getClickableState("p",25) == 0) return "rgb(102, 49, 49)"
                    if (getClickableState("p",25) == 1) return "rgb(62, 105, 65)"
                }, 
                "color"(){
                    return "rgb(209, 209, 209)"
                },
                "position":"absolute",
                "top":"500px",
                "left":"790px"
            },
        },
    },

    update(diff){
        if((getClickableState("p",11) === 1) && (canBuyBuyable("p",11))) buyBuyable("p",11)
        if((getClickableState("p",12) === 1) && (canBuyBuyable("p",12))) buyBuyable("p",12)
        if((getClickableState("p",13) === 1) && (canBuyBuyable("p",13))) buyBuyable("p",13)
        if((getClickableState("p",21) === 1) && (canBuyBuyable("p",31))) buyBuyable("p",31)
        if((getClickableState("p",22) === 1) && (canBuyBuyable("p",32))) buyBuyable("p",32)
        if((getClickableState("p",23) === 1) && (canBuyBuyable("p",33))) buyBuyable("p",33)
        if((getClickableState("p",24) === 1) && (canBuyBuyable("p",34))) buyBuyable("p",34)
        if((getClickableState("p",25) === 1) && (canBuyBuyable("p",35))) buyBuyable("p",35)

    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {

        let ascends = player.p.asc

        let s1 = getClickableState(this.layer,11)
        let s2 = getClickableState(this.layer,12)
        let s3 = getClickableState(this.layer,13)
        let s4 = getClickableState(this.layer,21)
        let s5 = getClickableState(this.layer,22)
        let s6 = getClickableState(this.layer,23)
        let s7 = getClickableState(this.layer,24)
        let s8 = getClickableState(this.layer,25)

        let keep = []

        let u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,u11,u12 = []

        if(hasUpgrade("asc",21)){
            u1 = '11'
            u2 = '12'
            u3 = '13'
            u4 = '14'
        }
        if(hasUpgrade("asc",22)){
            u5 = '21'
            u6 = '22'
            u7 = '23'
            u8 = '24'
        }
        if(hasUpgrade("asc",23)){
            u9 = '31'
            u10 = '32'
            u11 = '33'
            u12 = '34'
        }

        keep.push(u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,u11,u12)

        if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer, keep)}

        player.p.upgrades = keep

        setClickableState(this.layer,11,s1)
        setClickableState(this.layer,12,s2)
        setClickableState(this.layer,13,s3)
        setClickableState(this.layer,21,s4)
        setClickableState(this.layer,22,s5)
        setClickableState(this.layer,23,s6)
        setClickableState(this.layer,24,s7)
        setClickableState(this.layer,25,s8)

        player.p.buyables[35] = ascends
        player.p.asc = ascends
    },
})