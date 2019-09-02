
var numerosRecogidos = [];
var divNumeros = document.getElementById("numerosIntroducidos");
var numerosResultado = [];
 

//Creamos un array de 37 posiciones para la gráfica
var arrayGrafica = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//Creamos un array para recoger el color
var arrayColor = [0,0,0];

//Función que introducirá el valor de los botones pulsados
function introduceDatosArray(dato, color){


    //Actualizamos la gráfica
    actualizarGrafica(dato);
    drawChart();
    actualizarGraficaColor(color);
    drawPieChart();
   
    //Establecemos un máximo de 10 números
    if(numerosRecogidos.length <= 10){
        
        numerosRecogidos.push(dato);
        document.getElementById("numerosIntroducidos").innerHTML = "Números introducidos : " + numerosRecogidos;
    } else{

        numerosRecogidos.splice(0,1);
        numerosRecogidos.push(dato);
        document.getElementById("numerosIntroducidos").innerHTML = "Números introducidos : " + numerosRecogidos;
    }


    }

    function resizeHandler () {
        chart.draw(data, options);
    }
    if (window.addEventListener) {
        window.addEventListener('resize', resizeHandler, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onresize', resizeHandler);
    }



    


//Función para analizar datos introducimos del Array
function analizaDatosArray(){

    //Para el predictor, creamos una variable para recoger el dato, otra para sus vecinos, y una para el resultado del cálculo entre estos.
    var dato = 0;
    var datoAux = 0;
    var datoRes = 0;

    //Establecemos un mínimo de 5 números necesarios.
    if(numerosRecogidos.length >= 5){

        //Recorremos el array para extraer los números
   for(var i = 0; i < numerosRecogidos.length; i++){

    //En esta parte vamos a calcular la suma entre el número i y su sucesor, por eso preguntamos que no sea el último número del array para evitar errores
    if(i != numerosRecogidos.length -1){
 
        dato = numerosRecogidos[i];
        datoAux = numerosRecogidos[i+1];

        datoRes = dato + datoAux;

        console.log(i);

        //Si el dato es menor a 36 y no se encuentra en el Array, lo incluímos
        if((datoRes <= 36) && !(numerosResultado.includes(datoRes))){
            numerosResultado.push(Math.round(datoRes));
        }

        datoRes = dato - datoAux;
        if((datoRes >= 0) && !(numerosResultado.includes(datoRes)) ){
            numerosResultado.push(datoRes);

        }

        datoRes = datoAux - dato;
        if((datoRes >= 0) && !(numerosResultado.includes(datoRes)) ){
            numerosResultado.push(Math.round(datoRes));

        }

   



        //En el caso de que sea el máximo, restaremos los dos últimos números
    } else{

        dato = numerosRecogidos[i];
        datoAux = numerosRecogidos[i-1];

        datoRes = dato + datoAux;
        datoRes = Math.round(datoRes);
        datoRes = Math.abs(datoRes);
        if((datoRes <= 36) && !(numerosResultado.includes(datoRes))){
            numerosResultado.push(datoRes);

        }

        datoRes = dato - datoAux;
        datoRes = Math.round(datoRes);
        datoRes = Math.abs(datoRes);
        
        if((datoRes >= 0) && !(numerosResultado.includes(datoRes)) ){
            numerosResultado.push(datoRes);

        }

        datoRes = dato - datoAux;
        datoRes = Math.round(datoRes);
        datoRes = Math.abs(datoRes);
        if((datoRes >= 0) && !(numerosResultado.includes(datoRes)) ){
            numerosResultado.push(datoRes);

        }

       //La ruleta tiende a repetir números de vez en cuando...
        if(!numerosResultado.includes(dato)){
             numerosResultado.push(dato);

            }

       
        //Dividiremos el último número que ha salido por el anterior
        datoRes = dato / datoRes;
        console.log('Dvidido 1' + datoRes);
        datoRes = Math.round(datoRes);
        console.log('Dvidido 2' + datoRes);
        datoRes = Math.abs(datoRes);
        console.log('Dvidido 3' + datoRes);
        if((datoRes >= 0) && !(numerosResultado.includes(datoRes)) ){
            numerosResultado.push(datoRes);
            console.log('Dvidido' + datoRes);
            
            

        }

        //Multiplicaremos el último número que ha salido por el anterior
        datoRes = dato * datoRes;
        datoRes = Math.round(datoRes);
        datoRes = Math.abs(datoRes);
        if((datoRes <= 36) && !(numerosResultado.includes(datoRes)) ){
            numerosResultado.push(datoRes);
            console.log('Multiplicado' + datoRes);
        } 
        
        //Calcularemos el doble del dato:
        datoRes = dato * 2;
        datoRes = Math.round(datoRes);
        datoRes = Math.abs(datoRes);
        if((datoRes <= 36) && !(numerosResultado.includes(datoRes)) ){
            numerosResultado.push(datoRes);
            console.log('Doble' + datoRes);

        } 

        //Elevaremos a dos el dato:
        datoRes = Math.pow(dato, 2);
        datoRes = Math.round(datoRes);
        datoRes = Math.abs(datoRes);

        if((datoRes <= 36) && !(numerosResultado.includes(datoRes)) ){
            numerosResultado.push(datoRes);
            console.log('Elevado a 2 ' + datoRes);

        } 

        
    }
    


    
console.log(numerosResultado);
   }
   numerosResultado.sort(compararMenoraMayor);
   document.getElementById("resultado").innerHTML = "Este es el resultado: " + numerosResultado;
   numerosResultado = [];


} else{
    alert('Introduce al menos 5 números');
}


}

function resetearNumeros(){
    document.getElementById("resultado").innerHTML = "Click en calcular para obtener resultados.";
    document.getElementById("numerosIntroducidos").innerHTML = "Aún no has introducido ningún número";
    numerosRecogidos = [];
    numerosResultado = [];
    arrayGrafica = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    arrayColor = [0,0,0];
    drawChart();
    drawPieChart();
 


}

//Función de comparación
function compararMenoraMayor ( a, b ){ return a - b; }


//Creamos la función que cargará la gráfica
google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    resizeHandler();
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Número", "Repeticiones", { role: "style" } ],
        ["0", arrayGrafica[0], "#36ff00"],
        ["1", arrayGrafica[1], "#ed160e"],
        ["2", arrayGrafica[2], "#0d4541"],
        ["3", arrayGrafica[3], "#ed160e"],
        ["4", arrayGrafica[4], "#0d4541"],
        ["5", arrayGrafica[5], "#ed160e"],
        ["6", arrayGrafica[6], "#0d4541"],
        ["7", arrayGrafica[7], "#ed160e"],
        ["8", arrayGrafica[8], "#0d4541"],
        ["9", arrayGrafica[9], "#ed160e"],
        ["10", arrayGrafica[10], "#0d4541"],
        ["11", arrayGrafica[11], "#0d4541"],
        ["12", arrayGrafica[12], "#ed160e"],
        ["13", arrayGrafica[13], "#0d4541"],
        ["14", arrayGrafica[14], "#ed160e"],
        ["15", arrayGrafica[15], "#0d4541"],
        ["16", arrayGrafica[16], "#ed160e"],
        ["17", arrayGrafica[17], "#0d4541"],
        ["18", arrayGrafica[18], "#ed160e"],
        ["19", arrayGrafica[19], "#ed160e"],
        ["20", arrayGrafica[20], "#0d4541"],
        ["21", arrayGrafica[21], "#ed160e"],
        ["22", arrayGrafica[22], "#0d4541"],
        ["23", arrayGrafica[23], "#ed160e"],
        ["24", arrayGrafica[24], "#0d4541"],
        ["25", arrayGrafica[25], "#ed160e"],
        ["26", arrayGrafica[26], "#0d4541"],
        ["27", arrayGrafica[27], "#ed160e"],
        ["28", arrayGrafica[28], "#0d4541"],
        ["29", arrayGrafica[29], "#0d4541"],
        ["30", arrayGrafica[30], "#ed160e"],
        ["31", arrayGrafica[31], "#0d4541"],
        ["32", arrayGrafica[32], "#ed160e"],
        ["33", arrayGrafica[33], "#0d4541"],
        ["34", arrayGrafica[34], "#ed160e"],
        ["35", arrayGrafica[35], "#0d4541"],
        ["36", arrayGrafica[36], "#ed160e"]

    ]);


      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Repeticiones de los números",
      
        width: '90%',
        height: '250px',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        vAxis: {
            minValue: 0,
            maxValue: 10
          }

      };
      var chart = new google.visualization.ColumnChart(document.getElementById("grafico"));
      chart.draw(view, options);
  }


  //Función para actualizar la gráfica
  function actualizarGrafica(valor){

    arrayGrafica.splice(valor, 1, arrayGrafica[valor] + 1);
  }

  function actualizarGraficaColor(dato){
      var i = 0;

    if(dato == 'verde'){
        i = 2;
    }

    if(dato == 'rojo'){
        i = 0;
    }
    if(dato == 'negro'){
        i = 1;
    }
      arrayColor.splice(i,1, arrayColor[i] + 1)
  }


  //Función para gráfica circular:
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawPieChart);
  function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Gráfica por color:'],
      ['Rojo', arrayColor[0]], 
      ['Negro', arrayColor[1]],
      ['Cero',  arrayColor[2]]

    ]);

    var options = {
      title: 'Estadísticas por color',
      pieHole: 0.4,
      slices: {
        0: { color: 'red' },
        1: { color: 'black' },
        2: { color: 'green' }
      }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }



 
                                        

