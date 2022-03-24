//        TAREA EJERCICIOS
function Operaciones(){
    var a = 0;
    var b = 0;
    
    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
    
    resultadosuma = a + b;
    resultadoresta = a - b;
    resultadomulti = a*b;
    resultadodivision = a / b;

    alert("EL RESULTADO ES DE LA SUMA ES:  " + resultadosuma);
    alert("EL RESULTADO ES DE LA RESTA ES:  " + resultadoresta);
    alert("EL RESULTADO ES DE LA MULTIPLICACIÓN ES:  " + resultadomulti);
    alert("EL RESULTADO ES DE LA DIVISIÓN ES:  " + resultadodivision);
}

function MAYORQUE(){
    var a = 0;
    var b = 0;
    
    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

    if(a > b){
    alert(a + " ES MAYOR QUE: " + b );
    }
    else {
    alert(b + " ES MAYOR QUE: " + a);   
    }
}

function MENORQUE(){
    var a = 0;
    var b = 0;
    var c = 0;

    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
    c = parseInt(prompt("POR FAVOR INGRESE EL TERCER VALOR"));

 if ((a<b) && (a<c)) {
   alert ( a + " ES MENOR QUE: " + b + " Y " + c);
 }
 if ((b<a) && (b<c)){
 alert(b + " ES MENOR QUE: " + a + " Y " + c);    
 }
 else {
 alert (c + " ES MENOR QUE: " + a + " Y " + b);    
 }
}

function PAR_O_IMPAR(){
    var a = 0;
    
    a = parseInt(prompt("POR FAVOR INGRESE UN NUMERO"));

    if (a%2==0){
alert ("EL NUMERO ES PAR");
    }
    else{
        alert ("EL NUMERO ES IMPAR")
    }
}

function CUADRADO(){
    var numero = 0;
    var elevado = 0;
    numero = parseInt(prompt("POR FAVOR INGRESE EL NUMERO "));
    
    elevado = numero*numero

    alert("EL CUADRADO DEL NUMERO ES:  " + elevado);
}

function AREA(){
    var h = 0;
    var b = 0;
    
    h = parseInt(prompt("POR FAVOR INGRESE LA ALTURA "));
    b = parseInt(prompt("POR FAVOR INGRESE LA BASE"));
    
    result = b * h / 2

    alert("EL RESULTADO DEL AREA DE UN TRIANGULO:  " + result);   
}

function CENTIMETROS(){
    var metros = 0;
    var centimetros =0;

    metros = parseInt(prompt("POR FAVOR INGRESE LOS METROS"));

    centimetros = metros * 100

    alert("EL RESULTADO ES:  " + centimetros + "cm");
}

function EDAD() {
    var Edad = 0;
    var Tiempo = 0;

    edad = parseInt(prompt("Por favor ingrese la edad"));

    Tiempo = 2022 - edad

    alert("El usuario nació en el año: " + Tiempo)
}

function BANCO(){
    var inversion = 0;
    var ganancias = 0;
    var años = 0;
    var interes_anual = 0;

    inversion = parseFloat(prompt("POR FAVOR INGRESE EL TOTAL DE SU INVERSIÓN "));
    años = parseInt(prompt("POR FAVOR INGRESE LOS AÑOS "));

    interes_anual = 0.017 * 12/100

    ganancias = (inversion * interes_anual) * años

    ganancias = inversion + ganancias

    alert("EL DINERO QUE EL INDIVIDUO GANARA ES: " + ganancias)
}

function COLEGIO_ABC(){
    var nota1 = 0;
    var nota2 = 0;
    var nota3 = 0;
    var nota4 = 0;
    var nota5 = 0;
    var promedio = 0;
    nota1 = parseInt(prompt("POR FAVOR INGRESE LA PRIMERA NOTA"));
    nota2 = parseInt(prompt("POR FAVOR INGRESE LA SEGUNDA NOTA"));
    nota3 = parseInt(prompt("POR FAVOR INGRESE LA TERCERA NOTA"));
    nota4 = parseInt(prompt("POR FAVOR INGRESE LA CUARTA NOTA"));
    nota5 = parseInt(prompt("POR FAVOR INGRESE LA QUINTA NOTA"));
    promedio = nota1 + nota2 + nota3 + nota4 + nota5 / 5;

    if (promedio>=3){
        alert("El ALUMNO HA APROBADO, SU PROMEDIO ES : " +promedio)
    }
    else {
        alert("EL ALUMNO HA REPROBADO, SU PROMEDIO ES : " + promedio)
    }
   }

function FRUTERIA(){
    var kg = 0;
    var total1 = 0;
    var total2 = 0;
    var porcentaje = 0;

    kg = parseInt(prompt("POR FAVOR INGRESE LOS KILOGRAMOS"));
    total1 = 4.500 * kg

    if(kg<=2){
    alert("NO TIENE DESCUENTO SU TOTAL ES DE: " + total1)
    }

   if ((kg>=3)&& (kg<=5)){
       porcentaje = total1 * 10/100
       total2 = total1 - porcentaje
       alert("SU TOTAL A PAGAR ES: " + total2)
       alert("SU DESCUENTO ES DEL 10%")
   }

   if ((kg>=6) && (kg<=10)){
       porcentaje = total1 * 15/100
       total2 = total1 - porcentaje
       alert("SU TOTAL A PAGAR ES: " + total2)
       alert("SU DESCUENTO ES DEL 15%")
   }

   if (kg>=11){
    porcentaje = total1 * 20/100
       total2 = total1 - porcentaje
       alert("SU TOTAL A PAGAR ES: " + total2)
       alert("SU DESCUENTO ES DEL 20%")   
   }
}

