let modInfo = {
	name: "Incremental²",
	author: "Sphinx-Omega",
	pointsName: "particles",
	pointsNameSingular: "particle",
	modFiles: ["layers.js", "tree.js","a.js","p.js","asc.js","transc.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 6,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Beginning",
}

let changelog = `<h1>Changelog:</h1><br>
	<br><h3>v0.1</h3><br>
		- Added particles.<br>
		`

let winText = `You've reached the end! (For now...)`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

var rainbowColor = getFasterUndulatingColor()

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	let gen = false
	if(player.p.buyables[11] > 0) gen = true
	if(player.points.gte("1.798e308") && !hasUpgrade("asc",34)){
		gen = false
		player.points = player.points.min("1.798e308")
	}
	if(player.points.gte("1e1e12")){
		gen = false
		player.points = player.points.min("1e1e12")
	}
	return gen
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	let gainExp = new Decimal(1)

	let gen50mult = Decimal.pow((2),((player.p.gen).div(50).floor()))
	let bst50mult = Decimal.pow((1.5),((player.p.boost).div(50).floor()))
	let chr50mult = Decimal.pow((1.1),((player.p.charger).div(50).floor()))

	let bstmult = new Decimal(1.5)
	let chrgmult = new Decimal(1.13125)
	let odmult = new Decimal(1.5)
	let hmmult = new Decimal(1.5)
	
	bstmult = bstmult.times(bst50mult)
	chrgmult = chrgmult.times(chr50mult)

	let asc32 = new Decimal(1.025)
	if(hasUpgrade("asc",32)) asc32 = new Decimal(1.033)
	if(inChallenge("asc",21)) hmmult = new Decimal(1.361489)
	if(player.p.buyables[34] > 0) odmult = odmult.pow(Decimal.pow((hmmult),(player.p.hm)))
	let levelmult = new Decimal(1.3).times(Decimal.pow((odmult),(player.p.od)))
	let powermult = new Decimal(2.5).times(Decimal.pow((levelmult),(player.p.level)))
	if(hasUpgrade("p",14)) bstmult = bstmult.times(2)
	if(hasUpgrade("p",23)) chrgmult = chrgmult.times(asc32)
	if(hasUpgrade("asc",43)) chrgmult = chrgmult.times(1.05)

	if(inChallenge("asc",11)) bstmult = bstmult.pow(0.75)
	if(inChallenge("asc",21)) bstmult = bstmult.max(1).pow(2/3)
	if(inChallenge("asc",21)) chrgmult = chrgmult.pow(2/3)
	if(getTrialComps() >= 2) powermult = powermult.times(secondAscReward())

	gain = gain.times(gen50mult)

	if(player.p.buyables[11] > 0) gain = gain.times(tmp.p.buyables[11].effect)
	if(hasUpgrade("p",11)) gain = gain.times(2)
	if(player.p.buyables[12] > 0) gain = gain.times(Decimal.pow((bstmult),(tmp.p.buyables[12].effect)))
	if(player.p.buyables[13] > 0) gain = gain.pow(Decimal.pow((chrgmult),(player.p.charger)))
	if(player.p.buyables[31] > 0) gain = gain.times(Decimal.pow((powermult),(player.p.power)))

	if((player.asc.ap).gt(0)) gain = gain.times(firstAscReward())

	if(hasUpgrade("asc",53)) gain = gain.times(1)

	gain = gain.pow(tmp.a.effect)
	gain = gain.pow(gainExp)
	return gain

}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	lastSave: new Date().getTime(),
	ms: 50,
	options:false,
    notation:'Scientific',
}}

function convertToB16(n){
    let codes = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "A",
            11: "B",
            12: "C",
            13: "D",
            14: "E",
            15: "F",
    }
    let x = n % 16
    return codes[(n-x)/16] + codes[x]
}

function getFastestUndulatingColor(period = Math.sqrt(760)){
        let t = new Date().getTime()
        let a = Math.sin(t / 50 / period * 2 * Math.PI + 0) 
        let b = Math.sin(t / 50 / period * 2 * Math.PI + 2)
        let c = Math.sin(t / 50 / period * 2 * Math.PI + 4)
        a = convertToB16(Math.floor(a*128) + 128)
        b = convertToB16(Math.floor(b*128) + 128)
        c = convertToB16(Math.floor(c*128) + 128)
        return "#"+String(a) + String(b) + String(c)
}

function getFasterUndulatingColor(period = Math.sqrt(760)){
        let t = new Date().getTime()
        let a = Math.sin(t / 1e2 / period * 2 * Math.PI + 0) 
        let b = Math.sin(t / 1e2 / period * 2 * Math.PI + 2)
        let c = Math.sin(t / 1e2 / period * 2 * Math.PI + 4)
        a = convertToB16(Math.floor(a*128) + 128)
        b = convertToB16(Math.floor(b*128) + 128)
        c = convertToB16(Math.floor(c*128) + 128)
        return "#"+String(a) + String(b) + String(c)
}

function getFastUndulatingColor(period = Math.sqrt(760)){
        let t = new Date().getTime()
        let a = Math.sin(t / 2e2 / period * 2 * Math.PI + 0) 
        let b = Math.sin(t / 2e2 / period * 2 * Math.PI + 2)
        let c = Math.sin(t / 2e2 / period * 2 * Math.PI + 4)
        a = convertToB16(Math.floor(a*128) + 128)
        b = convertToB16(Math.floor(b*128) + 128)
        c = convertToB16(Math.floor(c*128) + 128)
        return "#"+String(a) + String(b) + String(c)
}

function getSlowUndulatingColor(period = Math.sqrt(760)){
        let t = new Date().getTime()
        let a = Math.sin(t / 4e2 / period * 2 * Math.PI + 0) 
        let b = Math.sin(t / 4e2 / period * 2 * Math.PI + 2)
        let c = Math.sin(t / 4e2 / period * 2 * Math.PI + 4)
        a = convertToB16(Math.floor(a*128) + 128)
        b = convertToB16(Math.floor(b*128) + 128)
        c = convertToB16(Math.floor(c*128) + 128)
        return "#"+String(a) + String(b) + String(c)
}

function getSlowerUndulatingColor(period = Math.sqrt(760)){
        let t = new Date().getTime()
        let a = Math.sin(t / 8e2 / period * 2 * Math.PI + 0) 
        let b = Math.sin(t / 8e2 / period * 2 * Math.PI + 2)
        let c = Math.sin(t / 8e2 / period * 2 * Math.PI + 4)
        a = convertToB16(Math.floor(a*128) + 128)
        b = convertToB16(Math.floor(b*128) + 128)
        c = convertToB16(Math.floor(c*128) + 128)
        return "#"+String(a) + String(b) + String(c)
}

// Display extra things at the top of the page
var displayThings = [
	function(){
		let a = new Date().getTime() - player.lastSave
		let b = "Last save was " + formatTime(a/1000) + " ago."
		if (lastTenTicks.length < 10) return b
		let c = 0
		for (i = 0; i<10; i++){
			c += lastTenTicks[i] / 10000
		}
		let e = "<br>Average TPS = " + format(c) + "s/tick."
        let d = isEndgame()?makeBlue("<br>You are past endgame,<br>and the game might not be balanced here."):""
		return b + d
	},
	// function(){
    //     let x = getFasterUndulatingColor()
	// 	//let a = "Current endgame: "+colorText("h2", x,format("eeeee1"))+" particles (v0.1)"
	// 	// let b = inChallenge("m",21)?"<br>'Undiscovered' progress: " + format(player.points.max(1).log10().pow(0.64953))
    //     // +"%":""
	// 	return (options.autosave ? "" : colorText("h3",x,"Warning: autosave is off"))
	// }
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("eeeee1"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}