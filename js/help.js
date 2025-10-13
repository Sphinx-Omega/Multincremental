addLayer("helptab", {
    name: "Info", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "? Info", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: decimalZero,
    }},
    tooltip() {
      return "Info"
    },
    color: "#15ff00ff",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color"() {
            if(player.tab == "helptab") return (rgba(141, 141, 141, 1))
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
    resource: "helps",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 10, // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    achievementPopups: false,
    tabFormat: {
        "Info" :{
            content: [
            ["clickables",1],
            ["clickables",99],   
            ["raw-html",
                    function(){
                    return "<h1>Energy<br><br><h3>Energy is generated when a bar completely fills<br><br>It can be used to make a bar fill faster, or to make a new bar start filling<br><br>A bar filling completely is referred to as one cycle<br><br><br><br><br>"
                    }
                ],
                ["raw-html",
                    function(){
                    return "<h1>Multipliers<br><br><h3>At the top you can see several multipliers (they may currently be x1.00)<br><br>These multipliers increase each time their respective bar fills<br><br>When a bar fills, the multipliers at the top will be multiplied together and added to your energy<br><br><br><br><br>"
                    }
                ],
                ["raw-html",
                    function(){
                    return "<h1>Boosts<br><br><h3>When reaching the max level of a bar's speed upgrade, you can boost that bar to increase how much is added to its multiplier upon completing a cycle<br><br>By default, boosting increases this multiplier by x10<br><br><br><br><br>"
                    }
                ],
                ["raw-html",
                    function(){
                    return "<h1>Prestige<br><br><h3>When reaching one million total energy you will be able to prestige<br><br>This resets all bars, but adds to an extra multiplier<br><br>The total multiplier's exponent will also increase at a much slower rate<br><br>It is recommended to wait until your prestige multiplier is at least x20 your previous prestige multiplier<br><br><br><br><br>"
                    }
                ],

                ["raw-html",
                    function(){
                    return "<h1>Ascension<br><br><h3>When your prestige multiplier exceeds x1000 you will be able to ascend<br><br>There are 4 ascension upgrades to choose from:<br><br>Mult ascension increases the multiplier added on each bar's cycle<br><br>Speed ascension increases the speed of each bar's cycles<br><br>Boost ascension increases how much boosting increases the bar multipliers<br><br>Ascension power multiplies the other 3 ascension upgrades<br><br>It is recommended to begin with mult ascension, and at least x15<br><br><br><br><br>"
                    }
                ], 
                ["raw-html",
                    function(){
                    return "<h1>Infinity<br><br><h3>When you reach 1.798e308 energy (the bar at the bottom will display 100%) you will reach infinity<br><br>A new tab will be unlocked, where you can buy upgrades or attempt challenges to speed up the next infinity<br><br>You will gain Infinite Energy (IE) and infinities (∞) upon reaching infinity<br><br>Completing all infinity challenges will allow you to break infinity, removing the 1.798e308 energy limit<br><br><br><br><br>"
                    }
                ],
                ["raw-html",
                    function(){
                    return "<h1>Generators<br><br><h3>Buying the first infinity upgrade will unlock generators<br><br>Generators will, as the name implies, generate GP (generator points)<br><br>GP increases the multiplier gained from each bar upon completing a cycle<br><br>Each generator after the first will generate the previous one (G2 generates G1, G3 generates G2, etc)<br><br><br><br><br>"
                    }
                ],
                ["raw-html",
                    function(){
                    return "<h1>Hotkeys<br><br><h3>M: buys each bar (can be held)<br><br>B: boosts all bars (can be held)<br><br>G: buys generators in descending order (G10 -> G1, can be held)<br><br><br><br><br>"
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
                return "<h1>Info"
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
                "right":"10%",
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