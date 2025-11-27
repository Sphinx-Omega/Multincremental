addLayer("a", {
    name: "Achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "★ Achievements", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: decimalZero,
    }},
    tooltip() {
      return "Achievements"
    },
    color: "#FFFF00",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color"() {
            if(player.tab == "a") return (rgba(141, 141, 141, 1))
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
    resource: "Achievements",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 8, // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    achievementPopups: false,
    tabFormat: {
        "Achievements" :{
            content: [
                ["raw-html",
                    function(){
                    return "<b>You have "+ ((getThemeName() == "grayscale")?("<h2>"+formatWhole(player.a.points)):(layerText("h2","a",formatWhole(player.a.points)))) + ((getThemeName() == "grayscale")?"<h2>/30":layerText("h2","a","/30")) + "</h2><b> Achievements, giving an additional " + ((getThemeName() == "grayscale")?("<h2>x"+format(tmp.a.effect, 2)):(layerText("h2","a",("x"+format(tmp.a.effect, 2))))) + "</h2><b> multiplier"
                    }
                ],
                "blank",
                "blank",
            ["clickables",1],
            ["clickables",99],    
            "achievements",
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
                return "<h1>Achievements"
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
                "right":"20%",
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
                    return "#496132ff"
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


    achievements: {
        rows: 10,
        cols: 8,
        11: {
            name: "<h3>Millionaire!<br><br></h3>Reach 1Mil Energy",
            tooltip: " ",
            done() {
                return player.points.gte(1e6)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"33%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",11)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",11)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        12: {
            name: "<h3>Prestigious!<br><br></h3>Prestige for the first time",
            tooltip: " ",
            done() {
                return player.p.presamt.gte(1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"33%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",12)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",12)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        13: {
            name() {
                return "<h3>Getting an upgrade<br><br></h3>Boost for the first time<br><br><br><br>"+((hasAchievement("a",13))?(colorText("h3","lime","x1.1 to prestige mult")):(colorText("h3","red","x1.1 to prestige mult")))
            }, 
            tooltip: " ",
            done() {
                return ((player.p.rAsc.gte(1)) || (player.p.oAsc.gte(1)) || (player.p.yAsc.gte(1)) || (player.p.lAsc.gte(1)) || (player.p.gAsc.gte(1)) || (player.p.cAsc.gte(1)) || (player.p.bAsc.gte(1)) || (player.p.vAsc.gte(1)) || (player.p.pAsc.gte(1)) || (player.p.wAsc.gte(1)))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"33%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",13)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",13)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        21: {
            name: "<h3>Enlightenment<br><br></h3>Ascend for the first time",
            tooltip: " ",
            done() {
                return player.p.ascendAmt.gte(1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"50%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",21)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",21)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        22: {
            name() {
                return "<h3>Too fast!<br><br></h3>Have a solid bar<br><br><br><br>"+((hasAchievement("a",22))?(colorText("h3","lime","+0.02 to Base Exponent")):(colorText("h3","red","+0.02 to Base Exponent")))
            },
            tooltip: " ",
            done() {
                return ((player.p.redSpd.gte(30)) || (player.p.orangeSpd.gte(30)) || (player.p.yellowSpd.gte(30)) || (player.p.limeSpd.gte(30)) || (player.p.greenSpd.gte(30)) || (player.p.cyanSpd.gte(30)) || (player.p.blueSpd.gte(30)) || (player.p.violetSpd.gte(30)) || (player.p.pinkSpd.gte(30)) || (player.p.whiteSpd.gte(30)))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"50%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",22)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",22)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        23: {
            name: "<h3>Multiplier Millenium<br><br></h3>Have a multiplier reach x1,000",
            done() {
                return ((player.p.rMult.gte(1e3)) || (player.p.oMult.gte(1e3)) || (player.p.yMult.gte(1e3)) || (player.p.lMult.gte(1e3)) || (player.p.gMult.gte(1e3)) || (player.p.cMult.gte(1e3)) || (player.p.bMult.gte(1e3)) || (player.p.vMult.gte(1e3)) || (player.p.pMult.gte(1e3)) || (player.p.wMult.gte(1e3)))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"50%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",23)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",23)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        31: {
            name: "<h3>RGB!<br><br></h3>Have Red, Green and Blue bars",
            tooltip: " ",
            done() {
                return ((player.p.redBuyAmt.gte(1)) && (player.p.greenBuyAmt.gte(1)) && (player.p.blueBuyAmt.gte(1)))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"67%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",31)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",31)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        32: {
            name() {
                return "<h3>Spectrum<br><br></h3>Have all bars<br><br><br><br>"+((hasAchievement("a",32))?(colorText("h3","lime","x1.2 to all bars' speed")):(colorText("h3","red","x1.2 to all bars' speed")))
            } ,
            tooltip: " ",
            done() {
                return ((player.p.redBuyAmt.gte(1)) && (player.p.orangeBuyAmt.gte(1)) && (player.p.yellowBuyAmt.gte(1)) && (player.p.limeBuyAmt.gte(1)) && (player.p.greenBuyAmt.gte(1)) && (player.p.cyanBuyAmt.gte(1)) && (player.p.blueBuyAmt.gte(1)) && (player.p.violetBuyAmt.gte(1)) && (player.p.pinkBuyAmt.gte(1)) && (player.p.whiteBuyAmt.gte(1)))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"67%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",32)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",32)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        33: {
            name() {
                return "<h3>MAXIMUM OVERDRIVE!!<br><br></h3>Make every bar solid<br><br><br><br>"+((hasAchievement("a",33))?(colorText("h3","lime","+0.03 to Base Exponent")):(colorText("h3","red","+0.03 to Base Exponent")))
            },
            tooltip: " ",
            done() {
                return ((player.p.redSpd.gte(30)) && (player.p.orangeSpd.gte(30)) && (player.p.yellowSpd.gte(30)) && (player.p.limeSpd.gte(30)) && (player.p.greenSpd.gte(30)) && (player.p.cyanSpd.gte(30)) && (player.p.blueSpd.gte(30)) && (player.p.violetSpd.gte(30)) && (player.p.pinkSpd.gte(30)) && (player.p.whiteSpd.gte(30)))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"67%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",33)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",33)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        41: {
            name() {
                return "<h3>I think I skipped a step...<br><br></h3>Ascend without prestiging<br><br><br><br>"+((hasAchievement("a",41))?(colorText("h3","lime","x1.05 to Ascension Power")):(colorText("h3","red","x1.05 to Ascension Power")))
            },
            tooltip: " ",
            done() {
                return ((player.p.ascendcheck == true) && (player.p.presamt.lt(1)))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"84%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",41)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",41)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        42: {
            name() {
                return "<h3>Addicted yet?<br><br></h3>Play for 12 hours"
            },
            tooltip: " ",
            done() {
                return (player.timePlayed >= 43200)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"84%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",42)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",42)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        43: {
            name() {
                return "<h3>You're gonna need a bigger bar...<br><br></h3>Reach Infinity!<br><br><br><br>"+((hasAchievement("a",43))?(colorText("h3","lime","A new layer!")):(colorText("h3","red","A new layer!")))
            },
            tooltip: " ",
            done() {
                return (player.inf.infinities.gte(1))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"84%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",43)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",43)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        51: {
            name() {
                return "<h3>Back for seconds<br><br></h3>Reach Infinity again!"
            },
            tooltip: " ",
            done() {
                return player.inf.infinities.gte(2)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"101%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",51)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",51)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        52: {
            name() {
                return "<h3>Fast and Finite<br><br></h3>Reach Infinity in under 2 hours<br><br><br><br>"+((hasAchievement("a",52))?(colorText("h3","lime","x2 IE gain")):(colorText("h3","red","x2 IE gain")))
            },
            tooltip: " ",
            done() {
                return player.p.infRecord.lt(7200)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"101%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",52)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",52)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        53: {
            name() {
                return "<h3>Generational<br><br></h3>Reach 10,000 GP"
            },
            tooltip: " ",
            done() {
                return player.inf.genpower.gte(1e4)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"101%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",53)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",53)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        61: {
            name() {
                return "<h3>Unenlightened...<br><br></h3>Reach Infinity without ascending!<br><br><br><br>"+((hasAchievement("a",61))?(colorText("h3","lime","Mult and Speed Ascensions start at x10 on infinity")):(colorText("h3","red","Mult and Speed Ascensions start at x10 on infinity")))
            },
            tooltip: " ",
            done() {
                return player.p.infNoAscend
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"118%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",61)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",61)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        62: {
            name() {
                return "<h3>Challenging!<br><br></h3>Complete your first challenge!"
            },
            tooltip: " ",
            done() {
                return (getChallengeCompletions() >= 1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"118%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",62)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",62)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        63: {
            name() {
                return "<h3>Poor Man's Infinity<br><br></h3>Reach infinity without prestiging!<br><br><br><br>"+((hasAchievement("a",63))?(colorText("h3","lime","x1.2 to Prestige Exponent")):(colorText("h3","red","x1.2 to Prestige Exponent")))
            },
            tooltip: " ",
            done() {
                return player.p.infNoPres
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"118%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",63)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",63)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        71: {
            name() {
                return "<h3>Taskmaster<br><br></h3>Complete 4 challenges!"
            },
            tooltip: " ",
            done() {
                return (getChallengeCompletions() >= 4)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"135%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",71)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",71)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        72: {
            name() {
                return "<h3>I think you're addicted...<br><br></h3>Play for 3 days"
            },
            tooltip: " ",
            done() {
                return (player.timePlayed >= 259200)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"135%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",72)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",72)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        73: {
            name() {
                return "<h3>Infinity miles/hr<br><br></h3>Reach infinity in under 15 minutes!"
            },
            tooltip: " ",
            done() {
                return player.p.infRecord.lt(900)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"135%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",73)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",73)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        81: {
            name() {
                return "<h3>Are these really infinite...?<br><br></h3>Reach 1000 infinities"
            },
            tooltip: " ",
            done() {
                return player.inf.infinities.gte(1e3)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"152%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",81)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",81)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        82: {
            name() {
                return "<h3>√Nine Circles<br><br></h3>Reach infinity with only Red, Orange and Yellow<br><br><br><br>"+((hasAchievement("a",82))?(colorText("h3","lime","x1.5 to Boost strength")):(colorText("h3","red","x1.5 to Boost strength")))
            },
            tooltip: " ",
            done() {
                return (player.p.ach82check == true)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"152%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",82)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",82)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        83: {
            name() {
                return "<h3>Broken Bonds<br><br></h3>Break Infinity!"
            },
            tooltip: " ",
            done() {
                return hasUpgrade("inf",111)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"152%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",83)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",83)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        91: {
            name() {
                return "<h3>I AM SPEED<br><br></h3>Get total challenge times under 5 minutes"
            },
            tooltip: " ",
            done() {
                return player.chal.chaltotaltime.lt(300)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"169%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",91)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",91)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        92: {
            name() {
                return "<h3>No Boosts?<br><br></h3>Reach infinity without boosting!"
            },
            tooltip: " ",
            done() {
                return player.p.infNoBst == true
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"169%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",92)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",92)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        93: {
            name() {
                return "<h3>Infinity/s<br><br></h3>Reach infinity in under 1 second!"
            },
            tooltip: " ",
            done() {
                return player.p.infRecord.lt(1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"169%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",93)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",93)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        101: {
            name() {
                return "<h3>Are we there yet?<br><br></h3>Reach 1.00e154 IE"
            },
            tooltip: " ",
            done() {
                return player.inf.infenergy.gte(1e154)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"186%",
                "left":"10%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",101)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",101)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        102: {
            name() {
                return "<h3>Boostmaxxing<br><br></h3>Reach Boost #20 on all bars"
            },
            tooltip: " ",
            done() {
                let b1 = (player.p.rAsc.gte(20))
                let b2 = (player.p.oAsc.gte(20))
                let b3 = (player.p.yAsc.gte(20))
                let b4 = (player.p.lAsc.gte(20))
                let b5 = (player.p.gAsc.gte(20))
                let b6 = (player.p.cAsc.gte(20))
                let b7 = (player.p.bAsc.gte(20))
                let b8 = (player.p.vAsc.gte(20))
                let b9 = (player.p.pAsc.gte(20))
                let b10 = (player.p.wAsc.gte(20))
                return ((b1)&&(b2)&&(b3)&&(b4)&&(b5)&&(b6)&&(b7)&&(b8)&&(b9)&&(b10))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"186%",
                "left":"37.5%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",102)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",102)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },

        103: {
            name() {
                return "<h3>Beyond<br><br></h3>Reach Eternity<br><br><br><br>"+((hasAchievement("a",103))?(colorText("h3","lime","A new layer! (Soon™)")):(colorText("h3","red","A new layer! (Soon™)")))
            },
            tooltip: " ",
            done() {
                return hasUpgrade("inf",211)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"20%","height":"12.5%","margin":"2px","border":"4px solid","border-radius":"0%",
                "position":"absolute",
                "top":"186%",
                "left":"65%",
                "background"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#505050ff"
                    if (hasAchievement("a",103)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#8d8d8dff"
                    return color
                },
                "border-color"() {
                    let color = (getThemeName() == "grayscale")?"#4b4b4bff":"#b66f6fff"
                    if (hasAchievement("a",103)) color = (getThemeName() == "grayscale")?"#a3a3a3ff":"#7ed17eff"
                    return color
                }
            },
        },
    },

    effect() {
        let eff = player.a.points
        eff = (eff.times(2)).div(100).add(1)
        if(player.a.points == 0) eff = decimalOne
        return eff
    },
})
