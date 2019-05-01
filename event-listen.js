let btn = document.getElementById('btn');
let lnk = document.getElementById('lnk');
let txt = document.getElementById('txt');

btn.addEventListener('click', buttonClicked);
function buttonClicked(ev) {
  console.log(ev.type, ev.target, ev.currentTarget);
}


lnk.addEventListener('click', linkClicked);
function linkClicked(ev) {
  ev.preventDefault();
  console.log(ev.type, ev.target, ev.currentTarget);
}


txt.addEventListener('input', inputMade);
function inputMade(ev) {
  console.log(ev.type, ev.target, ev.currentTarget);
}