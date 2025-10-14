addLayer("chal", {
    name: "Challenges", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "✦ Challenges", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: decimalZero,
    }},
    tooltip() {
      return "Challenges"
    },
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
            ["clickables",99],
            "challenges"
            ],
            style: {
                "height":"616px",
                "right":"35%"
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
                let c11 = "<h2>Challenge 1</h1><br><br><b>You can't buy the Ascension Power upgrade</b><br><br><b>Ascension Power upgrade is slightly stronger"
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                return c11
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
            style: {"width":"22.5%","height":"15%","position":"absolute",
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
                let c12 = "<h2>Challenge 2</h1><br><br><b>Boosts are only 20% as effective</b><br><br><b>Boosts are 20% stronger"
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
            style: {"width":"22.5%","height":"15%","position":"absolute",
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
                let c13 = "<h2>Challenge 3</h1><br><br><b>All mults are raised to ^0.67</b><br><br><b>Mults are raised to ^1.05"
                //if (challengeCompletions("chal", 11) == 1) c11 = c11 + "<br> (Completed)"
                return c13
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
            style: {"width":"22.5%","height":"15%","position":"absolute",
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
    },

    update(diff){
        if(hasUpgrade("inf",51)){
            player.chal.unlocked = true
            tmp.chal.unlocked = true
        }
    }
})