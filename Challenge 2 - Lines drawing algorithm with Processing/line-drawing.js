function setup() {
  createCanvas(400, 400);
}

function crearTabla(x1, y1, x2, y2) {
  //vector en el que se guardan los puntos de la linea
  var tabla = [];
  //se ingresan dos puntos por conrdenadas por el usuario
  var y, x;

  if (x1 < x2) {
    //se calcula la pendiente de la recta
    var m = (y2 - y1) / (x2 - x1);
    var b = y1 - m * x1;
    for (var i = x1; i <= x2; i = i + 0.1) {
      y = m * i + b;
      tabla.push(i);
      tabla.push(y);
    }
  } else if (x1 > x2) {
    //se calcula la pendiente de la recta
    var m = (y2 - y1) / (x2 - x1);
    var b = y1 - m * x1;
    for (var i = x1; i >= x2; i = i - 0.1) {
      y = m * i + b;
      tabla.push(i);
      tabla.push(y);
    }
  } else if (x1 == x2 && y1 < y2) {
    var m = (x2 - x1) / (y2 - y1);
    var b = x1 - m * y1;
    for (var i = y1; i <= y2; i = i + 0.1) {
      x = m * i + b;
      tabla.push(x);
      tabla.push(i);
    }
  } else {
    var m = (x2 - x1) / (y2 - y1);
    var b = x1 - m * y1;
    for (var i = y1; i >= y2; i = i - 0.1) {
      x = m * i + b;
      tabla.push(x);
      tabla.push(i);
    }
  }
  return tabla;
}
//se imprime la tabla de puntos los numeros impares son las coordenadas x y los pares las coordenadas y
tabla1 = crearTabla(1, 2, 100, 20);
tabla2 = crearTabla(10, 200, 50, 10);
tabla3 = crearTabla(300, 300, 10, 10);
tabla4 = crearTabla(200, 300, 250, 50);
tabla5 = crearTabla(350, 350, 100, 300);

function draw() {
  background(220);
  for (var i = 0; i < tabla1.length; i = i + 2) {
    point(tabla1[i], tabla1[i + 1]);
  }
  for (var i = 0; i < tabla2.length; i = i + 2) {
    point(tabla2[i], tabla2[i + 1]);
  }
  for (var i = 0; i < tabla3.length; i = i + 2) {
    point(tabla3[i], tabla3[i + 1]);
  }
  for (var i = 0; i < tabla4.length; i = i + 2) {
    point(tabla4[i], tabla4[i + 1]);
  }
  for (var i = 0; i < tabla5.length; i = i + 2) {
    point(tabla5[i], tabla5[i + 1]);
  }
}
