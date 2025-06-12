addLayer("a", {
    name: "Achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Achievements", // This appears on the layer's node. Default is the id with the first letter capitalized
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
        "font-size":"20px",
        }
    },
    requires: decimalZero, // Can be a function that takes requirement increases into account
    resource: "Achievements",
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 9, // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    achievementPopups: true,
    tabFormat: {
        "Achievements" :{
            content: [
                ["raw-html",
                    function(){
                    return "<b>Each achievement gives a <sup>^</sup>1.05 boost to particle generator power<br><br>Currently: "+layerText("h3","a",("<sup>^</sup>"+format(tmp.a.effect, 2)))
                    }
                ],
                "blank",
                "blank",
            "achievements"
            ]
        },
    },
    achievements: {
        rows: 4,
        cols: 8,
        11: {
            name: "<h3>The First",
            tooltip: "<h3>Get 5 Particle Generators",
            done() {
                return player.p.buyables[11] >= 5
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",11)) color = "#77BF5F"
                    return color
                }
            },
        },

        12: {
            name: "<h3>POWER!",
            tooltip: "<h3>Power up!",
            done() {
                return (player.p.buyables[31]).gte(1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",12)) color = "#77BF5F"
                    return color
                }
            },
        },

        13: {
            name: "<h3>1-UP",
            tooltip: "<h3>Level up!",
            done() {
                return (player.p.buyables[32]).gte(1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",13)) color = "#77BF5F"
                    return color
                }
            },
        },

        14: {
            name: "<h3>Comin' through, now!",
            tooltip: "<h3>Overdrive!",
            done() {
                return (player.p.buyables[33]).gte(1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",14)) color = "#77BF5F"
                    return color
                }
            },
        },

        15: {
            name: "<h3>The hardest mode",
            tooltip: "<h3>Hypermode!",
            done() {
                return (player.p.buyables[34]).gte(1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",15)) color = "#77BF5F"
                    return color
                }
            },
        },

        16: {
            name: "<h3>Revengeance",
            tooltip: "<h3>Ascend!",
            done() {
                return (player.p.buyables[35]).gte(1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",16)) color = "#77BF5F"
                    return color
                }
            },
        },

        21: {
            name: "<h3>The rain, transformed",
            tooltip: "<h3>Ascend 100 times",
            done() {
                return (player.p.buyables[35]).gte(100)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",21)) color = "#77BF5F"
                    return color
                }
            },
        },

        22: {
            name: "<h3>You gathered all your courage...",
            tooltip: "<h3>Overcome a trial",
            done() {
                return (hasChallenge("asc",11))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",22)) color = "#77BF5F"
                    return color
                }
            },
        },

        23: {
            name: "<h3>...And learned to 'OVERCOME'",
            tooltip: "<h3>Overcome Ascension",
            done() {
                return hasUpgrade("asc",34)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",23)) color = "#77BF5F"
                    return color
                }
            },
        },

        24: {
            name: "<h3>Weakened-er Girl",
            tooltip: "<h3>Overcome a Hard Trial",
            done() {
                return hasChallenge("asc",21)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",24)) color = "#77BF5F"
                    return color
                }
            },
        },

        25: {
            name: "<h3>Undefeatable",
            tooltip: "<h3>Overcome all Hard Trials",
            done() {
                return (hasChallenge("asc",21) && hasChallenge("asc",22) && hasChallenge("asc",23))
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",25)) color = "#77BF5F"
                    return color
                }
            },
        },

        26: {
            name: "<h3>Can we get much higher?",
            tooltip: "<h3>Transcend!",
            done() {
                return (player.asc.transc >= 1)
            },
            onComplete() {
                addPoints("a",1)
            },
            style: {"width":"110px","height":"110px",
                "background"() {
                    let color = "#BF8F8F"
                    if (hasAchievement("a",26)) color = "#77BF5F"
                    return color
                }
            },
        },
    },

    effect() {
        let eff = player.a.points
        eff = Decimal.pow(1.05, eff)
        return eff
    },
})