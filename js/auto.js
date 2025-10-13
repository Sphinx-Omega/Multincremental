addLayer("auto", {
    name: "Automation", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "⚙︎ Automation", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: decimalZero,
    }},
    tooltip() {
      return "Automation"
    },
    color: "#FFFF00",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color"() {
            if(player.tab == "auto") return (rgba(141, 141, 141, 1))
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
    requires: decimalZero, // Can be a function that takes requirement increases into account
    resource: "autopts",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    achievementPopups: false,
    tabFormat: {
        "Achievements" :{
            content: [
                // ["raw-html",
                //     function(){
                //     return "<b>You have "+ ((getThemeName() == "grayscale")?("<h2>"+formatWhole(player.a.points)):(layerText("h2","a",formatWhole(player.a.points)))) + ((getThemeName() == "grayscale")?"<h2>/30":layerText("h2","a","/30")) + "</h2><b> Achievements, giving an additional " + ((getThemeName() == "grayscale")?("<h2>x"+format(tmp.a.effect, 2)):(layerText("h2","a",("x"+format(tmp.a.effect, 2))))) + "</h2><b> multiplier"
                //     }
                // ],
                "blank",
                "blank",
            ["clickables",1],
            ["clickables",2],
            ["clickables",5],
            ["clickables",99],
            ],
            style: {
                "position":"absolute",
                "top":"5%",
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
                return "<h1>Automation"
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

        21: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'25%', 'width':'62.5%',
                "border":"4px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return "rgba(73, 73, 73, 1)"
                },
                "position":"fixed",
                "top":"17.5%",
                "left":"0%",
                "right":"11%",
                "z-index":"20",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        22: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'25%', 'width':'62.5%',
                "border":"4px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return "rgba(73, 73, 73, 1)"
                },
                "position":"fixed",
                "top":"45%",
                "left":"0%",
                "right":"11%",
                "z-index":"20",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        23: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ((hasUpgrade("inf",22))?"Autobuy Cycle Speed Upgrades<br><br><br><br>":"Locked")
            },
            style: {'height':'25%', 'width':'62.5%',
                "border":"4px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"17.5%",
                "left":"0%",
                "right":"11%",
                "z-index":"20",
                "color"(){
                    return ((hasUpgrade("inf",22))?"white":"#2e2e2eff")
                },
                "font-size"() {
                    return ((hasUpgrade("inf",22))?"48px":"64px")
                },
                "text-shadow":"2px 2px 2px #000000c7"
            },
        },

        24: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ((hasUpgrade("inf",21))?"Autoboost<br><br><br><br>":"Locked")
            },
            style: {'height':'25%', 'width':'62.5%',
                "border":"4px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"45%",
                "left":"0%",
                "right":"11%",
                "z-index":"20",
                "color"(){
                    return ((hasUpgrade("inf",21))?"white":"#2e2e2eff")
                },
                "font-size"() {
                    return ((hasUpgrade("inf",21))?"48px":"64px")
                },
                "text-shadow":"2px 2px 2px #000000c7"
            },
        },

        51: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",51) == 0) return setClickableState("auto",51,1)
                if (getClickableState("auto",51) == 1) return setClickableState("auto",51,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",51)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",51) == 1)?"rgba(218, 22, 22, 1)":"rgba(82, 58, 58, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"0%",
                "right":"65%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        52: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",52) == 0) return setClickableState("auto",52,1)
                if (getClickableState("auto",52) == 1) return setClickableState("auto",52,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",52)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",52) == 1)?"rgba(226, 121, 23, 1)":"rgba(82, 68, 58, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"0%",
                "right":"53%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        53: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",53) == 0) return setClickableState("auto",53,1)
                if (getClickableState("auto",53) == 1) return setClickableState("auto",53,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",53)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",53) == 1)?"rgba(228, 208, 27, 1)":"rgba(82, 82, 58, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"0%",
                "right":"41%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        54: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",54) == 0) return setClickableState("auto",54,1)
                if (getClickableState("auto",54) == 1) return setClickableState("auto",54,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",54)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",54) == 1)?"rgba(158, 228, 27, 1)":"rgba(76, 82, 58, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"0%",
                "right":"29%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        55: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",55) == 0) return setClickableState("auto",55,1)
                if (getClickableState("auto",55) == 1) return setClickableState("auto",55,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",55)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",55) == 1)?"rgba(50, 228, 27, 1)":"rgba(61, 82, 58, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"0%",
                "right":"17%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },
        
        56: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",56) == 0) return setClickableState("auto",56,1)
                if (getClickableState("auto",56) == 1) return setClickableState("auto",56,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",56)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",56) == 1)?"rgba(27, 228, 178, 1)":"rgba(58, 82, 74, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"0%",
                "right":"5%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        57: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",57) == 0) return setClickableState("auto",57,1)
                if (getClickableState("auto",57) == 1) return setClickableState("auto",57,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",57)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",57) == 1)?"rgba(27, 91, 228, 1)":"rgba(58, 62, 82, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"7%",
                "right":"0%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        58: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",58) == 0) return setClickableState("auto",58,1)
                if (getClickableState("auto",58) == 1) return setClickableState("auto",58,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",58)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",58) == 1)?"rgba(137, 27, 228, 1)":"rgba(70, 58, 82, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"19%",
                "right":"0%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        59: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",59) == 0) return setClickableState("auto",59,1)
                if (getClickableState("auto",59) == 1) return setClickableState("auto",59,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",59)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",59) == 1)?"rgba(228, 27, 218, 1)":"rgba(82, 58, 81, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"31%",
                "right":"0%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        61: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",61) == 0) return setClickableState("auto",61,1)
                if (getClickableState("auto",61) == 1) return setClickableState("auto",61,0)
            },
            unlocked(){
                return hasUpgrade("inf",22)
            },
            display(){
                let st = getClickableState("auto",61)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",61) == 1)?"rgba(206, 206, 206, 1)":"rgba(82, 82, 82, 1)")
                },
                "position":"fixed",
                "top":"30%",
                "left":"43%",
                "right":"0%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        71: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",71) == 0) return setClickableState("auto",71,1)
                if (getClickableState("auto",71) == 1) return setClickableState("auto",71,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",71)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",71) == 1)?"rgba(218, 22, 22, 1)":"rgba(82, 58, 58, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"0%",
                "right":"65%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        72: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",72) == 0) return setClickableState("auto",72,1)
                if (getClickableState("auto",72) == 1) return setClickableState("auto",72,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",72)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",72) == 1)?"rgba(226, 121, 23, 1)":"rgba(82, 68, 58, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"0%",
                "right":"53%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        73: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",73) == 0) return setClickableState("auto",73,1)
                if (getClickableState("auto",73) == 1) return setClickableState("auto",73,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",73)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",73) == 1)?"rgba(228, 208, 27, 1)":"rgba(82, 82, 58, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"0%",
                "right":"41%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        74: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",74) == 0) return setClickableState("auto",74,1)
                if (getClickableState("auto",74) == 1) return setClickableState("auto",74,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",74)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",74) == 1)?"rgba(158, 228, 27, 1)":"rgba(76, 82, 58, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"0%",
                "right":"29%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        75: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",75) == 0) return setClickableState("auto",75,1)
                if (getClickableState("auto",75) == 1) return setClickableState("auto",75,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",75)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",75) == 1)?"rgba(50, 228, 27, 1)":"rgba(61, 82, 58, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"0%",
                "right":"17%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },
        
        76: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",76) == 0) return setClickableState("auto",76,1)
                if (getClickableState("auto",76) == 1) return setClickableState("auto",76,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",76)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",76) == 1)?"rgba(27, 228, 178, 1)":"rgba(58, 82, 74, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"0%",
                "right":"5%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        77: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",77) == 0) return setClickableState("auto",77,1)
                if (getClickableState("auto",77) == 1) return setClickableState("auto",77,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",77)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",77) == 1)?"rgba(27, 91, 228, 1)":"rgba(58, 62, 82, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"7%",
                "right":"0%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        78: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",78) == 0) return setClickableState("auto",78,1)
                if (getClickableState("auto",78) == 1) return setClickableState("auto",78,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",78)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",78) == 1)?"rgba(137, 27, 228, 1)":"rgba(70, 58, 82, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"19%",
                "right":"0%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        79: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",79) == 0) return setClickableState("auto",79,1)
                if (getClickableState("auto",79) == 1) return setClickableState("auto",79,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",79)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",79) == 1)?"rgba(228, 27, 218, 1)":"rgba(82, 58, 81, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"31%",
                "right":"0%",
                "z-index":"22",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        81: {
            canClick() {return true},
            onClick() {
                if (getClickableState("auto",81) == 0) return setClickableState("auto",81,1)
                if (getClickableState("auto",81) == 1) return setClickableState("auto",81,0)
            },
            unlocked(){
                return hasUpgrade("inf",21)
            },
            display(){
                let st = getClickableState("auto",81)
                return ((st == 1)?"On":"Off")
            },
            style: {'height':'10%', 'width':'5%',
                "border":"2px solid",
                "border-radius":"50px/50px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return ((getClickableState("auto",81) == 1)?"rgba(206, 206, 206, 1)":"rgba(82, 82, 82, 1)")
                },
                "position":"fixed",
                "top":"57.5%",
                "left":"43%",
                "right":"0%",
                "z-index":"22",
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
                    return "#5e5e5eff"
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

    startStates(){
        if(getClickableState("auto",51) == undefined) setClickableState("auto",51,0)
        if(getClickableState("auto",52) == undefined) setClickableState("auto",52,0)
        if(getClickableState("auto",53) == undefined) setClickableState("auto",53,0)
        if(getClickableState("auto",54) == undefined) setClickableState("auto",54,0)
        if(getClickableState("auto",55) == undefined) setClickableState("auto",55,0)
        if(getClickableState("auto",56) == undefined) setClickableState("auto",56,0)
        if(getClickableState("auto",57) == undefined) setClickableState("auto",57,0)
        if(getClickableState("auto",58) == undefined) setClickableState("auto",58,0)
        if(getClickableState("auto",59) == undefined) setClickableState("auto",59,0)
        if(getClickableState("auto",61) == undefined) setClickableState("auto",61,0)
        
        if(getClickableState("auto",71) == undefined) setClickableState("auto",71,0)
        if(getClickableState("auto",72) == undefined) setClickableState("auto",72,0)
        if(getClickableState("auto",73) == undefined) setClickableState("auto",73,0)
        if(getClickableState("auto",74) == undefined) setClickableState("auto",74,0)
        if(getClickableState("auto",75) == undefined) setClickableState("auto",75,0)
        if(getClickableState("auto",76) == undefined) setClickableState("auto",76,0)
        if(getClickableState("auto",77) == undefined) setClickableState("auto",77,0)
        if(getClickableState("auto",78) == undefined) setClickableState("auto",78,0)
        if(getClickableState("auto",79) == undefined) setClickableState("auto",79,0)
        if(getClickableState("auto",81) == undefined) setClickableState("auto",81,0)
    },

    update(diff){

        if(getClickableState("auto",51) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",11)) {
                    buyBuyable("p",11)
                }
                else break;
            }
        }

        if(getClickableState("auto",52) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",12)) {
                    buyBuyable("p",12)
                }
                else break;
            }
        }

        if(getClickableState("auto",53) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",13)) {
                    buyBuyable("p",13)
                }
                else break;
            }
        }

        if(getClickableState("auto",54) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",14)) {
                    buyBuyable("p",14)
                }
                else break;
            }
        }

        if(getClickableState("auto",55) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",15)) {
                    buyBuyable("p",15)
                }
                else break;
            }
        }

        if(getClickableState("auto",56) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",16)) {
                    buyBuyable("p",16)
                }
                else break;
            }
        }

        if(getClickableState("auto",57) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",17)) {
                    buyBuyable("p",17)
                }
                else break;
            }
        }

        if(getClickableState("auto",58) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",18)) {
                    buyBuyable("p",18)
                }
                else break;
            }
        }

        if(getClickableState("auto",59) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",19)) {
                    buyBuyable("p",19)
                }
                else break;
            }
        }

        if(getClickableState("auto",61) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(canBuyBuyable("p",21)) {
                    buyBuyable("p",21)
                }
                else break;
            }
        }

        if(getClickableState("auto",71) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[41].unlocked) {
                    clickClickable("p",41)
                }
                else break;
            }
        }

        if(getClickableState("auto",72) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[42].unlocked) {
                    clickClickable("p",42)
                }
                else break;
            }
        }

        if(getClickableState("auto",73) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[43].unlocked) {
                    clickClickable("p",43)
                }
                else break;
            }
        }

        if(getClickableState("auto",74) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[44].unlocked) {
                    clickClickable("p",44)
                }
                else break;
            }
        }

        if(getClickableState("auto",75) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[45].unlocked) {
                    clickClickable("p",45)
                }
                else break;
            }
        }

        if(getClickableState("auto",76) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[46].unlocked) {
                    clickClickable("p",46)
                }
                else break;
            }
        }

        if(getClickableState("auto",77) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[47].unlocked) {
                    clickClickable("p",47)
                }
                else break;
            }
        }

        if(getClickableState("auto",78) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[48].unlocked) {
                    clickClickable("p",48)
                }
                else break;
            }
        }

        if(getClickableState("auto",79) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[49].unlocked) {
                    clickClickable("p",49)
                }
                else break;
            }
        }

        if(getClickableState("auto",81) == 1) {
            for(i = 0 ; i < 5 ; i++) {
                if(tmp.p.clickables[51].unlocked) {
                    clickClickable("p",51)
                }
                else break;
            }
        }
    }
})

