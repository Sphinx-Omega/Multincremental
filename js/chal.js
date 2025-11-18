addLayer("chal", {
    name: "Challenges", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "✦ Challenges", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: decimalZero,
        chal11timer: decimalZero,
        chal12timer: decimalZero,
        chal13timer: decimalZero,
        chal14timer: decimalZero,
        chal15timer: decimalZero,
        chal16timer: decimalZero,
        chal17timer: decimalZero,
        chal18timer: decimalZero,
        chal19timer: decimalZero,
        chal11rec: new Decimal(31536000),
        chal12rec: new Decimal(31536000),
        chal13rec: new Decimal(31536000),
        chal14rec: new Decimal(31536000),
        chal15rec: new Decimal(31536000),
        chal16rec: new Decimal(31536000),
        chal17rec: new Decimal(31536000),
        chal18rec: new Decimal(31536000),
        chal19rec: new Decimal(31536000),
        chaltotaltime: decimalOne,
    }},
    color: "#00ffddff",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color"() {
            if(player.tab == "chal") return (rgba(141, 141, 141, 1))
            return ((this.onHover)?("transparent"):(rgba(141, 141, 141, 1)))
        },
        "background-position":"center",
        "background-size":"180px",
        "border-size":"2px",
        "border-color":"transparent",
        "color":"white",
        "font-size":"24px"
        }
    },
    requires: decimalZero, // Can be a function that takes requirement increases into account
    resource: "chalpts",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 4, // Row the layer is in on the tree (0 is the first row)
    unlocked() {
        if(hasUpgrade("inf",51)) return true
    },
    layerShown() { return player.chal.unlocked },
    achievementPopups: false,
    tabFormat: {
        "Infinity" :{
            content: [
            ["clickables",1],
            ["clickables",2],
            ["clickables",3],
            ["clickables",99],
            "challenges"
            ],
            style: {
                "height":"100%",
                "right":"35%",
            },
            buttonStyle: {
                "border-radius":"0%",
                "border-top-left-radius":"50px 50px",
                "border-top-right-radius":"50px 50px",
                "border-color":"transparent",
                "background-color"(){
                    return ((player.subtabs.chal.mainTabs == "Infinity")?"#1a1a1aff":"rgba(70, 70, 70, 1)")
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
                return "<h1>Challenges"
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
                "right":"15%",
                "z-index":"20",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
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
                return "<h3>Hold shift to see formulas for challenges 4-6"
            },
            style: {'height':'5%', 'width':'50%',
                "border-top":"0px solid",
                "border-left":"0px solid",
                "border-right":"0px solid",
                "border-bottom":"0px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "bottom":"0%",
                "right":"11%",
                "left":"0%",
                "top":"70%",
                "z-index":"2",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
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

        // 992: {
        //     canClick() {return false},
        //     unlocked(){
        //         return (!hasAchievement("a",43))
        //     },
        //     display(){
        //         return ""
        //     },
        //     style: {'height':'14%', 'width':'100%',
        //         "border-radius":"0%",
        //         "border-color":"white",
        //         "background-color"(){
        //             return "#ffffffff"
        //         },
        //         "position":"fixed",
        //         "top":"10%",
        //         "right":"20%",
        //         "z-index":"10",
        //         "color":"#414141ff",
        //         "font-size":"32px"
        //     },
        // },

        993: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'14.45%', 'width':'110%',
                "border-radius":"0%",
                "border-top":"2px solid white",
                "border-bottom":"2px solid white",
                "background-color"(){
                    return "#494c63ff"
                },
                "position":"fixed",
                "top":"0%",
                "right":"-5%",
                "z-index":"10",
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

    challenges: { 
        // rows: 2,
        // cols: 2,
         11: {
            name: "",
            challengeDescription: function() {
                let c11 = "<h2>Challenge 1</h1><br><br><b>You can't buy the Ascension Power upgrade</b><br><br><b>" + ((hasChallenge("chal",11))?(colorText("b","yellow","Ascension Power upgrade is x1.05 stronger")):(colorText("b","black","Ascension Power upgrade is x1.05 stronger")))
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                return c11
            },
            goal(){
                return new Decimal("1.779e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "energy",
            rewardDescription: "",
            function() {
                if (challengeCompletions("chal",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterinfchallenge()
                //player.chal.c11time = new Decimal(0.001)
            },
            onComplete(){
                //player.chal.c11record = player.chal.c11time
                enterinfchallenge()
            },
            onExit() {
                //if ((hasChallenge("chal",11)) && (player.points > 1.797692e308) && (player.chal.c11time < player.chal.c11record)) {
                //player.chal.c11record = player.chal.c11time
                //}
                enterinfchallenge()
            },
            unlocked(){
                return true
            },
            buttonColor(){
                return "#5f992fff"
            },
            buttonTextColor: "white",
            buttonBorderColor: "#70e412ff",
            style: {"width":"22.5%","height":"15%","position":"fixed",
                "background-color"(){
                    if(inChallenge("chal",11)) return "#612a2aff"
                    return (hasChallenge("chal",11))?"#72af3aff":"#686868ff"
                },
                "border-radius":"40px/40px",
                "border-color":"#000000",
                "color":"white",
                "top":"0%",
                "bottom":"25%",
                "left":"0%",
                "right":"65%",
            },
         },

         12: {
            name: "",
            challengeDescription: function() {
                let c12 = "<h2>Challenge 2</h1><br><br><b>Boosts are only 20% as effective</b><br><br><b>" + ((hasChallenge("chal",12))?(colorText("b","yellow","Boosts are 20% stronger")):(colorText("b","black","Boosts are 20% stronger")))
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                return c12
            },
            goal(){
                return new Decimal("1.78e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "energy",
            rewardDescription: "",
            function() {
                if (challengeCompletions("chal",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterinfchallenge()
                //player.chal.c12time = new Decimal(0.001)
            },
            onComplete(){
                //player.chal.c12record = player.chal.c11time
                enterinfchallenge()
            },
            onExit() {
                //if ((hasChallenge("chal",11)) && (player.points > 1.797692e308) && (player.chal.c11time < player.chal.c11record)) {
                //player.chal.c11record = player.chal.c11time
                //}
                enterinfchallenge()
            },
            unlocked(){
                return true
            },
            buttonColor(){
                return "#5f992fff"
            },
            buttonTextColor: "white",
            buttonBorderColor: "#70e412ff",
            style: {"width":"22.5%","height":"15%","position":"fixed",
                "background-color"(){
                    if(inChallenge("chal",12)) return "#612a2aff"
                    return (hasChallenge("chal",12))?"#72af3aff":"#686868ff"
                },
                "border-radius":"40px/40px",
                "border-color":"#000000",
                "color":"white",
                "top":"0%",
                "bottom":"25%",
                "left":"0%",
                "right":"11%",
            },
         },

         13: {
            name: "",
            challengeDescription: function() {
                let c13 = "<h2>Challenge 3</h1><br><br><b>Bar mults are raised to ^0.67</b><br><br><b>" + ((hasChallenge("chal",13))?(colorText("b","yellow","Mults are raised to ^1.05")):(colorText("b","black","Mults are raised to ^1.05")))
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                return c13
            },
            goal(){
                return new Decimal("1.779e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "energy",
            rewardDescription: "",
            function() {
                if (challengeCompletions("chal",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterinfchallenge()
                //player.chal.c12time = new Decimal(0.001)
            },
            onComplete(){
                //player.chal.c12record = player.chal.c11time
                enterinfchallenge()
            },
            onExit() {
                //if ((hasChallenge("chal",11)) && (player.points > 1.797692e308) && (player.chal.c11time < player.chal.c11record)) {
                //player.chal.c11record = player.chal.c11time
                //}
                enterinfchallenge()
            },
            unlocked(){
                return true
            },
            buttonColor(){
                return "#5f992fff"
            },
            buttonTextColor: "white",
            buttonBorderColor: "#70e412ff",
            style: {"width":"22.5%","height":"15%","position":"fixed",
                "background-color"(){
                    if(inChallenge("chal",13)) return "#612a2aff"
                    return (hasChallenge("chal",13))?"#72af3aff":"#686868ff"
                },
                "border-radius":"40px/40px",
                "border-color":"#000000",
                "color":"white",
                "top":"0%",
                "bottom":"25%",
                "left":"43%",
                "right":"0%",
            },
         },

         14: {
            name: "",
            challengeDescription: function() {
                let infoNerf = shiftDown?"Prestige bonuses<sup>(1/((energy.log2())^0.075)</sup>":"Prestige mult and exp are weaker based on energy"
                let infoReward = shiftDown?(((hasChallenge("chal",14))?(colorText("b","yellow","Prestige bonuses<sup>((energy.log10())^(0.05))</sup>")):(colorText("b","black","Prestige bonuses<sup>((energy.log10())^(0.05))</sup>")))):(((hasChallenge("chal",14))?(colorText("b","yellow","Prestige mult and exp are stronger based on energy")):(colorText("b","black","Prestige mult and exp are stronger based on energy"))))
                let c14 = "<h2>Challenge 4</h1><br><br><b>"+infoNerf+"</b><br><br><b>" + infoReward
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                //pres mult/exp are raised to (1/((energy.log2())^0.1))
                //completed === pres mult/exp raised to ((energy.log10())^(0.05))
                return c14
            },
            goal(){
                return new Decimal("1.779e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "energy",
            rewardDescription: "",
            function() {
                if (challengeCompletions("chal",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterinfchallenge()
                //player.chal.c11time = new Decimal(0.001)
            },
            onComplete(){
                //player.chal.c11record = player.chal.c11time
                enterinfchallenge()
            },
            onExit() {
                //if ((hasChallenge("chal",11)) && (player.points > 1.797692e308) && (player.chal.c11time < player.chal.c11record)) {
                //player.chal.c11record = player.chal.c11time
                //}
                enterinfchallenge()
            },
            unlocked(){
                return true
            },
            buttonColor(){
                return "#5f992fff"
            },
            buttonTextColor: "white",
            buttonBorderColor: "#70e412ff",
            style: {"width":"22.5%","height":"15%","position":"fixed",
                "background-color"(){
                    if(inChallenge("chal",14)) return "#612a2aff"
                    return (hasChallenge("chal",14))?"#72af3aff":"#686868ff"
                },
                "border-radius":"40px/40px",
                "border-color":"#000000",
                "color":"white",
                "top":"25%",
                "bottom":"15%",
                "left":"0%",
                "right":"65%",
            },
         },

         15: {
            name: "",
            challengeDescription: function() {
                let infoNerf = shiftDown?"All ascensions log10":"All ascensions are significantly weaker"
                let infoReward = shiftDown?(((hasChallenge("chal",15))?(colorText("b","yellow","All ascensions<sup>1.25</sup>")):(colorText("b","black","All ascensions<sup>1.25</sup>")))):(((hasChallenge("chal",15))?(colorText("b","yellow","All ascensions are moderately stronger")):(colorText("b","black","All ascensions are moderately stronger"))))
                let c15 = "<h2>Challenge 5</h1><br><br><b>"+infoNerf+"</b><br><br><b>" + infoReward
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                //ascension mults log10
                //completed === ascension mults ^1.25
                return c15
            },
            goal(){
                return new Decimal("1.779e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "energy",
            rewardDescription: "",
            function() {
                if (challengeCompletions("chal",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterinfchallenge()
                //player.chal.c11time = new Decimal(0.001)
            },
            onComplete(){
                //player.chal.c11record = player.chal.c11time
                enterinfchallenge()
            },
            onExit() {
                //if ((hasChallenge("chal",11)) && (player.points > 1.797692e308) && (player.chal.c11time < player.chal.c11record)) {
                //player.chal.c11record = player.chal.c11time
                //}
                enterinfchallenge()
            },
            unlocked(){
                return true
            },
            buttonColor(){
                return "#5f992fff"
            },
            buttonTextColor: "white",
            buttonBorderColor: "#70e412ff",
            style: {"width":"22.5%","height":"15%","position":"fixed",
                "background-color"(){
                    if(inChallenge("chal",15)) return "#612a2aff"
                    return (hasChallenge("chal",15))?"#72af3aff":"#686868ff"
                },
                "border-radius":"40px/40px",
                "border-color":"#000000",
                "color":"white",
                "top":"25%",
                "bottom":"15%",
                "left":"0%",
                "right":"11%",
            },
         },

         16: {
            name: "",
            challengeDescription: function() {
                let infoNerf = shiftDown?"Mults = mults/(cycle spd)<sup>2</sup>":"Cycle speeds divide bar mults"
                let infoReward = shiftDown?(((hasChallenge("chal",16))?(colorText("b","yellow","Mults = mults*(cycle spd)<sup>0.5</sup>")):(colorText("b","black","Mults = mults*(cycle spd)<sup>0.5</sup>")))):(((hasChallenge("chal",16))?(colorText("b","yellow","Mults are stronger based on cycle speeds")):(colorText("b","black","Mults are stronger based on cycle speeds"))))
                let c16 = "<h2>Challenge 6</h1><br><br><b>"+infoNerf+"</b><br><br><b>" + infoReward
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                //mults / (lap spd ^2)
                //completed === mults * (lap spd ^0.5)
                return c16
            },
            goal(){
                return new Decimal("1.779e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "energy",
            rewardDescription: "",
            function() {
                if (challengeCompletions("chal",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterinfchallenge()
                //player.chal.c11time = new Decimal(0.001)
            },
            onComplete(){
                //player.chal.c11record = player.chal.c11time
                enterinfchallenge()
            },
            onExit() {
                //if ((hasChallenge("chal",11)) && (player.points > 1.797692e308) && (player.chal.c11time < player.chal.c11record)) {
                //player.chal.c11record = player.chal.c11time
                //}
                enterinfchallenge()
            },
            unlocked(){
                return true
            },
            buttonColor(){
                return "#5f992fff"
            },
            buttonTextColor: "white",
            buttonBorderColor: "#70e412ff",
            style: {"width":"22.5%","height":"15%","position":"fixed",
                "background-color"(){
                    if(inChallenge("chal",16)) return "#612a2aff"
                    return (hasChallenge("chal",16))?"#72af3aff":"#686868ff"
                },
                "border-radius":"40px/40px",
                "border-color":"#000000",
                "color":"white",
                "top":"25%",
                "bottom":"15%",
                "left":"43%",
                "right":"0%",
            },
         },

         17: {
            name: "",
            challengeDescription: function() {
                let c17 = "<h2>Challenge 7</h1><br><br><b>Buying bars reduces speed and mults to 0.1% and Ascension Speed is disabled</b><br><br><b>" + ((hasChallenge("chal",17))?(colorText("b","yellow","Bar upgrades no longer spend energy")):(colorText("b","black","Bar upgrades no longer spend energy")))
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                return c17
            },
            goal(){
                return new Decimal("1.779e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "energy",
            rewardDescription: "",
            function() {
                if (challengeCompletions("chal",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterinfchallenge()
                //player.chal.c11time = new Decimal(0.001)
            },
            onComplete(){
                //player.chal.c11record = player.chal.c11time
                enterinfchallenge()
            },
            onExit() {
                //if ((hasChallenge("chal",11)) && (player.points > 1.797692e308) && (player.chal.c11time < player.chal.c11record)) {
                //player.chal.c11record = player.chal.c11time
                //}
                enterinfchallenge()
            },
            unlocked(){
                return true
            },
            buttonColor(){
                return "#5f992fff"
            },
            buttonTextColor: "white",
            buttonBorderColor: "#70e412ff",
            style: {"width":"22.5%","height":"15%","position":"fixed",
                "background-color"(){
                    if(inChallenge("chal",17)) return "#612a2aff"
                    return (hasChallenge("chal",17))?"#72af3aff":"#686868ff"
                },
                "border-radius":"40px/40px",
                "border-color":"#000000",
                "color":"white",
                "top":"50%",
                "bottom":"5%",
                "left":"0%",
                "right":"65%",
            },
         },

         18: {
            name: "",
            challengeDescription: function() {
                let c18 = "<h2>Challenge 8</h1><br><br><b>Boosts are disabled, max level is 5 and mults gradually get weaker over time</b><br><br><b>" + ((hasChallenge("chal",18))?(colorText("b","yellow","x2 to base boost strength")):(colorText("b","black","x2 to base boost strength")))
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                return c18
            },
            goal(){
                return new Decimal("1.779e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "energy",
            rewardDescription: "",
            function() {
                if (challengeCompletions("chal",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterinfchallenge()
                //player.chal.c11time = new Decimal(0.001)
            },
            onComplete(){
                //player.chal.c11record = player.chal.c11time
                enterinfchallenge()
            },
            onExit() {
                //if ((hasChallenge("chal",11)) && (player.points > 1.797692e308) && (player.chal.c11time < player.chal.c11record)) {
                //player.chal.c11record = player.chal.c11time
                //}
                enterinfchallenge()
            },
            unlocked(){
                return true
            },
            buttonColor(){
                return "#5f992fff"
            },
            buttonTextColor: "white",
            buttonBorderColor: "#70e412ff",
            style: {"width":"22.5%","height":"15%","position":"fixed",
                "background-color"(){
                    if(inChallenge("chal",18)) return "#612a2aff"
                    return (hasChallenge("chal",18))?"#72af3aff":"#686868ff"
                },
                "border-radius":"40px/40px",
                "border-color":"#000000",
                "color":"white",
                "top":"50%",
                "bottom":"5%",
                "left":"0%",
                "right":"11%",
            },
         },

         19: {
            name: "",
            challengeDescription: function() {
                let c19 = "<h2>Challenge 9</h1><br><br><b>You can only buy the first 5 bars and can't ascend</b><br><br><b>" + ((hasChallenge("chal",19))?(colorText("b","yellow","Ascension formulae are improved")):(colorText("b","black","Ascension formulae are improved")))
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                
                //completed ===
                //ascendMult => (player.p.maxMult).div(200).max(1).pow(0.5).floor().max(1).log2().pow(2.75).floor().times(1.5).add(2).mul(player.p.baseAscend)
                //ascendSpeed = (player.p.maxMult).div(333).max(1).pow(0.2625).floor().div(2).max(1).log2().pow(1.875).max(1).add(1).mul(player.p.baseAscend)
                //ascendBoost = (player.p.maxMult).div(2.5e3).max(1).pow(0.25).floor().pow(0.1125).max(1).log10().times(10).round().div(10).add(1.25).times(10).mul(player.p.baseAscend).mul(boostPower()).mul(player.p.infchallenge12).max(0.1)
                //ascendPower = (player.p.maxMult).max(1).log10().pow(0.0875).max(1).times(a41).times(chal11comp)
                return c19
            },
            goal(){
                return new Decimal("1.779e308")
            },
            completionLimit:1 ,
            currencyDisplayName: "energy",
            rewardDescription: "",
            function() {
                if (challengeCompletions("chal",this.id) == 0) {
                tmp[this.layer].challenges[this.id].buttonColor = (tmp[this.layer].challenges[this.id].can)?"green":"white"
                }
            },
            onEnter() {
                enterinfchallenge()
                //player.chal.c11time = new Decimal(0.001)
            },
            onComplete(){
                //player.chal.c11record = player.chal.c11time
                enterinfchallenge()
            },
            onExit() {
                //if ((hasChallenge("chal",11)) && (player.points > 1.797692e308) && (player.chal.c11time < player.chal.c11record)) {
                //player.chal.c11record = player.chal.c11time
                //}
                enterinfchallenge()
            },
            unlocked(){
                return true
            },
            buttonColor(){
                return "#5f992fff"
            },
            buttonTextColor: "white",
            buttonBorderColor: "#70e412ff",
            style: {"width":"22.5%","height":"15%","position":"fixed",
                "background-color"(){
                    if(inChallenge("chal",19)) return "#612a2aff"
                    return (hasChallenge("chal",19))?"#72af3aff":"#686868ff"
                },
                "border-radius":"40px/40px",
                "border-color":"#000000",
                "color":"white",
                "top":"50%",
                "bottom":"5%",
                "left":"43%",
                "right":"0%",
            },
         },
    },

    update(diff){
        if(hasUpgrade("inf",51)){
            player.chal.unlocked = true
            tmp.chal.unlocked = true
        }

        let chalid = player.chal.activeChallenge
        if((inChallenge("chal",chalid)) && (canCompleteChallenge("chal",chalid))) {
            if(chalid == 11) player.chal.chal11rec = player.chal.chal11timer
            if(chalid == 12) player.chal.chal12rec = player.chal.chal12timer
            if(chalid == 13) player.chal.chal13rec = player.chal.chal13timer
            if(chalid == 14) player.chal.chal14rec = player.chal.chal14timer
            if(chalid == 15) player.chal.chal15rec = player.chal.chal15timer
            if(chalid == 16) player.chal.chal16rec = player.chal.chal16timer
            if(chalid == 17) player.chal.chal17rec = player.chal.chal17timer
            if(chalid == 18) player.chal.chal18rec = player.chal.chal18timer
            if(chalid == 19) player.chal.chal19rec = player.chal.chal19timer
            startChallenge("chal",chalid)
            infinity()
        }

        player.chal.chaltotaltime = (player.chal.chal11rec).add(player.chal.chal12rec).add(player.chal.chal13rec).add(player.chal.chal14rec).add(player.chal.chal15rec).add(player.chal.chal16rec).add(player.chal.chal17rec).add(player.chal.chal18rec).add(player.chal.chal19rec)
        
        if(inChallenge("chal",11)) player.chal.chal11timer = player.chal.chal11timer.add(diff)
        else player.chal.chal11timer = decimalZero

        if(inChallenge("chal",12)) player.chal.chal12timer = player.chal.chal12timer.add(diff)
        else player.chal.chal12timer = decimalZero

        if(inChallenge("chal",13)) player.chal.chal13timer = player.chal.chal13timer.add(diff)
        else player.chal.chal13timer = decimalZero

        if(inChallenge("chal",14)) player.chal.chal14timer = player.chal.chal14timer.add(diff)
        else player.chal.chal14timer = decimalZero

        if(inChallenge("chal",15)) player.chal.chal15timer = player.chal.chal15timer.add(diff)
        else player.chal.chal15timer = decimalZero

        if(inChallenge("chal",16)) player.chal.chal16timer = player.chal.chal16timer.add(diff)
        else player.chal.chal16timer = decimalZero

        if(inChallenge("chal",17)) player.chal.chal17timer = player.chal.chal17timer.add(diff)
        else player.chal.chal17timer = decimalZero

        if(inChallenge("chal",18)) player.chal.chal18timer = player.chal.chal18timer.add(diff)
        else player.chal.chal18timer = decimalZero

        if(inChallenge("chal",19)) player.chal.chal19timer = player.chal.chal19timer.add(diff)
        else player.chal.chal19timer = decimalZero
    }
})