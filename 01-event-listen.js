let btn = document.getElementById('btn');
let lnk = document.getElementById('lnk');
let txt = document.getElementById('txt');

btn.addEventListener('click', (ev) => {
  console.log(ev.type, ev.target, ev.currentTarget);
});

lnk.addEventListener('click', (ev) => {
  ev.preventDefault();
  console.log(ev.type, ev.target, ev.currentTarget);
});

txt.addEventListener('input', (ev) => {
  console.log(ev.type, ev.target, ev.target.value);
});

txt.addEventListener('change', (ev) => {
  console.log(ev.type, ev.target, ev.target.value);
});

txt.addEventListener('blur', (ev) => {
  console.log(ev.type, ev.target, ev.target.value);
});
