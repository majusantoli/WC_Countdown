var YY = 2022;
var MM = 11;
var DD = 21;
var HH = 10;
var MI = 10;
var SS = 10; 

function atualizaContador() 
{  
var hoje = new Date();  
var futuro = new Date(YY,MM-1,DD,HH,MI,SS);   
var ss = parseInt((futuro - hoje) / 1000);  
var mm = parseInt(ss / 60);  
var hh = parseInt(mm / 60);  
var dd = parseInt(hh / 24);   
ss = ss - (mm * 60);  
mm = mm - (hh * 60);  
hh = hh - (dd * 24);   
var faltam = '<h1>Faltam</h1><div class="relogio"><div class="numero">';  
faltam += (dd && dd > 1) ? dd+' </div><p class="texto">dias</p></div> <div class="relogio"><div class="numero"> ' : (dd==1 ? '1 dia, ' : '');  
faltam += (toString(hh).length) ? hh+' </div><p class="texto">horas</p></div> <div class="relogio"><div class="numero"> ' : '';  
faltam += (toString(mm).length) ? mm+' </div><p class="texto">min </p></div> <div class="relogio"><div class="numero">' : '';  
faltam += ss+' </div><p class="texto">seg</p></div><h1>para a Copa Qatar!</h1>';   

 if (dd+hh+mm+ss > 0) 
 {
  document.getElementById('contador').innerHTML = faltam;	
  setTimeout(atualizaContador,1000);  
 }
 else
 {
  document.getElementById('contador').innerHTML = '<h1>Já começou!!!!</h1>';	
  setTimeout(atualizaContador,1000);  
 }
}

