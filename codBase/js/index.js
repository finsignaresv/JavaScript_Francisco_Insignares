//Metodo de Iniciacion, se encarga de ejecutar todas las funciones que deben iniciar con la ejecucion del programa
iniciacion = function()
  {

  }

var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var punto = document.getElementById("punto");
var on = document.getElementById("on");
var sign = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var div = document.getElementById("dividido");
var por = document.getElementById("por");
var menos = document.getElementById("menos");
var mas = document.getElementById("mas");
var igual = document.getElementById("igual");
var valorDisplay = "";

dos.addEventListener("mousedown", function()
  {
    document.getElementById("display").innerHTML = "Hola 2";
  });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse
  cero.addEventListener("mousedown", function()
    {
      cero.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "0";
          valorDisplay += "0";
        }
    });

  uno.addEventListener("mousedown",function()
    {
      uno.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "1";
          valorDisplay += "1";
        }
        else
          {
            document.getElementById("display").innerHTML = "1";
            valorDisplay = "1";
          }
    });

  dos.addEventListener("mousedown",function()
    {
      dos.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "2";
          valorDisplay += "2";
        }
        else
          {
            document.getElementById("display").innerHTML = "2";
            valorDisplay = "2";
          }
    });

  tres.addEventListener("mousedown",function()
    {
      tres.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "3";
          valorDisplay += "3";
        }
        else
          {
            document.getElementById("display").innerHTML = "3";
            valorDisplay = "3";
          }
    });

  cuatro.addEventListener("mousedown",function()
    {
      cuatro.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "4";
          valorDisplay += "4";
        }
        else
          {
            document.getElementById("display").innerHTML = "4";
            valorDisplay = "4";
          }
    });

  cinco.addEventListener("mousedown",function()
    {
      cinco.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "5";
          valorDisplay += "5";
        }
        else
          {
            document.getElementById("display").innerHTML = "5";
            valorDisplay = "5";
          }
    });

  seis.addEventListener("mousedown",function()
    {
      seis.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "6";
          valorDisplay += "6";
        }
        else
          {
            document.getElementById("display").innerHTML = "6";
            valorDisplay = "6";
          }
    });

  siete.addEventListener("mousedown",function()
    {
      siete.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "7";
          valorDisplay += "7";
        }
        else
          {
            document.getElementById("display").innerHTML = "7";
            valorDisplay = "7";
          }
    });

  ocho.addEventListener("mousedown",function()
    {
      ocho.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "8";
          valorDisplay += "8";
        }
        else
          {
            document.getElementById("display").innerHTML = "8";
            valorDisplay = "8";
          }
    });

  nueve.addEventListener("mousedown",function()
    {
      nueve.setAttribute("style","transform:scale(0.9)")
      if (valorDisplay != "")
        {
          document.getElementById("display").innerHTML += "9";
          valorDisplay += "9";
        }
        else
          {
            document.getElementById("display").innerHTML = "9";
            valorDisplay = "9";
          }
    });

  punto.addEventListener("mousedown", function()
    {
      punto.setAttribute("style","transform:scale(0.9)")
    });

  on.addEventListener("mousedown", function()
    {
      on.setAttribute("style", "transform:scale(0.9)")
    });

  sign.addEventListener("mousedown", function()
    {
      sign.setAttribute("style", "transform:scale(0.9)")
    });

  raiz.addEventListener("mousedown",function()
    {
      raiz.setAttribute("style", "transform:scale(0.9)")
    });

  mas.addEventListener("mousedown",function()
    {
      mas.setAttribute("style", "transform:scale(0.9)")
    });

  menos.addEventListener("mousedown",function()
    {
      menos.setAttribute("style", "transform:scale(0.9)")
    });

  div.addEventListener("mousedown",function()
    {
      div.setAttribute("style", "transform:scale(0.9)")
    });

  por.addEventListener("mousedown",function()
    {
      por.setAttribute("style", "transform:scale(0.9)")
    });

  igual.addEventListener("mousedown",function()
    {
      igual.setAttribute("style", "transform:scale(0.9)")
    });

//Funcion que restablece el tamano de la tecla al dejar de presionar el mouse
  cero.addEventListener("mouseup", function()
    {
      cero.setAttribute("style","transform:scale(1)")
    });

  uno.addEventListener("mouseup",function()
    {
      uno.setAttribute("style","transform:scale(1)")
    });

  dos.addEventListener("mouseup",function()
    {
      dos.setAttribute("style","transform:scale(1)")
    });

  tres.addEventListener("mouseup",function()
    {
      tres.setAttribute("style","transform:scale(1)")
    });

  cuatro.addEventListener("mouseup",function()
    {
      cuatro.setAttribute("style","transform:scale(1)")
    });

  cinco.addEventListener("mouseup",function()
    {
      cinco.setAttribute("style","transform:scale(1)")
    });

  seis.addEventListener("mouseup",function()
    {
      seis.setAttribute("style","transform:scale(1)")
    });

  siete.addEventListener("mouseup",function()
    {
      siete.setAttribute("style","transform:scale(1)")
    });

  ocho.addEventListener("mouseup",function()
    {
      ocho.setAttribute("style","transform:scale(1)")
    });

  nueve.addEventListener("mouseup",function()
    {
      nueve.setAttribute("style","transform:scale(1)")
    });

  punto.addEventListener("mouseup", function()
    {
      punto.setAttribute("style","transform:scale(1)")
    });

  on.addEventListener("mouseup", function()
    {
      on.setAttribute("style", "transform:scale(1)")
    });

  sign.addEventListener("mouseup", function()
    {
      sign.setAttribute("style", "transform:scale(1)")
    });

  raiz.addEventListener("mouseup",function()
    {
      raiz.setAttribute("style", "transform:scale(1)")
    });

  mas.addEventListener("mouseup",function()
    {
      mas.setAttribute("style", "transform:scale(1)")
    });

  menos.addEventListener("mouseup",function()
    {
      menos.setAttribute("style", "transform:scale(1)")
    });

  div.addEventListener("mouseup",function()
    {
      div.setAttribute("style", "transform:scale(1)")
    });

  por.addEventListener("mouseup",function()
    {
      por.setAttribute("style", "transform:scale(1)")
    });

  igual.addEventListener("mouseup",function()
    {
      igual.setAttribute("style", "transform:scale(1)")
    });
// Objeto con las funciones de las operaciones basicas
var Calculadora = (function(num1, num2)
  {
    var resultado = 0;

    function actualizarResultado(nuevoResultado)
      {
        resultado = nuevoResultado;
        console.log(resultado);
      }

    return {
        sumar: function()
          {
            var resultado = num1 + num2;
            actualizarResultado(resultado);
          },

        restar: function()
          {
            var resultado = num1 - num2;
            actualizarResultado(resultado);
          },

        multiplicar: function()
          {
            var resultado = num1 * num2;
            actualizarResultado(resultado);
          },

        dividir: function()
          {
            var resultado = num1 / num2;
            actualizarResultado(resultado);
          },

        resultado: function()
          {
            return resultado;
          }
      }
  })
