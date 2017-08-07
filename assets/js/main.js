
var tablero = document.getElementById("tablero");
var tabla = document.createElement("table");
var btnLeft = document.getElementById("left");

var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];



for(var i =0; i<mapa.length; i++) {
	    var fila = document.createElement("tr");
	for(var j=0; j<mapa[i].length; j++) {
		var celda = document.createElement("td");
      
     	if(mapa[i][j] == "o" ) {
	     		celda.setAttribute("class", "initiate");
                      		}else if(mapa[i][j] == "W") {
   				celda.setAttribute("class", "finish");
     		   }else if(mapa[i][j] == "*")

                   {
     			celda.setAttribute("class", "asterisco");
     		        }else if(mapa[i][j] == "_") {
     			celda.setAttribute("class", "subguion");
     		}		
     		     fila.appendChild(celda);
     					
		} 
			     tabla.appendChild(fila);
			     tablero.appendChild(tabla);
	}

/*var x =_ 0;
var y = 0;*/

/*var n = 0; 
function cambiarPosition()
{
var el_div = document.getElementById('flecha');

if(n == 0)
{
el_div.style.position = 'absolute';
n = 1;
}
else
{
el_div.style.position = 'relative';
n = 0;
}
} */
function moverArriba() {
tablero.style.top = tablero.offsetTop - 10;
}


function moverDerecha() {
tablero.style.left = tablero.offsetLeft + 10;
}
function moverIzquierda() {
tablero.style.left = tablero.offsetLeft - 10;
}