var consulta = window.matchMedia('(max-width:640px)');
consulta.addListener(mediaQuery);
var $bmenu_ms_01 = document.getElementById('bmenu_ms_01');
var $menuinit = document.getElementById('menuinit');
var $menuprod = document.getElementById('menuprod');
var $menuemp = document.getElementById('menuemp');
var $menucontact = document.getElementById('menucontact');
var $menu = document.getElementById('menu_ms_01');
var $menu2 = document.getElementById('menu_ms_02');
function toggleMenu(){
  $menu.classList.toggle('active');
  $menu2.classList.toggle('active');
};
function showMenu(){
  $menu.classList.add('active');
  $menu2.classList.add('active');
  console.log('oculto');
};
function hideMenu(){
  $menu.classList.remove('active');
  $menu2.classList.remove('active');
  console.log('visual');
};
function mediaQuery() {
  if(consulta.matches){
    console.log('se cumplio');
    $bmenu_ms_01.addEventListener('click', toggleMenu);
  }else{
    $bmenu_ms_01.removeEventListener('click', toggleMenu);
    console.log('No se cumplio');
  }
}
function mediaQuery2() {
  if(consulta.matches){
    console.log('se cumplio');
    $menuinit.addEventListener('click', toggleMenu);
  }else{
    $menuinit.removeEventListener('click', toggleMenu);
    console.log('No se cumplio');
  }
}
function mediaQuery3() {
  if(consulta.matches){
    console.log('se cumplio');
    $menuprod.addEventListener('click', toggleMenu);
  }else{
    $menuprod.removeEventListener('click', toggleMenu);
    console.log('No se cumplio');
  }
}
function mediaQuery4() {
  if(consulta.matches){
    console.log('se cumplio');
    $menuemp.addEventListener('click', toggleMenu);
  }else{
    $menuemp.removeEventListener('click', toggleMenu);
    console.log('No se cumplio');
  }
}
function mediaQuery5() {
  if(consulta.matches){
    console.log('se cumplio');
    $menucontact.addEventListener('click', toggleMenu);
  }else{
    $menucontact.removeEventListener('click', toggleMenu);
    console.log('No se cumplio');
  }
}
mediaQuery();
mediaQuery2();
mediaQuery3();
mediaQuery4();
mediaQuery5();
var $body = document.body;
var gestos = new Hammer($body);
gestos.get('pinch').set({enable: true});
// gestos.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([gestos.get('pan'), gestos.get('rotate')]);
// hammertime.get('pinch').set({ enable: true });
gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);

gestos.on("pinch", function(ev) {
  // gestos.style.webkitTransform = 'scale('+ ev.scale +','+ ev.scale +')';
  // gestos.style.mozTransform = 'scale('+ ev.scale +','+ ev.scale +')';
  // $body.style.transform = 'scale('+ ev.scale +','+ ev.scale +')';
  console.log(ev)
  console.log('se cumplio pinch');
});
