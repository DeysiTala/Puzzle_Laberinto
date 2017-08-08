
var tablero = document.getElementById("tablero");
var tabla = document.createElement("table");
var move = document.getElementById('moves');
var turnDown= document.getElementById('turnDown');
var turnLeft= document.getElementById('left');
var turnRigths= document.getElementById('rigths');

//creando otro arreglo para la posicion 


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
//var contador = 0;
var arr = new Array(mapa.length);

for(var i = 0; i<arr.length; i++)
    {
        arr[i] = new Array(mapa[0].length);
    }
//creando el laberinto
for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < mapa[i].length; j++) {
            var celda = document.createElement('td');
            if (mapa[i][j]  == "*") {
                celda.setAttribute('class', 'asterisco');
            } else if(mapa[i][j] == "o"){
                celda.setAttribute("class", "initiate");
                //contenido y psicion
                mapObj ={celda: celda, x:i, y:j};
            }else if(mapa[i][j] == "W"){
                celda.setAttribute("class", "finish");
            }else{
                celda.setAttribute("class", "white")
            }
     		     fila.appendChild(celda);
             arr[i][j] = celda;
     					
		} 
			     tabla.appendChild(fila);
			     tablero.appendChild(tabla);
	}

move.onclick= function(){

/*for(var i = 0; i<mapa.length; i++ )*/

 if(mapa[mapObj.x-1][mapObj.y]== "_"){
mapObj.celda.setAttribute("class", "white");
//mapObj.celda.removechild(mapObj.celda.firstchild);
mapObj.celda= arr[mapObj.x-1][mapObj.y];
mapObj.x = mapObj.x-1;
mapObj.celda.setAttribute("class" ,"initiate");

 }

 turnDown.onclick= function(){

if(mapa[mapObj.x+1][mapObj.y]== "_"){
mapObj.celda.setAttribute("class", "white");
//mapObj.celda.removechild(mapObj.celda.firstchild);
mapObj.celda= arr[mapObj.x+1][mapObj.y];
mapObj.x = mapObj.x+1;
mapObj.celda.setAttribute("class" ,"initiate");

 }

 }
 turnLeft.onclick= function(){

if(mapa[mapObj.x][mapObj.y+1]== "_"){
mapObj.celda.setAttribute("class", "white");
//mapObj.celda.removechild(mapObj.celda.firstchild);
mapObj.celda= arr[mapObj.x][mapObj.y +1];
mapObj.y = mapObj.y + 1;
mapObj.celda.setAttribute("class" ,"initiate");

 }

 }
turnRigths.onclick= function(){

if(mapa[mapObj.x][mapObj.y-1]== "_"){
mapObj.celda.setAttribute("class", "white");
//mapObj.celda.removechild(mapObj.celda.firstchild);
//guardando la pisicion de x y 
mapObj.celda= arr[mapObj.x][mapObj.y -1];
mapObj.y = mapObj.y -1;
mapObj.celda.setAttribute("class" ,"initiate");

 }

 }

/*btnMove.onclick = function(){
    if(mapa[mapitaObj.x-1][mapitaObj.y] == "_"){
        mapitaObj.celda.setAttribute("class","blanco");
        mapitaObj.celda= arr[mapitaObj.x-1][mapitaObj.y];
        mapitaObj.x= mapitaObj.x-1;
        mapitaObj.celda.setAttribute("class","inicio");
        }
    }  */





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
}*/
/*function moverArriba() {
tablero.style.top = tablero.offsetTop - 10;
}


function moverDerecha() {
tablero.style.left = tablero.offsetLeft + 10;
}
function moverIzquierda() {
tablero.style.left = tablero.offsetLeft - 10;
}*/


/*function moverDerecha(){
if(em ==1){

  contador++
  p=0;
}
if(contador==4){

  contador=0;
}




}*/
