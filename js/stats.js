addLayer("statstab", {
    name: "Stats", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "⏱ Stats", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: decimalZero,
    }},
    tooltip() {
      return "Stats"
    },
    color: "#15ff00ff",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color"() {
            if(player.tab == "statstab") return (rgba(141, 141, 141, 1))
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
    resource: "statpts",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 9, // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    achievementPopups: false,
    tabFormat: {
        "Stats" :{
            content: [
            ["clickables",1],
            ["clickables",99],
            ["raw-html",
                function(){
                return "<h1>Total playtime: " + formatTime(player.timePlayed) + "<br><br><br><br>"
                }
            ],   
            ["raw-html",
                function(){
                return "<h2>Time this infinity: " + formatTime(player.p.infTime) + "<br><br><br>Fastest infinity: " + formatTime(player.p.infRecord)
                }
            ],
            ],
            style: {
                "position":"absolute",
                "height":"100%",
                "top":"-260%",
                "bottom":"0%",
                "left":"0%",
                "right":"10%"
            },
            buttonStyle: {
                "border-radius":"0%",
                "visibility":"hidden"
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
                return "<h1>Statistics"
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
})