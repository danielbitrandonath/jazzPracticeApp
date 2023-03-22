const keys = [
    "A", "A#", "Bb", "B", "C", "C#", "Db", "D", 
    "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#","Ab"]

const patterns = [
    "1-2-3-5", "1-2-5-3", "1-3-2-5", "1-3-5-2", "1-5-2-3", "1-5-3-2", 
    "2-1-5-3", "2-1-3-5", "2-3-1-5", "2-3-5-1", "2-5-1-3", "2-5-3-1", 
    "3-1-2-5", "3-1-5-2", "3-2-1-5", "3-2-5-1", "3-5-1-2", "3-5-2-1",
    "5-1-2-3", "5-1-3-2", "5-2-1-3", "5-2-3-1", "5-3-1-2", "5-3-2-1", 
    
    "1-b3-4-5", "1-b3-5-4", "1-4-b3-5", "1-4-5-b3", "1-5-b3-4", "1-5-4-b3",
    "b3-1-5-4", "b3-1-4-5", "b3-4-1-5", "b3-4-5-1", "b3-5-1-4", "b3-5-4-1",
    "4-1-b3-5", "4-1-5-b3", "4-b3-1-5", "4-b3-5-1", "4-5-1-b3", "4-5-b3-1",
    "5-1-b3-4", "5-1-4-b3", "5-b3-1-4", "5-b3-4-1", "5-4-1-b3", "5-4-b3-1"
]



let key = document.getElementById("key")
let pat = document.getElementById("pattern")

function getNew() {

    let rKey = Math.floor(Math.random() * 17)
    let rPat = Math.floor(Math.random() * 48)
    key.textContent = "Key: " + keys[rKey]
    pat.textContent = "Pattern: " + patterns[rPat]

    console.log(rKey)
    console.log(rPat)
}
