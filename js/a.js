addLayer("a", {
    name: "Achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Achievements ★", // This appears on the layer's node. Default is the id with the first letter capitalized
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
        "background-color":"black",
        "background-position":"center",
        "background-size":"180px",
        "border-size":"10px",
        "border-color":"rgb(255, 255, 255)",
        "color":"white",
        "font-size":"18px"
        }
    },
    requires: decimalZero, // Can be a function that takes requirement increases into account
    resource: "Achievements",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 9, // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    achievementPopups: false,
    tabFormat: {
        "Achievements" :{
            content: [
                ["raw-html",
                    function(){
                    return "<b>You have "+ ((getThemeName() == "grayscale")?("<h2>"+formatWhole(player.a.points)):(layerText("h2","a",formatWhole(player.a.points)))) + ((getThemeName() == "grayscale")?"<h2>/12":layerText("h2","a","/12")) + "</h2><b> Achievements, giving an additional " + ((getThemeName() == "grayscale")?("<h2>x"+format(tmp.a.effect, 2)):(layerText("h2","a",("x"+format(tmp.a.effect, 2))))) + "</h2><b> multiplier"
                    }
                ],
                "blank",
                "blank",
            "achievements"
            ],
            buttonStyle: {
                "border-radius":"0%",
                "visibility":"hidden"
            },
        },
    },
    achievements: {
        rows: 4,
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            tooltip: " ",
            done() {
                return ((player.p.rMult.gte(1e3)) || (player.p.oMult.gte(1e3)) || (player.p.yMult.gte(1e3)) || (player.p.lMult.gte(1e3)) || (player.p.gMult.gte(1e3)) || (player.p.cMult.gte(1e3)) || (player.p.bMult.gte(1e3)) || (player.p.vMult.gte(1e3)) || (player.p.pMult.gte(1e3)) || (player.p.wMult.gte(1e3)))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
                return "<h3>You're gonna need a bigger bar...<br><br></h3>Reach Infinity!<br><br><br><br>"+((hasAchievement("a",43))?(colorText("h3","lime","A new layer! (Soon™)")):(colorText("h3","red","A new layer! (Soon™)")))
            },
            tooltip: " ",
            done() {
                return (player.points.gte(1.797e308))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"400px","height":"120px","margin":"2px","border":"4px solid","border-radius":"0%",
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
    },

    effect() {
        let eff = player.a.points
        eff = (eff.times(2)).div(100).add(1)
        if(player.a.points == 0) eff = decimalOne
        return eff
    },
})