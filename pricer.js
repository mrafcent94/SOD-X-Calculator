//Floritam
var floratampallet = parseFloat("326.00")
var floratampiece = parseFloat("2.50")

var floratam = function() {  
    var pal = $("#pallet").val().trim();
    var pie = $("#piece").val().trim();
        if (pal > 0) {
            var int = parseFloat(pal);
            var math = (int * floratampallet);
            $(".output").text("$" + math);
        }
        else if (pie > 0) {
            var int = parseFloat(pie);
            var math = (int * floratampiece);
            $(".output").text("$" + math);
        }
        else if (pal <= 0 & pie <= 0) {
            alert("Please enter a value greater than 0, in either pallets or pieces.")
            $('#piece').val("");
            $('#pallet').val("");
        }
}

//Bitter & Seville
var bitsevpallet = parseFloat("336.00")
var bitsevpiece = parseFloat("3.00")

var bitsev = function() {  
    var pal = $("#pallet").val().trim();
    var pie = $("#piece").val().trim();
        if (pal > 0) {
            var int = parseFloat(pal);
            var math = (int * bitsevpallet);
            $(".output").text("$" + math);
        }
        else if (pie > 0) {
            var int = parseFloat(pie);
            var math = (int * bitsevpiece);
            $(".output").text("$" + math);
        }
        else if (pal <= 0 & pie <= 0) {
            alert("Please enter a value greater than 0, in either pallets or pieces.")
            $('#piece').val("");
            $('#pallet').val("");
        }
}

//Zeon
var zeonpallet = parseFloat("399.00")
var zeonpiece = parseFloat("12.00")

var zeon = function() {  
    var pal = $("#pallet").val().trim();
    var pie = $("#piece").val().trim();
        if (pal > 0) {
            var int = parseFloat(pal);
            var math = (int * zeonpallet);
            $(".output").text("$" + math);
        }
        else if (pie > 0) {
            var int = parseFloat(pie);
            var math = (int * zeonpiece);
            $(".output").text("$" + math);
        }
        else if (pal <= 0 & pie <= 0) {
            alert("Please enter a value greater than 0, in either pallets or pieces.")
            $('#piece').val("");
            $('#pallet').val("");
        }
}

//Empire
var empirepallet = parseFloat("385.00")
var empirepiece = parseFloat("6.00")

var empire = function() {  
    var pal = $("#pallet").val().trim();
    var pie = $("#piece").val().trim();
        if (pal > 0) {
            var int = parseFloat(pal);
            var math = (int * empirepallet);
            $(".output").text("$" + math);
        }
        else if (pie > 0) {
            var int = parseFloat(pie);
            var math = (int * empirepiece);
            $(".output").text("$" + math);
        }
        else if (pal <= 0 & pie <= 0) {
            alert("Please enter a value greater than 0, in either pallets or pieces.")
            $('#piece').val("");
            $('#pallet').val("");
        }
}

//Bahia
var bahiapallet = parseFloat("140.00")
var bahiapiece = parseFloat("2.00")

var bahia = function() {  
    var pal = $("#pallet").val().trim();
    var pie = $("#piece").val().trim();
        if (pal > 0) {
            var int = parseFloat(pal);
            var math = (int * bahiapallet);
            $(".output").text("$" + math);
        }
        else if (pie > 0) {
            var int = parseFloat(pie);
            var math = (int * bahiapiece);
            $(".output").text("$" + math);
        }
        else if (pal <= 0 & pie <= 0) {
            alert("Please enter a value greater than 0, in either pallets or pieces.")
            $('#piece').val("");
            $('#pallet').val("");
        }
}

//Clear
var clear = function() {
    $('.output').text("0");
    $('#piece').val("");
    $('#pallet').val("");
}

$("#flo").on("click", floratam);
$("#bit").on("click", bitsev);
$("#sev").on("click", bitsev);
$("#zeo").on("click", zeon);
$("#emp").on("click", empire);
$("#bah").on("click", bahia);
$("#clear").on("click", clear);
