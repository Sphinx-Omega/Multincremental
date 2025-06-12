addLayer("transc", {
    name: "tran", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Transcension", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: decimalZero,
        total: decimalZero,
        best: decimalZero,
        tp: decimalZero,
    }},
    color: "rgb(250, 246, 34)",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color":"black",
        "background-position":"center",
        "border-size":"10px",
        "border-color":"rgb(246, 250, 34)",
        "color":"white",
        "font-size":"20px",
        }
    },
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "tp", // Name of prestige currency
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
    row: 2  , // Row the layer is in on the tree (0 is the first row)
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
                        let plur = "<h3>Particles"
                        if(player.transc.points == 1) plur = "<h3>Particle"
                        return "<h3>You have "+transcendText("h1",formatWhole(player.transc.points))+"<h3> Transcendant "+plur
                    }
                ],
                "blank",
                ],
            style: {
                "background"(){
                    return "url(images/bgs/Transcbg.gif)"
                },
                "background-size":"600px",
                "transition":"0s"
            },
            buttonStyle: {
                "border-image":"url(images/bgs/Transcension.gif) 50"
            },
            unlocked(){
                return true
            }
        },
        "Milestones" :{
            content: [
                ["raw-html",
                    function(){
                        let rcol = getFasterUndulatingColor()
                        let plur = "<h3> times"
                        if(player.transc.tp == 1) plur = "<h3> time"
                        return "<h3>You have Transcended "+transcendText("h1",formatWhole(player.transc.tp))+plur
                    }
                ],
                ],
            style: {
                "background"(){
                    return "url(images/bgs/Transcbg.gif)"
                },
                "background-size":"600px",
                "transition":"0s",
                "padding-bottom":"300px",
                "margin-bottom":"-100px",
                "height":"616px"
            },
            buttonStyle: {
                "border-image":"url(images/bgs/Transcension.gif) 50"
            },
            unlocked(){
                return true
            }
        },
    },

    // upgrades: {
        
    //     11: {
    //         title: "",
    //         description() {
    //             return "<h3>AB-GBC"
    //         },
    //         canAfford(){
    //             return player.asc.points.gte(1)
    //         },
    //         pay(){
    //             player.asc.points = player.asc.points.sub(1)
    //             player.asc.upgrades.push("11")
    //         },
    //         unlocked(){
    //             if(player.asc.upgrades.length >= 42) return false
    //             return true
    //         },
    //         tooltip: "Unlock autobuyers for Generators, Boosters and Chargers<br>Cost: 1 AP",
    //         style: {"width":"50px","height":"50px",
    //             "color"(){
    //                 return (hasUpgrade("asc",11))?"rgb(0, 0, 0)":"white"
    //             },
    //             "background-color"() {
    //                 let a = "rgb(0, 0, 0)"
    //                 let b = "rgb(114, 114, 114)"
    //                 return (hasUpgrade("asc",11))?"rgb(221, 42, 42)":((tmp.asc.upgrades[11].canAfford)?a:b)
    //             },
    //             "border-color"(){
    //                 return (hasUpgrade("asc",11))?"rgb(0, 0, 0)":((tmp.asc.upgrades[11].canAfford)?getFasterUndulatingColor():"black")
    //             },
    //             "border-radius":"80%",
    //             //"transform":"rotate(45deg)",
    //             "position":"absolute",
    //             "top":"550px",
    //             "left":"0",
    //             "right":"0"
    //         },
    //     },
    // },

    // clickables: {
    //     11: {
    //         display() {
    //             let info = "Ascension Rewards<br><br><h2>(Unlock a new reward for every 2 trials completed)</h2>"
    //             let space = "<br><br><br><br><br><br><br><br><br>"
    //             return "<h1>"+info+"</h1>"+space+space+space+space
    //         },
    //         canClick() {return false},
    //         unlocked(){
    //             return true
    //         },
    //         style: {'height':'500px', 'width':'1000px',
    //             "border-radius":"5%",
    //             "border-color"(){
    //                 return getFasterUndulatingColor()
    //             }, 
    //             "background-color"(){
    //                 return "black"
    //             }, 
    //             "color"(){
    //                 return getFasterUndulatingColor()
    //             },
    //             "top":"100px",
    //             "bottom":"0",
    //             "left":"0",
    //             "right":"0",
    //             "text-align":"center",
    //             "position":"absolute"
    //         },
    //     },
    // },

    update(diff){

    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {
        let keep = []
        //if (layers[resettingLayer].row >= this.row) {layerDataReset(this.layer, keep)}
    },
})