var palet = document.querySelector('#palet');

function dec2hex(d){
    if(d > 15) {
        return d.toString(16)
    }
    else {
        return '0' + d.toString(16)
    }
}

function getHex(r,g,b){
    return '#' + dec2hex(r) + dec2hex(g) + dec2hex(b);
}


function appendCell(r, g, b, i, hex) {
    var color = [r, g, b];
    palet.innerHTML +=
        '<div class="cell" style="background-color: rgb(' + color + ')">\
            <span>' + i + ' rgb(' + color + ') ' + hex + '</span>\
        </div>';
}

function gen() {
    var base = document.querySelector('#base').value;
    var grade = parseInt(document.querySelector('#grade').value) + 1;

    if(base.length == 6) {
        var bs1 = parseInt(base.substr(0, 2), 16);
        var bs2 = parseInt(base.substr(2, 2), 16);
        var bs3 = parseInt(base.substr(4, 2), 16);
    }
    else {
        var bsp = base.toString().split(',');
        var bs1 = parseInt(bsp[0]);
        var bs2 = parseInt(bsp[1]);
        var bs3 = parseInt(bsp[2]);
        console.log(bsp);
    }
    var p1 = 255 - bs1;
    var p2 = 255 - bs2;
    var p3 = 255 - bs3;

    palet.innerHTML = '';
    for(var i = grade - 1; i > 0; i--) {
        var d1 = Math.round(bs1 + p1 / grade * i);
        var d2 = Math.round(bs2 + p2 / grade * i);
        var d3 = Math.round(bs3 + p3 / grade * i);
        appendCell(d1, d2, d3, i, getHex(d1, d2, d3));
    }
    for(var i = 0; i <= grade - 1; i++) {
        var d1 = Math.round(bs1 - bs1 / grade * i);
        var d2 = Math.round(bs2 - bs2 / grade * i);
        var d3 = Math.round(bs3 - bs3 / grade * i);
        appendCell(d1, d2, d3, i, getHex(d1, d2, d3));
    }
}