addLayer("eter", {
    name: "eter", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Σ Eternity", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: decimalZero,
        total: decimalZero,
        best: decimalZero,
        eternities: decimalZero,
        eterenergy: decimalZero,
        seeds: decimalZero,
    }},
    color: "#ffffff",
    nodeStyle(){ return {
        //"background-image": "url(images/nodes/Inf.gif)",
        "background-color"() {
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
    resource: "eternenergy", // Name of prestige currency
    baseResource: "infenergy", // Name of resource prestige is based on
    baseAmount() {return player.inf.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    softcapPower: 0.6,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        pmult = new Decimal(0)
        return pmult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(0)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    unlocked() {
        if((hasUpgrade("inf",211)) || (hasAchievement("a",103))) return true
    },
    hotkeys: [
        // {
        //     key: "m", description: "M: Rapid buy all bars",
        //         onPress(){
        //             for(i = 0; i<10 ; i++){
        //                 if (canBuyBuyable("p",11)) buyBuyable("p",11)
        //                 if (canBuyBuyable("p",12)) buyBuyable("p",12)
        //                 if (canBuyBuyable("p",13)) buyBuyable("p",13)
        //                 if (canBuyBuyable("p",14)) buyBuyable("p",14)
        //                 if (canBuyBuyable("p",15)) buyBuyable("p",15)
        //                 if (canBuyBuyable("p",16)) buyBuyable("p",16)
        //                 if (canBuyBuyable("p",17)) buyBuyable("p",17)
        //                 if (canBuyBuyable("p",18)) buyBuyable("p",18)
        //                 if (canBuyBuyable("p",19)) buyBuyable("p",19)
        //                 if (canBuyBuyable("p",21)) buyBuyable("p",21)
        //             }
        //         }
        // },
    ],
    shouldNotify: false,
    layerShown() {
        return player.eter.unlocked
    },
    tabFormat: {
        "Milestones" :{
            content: [
                ["raw-html",
                    function(){
                        return ""
                    }
                ],
                "blank",
                ["clickables",1],
                ["clickables",2],
                ["clickables",3],
                ["clickables",4],
                ["clickables",5],
                ["clickables",6],
                ["clickables",99],
            ],
            style: {
                "right":"0",
                "left":"0",
                "height":"64.5%",
                "width"(){
                    return "100%"
                },
                // "overflow-x":"scroll",
                // "scrollbar-color":"darkgray dimgray",
                "transition":"instant",
                "position":"static"
            },
            buttonStyle: {
                "border-radius":"0%",
                "border-top-left-radius":"50px 50px",
                "border-top-right-radius":"50px 50px",
                "border-color":"transparent",
                "background-color"(){
                    return ((player.subtabs.eter.mainTabs == "Milestones")?"rgba(43, 43, 43, 1)":"rgba(70, 70, 70, 1)")
                },
                "visibility":"visible",
                "position":"fixed",
                "height":"7.5%",
                "width":"20.125%",
                "top":"19.5%",
                "left":"3.9%",
                "z-index":"9",
                "font-size":"40px",
                "text-shadow":"4px 4px 2px #000000c7",
                "transition-duration":"0s"
            },
        },

        "Destabilizer" :{
            content: [
                ["raw-html",
                    function(){
                        return ""
                    }
                ],
                "blank",
                ["clickables",1],
                ["clickables",2],
                ["clickables",4],
                ["clickable",999],
            ],
            style: {
                "position":"fixed",
                "right":"35%",
                "height":"616px",
            },
            buttonStyle: {
                "border-radius":"0%",
                "border-top-left-radius":"50px 50px",
                "border-top-right-radius":"50px 50px",
                "border-color":"transparent",
                "background-color"(){
                    return ((player.subtabs.eter.mainTabs == "Destabilizer")?"#1a1a1aff":"rgba(70, 70, 70, 1)")
                },
                "visibility":"visible",
                "position":"fixed",
                "height":"7.5%",
                "width":"20.125%",
                "top":"19.5%",
                "left":"24.05%",
                "z-index":"9",
                "font-size":"40px",
                "text-shadow":"4px 4px 2px #000000c7",
                "transition-duration":"0s"
            },
            unlocked(){
                return player.eter.eternities.gte(1)
            },
        },

        "Tree" :{
            content: [
                ["raw-html",
                    function(){
                        return ""
                    }
                ],
                "blank",
                ["clickables",1],
                ["clickables",2],
                ["clickables",4],
                ["clickable",999],
            ],
            style: {
                "position":"fixed",
                "right":"35%",
                "height":"616px",
            },
            buttonStyle: {
                "border-radius":"0%",
                "border-top-left-radius":"50px 50px",
                "border-top-right-radius":"50px 50px",
                "border-color":"transparent",
                "background-color"(){
                    return ((player.subtabs.eter.mainTabs == "Tree")?"#1a1a1aff":"rgba(70, 70, 70, 1)")
                },
                "visibility":"visible",
                "position":"fixed",
                "height":"7.5%",
                "width":"20.125%",
                "top":"19.5%",
                "left":"44.2%",
                "z-index":"9",
                "font-size":"40px",
                "text-shadow":"4px 4px 2px #000000c7",
                "transition-duration":"0s"
            },
            unlocked(){
                return player.eter.eternities.gte(2)
            }
        },

        "Dilation" :{
            content: [
                ["raw-html",
                    function(){
                        return ""
                    }
                ],
                "blank",
                ["clickables",1],
                ["clickables",2],
                ["clickables",4],
                ["clickable",999],
            ],
            style: {
                "position":"fixed",
                "right":"35%",
                "height":"616px",
            },
            buttonStyle: {
                "border-radius":"0%",
                "border-top-left-radius":"50px 50px",
                "border-top-right-radius":"50px 50px",
                "border-color":"transparent",
                "background-color"(){
                    return ((player.subtabs.eter.mainTabs == "Dilation")?"#1a1a1aff":"rgba(70, 70, 70, 1)")
                },
                "visibility":"visible",
                "position":"fixed",
                "height":"7.5%",
                "width":"20.125%",
                "top":"19.5%",
                "left":"64.39%",
                "z-index":"9",
                "font-size":"40px",
                "text-shadow":"4px 4px 2px #000000c7",
                "transition-duration":"0s"
            },
            unlocked(){
                return false
            }
        },
    },


    buyables: {

        // 11: {
        //     cost() { 
        //         let cost = Decimal.pow(10,((this.bought()).sub(1))).max(1).times(10)
        //         return cost 
        //     },
        //     currencyInternalName:"infenergy",
        //     currencyLayer:"inf",
        //     currencyDisplayName:"IE",
        //     bought() {
        //         let b = player.inf.gen1bought
        //         return b
        //     },
        //     extra(){
        //         let ex = decimalZero
        //         return ex
        //     },
        //     effect(){
        //         let eff = decimalOne
        //         return eff
        //     },
        //     // tooltip() {
        //     //     let ascnum = player.p.rAsc
        //     //     return "<h2>Boost #" + formatWhole(ascnum) + "</h2><h3><br><br>Level: "+formatWhole(player.p.redBuyAmt)+" / "+formatWhole(player.p.rMax)+"<br>"+"Mult: x"+format(((player.p.rBaseMult).times(player.p.baseMult).times(tmp.a.effect).times(Decimal.pow(((player.p.baseBoost).times(10)),ascnum))), 3)
        //     // },
        //     display() {
        //         if (player.tab != "inf") return
        //         let x = tmp.inf.buyables[11].extra
        //         let extra = ""
        //         let bonus = " (Maxed)"
        //         let bonusDis = ""
        //         let effbonus = 1
        //         let multdis = " (x"+ format(player.inf.gen1mult, 2) + ")"
        //         let dis = "<h1>First generator:  " + format(player.inf.gen1, 2) + " (" + formatWhole(player.inf.gen1bought) + ") " + "<br><br><h2>GP/sec: " + format(player.inf.gen1prod, 2) + multdis
        //         let costdis = " IE"
        //         return dis + "<h2>\n\n\
        //         Cost: " + formatWhole(this.cost()) + costdis
        //     },
        //     canAfford() {
        //         if(player.inf.infenergy.gte(tmp[this.layer].buyables[this.id].cost)) return true
        //     },

        //     buy() {
        //         player.inf.infenergy = player.inf.infenergy.sub(this.cost())
        //         setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        //         player.inf.gen1bought = player.inf.gen1bought.add(1)
        //         player.inf.gen1 = player.inf.gen1.add(1)
        //     },

        //     // buyMax() {
        //     //     buyBuyable("p",11)
        //     // },

        //     unlocked() { return true }, 
        //     style: {'height':'9.5%', 'width':'35%',
        //         "border-radius"(){
        //             return "20px/20%"
        //         },
        //         "border":"1px solid",
        //         "border-color":"#0000005d",
        //         "background-color"(){
        //             return (tmp.inf.buyables[11].canAfford)?("#e94141ff"):("#613f3fff")
        //         },
        //         "background-image"(){
        //             return "url(images/icons/generator1.png), url(images/icons/generator1.png)"
        //         },
        //         "background-size":"20%, 20%",
        //         "background-position":"left, right",
        //         "background-repeat":"no-repeat",
        //         "color":"black",
        //         "text-shadow":"0 0 1px white",
        //         "position":"fixed",
        //         "top":"37.5%",
        //         "left":"7.5%",
        //         "transition":"instant"
        //     },
        // },
    },

    upgrades: {
        
        // 11: {
        //     title: " ",
        //     description() {
        //         return "<h2>"
        //     },
        //     tooltip(){
        //         return "<h3>UPG-1<br><br>Unlock Generators<br><br>Cost: 1 IE"
        //     },
        //     canAfford(){
        //         return player.inf.infenergy.gte(1)
        //     },
        //     pay(){
        //         player.inf.infenergy = player.inf.infenergy.sub(1)
        //     },
        //     unlocked(){
        //         return true
        //     },
        //     style: {"width":"5%","height":"10%","position":"absolute",
        //         "color"(){
        //             return (hasUpgrade("inf",11))?"rgb(0, 0, 0)":((tmp.inf.upgrades[11].canAfford)?"white":"black")
        //         },
        //         "background-image"() {
        //             let a = "url(images/icons/generatorUPGlocked.png), url(images/bgs/Ascension.gif)"
        //             let b = "url(images/icons/generatorUPG.png)"
        //             return (hasUpgrade("inf",11))?"url(images/icons/generatorUPG.png), url(images/bgs/Ascension.gif)":((tmp.inf.upgrades[11].unlocked)?a:b)
        //         },
        //         "background-size":"110% 110%",
        //         "background-position":"center",
        //         "background-repeat":"no-repeat",
        //         "border-color"(){
        //             return (hasUpgrade("inf",11))?"lime":((tmp.inf.upgrades[11].canAfford)?"yellow":"transparent")
        //         },
        //         "border-radius":"10%",
        //         "top":"20%",
        //         "bottom":"0%",
        //         "left":"0%",
        //         "right":"70%"
        //     },
        // },
    },

    clickables: {

        11: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                //return rainbowText("b",formatWhole(player.inf.infinities)) + rainbowText("h3"," ∞")
                return "<b>"+((formatWhole(player.eter.eternities))+"<h3> Σ")
            },
            style: {'height':'5%', 'width':'14%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"2.75%",
                "right":"38%",
                "z-index":"12",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-align":"center",
                "text-shadow":"2px 2px 3px #000000c7"
            },
        },

        12: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                //return rainbowText("b",(formatWhole(player.inf.points) + " IE"))
                return "<b>"+(format(player.eter.eterenergy, 2) + " EE")
            },
            style: {'height':'5%', 'width':'14%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"2.75%",
                "right":"23%",
                "z-index":"12",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-align":"center",
                "text-shadow":"2px 2px 3px #000000c7"
            },
        },

        13: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<b>"+(format(player.inf.infenergy, 3))+" IE"
            },
            style: {'height':'5%', 'width':'14%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"7.5%",
                "right":"23%",
                "z-index":"12",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-align":"center",
                "text-shadow":"2px 2px 3px #000000c7"
            },
        },

        14: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>Eternity"
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
                "right":"50%",
                "z-index":"12",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px #000000c7"
            },
        },

        15: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'10%', 'width':'45%',
                "border-radius":"16px",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return "rgba(112, 112, 112, 1)"
                },
                "position":"fixed",
                "top":"2.5%",
                "right":"7.5%",
                "z-index":"11",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                },
                "box-shadow":"3px 3px 6px #00000052"
            },
        },

        16: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'10%', 'width':'15%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"2.5%",
                "right":"22.5%",
                "z-index":"11",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
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
                "z-index":"4",
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
            style: {'height':'7%', 'width':'89%',
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
                "z-index":"4",
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
                "z-index":"4",
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
                "z-index":"4",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
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
            style: {'height':'5.125%', 'width':'45%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-bottom-color"(){
                     return "rgba(0, 0, 0, 1)"
                }, 
                "border-top-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "border-left-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "border-right-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"2.5%",
                "right":"7.5%",
                "z-index":"11",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
            },
        },

        23: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<b>"+(format(player.points, 3))+" 🗲"
            },
            style: {'height':'5%', 'width':'14%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"7.5%",
                "right":"8%",
                "z-index":"12",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-align":"center",
                "text-shadow":"2px 2px 3px #000000c7"
            },
        },

        24: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                //return rainbowText("b",formatWhole(player.inf.infinities)) + rainbowText("h3"," ∞")
                return "<b>"+((formatWhole(player.inf.infinities))+"<h3> ∞")
            },
            style: {'height':'5%', 'width':'14%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"7.5%",
                "right":"38%",
                "z-index":"12",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-align":"center",
                "text-shadow":"2px 2px 3px #000000c7"
            },
        },

        25: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                //return rainbowText("b",formatWhole(player.inf.infinities)) + rainbowText("h3"," ∞")
                return "<b>"+((formatWhole(player.eter.seeds))+" ES")
            },
            style: {'height':'5%', 'width':'14%',
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                }, 
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"2.75%",
                "right":"8%",
                "z-index":"12",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-align":"center",
                "text-shadow":"2px 2px 3px #000000c7"
            },
        },

        31: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return ""
            },
            style: {'height':'25%', 'width':'80.55%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-bottom-color"(){
                     return "rgba(0, 0, 0, 1)"
                },
                "border-top-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "border-left-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "border-right-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(43, 43, 43, 1)"
                },
                "position":"fixed",
                "top":"27.4%",
                "right":"11.15%",
                "left":"0%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "20px"
                }
            },
        },

        32: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>Eternity Bonuses"
            },
            style: {'height':'5%', 'width':'33%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(43, 43, 43, 1)"
                },
                "position":"fixed",
                "top":"28%",
                "right":"11.15%",
                "left":"0%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "22px"
                },
                "text-shadow":"5px 5px 2px black"
            },
        },

        33: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h2>Bar Mults: x"+format(getEterBonus1(),2)
            },
            style: {'height':'5%', 'width':'33%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(43, 43, 43, 1)"
                },
                "position":"fixed",
                "top":"34%",
                "right":"51.15%",
                "left":"0%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        34: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h2>Cycle Speed: x"+format(getEterBonus2(),2)
            },
            style: {'height':'5%', 'width':'33%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(43, 43, 43, 1)"
                },
                "position":"fixed",
                "top":"40%",
                "right":"51.15%",
                "left":"0%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        35: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h2>Boost Power: x"+format(getEterBonus3(),2)
            },
            style: {'height':'5%', 'width':'33%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(43, 43, 43, 1)"
                },
                "position":"fixed",
                "top":"46%",
                "right":"51.15%",
                "left":"0%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        36: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h2>Infinity Gain: x"+format(getEterBonus4(),2)
            },
            style: {'height':'5%', 'width':'33%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(43, 43, 43, 1)"
                },
                "position":"fixed",
                "top":"34%",
                "right":"0%",
                "left":"28.85%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        37: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h2>Generator Mults: x"+format(getEterBonus5(),2)
            },
            style: {'height':'5%', 'width':'33%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(43, 43, 43, 1)"
                },
                "position":"fixed",
                "top":"40%",
                "right":"0%",
                "left":"28.85%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        38: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h2>Collider Particle gain: x"+format(getEterBonus6(),2)
            },
            style: {'height':'5%', 'width':'33%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(43, 43, 43, 1)"
                },
                "position":"fixed",
                "top":"46%",
                "right":"0%",
                "left":"28.85%",
                "z-index":"8",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        41: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>Locked"
            },
            style: {'height':'7.5%', 'width':'20.2%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"19.85%",
                "left":"24.3%",
                "z-index":"8",
                "color":"#222222ff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"2px 2px 2px black"
            },
        },

        42: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>Locked"
            },
            style: {'height':'7.5%', 'width':'20.2%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"19.85%",
                "left":"44.42%",
                "z-index":"8",
                "color":"#222222ff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"2px 2px 2px black"
            },
        },

        43: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>Locked"
            },
            style: {'height':'7.5%', 'width':'20.2%',
                "border":"2px solid",
                "border-radius":"0%",
                "border-color"(){
                     return "rgba(0, 0, 0, 0)"
                },
                "background-color"(){
                    return "rgba(0, 0, 0, 0)"
                },
                "position":"fixed",
                "top":"19.85%",
                "left":"64.54%",
                "z-index":"8",
                "color":"#222222ff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"2px 2px 2px black"
            },
        },

        51: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>1 Eternity<br><br><h2>Unlock the Destabilizer"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(1))?(b):(a)
                },
                "position":"absolute",
                "top":"52.85%",
                "left":"0%",
                "right":"51.35%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        52: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>2 Eternities<br><br><h2>Start Eternities with pre-Break Infinity upgrades and unlock the Eternal Tree"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(2))?(b):(a)
                },
                "position":"absolute",
                "top":"52.85%",
                "left":"29%",
                "right":"0%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        53: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>3 Eternities<br><br><h2>Start with Infinity Challenges 1-5 completed and unlock the Infinity Autobuyer"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(3))?(b):(a)
                },
                "position":"absolute",
                "top":"78.35%",
                "left":"0%",
                "right":"51.35%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        54: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>5 Eternities<br><br><h2>Keep all Infinity Challenge completions on Eternity"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(5))?(b):(a)
                },
                "position":"absolute",
                "top":"78.35%",
                "left":"29%",
                "right":"0%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        55: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>8 Eternities<br><br><h2>Destabilizer Rods are twice as fast and unlock Generator Autobuyers"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(8))?(b):(a)
                },
                "position":"absolute",
                "top":"103.85%",
                "left":"0%",
                "right":"51.35%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        56: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>15 Eternities<br><br><h2>Start with Infinity Broken and unlock Collider Autobuyers"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(15))?(b):(a)
                },
                "position":"absolute",
                "top":"103.85%",
                "left":"29%",
                "right":"0%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        57: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>25 Eternities<br><br><h2>Keep Break Infinity upgrades"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(25))?(b):(a)
                },
                "position":"absolute",
                "top":"129.35%",
                "left":"0%",
                "right":"51.35%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        58: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>50 Eternities<br><br><h2>Start with the Collider unlocked with 5% chance"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(50))?(b):(a)
                },
                "position":"absolute",
                "top":"129.35%",
                "left":"29%",
                "right":"0%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        59: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>100 Eternities<br><br><h2>Break Eternity and unlock the Eternity Autobuyer"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(100))?(b):(a)
                },
                "position":"absolute",
                "top":"154.85%",
                "left":"0%",
                "right":"51.35%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        61: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>2000 Eternities<br><br><h2>Generate Eternities based on your fastest Eternity"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(2e3))?(b):(a)
                },
                "position":"absolute",
                "top":"154.85%",
                "left":"29%",
                "right":"0%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        62: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>5 ECs<br><br><h2>Prestige no longer resets anything"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(15))?(b):(a)
                },
                "position":"absolute",
                "top":"180.35%",
                "left":"0%",
                "right":"51.35%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        63: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>15 ECs<br><br><h2>Ascensions no longer reset anything"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(1))?(b):(a)
                },
                "position":"absolute",
                "top":"180.35%",
                "left":"29%",
                "right":"0%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        64: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>30 ECs<br><br><h2>Infinities no longer reset anything"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(25))?(b):(a)
                },
                "position":"absolute",
                "top":"205.85%",
                "left":"0%",
                "right":"51.35%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        65: {
            canClick() {return false},
            unlocked(){
                return true
            },
            display(){
                return "<h1>50 ECs<br><br><h2>Eternities no longer reset anything"
            },
            style: {'height':'25%', 'width':'39.85%',
                "border":"2px solid",
                "border-radius":"20px/20px",
                "border-color"(){
                     return "rgba(53, 53, 53, 1)"
                },
                "background"(){
                    let a = "linear-gradient(rgba(197, 77, 77, 1),rgba(109, 109, 109, 1) 95%)"
                    let b = "linear-gradient(rgba(77, 197, 87, 1),rgba(109, 109, 109, 1) 95%)"
                    return (player.eter.eternities.gte(1))?(b):(a)
                },
                "position":"absolute",
                "top":"205.85%",
                "left":"29%",
                "right":"0%",
                "z-index":"3",
                "color":"#ffffffff",
                "font-size"() {
                    return "24px"
                },
                "text-shadow":"4px 4px 2px black"
            },
        },

        // 21: {
        //     canClick() {return false},
        //     unlocked(){
        //         return true
        //     },
        //     display(){
        //         return "<h2>"
        //     },
        //     style: {'height':'7.5%', 'width':'25%',
        //         "border-radius":"0%",
        //         "border-color"(){
        //              return "rgba(0, 0, 0, 0)"
        //         }, 
        //         "background-color"(){
        //             return "transparent"
        //         },
        //         "position":"fixed",
        //         "top":"20%",
        //         "left":"4.15%",
        //         "z-index":"10",
        //         "color":"#ffffffff",
        //         "font-size"() {
        //             return "24px"
        //         },
        //         "text-shadow":"4px 4px 2px #000000c7"
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
            style: {'height':'14.3%', 'width':'110%',
                "border-radius":"0%",
                "border-top":"2px solid white",
                "border-bottom":"2px solid white",
                "background-color"(){
                    return "#3d5563ff"
                },
                "position":"fixed",
                "top":"0%",
                "right":"-5%",
                "z-index":"10",
                "font-size":"32px",
                "box-shadow":"2px 2px 1px black"
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
                "z-index":"3",
            },
        },
    },

    bars: {

    },

    update(diff){

    //   this.processedDescription = processText(tmp.inf.upgrades[id].tooltip, this.garbledDescriptionTemplate);

    //   this.garbleTimer++;
    //   if (this.isObscured) {
    //     this.garbleKey = 10 * this.id + Math.floor(this.garbleTimer / 3);
    //   } else {
    //     this.garbleKey = this.id;
    //   }

        if((hasUpgrade("inf",211)) || (hasAchievement("a",103))) player.eter.unlocked = true

    },

    passiveGeneration(){
        let passive = new Decimal(0)
        return passive
        },

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) {layerDataReset(this.layer)}
    },
})