

var area = document.getElementById('trombi');
var stone = document.getElementById('time');
var l = 26
for (let i = 1; i <= l; i++) {
    area.innerHTML += '<img class ="trombis" id = "trombi'+i+'" src="img/'+i+'.jpg" alt=""></img>';
}
var tirage = function (){
    $('#snap1').toggleClass('hide1');
    $('#snap2').toggleClass('hide1');
    for (let i = 0; i < 13; i++) {
        alea();
    }

}
var snaparea = document.getElementById('snap1');
var alea = function (){
    var rand = Math.ceil(Math.random()*l);
    var trombirandom = document.getElementById('trombi'+rand);
    $(trombirandom).fadeOut(1000);
    console.log(trombirandom);
    console.log(rand);
    var backTime = function (){
        var trombis = document.getElementsByClassName('trombis');
        $(trombirandom).fadeIn(1000);
        $('#snap1').toggleClass('hide1');
        $('#snap2').toggleClass('hide1');
    }
    stone.addEventListener("click", backTime);
}







snaparea.addEventListener("click", tirage);