addLayer("asc", {
    name: "asce", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Ascension", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: decimalZero,
        total: decimalZero,
        best: decimalZero,
        ap: decimalZero,
    }},
    color: "rgb(250, 149, 34)",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color":"black",
        "background-position":"center",
        "border-size":"10px",
        "border-color":"rgb(250, 149, 34)",
        "color":"white",
        "font-size":"20px",
        }
    },
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "ap", // Name of prestige currency
    baseResource: "particles", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    softcapPower: 0.6,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        ascmult = new Decimal(1)
        return ascmult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    // hotkeys: [
    //     {key: "1", description: "1: Buy Particle Generator", onPress(){if (canBuyBuyable("p",11)) buyBuyable("p",11)}},
    //     {key: "2", description: "2: Buy Particle Booster", onPress(){if (canBuyBuyable("p",12)) buyBuyable("p",12)}},
    //     {key: "3", description: "3: Buy Particle Charger", onPress(){if (canBuyBuyable("p",13)) buyBuyable("p",13)}},
    // ],
    shouldNotify: false,
    layerShown(){return true},
    tabFormat: {
        "Upgrades" :{
            content: [
                ["raw-html",
                    function(){
                        let rcol = getFasterUndulatingColor()
                        return "<b>You have "+colorText("h2",rcol,formatWhole(player.asc.points))+" Ascendant Particles"
                    }
                ],
                "blank",
                "upgrades",
                ["clickable",[51]],
                ["buyable",[11]]
                ],
            style: {
                "background-color"(){
                    if(hasUpgrade("asc",59)) return "black"
                },
                "background-image"(){
                    if(tmp.asc.buyables[11].unlocked) return "black"
                    else return "url(images/bgs/Ascension.gif)"
                },
                "background-size":"380px"
            },
            buttonStyle: {
                "border-image":"url(images/bgs/Rainbow.gif) 50"
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
            }
        },
        "Rewards" :{
            content: [
                ["raw-html",
                    function(){
                        let rcol = getFasterUndulatingColor()
                        let plur = "<h3> times"
                        if(player.asc.ap == 1) plur = "<h3> time"
                        return "<h3>You have Ascended "+colorText("h2",rcol,formatWhole(player.asc.ap))+plur
                    }
                ],
                "blank",
                ["clickables",[[1],[2],[3],[4]]]
                ],
            style: {
                "background-image":"url(images/bgs/Ascension.gif)",
                "background-size":"380px",
                "padding-bottom":"300px",
                "margin-bottom":"-100px",
                "height":"616px"
            },
            buttonStyle: {
                "border-image":"url(images/bgs/Rainbow.gif) 50"
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return true
            }
        },
        "Trials" :{
            content: [
                ["raw-html",
                    function(){
                        let rcol = getFasterUndulatingColor()
                        let tri = "<h3> trials"
                        if(getTrialComps() == 1) tri = "<h3> trial"
                        return "<h3>You have overcome "+colorText("h2",rcol,formatWhole(getTrialComps()))+tri
                    }
                ],
                "blank",
                "blank",
                ["row",[
                    ["column",[
                        ["raw-html",
                            "<h2>Weakened</h2>"
                        ],
                        ["blank",["30px","20px"]],
                        ["challenge",[11]],
                        ["blank",["30px","20px"]],
                        ["raw-html",
                            "<b>Goal: Infinity"
                        ],
                        ["blank",["30px","10px"]],
                        ["raw-html",
                            "<b>Reward: Unlock Ascendant Upgrade 'KU-2'"
                        ],
                        ["blank",["30px","50px"]],
                        ["raw-html",
                            "<h2>Weakened II</h2>"
                        ],
                        ["blank",["30px","20px"]],
                        ["challenge",[21]],
                        ["blank",["30px","20px"]],
                        ["raw-html",
                            "<b>Goal: 1.798e308,308"
                        ],
                        ["blank",["30px","10px"]],
                        ["raw-html",
                            "<b>Reward: Unlock 2 new Ascendant Upgrades"
                        ],
                    ]],
                    ["blank",["40px","0px"]],
                    ["column",[
                        ["raw-html",
                            "<br><h2>Limited</h2>"
                        ],
                        ["blank",["30px","20px"]],
                        ["challenge",[12]],
                        ["blank",["30px","20px"]],
                        ["raw-html",
                            "<b>Goal: 1.000e200"
                        ],
                        ["blank",["30px","10px"]],
                        ["raw-html",
                            "<b>Reward: Unlock Ascendant Upgrades<br>'UPB-10' and 'UPB-11'"
                        ],
                        ["blank",["30px","16px"]],
                        ["raw-html",
                            "<br><h2>Limited II</h2>"
                        ],
                        ["blank",["30px","20px"]],
                        ["challenge",[22]],
                        ["blank",["30px","20px"]],
                        ["raw-html",
                            "<b>Goal: 1.000e7,250,000"
                        ],
                        ["blank",["30px","10px"]],
                        ["raw-html",
                            "<b>Reward: Unlock 2 new Ascendant Upgrades<br><br>"
                        ],
                    ]],
                    ["blank",["40px","0px"]],
                    ["column",[
                        ["raw-html",
                            "<h2>Devoid</h2>"
                        ],
                        ["blank",["30px","20px"]],
                        ["challenge",[13]],
                        ["blank",["30px","20px"]],
                        ["raw-html",
                            "<b>Goal: 1.000e300"
                        ],
                        ["blank",["30px","10px"]],
                        ["raw-html",
                            "<b>Reward: Unlock Ascendant Upgrade 'KU-3'"
                        ],
                        ["blank",["30px","50px"]],
                        ["raw-html",
                            "<h2>Devoid II</h2>"
                        ],
                        ["blank",["30px","20px"]],
                        ["challenge",[23]],
                        ["blank",["30px","20px"]],
                        ["raw-html",
                            "<b>Goal: 1.000e6,250"
                        ],
                        ["blank",["30px","10px"]],
                        ["raw-html",
                            "<b>Reward: Unlock the final 2 Ascendant Upgrades"
                        ],
                    ]]
                ]],
            ],
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",33)
            },
            buttonStyle: {
                "border-image":"url(images/bgs/Rainbow.gif) 50"
            },
            style: {
                "background-image":"url(images/bgs/Ascension.gif)",
                "background-size":"380px",
                "padding-bottom":"200px",
                "margin-bottom":"-200px",
                "height":"800px",
            }
        }
    },

    // buyables: {
        
    //     11: {
    //         cost() { 
    //             let cost = Decimal.pow(10,(new Decimal(1.138).pow(player.p.gen)))
    //             if(hasUpgrade("p",32)) cost = cost.pow(1/3).max(1)
    //             if (cost.gte("1.797693e308")) {
    //                 let scalereduce = decimalOne
    //             }
    //             return cost.round()
    //         },
    //         bought() {
    //             let b = player.p.gen
    //             return b
    //         },
    //         extra(){
    //             let ex = decimalZero
    //             if(hasUpgrade("p",22)) ex = (player.p.boost).div(10).floor()
    //             return ex
    //         },
    //         effect(){
    //             let eff = player.p.buyables[11]
    //             if(hasUpgrade("p",22)) eff = eff.add(this.extra())
    //             return eff
    //         },
    //         display() {
    //             if (player.tab != "p") return
    //             let x = tmp.p.buyables[11].extra
    //             let extra = ""
    //             let bonus = " (Maxed)"
    //             let bonusDis = ""
    //             let effbonus = 1
    //             let dis = ""
    //             let costdis = " particle"
    //             if(this.cost != decimalOne) costdis = " particles"
    //             return dis + "<h2>\
    //             Cost: " + formatWhole(this.cost()) + costdis
    //         },
    //         canAfford() {
    //             if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
    //         },

    //         buy() {
    //             player.points = player.points.sub(this.cost())
    //             setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    //             player.p.gen = player.p.gen.add(1)
    //         },

    //         buyMax() {
    //             buyBuyable("p",11)
    //         },

    //         unlocked() { return true }, 
    //         style: {'height':'60px', 'width':'400px',
    //             "border-radius"(){
    //                 return "0%"
    //             },
    //             "border-color":"white",
    //             "background-color"(){
    //                 let a = "black"
    //                 let b = "rgba(255, 0, 0, 0.75)"
    //                 return (tmp.p.buyables[11].canAfford)?b:a
    //             },
    //             "color":"white",
    //             "text-shadow":"0 0 3px black"
    //         },
    //     },
    // },

    upgrades: {
        
        11: {
            title: "",
            description() {
                return "<h3>AB-GBC"
            },
            canAfford(){
                return player.asc.points.gte(1)
            },
            pay(){
                player.asc.points = player.asc.points.sub(1)
                player.asc.upgrades.push("11")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            tooltip: "Unlock autobuyers for Generators, Boosters and Chargers<br>Cost: 1 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",11))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",11))?"rgb(221, 42, 42)":((tmp.asc.upgrades[11].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",11))?"rgb(0, 0, 0)":((tmp.asc.upgrades[11].canAfford)?getFasterUndulatingColor():"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"550px",
                "left":"0",
                "right":"0"
            },
        },

        12: {
            title: "",
            description() {
                return "<h3>DS-GBC"
            },
            canAfford(){
                return (player.asc.points.gte(2) && hasUpgrade("asc",11))
            },
            pay(){
                player.asc.points = player.asc.points.sub(2)
                player.asc.upgrades.push("12")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                return hasUpgrade("asc",12)?([['11',1,10,getFasterUndulatingColor()]]):(hasUpgrade("asc",11)?[['11',1,10,'gray']]:[['11',3,10,'white']])
            },
            tooltip: "Generators, Boosters and Chargers don't subtract particles when bought<br>Cost: 2 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",12))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",12))?"rgb(221, 129, 42)":((tmp.asc.upgrades[12].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",12))?"rgb(0, 0, 0)":((tmp.asc.upgrades[12].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"500px",
                "right":"850px"
            },
        },

        13: {
            title: "",
            description() {
                return "<h3>DR-P"
            },
            canAfford(){
                return (player.asc.points.gte(2) && hasUpgrade("asc",11))
            },
            pay(){
                player.asc.points = player.asc.points.sub(2)
                player.asc.upgrades.push("13")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                return hasUpgrade("asc",13)?([['11',1,10,getFasterUndulatingColor()]]):(hasUpgrade("asc",11)?[['11',1,10,'gray']]:[['11',3,10,'white']])
            },
            tooltip: "Power Ups don't reset anything<br>Cost: 2 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",13))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",13))?"rgb(221, 129, 42)":((tmp.asc.upgrades[13].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",13))?"rgb(0, 0, 0)":((tmp.asc.upgrades[13].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"650px",
                "right":"0",
                "left":"0"
            },
        },

        14: {
            title: "",
            description() {
                return "<h3>AB-P"
            },
            canAfford(){
                return (player.asc.points.gte(2) && hasUpgrade("asc",11))
            },
            pay(){
                player.asc.points = player.asc.points.sub(2)
                player.asc.upgrades.push("14")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                return hasUpgrade("asc",14)?([['11',1,10,getFasterUndulatingColor()]]):(hasUpgrade("asc",11)?[['11',1,10,'gray']]:[['11',3,10,'white']])
            },
            tooltip: "Unlock 'Power Up' autobuyer<br>Cost: 2 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",14))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",14))?"rgb(221, 129, 42)":((tmp.asc.upgrades[14].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",14))?"rgb(0, 0, 0)":((tmp.asc.upgrades[14].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"500px",
                "left":"850px"
            },
        },

        15: {
            title: "",
            description() {
                return "<h3>DR-L"
            },
            canAfford(){
                return (player.asc.points.gte(8) && hasUpgrade("asc",13) && hasUpgrade("asc",18))
            },
            pay(){
                player.asc.points = player.asc.points.sub(8)
                player.asc.upgrades.push("15")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",13)?true:false)
                let b = (hasUpgrade("asc",18)?true:false)
                let e = (hasUpgrade("asc",15)?true:false)
                let c = ['13',3,10,'gray']
                let d = ['18',3,10,'gray']
                if(a == true){
                    c = ['13',1,10,'white']
                }
                if(b == true){
                    d = ['18',1,10,'white']
                }
                if(e == true){
                    c = ['13',1,10,getFasterUndulatingColor()]
                    d = ['18',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            tooltip: "Level Ups don't reset anything<br>Cost: 8 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",15))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",15))?"rgb(57, 221, 42)":((tmp.asc.upgrades[15].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",15))?"rgb(0, 0, 0)":((tmp.asc.upgrades[15].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"700px",
                "left":"750px"
            },
        },

        16: {
            title: "",
            description() {
                return "<h3>DR-O"
            },
            canAfford(){
                return (player.asc.points.gte(8) && hasUpgrade("asc",13) && hasUpgrade("asc",24))
            },
            pay(){
                player.asc.points = player.asc.points.sub(8)
                player.asc.upgrades.push("16")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",13)?true:false)
                let b = (hasUpgrade("asc",24)?true:false)
                let e = (hasUpgrade("asc",16)?true:false)
                let c = ['13',3,10,'gray']
                let d = ['24',3,10,'gray']
                if(a == true){
                    c = ['13',1,10,'white']
                }
                if(b == true){
                    d = ['24',1,10,'white']
                }
                if(e == true){
                    c = ['13',1,10,getFasterUndulatingColor()]
                    d = ['24',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            tooltip: "Overdrives don't reset anything<br>Cost: 8 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",16))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",16))?"rgb(42, 221, 42)":((tmp.asc.upgrades[16].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",16))?"rgb(0, 0, 0)":((tmp.asc.upgrades[16].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"700px",
                "right":"750px"
            },
        },

        17: {
            title: "",
            description() {
                return "<h3>DR-H"
            },
            canAfford(){
                return (player.asc.points.gte(16) && hasUpgrade("asc",13) && hasUpgrade("asc",15) && hasUpgrade("asc",16))
            },
            pay(){
                player.asc.points = player.asc.points.sub(16)
                player.asc.upgrades.push("17")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",13)?true:false)
                let b = (hasUpgrade("asc",15)?true:false)
                let c = (hasUpgrade("asc",16)?true:false)
                let g = (hasUpgrade("asc",17)?true:false)
                let d = ['13',3,10,'gray']
                let e = ['15',3,10,'gray']
                let f = ['16',3,10,'gray']
                if(a == true){
                    d = ['13',1,10,'white']
                }
                if(b == true){
                    e = ['15',1,10,'white']
                }
                if(c == true){
                    f = ['16',1,10,'white']
                }
                if(g == true){
                    d = ['13',1,10,getFasterUndulatingColor()]
                    e = ['15',1,10,getFasterUndulatingColor()]
                    f = ['16',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Hypermodes don't reset anything<br>Cost: 16 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",17))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",17))?"rgb(42, 179, 221)":((tmp.asc.upgrades[17].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",17))?"rgb(0, 0, 0)":((tmp.asc.upgrades[17].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"750px",
                "right":"0",
                "left":"0"
            },
        },

        18: {
            title: "",
            description() {
                return "<h3>AB-L"
            },
            canAfford(){
                return (player.asc.points.gte(4) && hasUpgrade("asc",13) && hasUpgrade("asc",14))
            },
            pay(){
                player.asc.points = player.asc.points.sub(4)
                player.asc.upgrades.push("18")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",13)?true:false)
                let b = (hasUpgrade("asc",14)?true:false)
                let e = (hasUpgrade("asc",18)?true:false)
                let c = ['13',3,10,'gray']
                let d = ['14',3,10,'gray']
                if(a == true){
                    c = ['13',1,10,'white']
                }
                if(b == true){
                    d = ['14',1,10,'white']
                }
                if(e == true){
                    c = ['13',1,10,getFasterUndulatingColor()]
                    d = ['14',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            tooltip: "Unlock 'Level Up' autobuyer<br>Cost: 4 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",18))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",18))?"rgb(221, 218, 42)":((tmp.asc.upgrades[18].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",18))?"rgb(0, 0, 0)":((tmp.asc.upgrades[18].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"600px",
                "left":"850px"
            },
        },

        19: {
            title: "",
            description() {
                return "<h3>AB-O"
            },
            canAfford(){
                return (player.asc.points.gte(8) && hasUpgrade("asc",18) && hasUpgrade("asc",21))
            },
            pay(){
                player.asc.points = player.asc.points.sub(8)
                player.asc.upgrades.push("19")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",18)?true:false)
                let b = (hasUpgrade("asc",21)?true:false)
                let e = (hasUpgrade("asc",19)?true:false)
                let c = ['18',3,10,'gray']
                let d = ['21',3,10,'gray']
                if(a == true){
                    c = ['18',1,10,'white']
                }
                if(b == true){
                    d = ['21',1,10,'white']
                }
                if(e == true){
                    c = ['18',1,10,getFasterUndulatingColor()]
                    d = ['21',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            tooltip: "Unlock 'Overdrive' autobuyer<br>Cost: 8 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",19))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",19))?"rgb(42, 221, 57)":((tmp.asc.upgrades[19].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",19))?"rgb(0, 0, 0)":((tmp.asc.upgrades[19].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"400px",
                "left":"750px"
            },
        },

        21: {
            title: "",
            description() {
                return "<h3>KU-1"
            },
            canAfford(){
                return (player.asc.points.gte(4) && hasUpgrade("asc",12) && hasUpgrade("asc",14))
            },
            pay(){
                player.asc.points = player.asc.points.sub(4)
                player.asc.upgrades.push("21")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",12)?true:false)
                let b = (hasUpgrade("asc",14)?true:false)
                let e = (hasUpgrade("asc",21)?true:false)
                let c = ['12',3,10,'gray']
                let d = ['14',3,10,'gray']
                if(a == true){
                    c = ['12',1,10,'white']
                }
                if(b == true){
                    d = ['14',1,10,'white']
                }
                if(e == true){
                    c = ['12',1,10,getFasterUndulatingColor()]
                    d = ['14',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            tooltip: "Keep the first row of upgrades<br>Cost: 4 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",21))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",21))?"rgb(218, 221, 42)":((tmp.asc.upgrades[21].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",21))?"rgb(0, 0, 0)":((tmp.asc.upgrades[21].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"450px",
                "right":"0",
                "left":"0"
            },
        },

        22: {
            title: "",
            description() {
                return "<h3>KU-2"
            },
            canAfford(){
                return (player.asc.points.gte(16) && hasUpgrade("asc",19) && hasUpgrade("asc",21) && hasUpgrade("asc",25))
            },
            pay(){
                player.asc.points = player.asc.points.sub(16)
                player.asc.upgrades.push("22")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return hasChallenge("asc",11)
            },
            branches(){
                let a = (hasUpgrade("asc",19)?true:false)
                let b = (hasUpgrade("asc",21)?true:false)
                let c = (hasUpgrade("asc",25)?true:false)
                let g = (hasUpgrade("asc",22)?true:false)
                let d = ['19',3,10,'gray']
                let e = ['21',3,10,'gray']
                let f = ['25',3,10,'gray']
                if(a == true){
                    d = ['19',1,10,'white']
                }
                if(b == true){
                    e = ['21',1,10,'white']
                }
                if(c == true){
                    f = ['25',1,10,'white']
                }
                if(g == true){
                    d = ['19',1,10,getFasterUndulatingColor()]
                    e = ['21',1,10,getFasterUndulatingColor()]
                    f = ['25',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Keep the second row of upgrades<br>Cost: 16 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",22))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",22))?"rgb(42, 185, 221)":((tmp.asc.upgrades[22].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",22))?"rgb(0, 0, 0)":((tmp.asc.upgrades[22].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"355px",
                "right":"0",
                "left":"0"
            },
        },

        23: {
            title: "",
            description() {
                return "<h3>KU-3"
            },
            canAfford(){
                return (player.asc.points.gte(64) && hasUpgrade("asc",22) && hasUpgrade("asc",28) && hasUpgrade("asc",29))
            },
            pay(){
                player.asc.points = player.asc.points.sub(64)
                player.asc.upgrades.push("23")
            },
            unlocked(){
                if(hasUpgrade("asc",51)) return false
                return hasChallenge("asc",13)
            },
            branches(){
                let a = (hasUpgrade("asc",22)?true:false)
                let b = (hasUpgrade("asc",28)?true:false)
                let c = (hasUpgrade("asc",29)?true:false)
                let g = (hasUpgrade("asc",23)?true:false)
                let d = ['22',3,10,'gray']
                let e = ['28',3,10,'gray']
                let f = ['29',3,10,'gray']
                if(a == true){
                    d = ['22',1,10,'white']
                }
                if(b == true){
                    e = ['28',1,10,'white']
                }
                if(c == true){
                    f = ['29',1,10,'white']
                }
                if(g == true){
                    d = ['22',1,10,getFasterUndulatingColor()]
                    e = ['28',1,10,getFasterUndulatingColor()]
                    f = ['29',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Keep the third row of upgrades<br>Cost: 64 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",23))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",23))?"rgb(238, 85, 230)":((tmp.asc.upgrades[23].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",23))?"rgb(0, 0, 0)":((tmp.asc.upgrades[23].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"260px",
                "right":"0",
                "left":"0"
            },
        },

        24: {
            title: "",
            description() {
                return "<h3>DS-UPG"
            },
            canAfford(){
                return (player.asc.points.gte(4) && hasUpgrade("asc",12) && hasUpgrade("asc",13))
            },
            pay(){
                player.asc.points = player.asc.points.sub(4)
                player.asc.upgrades.push("24")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",12)?true:false)
                let b = (hasUpgrade("asc",13)?true:false)
                let e = (hasUpgrade("asc",24)?true:false)
                let c = ['12',3,10,'gray']
                let d = ['13',3,10,'gray']
                if(a == true){
                    c = ['12',1,10,'white']
                }
                if(b == true){
                    d = ['13',1,10,'white']
                }
                if(e == true){
                    c = ['12',1,10,getFasterUndulatingColor()]
                    d = ['13',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            tooltip: "Upgrades don't subtract particles when bought<br>Cost: 4 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",24))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",24))?"rgb(221, 218, 42)":((tmp.asc.upgrades[24].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",24))?"rgb(0, 0, 0)":((tmp.asc.upgrades[24].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"600px",
                "right":"850px"
            },
        },

        25: {
            title: "",
            description() {
                return "<h3>AB-ASC"
            },
            canAfford(){
                return (player.asc.points.gte(8) && hasUpgrade("asc",21) && hasUpgrade("asc",24))
            },
            pay(){
                player.asc.points = player.asc.points.sub(8)
                player.asc.upgrades.push("25")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",21)?true:false)
                let b = (hasUpgrade("asc",24)?true:false)
                let e = (hasUpgrade("asc",25)?true:false)
                let c = ['21',3,10,'gray']
                let d = ['24',3,10,'gray']
                if(a == true){
                    c = ['21',1,10,'white']
                }
                if(b == true){
                    d = ['24',1,10,'white']
                }
                if(e == true){
                    c = ['21',1,10,getFasterUndulatingColor()]
                    d = ['24',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            tooltip: "Unlock Ascension autobuyer<br>Cost: 8 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",25))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",25))?"rgb(42, 221, 57)":((tmp.asc.upgrades[25].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",25))?"rgb(0, 0, 0)":((tmp.asc.upgrades[25].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"400px",
                "right":"750px"
            },
        },

        26: {
            title: "",
            description() {
                return "<h3>AB-H"
            },
            canAfford(){
                return (player.asc.points.gte(16) && hasUpgrade("asc",15) && hasUpgrade("asc",18) && hasUpgrade("asc",19))
            },
            pay(){
                player.asc.points = player.asc.points.sub(16)
                player.asc.upgrades.push("26")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",15)?true:false)
                let b = (hasUpgrade("asc",18)?true:false)
                let c = (hasUpgrade("asc",19)?true:false)
                let g = (hasUpgrade("asc",26)?true:false)
                let d = ['15',3,10,'gray']
                let e = ['18',3,10,'gray']
                let f = ['19',3,10,'gray']
                if(a == true){
                    d = ['15',1,10,'white']
                }
                if(b == true){
                    e = ['18',1,10,'white']
                }
                if(c == true){
                    f = ['19',1,10,'white']
                }
                if(g == true){
                    d = ['15',1,10,getFasterUndulatingColor()]
                    e = ['18',1,10,getFasterUndulatingColor()]
                    f = ['19',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Unlock 'Hypermode' autobuyer<br>Cost: 16 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",26))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",26))?"rgb(42, 185, 221)":((tmp.asc.upgrades[26].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",26))?"rgb(0, 0, 0)":((tmp.asc.upgrades[26].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"550px",
                "left":"560px"
            },
        },

        27: {
            title: "",
            description() {
                return "<h3>AP-1"
            },
            canAfford(){
                return (player.asc.points.gte(16) && hasUpgrade("asc",16) && hasUpgrade("asc",24) && hasUpgrade("asc",25))
            },
            pay(){
                player.asc.points = player.asc.points.sub(16)
                player.asc.upgrades.push("27")
            },
            unlocked(){
                if(player.asc.upgrades.length >= 42) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",16)?true:false)
                let b = (hasUpgrade("asc",24)?true:false)
                let c = (hasUpgrade("asc",25)?true:false)
                let g = (hasUpgrade("asc",27)?true:false)
                let d = ['16',3,10,'gray']
                let e = ['24',3,10,'gray']
                let f = ['25',3,10,'gray']
                if(a == true){
                    d = ['16',1,10,'white']
                }
                if(b == true){
                    e = ['24',1,10,'white']
                }
                if(c == true){
                    f = ['25',1,10,'white']
                }
                if(g == true){
                    d = ['16',1,10,getFasterUndulatingColor()]
                    e = ['24',1,10,getFasterUndulatingColor()]
                    f = ['25',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Double AP gained on Ascension<br>Cost: 16 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",27))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",27))?"rgb(42, 185, 221)":((tmp.asc.upgrades[27].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",27))?"rgb(0, 0, 0)":((tmp.asc.upgrades[27].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"550px",
                "right":"560px"
            },
        },

        28: {
            title: "",
            description() {
                return "<h3>UPB-10"
            },
            canAfford(){
                return (player.asc.points.gte(32) && hasUpgrade("asc",19) && hasUpgrade("asc",22) && hasUpgrade("asc",26))
            },
            pay(){
                player.asc.points = player.asc.points.sub(32)
                player.asc.upgrades.push("28")
            },
            unlocked(){
                if(hasUpgrade("asc",56)) return false
                return hasChallenge("asc",12)
            },
            branches(){
                let a = (hasUpgrade("asc",19)?true:false)
                let b = (hasUpgrade("asc",22)?true:false)
                let c = (hasUpgrade("asc",26)?true:false)
                let g = (hasUpgrade("asc",28)?true:false)
                let d = ['19',3,10,'gray']
                let e = ['22',3,10,'gray']
                let f = ['26',3,10,'gray']
                if(a == true){
                    d = ['19',1,10,'white']
                }
                if(b == true){
                    e = ['22',1,10,'white']
                }
                if(c == true){
                    f = ['26',1,10,'white']
                }
                if(g == true){
                    d = ['19',1,10,getFasterUndulatingColor()]
                    e = ['22',1,10,getFasterUndulatingColor()]
                    f = ['26',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Upgrade 10 effect on 'Power Up' cost is slightly better<br>Cost: 32 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",28))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",28))?"rgb(105, 42, 221)":((tmp.asc.upgrades[28].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",28))?"rgb(0, 0, 0)":((tmp.asc.upgrades[28].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"310px",
                "left":"640px"
            },
        },

        29: {
            title: "",
            description() {
                return "<h3>UPB-11"
            },
            canAfford(){
                return (player.asc.points.gte(32) && hasUpgrade("asc",22) && hasUpgrade("asc",25) && hasUpgrade("asc",27))
            },
            pay(){
                player.asc.points = player.asc.points.sub(32)
                player.asc.upgrades.push("29")
            },
            unlocked(){
                if(hasUpgrade("asc",53)) return false
                return hasChallenge("asc",12)
            },
            branches(){
                let a = (hasUpgrade("asc",22)?true:false)
                let b = (hasUpgrade("asc",25)?true:false)
                let c = (hasUpgrade("asc",27)?true:false)
                let g = (hasUpgrade("asc",29)?true:false)
                let d = ['22',3,10,'gray']
                let e = ['25',3,10,'gray']
                let f = ['27',3,10,'gray']
                if(a == true){
                    d = ['22',1,10,'white']
                }
                if(b == true){
                    e = ['25',1,10,'white']
                }
                if(c == true){
                    f = ['27',1,10,'white']
                }
                if(g == true){
                    d = ['22',1,10,getFasterUndulatingColor()]
                    e = ['25',1,10,getFasterUndulatingColor()]
                    f = ['27',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Upgrade 11 reduces Hypermode requirement by 2 instead of 1<br>Cost: 32 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",29))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",29))?"rgb(105, 42, 221)":((tmp.asc.upgrades[29].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",29))?"rgb(0, 0, 0)":((tmp.asc.upgrades[29].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"310px",
                "right":"640px"
            },
        },

        31: {
            title: "",
            description() {
                return "<h3>UPB-6"
            },
            canAfford(){
                return (player.asc.points.gte(32) && hasUpgrade("asc",15) && hasUpgrade("asc",17) && hasUpgrade("asc",26))
            },
            pay(){
                player.asc.points = player.asc.points.sub(32)
                player.asc.upgrades.push("31")
            },
            unlocked(){
                if(hasUpgrade("asc",54)) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",15)?true:false)
                let b = (hasUpgrade("asc",17)?true:false)
                let c = (hasUpgrade("asc",26)?true:false)
                let g = (hasUpgrade("asc",31)?true:false)
                let d = ['15',3,10,'gray']
                let e = ['17',3,10,'gray']
                let f = ['26',3,10,'gray']
                if(a == true){
                    d = ['15',1,10,'white']
                }
                if(b == true){
                    e = ['17',1,10,'white']
                }
                if(c == true){
                    f = ['26',1,10,'white']
                }
                if(g == true){
                    d = ['15',1,10,getFasterUndulatingColor()]
                    e = ['17',1,10,getFasterUndulatingColor()]
                    f = ['26',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Upgrade 6's Booster requirement is halved<br>Cost: 32 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",31))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",31))?"rgb(105, 42, 221)":((tmp.asc.upgrades[31].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",31))?"rgb(0, 0, 0)":((tmp.asc.upgrades[31].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"800px",
                "left":"640px"
            },
        },

        32: {
            title: "",
            description() {
                return "<h3>UPB-7"
            },
            canAfford(){
                return (player.asc.points.gte(32) && hasUpgrade("asc",16) && hasUpgrade("asc",17) && hasUpgrade("asc",27))
            },
            pay(){
                player.asc.points = player.asc.points.sub(32)
                player.asc.upgrades.push("32")
            },
            unlocked(){
                if(hasUpgrade("asc",55)) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",16)?true:false)
                let b = (hasUpgrade("asc",17)?true:false)
                let c = (hasUpgrade("asc",27)?true:false)
                let g = (hasUpgrade("asc",32)?true:false)
                let d = ['16',3,10,'gray']
                let e = ['17',3,10,'gray']
                let f = ['27',3,10,'gray']
                if(a == true){
                    d = ['16',1,10,'white']
                }
                if(b == true){
                    e = ['17',1,10,'white']
                }
                if(c == true){
                    f = ['27',1,10,'white']
                }
                if(g == true){
                    d = ['16',1,10,getFasterUndulatingColor()]
                    e = ['17',1,10,getFasterUndulatingColor()]
                    f = ['27',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Upgrade 7 has +0.008 added to its effect<br>Cost: 32 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",32))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",32))?"rgb(105, 42, 221)":((tmp.asc.upgrades[32].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",32))?"rgb(0, 0, 0)":((tmp.asc.upgrades[32].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"800px",
                "right":"640px"
            },
        },

        33: {
            title: "",
            description() {
                return "<h3>TR1AL"
            },
            canAfford(){
                return (player.asc.points.gte(64) && hasUpgrade("asc",17) && hasUpgrade("asc",31) && hasUpgrade("asc",32))
            },
            pay(){
                player.asc.points = player.asc.points.sub(32)
                player.asc.upgrades.push("33")
            },
            unlocked(){
                if(hasUpgrade("asc",52)) return false
                return true
            },
            branches(){
                let a = (hasUpgrade("asc",17)?true:false)
                let b = (hasUpgrade("asc",31)?true:false)
                let c = (hasUpgrade("asc",32)?true:false)
                let g = (hasUpgrade("asc",33)?true:false)
                let d = ['17',3,10,'gray']
                let e = ['31',3,10,'gray']
                let f = ['32',3,10,'gray']
                if(a == true){
                    d = ['17',1,10,'white']
                }
                if(b == true){
                    e = ['31',1,10,'white']
                }
                if(c == true){
                    f = ['32',1,10,'white']
                }
                if(g == true){
                    d = ['17',1,10,getFasterUndulatingColor()]
                    e = ['31',1,10,getFasterUndulatingColor()]
                    f = ['32',1,10,getFasterUndulatingColor()]
                }
                return [d,e,f]
            },
            tooltip: "Unlock Trials<br>Cost: 64 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",33))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",33))?"rgb(255, 73, 231)":((tmp.asc.upgrades[33].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",33))?"rgb(0, 0, 0)":((tmp.asc.upgrades[33].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"850px",
                "right":"0",
                "left":"0"
            },
        },

        34: {
            title: "",
            description() {
                return "<h1>△"
            },
            canAfford(){
                return (player.asc.points.gte(1248) && hasUpgrade("asc",23))
            },
            pay(){
                player.asc.points = player.asc.points.sub(1248)
                player.asc.upgrades.push("34")
                playBreakAsc()
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return (player.asc.upgrades.length >= 42)
            },
            branches(){
                let a = (hasUpgrade("asc",23)?true:false)
                let b = (hasUpgrade("asc",28)?true:false)
                let c = (hasUpgrade("asc",29)?true:false)
                let d = (hasUpgrade("asc",31)?true:false)
                let e = (hasUpgrade("asc",32)?true:false)
                let f = (hasUpgrade("asc",33)?true:false)
                let m = (hasUpgrade("asc",34)?true:false)
                let g = ['23',3,10,'gray']
                let h = ['28',3,10,'gray']
                let i = ['29',3,10,'gray']
                let j = ['31',3,10,'gray']
                let k = ['32',3,10,'gray']
                let l = ['33',3,10,'gray']
                if(a == true){
                    g = ['23',1,10,'white']
                }
                if(b == true){
                    h = ['28',1,10,'white']
                }
                if(c == true){
                    i = ['29',1,10,'white']
                }
                if(d == true){
                    j = ['31',1,10,'white']
                }
                if(e == true){
                    k = ['32',1,10,'white']
                }
                if(f == true){
                    l = ['33',1,10,'white']
                }
                if(m == true){
                    g = ['23',1,10,getFasterUndulatingColor()]
                    h = ['28',1,10,getFasterUndulatingColor()]
                    i = ['29',1,10,getFasterUndulatingColor()]
                    j = ['31',1,10,getFasterUndulatingColor()]
                    k = ['32',1,10,getFasterUndulatingColor()]
                    l = ['33',1,10,getFasterUndulatingColor()]
                }
                return [g,h,i,j,k,l]
            },
            tooltip: "Overcome the boundaries of Ascension<br>Cost: 1248 AP",
            style: {"width":"100px","height":"100px",
                "color"(){
                    return (hasUpgrade("asc",34))?"rgb(0, 0, 0)":getFasterUndulatingColor()
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",34))?getFasterUndulatingColor():((tmp.asc.upgrades[34].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",34))?"rgb(0, 0, 0)":((tmp.asc.upgrades[34].canAfford)?getFasterUndulatingColor():"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"530px",
                "right":"0",
                "left":"0",
                "font-size":"24px"
            },
        },

        41: {
            title: "",
            description() {
                return "<h3>ASC-1"
            },
            canAfford(){
                return (player.asc.points.gte(2e5) && hasUpgrade("asc",34))
            },
            pay(){
                player.asc.points = player.asc.points.sub(2e5)
                player.asc.upgrades.push("41")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",34)?true:false)
                let c = (hasUpgrade("asc",41)?true:false)
                let b = ['34',3,10,'gray']
                if(a == true){
                    b = ['34',1,10,'white']
                }
                if(c == true){
                    b = ['34',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Get twice as many Ascensions<br>Cost: 200,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",41))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",41))?"rgb(255, 73, 73)":((tmp.asc.upgrades[41].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",41))?"rgb(0, 0, 0)":((tmp.asc.upgrades[41].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"555px",
                "right":"0",
                "left":"200px"
            },
        },

        42: {
            title: "",
            description() {
                return "<h3>AP-2"
            },
            canAfford(){
                return (player.asc.points.gte(1e5) && hasUpgrade("asc",34))
            },
            pay(){
                player.asc.points = player.asc.points.sub(1e5)
                player.asc.upgrades.push("42")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",34)?true:false)
                let c = (hasUpgrade("asc",42)?true:false)
                let b = ['34',3,10,'gray']
                if(a == true){
                    b = ['34',1,10,'white']
                }
                if(c == true){
                    b = ['34',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Get twice as many Ascension Particles<br>Cost: 100,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",42))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",42))?"rgb(255, 73, 73)":((tmp.asc.upgrades[42].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",42))?"rgb(0, 0, 0)":((tmp.asc.upgrades[42].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"555px",
                "right":"200px",
                "left":"0"
            },
        },

        43: {
            title: "",
            description() {
                return "<h3>PC-B"
            },
            canAfford(){
                return (player.asc.points.gte(3e5) && hasUpgrade("asc",42))
            },
            pay(){
                player.asc.points = player.asc.points.sub(3e5)
                player.asc.upgrades.push("43")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",42)?true:false)
                let c = (hasUpgrade("asc",43)?true:false)
                let b = ['42',3,10,'gray']
                if(a == true){
                    b = ['42',1,10,'white']
                }
                if(c == true){
                    b = ['42',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Particle Chargers are x1.05 stronger<br>Cost: 300,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",43))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",43))?"rgb(255, 146, 73)":((tmp.asc.upgrades[43].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",43))?"rgb(0, 0, 0)":((tmp.asc.upgrades[43].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"665px",
                "right":"100px",
                "left":"0"
            },
        },

        44: {
            title: "",
            description() {
                return "<h3>REW-1"
            },
            canAfford(){
                return (player.asc.points.gte(5e5) && hasUpgrade("asc",41))
            },
            pay(){
                player.asc.points = player.asc.points.sub(5e5)
                player.asc.upgrades.push("44")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",41)?true:false)
                let c = (hasUpgrade("asc",44)?true:false)
                let b = ['41',3,10,'gray']
                if(a == true){
                    b = ['41',1,10,'white']
                }
                if(c == true){
                    b = ['41',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Second Ascension Reward is x10 stronger<br>Cost: 500,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",44))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",44))?"rgb(255, 146, 73)":((tmp.asc.upgrades[44].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",44))?"rgb(0, 0, 0)":((tmp.asc.upgrades[44].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"445px",
                "right":"0",
                "left":"100px"
            },
        },

        45: {
            title: "",
            description() {
                return "<h3>CSR-GBC"
            },
            canAfford(){
                return (player.asc.points.gte(1e6) && hasUpgrade("asc",43))
            },
            pay(){
                player.asc.points = player.asc.points.sub(1e6)
                player.asc.upgrades.push("45")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",43)?true:false)
                let c = (hasUpgrade("asc",45)?true:false)
                let b = ['43',3,10,'gray']
                if(a == true){
                    b = ['43',1,10,'white']
                }
                if(c == true){
                    b = ['43',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Reduce cost scaling for Generators, Boosters and Chargers<br>Cost: 1,000,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",45))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",45))?"rgb(255, 252, 73)":((tmp.asc.upgrades[45].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",45))?"rgb(0, 0, 0)":((tmp.asc.upgrades[45].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"715px",
                "right":"0",
                "left":"150px"
            },
        },

        46: {
            title: "",
            description() {
                return "<h3>CSR-P"
            },
            canAfford(){
                return (player.asc.points.gte(2.5e6) && hasUpgrade("asc",44))
            },
            pay(){
                player.asc.points = player.asc.points.sub(2.5e6)
                player.asc.upgrades.push("46")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",44)?true:false)
                let c = (hasUpgrade("asc",46)?true:false)
                let b = ['44',3,10,'gray']
                if(a == true){
                    b = ['44',1,10,'white']
                }
                if(c == true){
                    b = ['44',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Reduce cost scaling for Power Ups<br>Cost: 2,500,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",46))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",46))?"rgb(255, 252, 73)":((tmp.asc.upgrades[46].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",46))?"rgb(0, 0, 0)":((tmp.asc.upgrades[46].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"395px",
                "right":"150px",
                "left":"0"
            },
        },

        47: {
            title: "",
            description() {
                return "<h3>CR-L"
            },
            canAfford(){
                return (player.asc.points.gte(1e7) && hasUpgrade("asc",45))
            },
            pay(){
                player.asc.points = player.asc.points.sub(1e7)
                player.asc.upgrades.push("47")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",45)?true:false)
                let c = (hasUpgrade("asc",47)?true:false)
                let b = ['45',3,10,'gray']
                if(a == true){
                    b = ['45',1,10,'white']
                }
                if(c == true){
                    b = ['45',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Reduce the cost of Level Ups<br>Cost: 10,000,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",47))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",47))?"rgb(94, 255, 73)":((tmp.asc.upgrades[47].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",47))?"rgb(0, 0, 0)":((tmp.asc.upgrades[47].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"665px",
                "right":"0",
                "left":"400px"
            },
        },

        48: {
            title: "",
            description() {
                return "<h3>CR-O"
            },
            canAfford(){
                return (player.asc.points.gte(2.5e7) && hasUpgrade("asc",46))
            },
            pay(){
                player.asc.points = player.asc.points.sub(2.5e7)
                player.asc.upgrades.push("48")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",46)?true:false)
                let c = (hasUpgrade("asc",48)?true:false)
                let b = ['46',3,10,'gray']
                if(a == true){
                    b = ['46',1,10,'white']
                }
                if(c == true){
                    b = ['46',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Reduce the cost of Overdrives<br>Cost: 25,000,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",48))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",48))?"rgb(94, 255, 73)":((tmp.asc.upgrades[48].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",48))?"rgb(0, 0, 0)":((tmp.asc.upgrades[48].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"445px",
                "right":"400px",
                "left":"0"
            },
        },

        51: {
            title: "",
            description() {
                return "<h3>CR-H"
            },
            canAfford(){
                return (player.asc.points.gte(5e7) && hasUpgrade("asc",47))
            },
            pay(){
                player.asc.points = player.asc.points.sub(5e7)
                player.asc.upgrades.push("51")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",47)?true:false)
                let c = (hasUpgrade("asc",51)?true:false)
                let b = ['47',3,10,'gray']
                if(a == true){
                    b = ['47',1,10,'white']
                }
                if(c == true){
                    b = ['47',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Reduce the cost of Hypermodes<br>Cost: 50,000,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",51))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",51))?"rgb(73, 203, 255)":((tmp.asc.upgrades[51].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",51))?"rgb(0, 0, 0)":((tmp.asc.upgrades[51].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"555px",
                "right":"0",
                "left":"550px"
            },
        },

        52: {
            title: "",
            description() {
                return "<h3>TR2AL"
            },
            canAfford(){
                return (player.asc.points.gte(5e8) && hasUpgrade("asc",48))
            },
            pay(){
                player.asc.points = player.asc.points.sub(5e8)
                player.asc.upgrades.push("52")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return hasUpgrade("asc",34)
            },
            branches(){
                let a = (hasUpgrade("asc",48)?true:false)
                let c = (hasUpgrade("asc",52)?true:false)
                let b = ['48',3,10,'gray']
                if(a == true){
                    b = ['48',1,10,'white']
                }
                if(c == true){
                    b = ['48',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Unlock Hard Trials<br>Cost: 500,000,000 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",52))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",52))?"rgb(73, 203, 255)":((tmp.asc.upgrades[52].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",52))?"rgb(0, 0, 0)":((tmp.asc.upgrades[52].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"555px",
                "right":"550px",
                "left":"0"
            },
        },

        53: {
            title: "",
            description() {
                return "<h3>TIME-P"
            },
            canAfford(){
                return (player.asc.points.gte(2e10) && hasUpgrade("asc",51))
            },
            pay(){
                player.asc.points = player.asc.points.sub(5e8)
                player.asc.upgrades.push("53")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return (hasUpgrade("asc",34) && hasChallenge("asc",21))
            },
            branches(){
                let a = (hasUpgrade("asc",51)?true:false)
                let c = (hasUpgrade("asc",53)?true:false)
                let b = ['51',3,10,'gray']
                if(a == true){
                    b = ['51',1,10,'white']
                }
                if(c == true){
                    b = ['51',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Total time played divides 'Power Up' cost<br>Cost: 2.000e10 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",53))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",53))?"rgb(76, 73, 255)":((tmp.asc.upgrades[53].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",53))?"rgb(0, 0, 0)":((tmp.asc.upgrades[53].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"425px",
                "right":"0",
                "left":"540px"
            },
        },

        54: {
            title: "",
            description() {
                return "<h3>CR2-PL"
            },
            canAfford(){
                return (player.asc.points.gte(2e11) && hasUpgrade("asc",52))
            },
            pay(){
                player.asc.points = player.asc.points.sub(5e8)
                player.asc.upgrades.push("54")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return (hasUpgrade("asc",34) && hasChallenge("asc",21))
            },
            branches(){
                let a = (hasUpgrade("asc",52)?true:false)
                let c = (hasUpgrade("asc",54)?true:false)
                let b = ['52',3,10,'gray']
                if(a == true){
                    b = ['52',1,10,'white']
                }
                if(c == true){
                    b = ['52',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Further reduce the costs of Power Ups and Level Ups<br>Cost: 2.000e11 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",54))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",54))?"rgb(76, 73, 255)":((tmp.asc.upgrades[54].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",54))?"rgb(0, 0, 0)":((tmp.asc.upgrades[54].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"685px",
                "right":"540px",
                "left":"0"
            },
        },

        55: {
            title: "",
            description() {
                return "<h3>REW-2"
            },
            canAfford(){
                return (player.asc.points.gte(5e11) && hasUpgrade("asc",53))
            },
            pay(){
                player.asc.points = player.asc.points.sub(5e11)
                player.asc.upgrades.push("55")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return (hasUpgrade("asc",34) && hasChallenge("asc",22))
            },
            branches(){
                let a = (hasUpgrade("asc",53)?true:false)
                let c = (hasUpgrade("asc",55)?true:false)
                let b = ['53',3,10,'gray']
                if(a == true){
                    b = ['53',1,10,'white']
                }
                if(c == true){
                    b = ['53',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Third Ascendant Reward is x20 stronger<br>Cost: 5.000e11 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",55))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",55))?"rgb(164, 27, 255)":((tmp.asc.upgrades[55].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",55))?"rgb(0, 0, 0)":((tmp.asc.upgrades[55].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"325px",
                "right":"0",
                "left":"340px"
            },
        },

        56: {
            title: "",
            description() {
                return "<h3>CR2-OH"
            },
            canAfford(){
                return (player.asc.points.gte(1e13) && hasUpgrade("asc",54))
            },
            pay(){
                player.asc.points = player.asc.points.sub(1e13)
                player.asc.upgrades.push("56")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return (hasUpgrade("asc",34) && hasChallenge("asc",22))
            },
            branches(){
                let a = (hasUpgrade("asc",54)?true:false)
                let c = (hasUpgrade("asc",56)?true:false)
                let b = ['54',3,10,'gray']
                if(a == true){
                    b = ['54',1,10,'white']
                }
                if(c == true){
                    b = ['54',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Further reduce the costs of Overdrives and Hypermodes<br>Cost: 1.000e13 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",56))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",56))?"rgb(164, 27, 255)":((tmp.asc.upgrades[56].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",56))?"rgb(0, 0, 0)":((tmp.asc.upgrades[56].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"790px",
                "right":"340px",
                "left":"0"
            },
        },

        57: {
            title: "",
            description() {
                return "<h1>◁"
            },
            canAfford(){
                return (player.asc.points.gte(2e18) && hasUpgrade("asc",55))
            },
            pay(){
                player.asc.points = player.asc.points.sub(2e18)
                player.asc.upgrades.push("57")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return (hasUpgrade("asc",34) && hasChallenge("asc",23))
            },
            branches(){
                let a = (hasUpgrade("asc",55)?true:false)
                let c = (hasUpgrade("asc",57)?true:false)
                let b = ['55',3,10,'gray']
                if(a == true){
                    b = ['55',1,10,'white']
                }
                if(c == true){
                    b = ['55',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Half of a whole. Boosts AP gain<br>Cost: 2.000e18 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",57))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",57))?"rgb(250, 104, 230)":((tmp.asc.upgrades[57].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",57))?"rgb(0, 0, 0)":((tmp.asc.upgrades[57].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"280px",
                "right":"0",
                "left":"0"
            },
        },

        58: {
            title: "",
            description() {
                return "<h1>▷"
            },
            canAfford(){
                return (player.asc.points.gte(5e21) && hasUpgrade("asc",56))
            },
            pay(){
                player.asc.points = player.asc.points.sub(5e21)
                player.asc.upgrades.push("58")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return (hasUpgrade("asc",34) && hasChallenge("asc",23))
            },
            branches(){
                let a = (hasUpgrade("asc",56)?true:false)
                let c = (hasUpgrade("asc",58)?true:false)
                let b = ['56',3,10,'gray']
                if(a == true){
                    b = ['56',1,10,'white']
                }
                if(c == true){
                    b = ['56',1,10,getFasterUndulatingColor()]
                }
                return [b]
            },
            tooltip: "Half of a whole. Boosts Ascension gain<br>Cost: 5.000e21 AP",
            style: {"width":"50px","height":"50px",
                "color"(){
                    return (hasUpgrade("asc",58))?"rgb(0, 0, 0)":"white"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",58))?"rgb(250, 104, 230)":((tmp.asc.upgrades[58].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",58))?"rgb(0, 0, 0)":((tmp.asc.upgrades[58].canAfford)?"white":"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"830px",
                "right":"0",
                "left":"0"
            },
        },

        59: {
            title: "",
            description() {
                return "<h1>▷◁"
            },
            canAfford(){
                return (player.asc.points.gte(5e21) && hasUpgrade("asc",57) && hasUpgrade("asc",58))
            },
            pay(){
                player.asc.points = player.asc.points.sub(5e21)
                player.asc.upgrades.push("59")
            },
            unlocked(){
                if(hasUpgrade("asc",59)) return false
                return (hasUpgrade("asc",57) && hasUpgrade("asc",58))
            },
            branches(){
                let a = (hasUpgrade("asc",57)?true:false)
                let b = (hasUpgrade("asc",58)?true:false)
                let e = (hasUpgrade("asc",59)?true:false)
                let c = ['57',3,10,'gray']
                let d = ['58',3,10,'gray']
                if(a == true){
                    c = ['57',1,10,'white']
                }
                if(b == true){
                    d = ['58',1,10,'white']
                }
                if(e == true){
                    c = ['57',1,10,getFasterUndulatingColor()]
                    d = ['58',1,10,getFasterUndulatingColor()]
                }
                return [c,d]
            },
            tooltip: "",
            style: {"width":"120px","height":"120px",
                "color"(){
                    return (hasUpgrade("asc",59))?"rgb(0, 0, 0)":(tmp.asc.upgrades[59].canAfford)?getFastestUndulatingColor():"black"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (hasUpgrade("asc",59))?"transparent":((tmp.asc.upgrades[59].canAfford)?a:b)
                },
                "border-color"(){
                    return (hasUpgrade("asc",59))?"rgb(0, 0, 0)":((tmp.asc.upgrades[59].canAfford)?getFastestUndulatingColor():"black")
                },
                "border-radius":"80%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"520px",
                "right":"0",
                "left":"0",
                "font-size":"24px"
            },
        },
    },

    clickables: {
        11: {
            display() {
                let info = "Ascension Rewards<br><br><h2>(Unlock a new reward for every 2 trials completed)</h2>"
                let space = "<br><br><br><br><br><br><br><br><br>"
                return "<h1>"+info+"</h1>"+space+space+space+space
            },
            canClick() {return false},
            unlocked(){
                return true
            },
            style: {'height':'500px', 'width':'1000px',
                "border-radius":"5%",
                "border-color"(){
                    return getFasterUndulatingColor()
                }, 
                "background-color"(){
                    return "black"
                }, 
                "color"(){
                    return getFasterUndulatingColor()
                },
                "top":"100px",
                "bottom":"0",
                "left":"0",
                "right":"0",
                "text-align":"center",
                "position":"absolute"
            },
        },

        21: {
            display() {
                let info = "Particle Generator multiplier x"
                return "<h2>"+info+format(firstAscReward(),3)
            },
            canClick() {return false},
            unlocked(){
                return true
            },
            style: {'height':'100px', 'width':'400px',
                "border-radius":"5%",
                "border-color"(){
                    return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "black"
                }, 
                "color"(){
                    return getFasterUndulatingColor()
                },
                "top":"-100px",
                "bottom":"0",
                "left":"-500px",
                "right":"0",
                "position":"absolute"
            },
        },

        22: {
            display() {
                let info = "Locked"
                let rew2 = ""
                if(getTrialComps() >= 2){
                    info = "'Power Up' multiplier x"
                    rew2 = format(secondAscReward(),3)
                }
                return "<h2>"+info+rew2
            },
            canClick() {return false},
            unlocked(){
                return true
            },
            style: {'height':'100px', 'width':'400px',
                "border-radius":"5%",
                "border-color"(){
                    return "rgba(0, 0, 0, 0)"
                },  
                "background-color"(){
                    return "black"
                }, 
                "color"(){
                    return getFasterUndulatingColor()
                },
                "top":"-100px",
                "bottom":"0",
                "left":"500px",
                "right":"0",
                "position":"absolute"
            },
        },

        31: {
            display() {
                let info = "Locked"
                let rew3 = ""
                let info2 = ""
                if(getTrialComps() >= 4){
                    info = "Get x"
                    rew3 = format(thirdAscReward(),3)
                    info2 = " more Ascensions and AP"
                }
                return "<h2>"+info+rew3+info2
            },
            canClick() {return false},
            unlocked(){
                return true
            },
            style: {'height':'100px', 'width':'400px',
                "border-radius":"5%",
                "border-color"(){
                    return "rgba(0, 0, 0, 0)"
                },  
                "background-color"(){
                    return "black"
                }, 
                "color"(){
                    return getFasterUndulatingColor()
                },
                "top":"175px",
                "bottom":"0",
                "left":"-500px",
                "right":"0",
                "position":"absolute"
            },
        },

        32: {
            display() {
                let info = "Locked"
                let rew4 = ""
                let info2 = ""
                if(getTrialComps() >= 6){
                    info = "/"
                    rew4 = format(fourthAscReward(),3)
                    info2 = " to Power Up, Level Up, Overdrive and Hypermode costs"
                }
                return "<h2>"+info+rew4+info2
            },
            canClick() {return false},
            unlocked(){
                return true
            },
            style: {'height':'100px', 'width':'400px',
                "border-radius":"5%",
                "border-color"(){
                    return "rgba(0, 0, 0, 0)"
                },  
                "background-color"(){
                    return "black"
                }, 
                "color"(){
                    return getFasterUndulatingColor()
                },
                "top":"175px",
                "bottom":"0",
                "left":"500px",
                "right":"0",
                "position":"absolute"
            },
        },

        41: {
            display() {
                let info = "Locked"
                return "<h2>"+info
            },
            canClick() {return false},
            unlocked(){
                return true
            },
            style: {'height':'100px', 'width':'400px',
                "border-radius":"5%",
                "border-color"(){
                    return "rgba(0, 0, 0, 0)"
                },  
                "background-color"(){
                    return "black"
                }, 
                "color"(){
                    return getFasterUndulatingColor()
                },
                "top":"450px",
                "bottom":"0",
                "left":"-500px",
                "right":"0",
                "position":"absolute"
            },
        },

        42: {
            display() {
                let info = "Locked"
                return "<h2>"+info
            },
            canClick() {return false},
            unlocked(){
                return true
            },
            style: {'height':'100px', 'width':'400px',
                "border-radius":"5%",
                "border-color"(){
                    return "rgba(0, 0, 0, 0)"
                },  
                "background-color"(){
                    return "black"
                }, 
                "color"(){
                    return getFasterUndulatingColor()
                },
                "top":"450px",
                "bottom":"0",
                "left":"500px",
                "right":"0",
                "position":"absolute"
            },
        },

        51: {
            display() {
                return ""
            },
            canClick() {return false},
            unlocked(){
                return hasUpgrade("asc",59)
            },
            style: {'height':'320px', 'width':'720px',
                "border-radius":"0%",
                "border-color"(){
                    return "rgba(0, 0, 0, 0)"
                },  
                "background-color"(){
                    return "black"
                },
                "position":"absolute",
                "top":"200px",
                "bottom":"0",
                "left":"0",
                "right":"0"
            },
        },
    },

    challenges: { 
        // rows: 2,
        // cols: 3,
         11: {
            name: "<h2>Weakened</h2>",
            challengeDescription: function() {
                let t1 = "<b>Particle Boosters are slightly weaker</b><br>"
                return t1
            },
            goal(){
                return new Decimal("1.798e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "particles",
            rewardDescription: "<b>Unlock another Ascendant Upgrade<b>",
            function() {
                if (challengeCompletions("asc",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterTrial()
            },
            onComplete(){
                exitTrial()
            },
            onExit() {
                exitTrial()
            },
            unlocked(){
                return true
            },
            style: {"width":"360px","height":"200px",
                "color"(){
                    return (hasChallenge("asc",11))?(getFasterUndulatingColor()):(inChallenge("asc",11)?"rgb(214, 43, 43)":"rgb(105, 62, 62)")
                },
                "background-color":"black",
                "border-color"(){
                    return (hasChallenge("asc",11))?(getFasterUndulatingColor()):(inChallenge("asc",11)?"rgb(214, 43, 43)":"rgb(105, 62, 62)")
                },
                "border-radius":"5%",
                "padding-left":"10px",
                "padding-right":"10px"
            },
            buttonColor(){
                return "black"
            },
            buttonBorderColor(){
                if(canCompleteChallenge("asc",11)) return getFasterUndulatingColor()
                else return (hasChallenge("asc",11))?(getFasterUndulatingColor()):(inChallenge("asc",11)?"rgb(214, 43, 43)":"rgb(105, 62, 62)")
            },
            buttonTextColor(){
                if(canCompleteChallenge("asc",11)) return getFasterUndulatingColor()
                else return "white"
            }
        },

        12: {
            name: "<h2>Limited</h2>",
            challengeDescription: function() {
                let t1 = "<b>You can only buy 6 upgrades</b><br>"
                return t1
            },
            goal(){
                return new Decimal(1e200)
            },
            completionLimit:1 ,
            currencyDisplayName: "particles",
            rewardDescription: "<b>Unlock another Ascendant Upgrade<b>",
            function() {
                if (challengeCompletions("asc",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterTrial()
            },
            onComplete(){
                exitTrial()
            },
            onExit() {
                exitTrial()
            },
            unlocked(){
                return true
            },
            style: {"width":"360px","height":"200px",
                "color"(){
                    return (hasChallenge("asc",12))?(getFasterUndulatingColor()):(inChallenge("asc",12)?"rgb(214, 126, 43)":"rgb(105, 83, 62)")
                },
                "background-color":"black",
                "border-color"(){
                    return (hasChallenge("asc",12))?(getFasterUndulatingColor()):(inChallenge("asc",12)?"rgb(214, 126, 43)":"rgb(105, 83, 62)")
                },
                "border-radius":"5%",
                "padding-left":"10px",
                "padding-right":"10px"
            },
            buttonColor(){
                return "black"
            },
            buttonBorderColor(){
                if(canCompleteChallenge("asc",12)) return getFasterUndulatingColor()
                else return (hasChallenge("asc",12))?(getFasterUndulatingColor()):(inChallenge("asc",12)?"rgb(214, 126, 43)":"rgb(105, 81, 62)")
            },
            buttonTextColor(){
                if(canCompleteChallenge("asc",12)) return getFasterUndulatingColor()
                else return "white"
            }
        },

        13: {
            name: "<h2>Devoid</h2>",
            challengeDescription: function() {
                let t1 = "<b>You can't buy Hypermodes, and can only buy 2 Overdrives</b>"
                return t1
            },
            goal(){
                return new Decimal(1e300)
            },
            completionLimit:1 ,
            currencyDisplayName: "particles",
            rewardDescription: "<b>Unlock another Ascendant Upgrade<b>",
            function() {
                if (challengeCompletions("asc",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterTrial()
            },
            onComplete(){
                exitTrial()
            },
            onExit() {
                exitTrial()
            },
            unlocked(){
                return true
            },
            style: {"width":"360px","height":"200px",
                "color"(){
                    return (hasChallenge("asc",13))?(getFasterUndulatingColor()):(inChallenge("asc",13)?"rgb(214, 211, 43)":"rgb(105, 101, 62)")
                },
                "background-color":"black",
                "border-color"(){
                    return (hasChallenge("asc",13))?(getFasterUndulatingColor()):(inChallenge("asc",13)?"rgb(214, 203, 43)":"rgb(105, 102, 62)")
                },
                "border-radius":"5%",
                "padding-left":"10px",
                "padding-right":"10px"
            },
            buttonColor(){
                return "black"
            },
            buttonBorderColor(){
                if(canCompleteChallenge("asc",13)) return getFasterUndulatingColor()
                else return (hasChallenge("asc",13))?(getFasterUndulatingColor()):(inChallenge("asc",13)?"rgb(214, 197, 43)":"rgb(105, 102, 62)")
            },
            buttonTextColor(){
                if(canCompleteChallenge("asc",13)) return getFasterUndulatingColor()
                else return "white"
            }
        },
        
        21: {
            name: "<h2>Weakened S</h2>",
            challengeDescription: function() {
                let t1 = "<b>Particle Boosters and Hypermodes are moderately weaker</b>"
                return t1
            },
            goal(){
                return new Decimal("1.798e308308")
            },
            completionLimit:1 ,
            currencyDisplayName: "particles",
            rewardDescription: "<b>Unlock the next 2 Ascendant Upgrades<b>",
            function() {
                if (challengeCompletions("asc",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterTrial()
            },
            onComplete(){
                exitTrial()
            },
            onExit() {
                exitTrial()
            },
            unlocked(){
                return true
            },
            style: {"width":"360px","height":"200px",
                "color"(){
                    return (hasChallenge("asc",21))?(getFasterUndulatingColor()):(inChallenge("asc",21)?"rgb(49, 214, 43)":"rgb(63, 105, 62)")
                },
                "background-color":"black",
                "border-color"(){
                    return (hasChallenge("asc",21))?(getFasterUndulatingColor()):(inChallenge("asc",21)?"rgb(71, 214, 43)":"rgb(63, 105, 62)")
                },
                "border-radius":"5%",
                "padding-left":"10px",
                "padding-right":"10px"
            },
            buttonColor(){
                return "black"
            },
            buttonBorderColor(){
                if(canCompleteChallenge("asc",21)) return getFasterUndulatingColor()
                else return (hasChallenge("asc",21))?(getFasterUndulatingColor()):(inChallenge("asc",21)?"rgb(57, 214, 43)":"rgb(63, 105, 62)")
            },
            buttonTextColor(){
                if(canCompleteChallenge("asc",21)) return getFasterUndulatingColor()
                else return "white"
            }
        },

        22: {
            name: "<h2>Limited II</h2>",
            challengeDescription: function() {
                let t1 = "<b>You can only buy 4 upgrades</b><br>"
                return t1
            },
            goal(){
                return new Decimal("1e7.25e6")
            },
            completionLimit:1 ,
            currencyDisplayName: "particles",
            rewardDescription: "<b>Unlock another 2 Ascendant Upgrades<b>",
            function() {
                if (challengeCompletions("asc",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterTrial()
            },
            onComplete(){
                exitTrial()
            },
            onExit() {
                exitTrial()
            },
            unlocked(){
                return true
            },
            style: {"width":"360px","height":"200px",
                "color"(){
                    return (hasChallenge("asc",22))?(getFasterUndulatingColor()):(inChallenge("asc",22)?"rgb(43, 214, 214)":"rgb(62, 105, 103)")
                },
                "background-color":"black",
                "border-color"(){
                    return (hasChallenge("asc",22))?(getFasterUndulatingColor()):(inChallenge("asc",22)?"rgb(43, 208, 214)":"rgb(62, 105, 103)")
                },
                "border-radius":"5%",
                "padding-left":"10px",
                "padding-right":"10px"
            },
            buttonColor(){
                return "black"
            },
            buttonBorderColor(){
                if(canCompleteChallenge("asc",22)) return getFasterUndulatingColor()
                else return (hasChallenge("asc",22))?(getFasterUndulatingColor()):(inChallenge("asc",22)?"rgb(43, 214, 205)":"rgb(62, 105, 103)")
            },
            buttonTextColor(){
                if(canCompleteChallenge("asc",22)) return getFasterUndulatingColor()
                else return "white"
            }
        },

        23: {
            name: "<h2>Devoid II</h2>",
            challengeDescription: function() {
                let t1 = "<b>You can't buy Hypermodes/Overdrives, and can only buy 6 Level-Ups</b>"
                return t1
            },
            goal(){
                return new Decimal("1e6250")
            },
            completionLimit:1 ,
            currencyDisplayName: "particles",
            rewardDescription: "<b>Unlock the final 2 Ascendant Upgrades<b>",
            function() {
                if (challengeCompletions("asc",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterTrial()
            },
            onComplete(){
                exitTrial()
            },
            onExit() {
                exitTrial()
            },
            unlocked(){
                return true
            },
            style: {"width":"360px","height":"200px",
                "color"(){
                    return (hasChallenge("asc",23))?(getFasterUndulatingColor()):(inChallenge("asc",23)?"rgb(43, 103, 214)":"rgb(62, 77, 105)")
                },
                "background-color":"black",
                "border-color"(){
                    return (hasChallenge("asc",23))?(getFasterUndulatingColor()):(inChallenge("asc",23)?"rgb(43, 111, 214)":"rgb(62, 76, 105)")
                },
                "border-radius":"5%",
                "padding-left":"10px",
                "padding-right":"10px"
            },
            buttonColor(){
                return "black"
            },
            buttonBorderColor(){
                if(canCompleteChallenge("asc",23)) return getFasterUndulatingColor()
                else return (hasChallenge("asc",23))?(getFasterUndulatingColor()):(inChallenge("asc",23)?"rgb(43, 97, 214)":"rgb(62, 76, 105)")
            },
            buttonTextColor(){
                if(canCompleteChallenge("asc",23)) return getFasterUndulatingColor()
                else return "white"
            }
        },
    },

    buyables: {
        11: {
            cost() { 
                let cost = new Decimal("e1e12")
                // if (cost.gte("1.797693e308")) {
                //     let scalereduce = decimalOne
                // }
                return cost.round()
            },
            // brkAscApAmt() {
            //     let aamt = ((player.points).div(1.797692e308)).floor()
            //     if(player.points.gte("1.798e308")) aamt = ((player.points).div(1.797692e308)).max(1).log2().max(1).floor()
            //     if(hasUpgrade("asc",27)) aamt = aamt.times(2)
            //     if(hasUpgrade("asc",42)) aamt = aamt.times(2)
            //     if(getTrialComps() >= 4) aamt = aamt.times(thirdAscReward())
            //     if(hasUpgrade("asc",57)) aamt = aamt.times(2.025e3)
            //     return aamt
            // },
            // brkAscendsAmt() {
            //     let ascsamt = ((player.points).div(1.797692e308)).floor()
            //     if(player.points.gte("1.798e308")) ascsamt = ((player.points).div(1.797692e308)).max(1).log10().pow(0.875).floor()
            //     if(hasUpgrade("asc",41)) ascsamt = ascsamt.times(2)
            //     if(getTrialComps() >= 4) ascsamt = ascsamt.times(thirdAscReward())
            //     if(hasUpgrade("asc",58)) ascsamt = ascsamt.times(20.25)
            //     return ascsamt
            // },
            bought() {
                let b = player.asc.transc
                return b
            },
            display() {
                if (player.tab != "asc") return
                let x = tmp.asc.buyables[11].extra
                let extra = ""
                let bonus = " (Maxed)"
                let bonusDis = ""
                let effbonus = 1
                let dis = "<h1>Transcend\n\n</h1>"
                let reqdis = "\n\n\nReq: "
                let actcost = formatWhole(this.cost())
                actcost = "ℵ<sub>0</sub>"
                //if(hasUpgrade("asc",34)) actcost = ""
                let brkascdis = ""
                //if(hasUpgrade("asc",34)) brkascdis = "<br><br>(+"+formatWhole(this.brkAscApAmt())+" AP)<br><br>(+"+formatWhole(this.brkAscendsAmt())+" Ascensions)"
                let costdis = " particles"
                // if(hasUpgrade("asc",34)) {
                //     costdis = ""
                //     reqdis = ""
                // }
                return dis + "<h3>Reset everything and breach the fabric of existence"+brkascdis+"\
                "+ reqdis + actcost + costdis
            },
            canAfford() {
                if(player.points.gte(tmp[this.layer].buyables[this.id].cost)) return true
            },

            buy() {
                let transcamt = decimalOne
                let tpamt = decimalOne

                

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

                let aup11,aup12,aup13,aup14,aup15,aup16,aup17,aup18,aup19,aup21,aup22,aup23,aup24,aup25,aup26,aup27,aup28,aup29,aup31,aup32,aup33,aup34,aup41,aup42,aup43,aup44,aup45,aup46,aup47,aup48,aup51,aup52,aup53,aup54,aup55,aup56,aup57,aup58,aup59 = []

                // if(hasUpgrade("asc",21)){
                //     if(hasUpgrade("p",11)) up1 = '11'
                //     if(hasUpgrade("p",12)) up2 = '12'
                //     if(hasUpgrade("p",13)) up3 = '13'
                //     if(hasUpgrade("p",14)) up4 = '14'
                // }
                // if(hasUpgrade("asc",22)){
                //     if(hasUpgrade("p",21)) up5 = '21'
                //     if(hasUpgrade("p",22)) up6 = '22'
                //     if(hasUpgrade("p",23)) up7 = '23'
                //     if(hasUpgrade("p",24)) up8 = '24'
                // }
                // if(hasUpgrade("asc",23)){
                //     if(hasUpgrade("p",31)) up9 = '31'
                //     if(hasUpgrade("p",32)) up10 = '32'
                //     if(hasUpgrade("p",33)) up11 = '33'
                //     if(hasUpgrade("p",34)) up12 = '34'
                // }

                if((player.asc.buyables[11]).lt(3)) playTransc()

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
                player.p.asc = decimalZero
                player.asc.ap = decimalZero
                player.asc.points = decimalZero
                player.points = new Decimal(10)
                player.asc.challenges[11] = decimalZero
                player.asc.challenges[12] = decimalZero
                player.asc.challenges[13] = decimalZero
                player.asc.challenges[21] = decimalZero
                player.asc.challenges[22] = decimalZero
                player.asc.challenges[23] = decimalZero
                setClickableState("p",11,0)
                setClickableState("p",12,0)
                setClickableState("p",13,0)
                setClickableState("p",21,0)
                setClickableState("p",22,0)
                setClickableState("p",23,0)
                setClickableState("p",24,0)
                setClickableState("p",25,0)
                player.p.upgrades = [up1,up2,up3,up4,up5,up6,up7,up8,up9,up10,up11,up12]
                player.asc.upgrades = [aup11,aup12,aup13,aup14,aup15,aup16,aup17,aup18,aup19,aup21,aup22,aup23,aup24,aup25,aup26,aup27,aup28,aup29,aup31,aup32,aup33,aup34,aup41,aup42,aup43,aup44,aup45,aup46,aup47,aup48,aup51,aup52,aup53,aup54,aup55,aup56,aup57,aup58,aup59]
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.asc.transc = player.p.asc.add(transcamt)
                player.transc.points = player.asc.points.add(tpamt)
                player.transc.tp = player.asc.ap.add(transcamt)
                tmp.asc.doReset("asc")
            },

            // buyMax() {
            //     buyBuyable("p",35)
            // },

            unlocked() { return hasUpgrade("asc",59) }, 
            style: {'height':'320px', 'width':'720px',
                "color"(){
                    return (tmp.asc.buyables[11].canAfford)?"transparent":"white"
                },
                "-webkit-background-clip"(){
                    if(tmp.asc.buyables[11].canAfford) return "text"
                    return "border-box"
                },
                "background-color"() {
                    let a = "rgb(0, 0, 0)"
                    let b = "rgb(114, 114, 114)"
                    return (tmp.asc.buyables[11].canAfford)?a:b
                },
                "background-image"() {
                    if(tmp.asc.buyables[11].canAfford) return "url(images/bgs/Transcension.gif)"
                },
                "background-size":"cover",
                "background-position":"50% 70%",
                "border-color"(){
                    return (tmp.asc.buyables[11].canAfford)?"white":"black"
                },
                "border-image"(){
                    if(tmp.asc.buyables[11].canAfford) return "url(images/bgs/Transcension.gif) 50"
                },
                "border-radius":"0%",
                //"transform":"rotate(45deg)",
                "position":"absolute",
                "top":"400px",
                "right":"0",
                "left":"0",
                "font-size":"24px"
            },
        },
    },

    update(diff){

    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {
        let keep = []
        let keepTransc = {};
        if (resettingLayer == "asc") {
            keepTransc[11] = getBuyableAmount("asc",11);

            layerDataReset(this.layer, keep)

            for(const [id, amount] of Object.entries(keepTransc)){
                setBuyableAmount("asc", id, amount);
            }
        }
        //if (layers[resettingLayer].row >= this.row) {layerDataReset(this.layer, keep)}
    },
})