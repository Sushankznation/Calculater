function clearScreen() {
    document.getElementById("input").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("input").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
}