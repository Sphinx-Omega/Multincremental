let modInfo = {
	name: "The Universe Tree",
	author: "Sphinx-Omega",
	pointsName: "particles",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
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
		- Added quarks.<br>
		`

let winText = `You've reached the end! (For now...)`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	let gen = false
	if(hasUpgrade("p",11)) gen = true
	return gen
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0.1)
	let gainExp = new Decimal(1)

	gain = gain.mul(tmp.a.effect)
	if(hasUpgrade("p",12)) gain = gain.times(2)
	if(hasUpgrade("p",13)) gain = gain.times(upgradeEffect("p",13))
	if(hasUpgrade("p",21)) gain = gain.times(upgradeEffect("p",21))
	if(player.e.total.gte(1)) gain = gain.times(tmp.e.effect2)
	if(hasUpgrade("e",21)) gain = gain.times(upgradeEffect("e",21))
	return gain.pow(gainExp)

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
function getUndulatingColor(period = Math.sqrt(760)){
        let t = new Date().getTime()
        let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 0) 
        let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
        let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
        a = convertToB16(Math.floor(a*128) + 128)
        b = convertToB16(Math.floor(b*128) + 128)
        c = convertToB16(Math.floor(c*128) + 128)
        return "#"+String(a) + String(b) + String(c)
}

// Display extra things at the top of the page
var displayThings = [
    function(){
        let x = getUndulatingColor()
		let a = "Current endgame: "+colorText("h2", x,format("eeeee1"))+" particles (v0.1)"
		// let b = inChallenge("m",21)?"<br>'Undiscovered' progress: " + format(player.points.max(1).log10().pow(0.64953))
        // +"%":""
		return a + (options.autosave ? "" : colorText("h3",x,"<br>Warning: autosave is off"))
	},
	function(){
		let a = new Date().getTime() - player.lastSave
		let b = "Last save was " + formatTime(a/1000) + " ago."
		if (lastTenTicks.length < 10) return b
		let c = 0
		for (i = 0; i<10; i++){
			c += lastTenTicks[i] / 10000
		}
        let d = isEndgame()?makeBlue("<br>You are past endgame,<br>and the game might not be balanced here."):""
		return b + "<br>Average TPS = " + format(c) + "s/tick."+d
	}
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