let btn = document.getElementById('btn');
let lnk = document.getElementById('lnk');
let txt = document.getElementById('txt');

btn.addEventListener('click', function(ev) {
  console.log(ev.type, ev.target, ev.currentTarget);
});

lnk.addEventListener('click', function(ev) {
  ev.preventDefault();
  console.log(ev.type, ev.target, ev.currentTarget);
});

txt.addEventListener('input', function(ev) {
  console.log(ev.type, ev.target, ev.target.value);
});

txt.addEventListener('change', function(ev) {
  console.log(ev.type, ev.target, ev.target.value);
});

txt.addEventListener('blur', function(ev) {
  console.log(ev.type, ev.target, ev.target.value);
});