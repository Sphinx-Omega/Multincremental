let modInfo = {
	name: "Multincremental",
	author: "Sphinx-Omega",
	pointsName: "energy",
	pointsNameSingular: "energy",
	modFiles: ["layers.js", "tree.js","a.js","p.js","inf.js","help.js","auto.js","stats.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 6,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Beginning",
}

let changelog = `<h1>Changelog:</h1><br>
	<br><h3>v0.1</h3><br>
		- Added energy.<br>
        - Added bars.<br>
        - Added prestige.<br>
        - Added boosts.<br>
        - Added ascension.<br>

        <h3>Infinity is currently the end</h3>.
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
	// if(player.p.buyables[11] > 0) gen = true
	if(player.points.gte("1.798e308")){
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

	// gain = gain.pow(tmp.a.effect)
	gain = gain.pow(gainExp)
	return gain

}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	lastSave: new Date().getTime(),
	ms: 33,
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
		return b+d
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
	return player.points.gte(new Decimal("eeee5"))
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