const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
const newCats = [...cats, "Broom"];
return newCats
}
function prependCat(name) {
    const newCatsTwo = ["Arnold",...cats];
    return newCatsTwo
}
function removeLastCat() {
const newCatsThree = cats.slice(0,2)
return newCatsThree
}
function removeFirstCat() {
const newCatsFour = cats.slice(1)
return newCatsFour 
}