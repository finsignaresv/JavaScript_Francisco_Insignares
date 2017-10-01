//Declaracion de Variables
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
var hayPunto = "0";
var ochoDigitos = "";
var num1 = "";
var num2 = "";
var operador = "";
var total = "";

//Metodo de Iniciacion, se encarga de ejecutar todas las funciones que deben iniciar con la ejecucion del programa
function iniciacion()
  {
    valorDisplay = "";
    hayPunto = "0";
    ochoDigitos = "";
  }

  // Objeto con las funciones de las operaciones basicas
  var Calculadora = (function(num1, num2)
    {
      var resultado = 0;

      function actualizarResultado(nuevoResultado)
        {
          resultado = nuevoResultado;
        }

      return {
          sumar: function()
            {
              var resultado = num1 + num2;
              actualizarResultado(resultado);
              return resultado;
            },

          restar: function()
            {
              var resultado = num1 - num2;
              actualizarResultado(resultado);
              return resultado;
            },

          multiplicar: function()
            {
              var resultado = num1 * num2;
              actualizarResultado(resultado);
              return resultado;
            },

          dividir: function()
            {
              var resultado = num1 / num2;
              actualizarResultado(resultado);
              return resultado;
            },
        }
    })

// Funcion para asegurar que el usuario no pueda digitar mas de 8 digitos
function validarDigitos()
  {
    ochoDigitos = "";
    if (valorDisplay.length < 8)
      {
        ochoDigitos = true;
      }
      else if ((valorDisplay.length == 8) && (valorDisplay.substring(0,1) == "-"))
        {
          ochoDigitos = true;
        }
        else if ((valorDisplay.length == 8) && (valorDisplay.indexOf('.') != -1))
          {
            ochoDigitos = true;
          }
          else
            {
              ochoDigitos = false;
            }
  }

// Funcion para asegurar el usuario imprima maximo 8 digitos en pantalla
  function imprimirOchoDigitos()
    {
      if ((valorDisplay.length >= 8) && ((valorDisplay.substring(2,3) == ".") && (valorDisplay.substring(0,1) == "-")))
        {
          document.getElementById("display").innerHTML = valorDisplay.substring(0,10);
          valorDisplay = valorDisplay.substring(0,10);
        }
        else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(3,4) == ".") && (valorDisplay.substring(0,1) == "-")))
          {
            document.getElementById("display").innerHTML = valorDisplay.substring(0,10);
            valorDisplay = valorDisplay.substring(0,10);
          }
          else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(4,5) == ".") && (valorDisplay.substring(0,1) == "-")))
            {
              document.getElementById("display").innerHTML = valorDisplay.substring(0,10);
              valorDisplay = valorDisplay.substring(0,10);
            }
            else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(5,6) == ".") && (valorDisplay.substring(0,1) == "-")))
              {
                document.getElementById("display").innerHTML = valorDisplay.substring(0,10);
                valorDisplay = valorDisplay.substring(0,10);
              }
              else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(6,7) == ".") && (valorDisplay.substring(0,1) == "-")))
                {
                  document.getElementById("display").innerHTML = valorDisplay.substring(0,10);
                  valorDisplay = valorDisplay.substring(0,10);
                }
                else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(7,8) == ".") && (valorDisplay.substring(0,1) == "-")))
                  {
                    document.getElementById("display").innerHTML = valorDisplay.substring(0,10);
                    valorDisplay = valorDisplay.substring(0,10);
                  }
                  else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(2,3) == ".") && (valorDisplay.substring(0,1) != "-")))
                    {
                      document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                      valorDisplay = valorDisplay.substring(0,9);
                    }
                    else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(3,4) == ".") && (valorDisplay.substring(0,1) != "-")))
                      {
                        document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                        valorDisplay = valorDisplay.substring(0,9);
                      }
                      else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(4,5) == ".") && (valorDisplay.substring(0,1) != "-")))
                        {
                          document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                          valorDisplay = valorDisplay.substring(0,9);
                        }
                        else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(5,6) == ".") && (valorDisplay.substring(0,1) != "-")))
                          {
                            document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                            valorDisplay = valorDisplay.substring(0,9);
                          }
                          else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(6,7) == ".") && (valorDisplay.substring(0,1) != "-")))
                            {
                              document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                              valorDisplay = valorDisplay.substring(0,9);
                            }
                            else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(7,8) == ".") && (valorDisplay.substring(0,1) != "-")))
                              {
                                document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                                valorDisplay = valorDisplay.substring(0,9);
                              }
                              else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(8,9) == ".") && (valorDisplay.substring(0,1) == "-")))
                                {
                                  document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                                  valorDisplay = valorDisplay.substring(0,9);
                                }
                                else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(9,10) == ".") && (valorDisplay.substring(0,1) == "-")))
                                  {
                                    document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                                    valorDisplay = valorDisplay.substring(0,9);
                                  }
                                  else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(10,11) == ".") && (valorDisplay.substring(0,1) == "-")))
                                    {
                                      document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                                      valorDisplay = valorDisplay.substring(0,9);
                                    }
                                    else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(11,12) == ".") && (valorDisplay.substring(0,1) == "-")))
                                      {
                                        document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                                        valorDisplay = valorDisplay.substring(0,9);
                                      }
                                      else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(12,13) == ".") && (valorDisplay.substring(0,1) == "-")))
                                        {
                                          document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                                          valorDisplay = valorDisplay.substring(0,9);
                                        }
                                        else if ((valorDisplay.length >= 8) && ((valorDisplay.substring(13,14) == ".") && (valorDisplay.substring(0,1) == "-")))
                                          {
                                            document.getElementById("display").innerHTML = valorDisplay.substring(0,9);
                                            valorDisplay = valorDisplay.substring(0,9);
                                          }
                              else
                                {
                                  document.getElementById("display").innerHTML = valorDisplay.substring(0,8);
                                  valorDisplay = valorDisplay.substring(0,8);
                                }
    }

//Funcion para cambiar el signo del numero que este en pantalla
  function cambiarSigno()
    {
      if ((valorDisplay.substring(0,1) == "-") && (ochoDigitos = 1))
        {
          valorDisplay = valorDisplay.substring(1,valorDisplay.length);
        }
        else
          {
            valorDisplay = "-" + valorDisplay;
          }
        imprimirOchoDigitos();
    }

//Funcion que indica si hay un punto en la pantalla
function addPunto()
  {
    if ((hayPunto == false) && ((valorDisplay.length >= 8) && (valorDisplay.substring(0,1) == "-")))
      {
        hayPunto == true;
      }
      else if ((hayPunto == false) && (valorDisplay.length < 8))
        {
          document.getElementById("display").innerHTML += ".";
          valorDisplay += "."
          hayPunto = true;
        }
  }

//Funcion que guarda el primer numero digitado en pantalla
function guardarValor1()
  {
    num1 = parseFloat(valorDisplay);
  }

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 0
  cero.addEventListener("mousedown", function()
    {
      cero.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "0";
          valorDisplay += "0";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "0";
            valorDisplay = "0";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 1
  uno.addEventListener("mousedown",function()
    {
      uno.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "1";
          valorDisplay += "1";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "1";
            valorDisplay = "1";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 2
  dos.addEventListener("mousedown",function()
    {
      dos.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "2";
          valorDisplay += "2";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "2";
            valorDisplay = "2";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 3
  tres.addEventListener("mousedown",function()
    {
      tres.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "3";
          valorDisplay += "3";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "3";
            valorDisplay = "3";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 4
  cuatro.addEventListener("mousedown",function()
    {
      cuatro.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "4";
          valorDisplay += "4";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "4";
            valorDisplay = "4";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 5
  cinco.addEventListener("mousedown",function()
    {
      cinco.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "5";
          valorDisplay += "5";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "5";
            valorDisplay = "5";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 6
  seis.addEventListener("mousedown",function()
    {
      seis.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "6";
          valorDisplay += "6";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "6";
            valorDisplay = "6";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 7
  siete.addEventListener("mousedown",function()
    {
      siete.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "7";
          valorDisplay += "7";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "7";
            valorDisplay = "7";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 8
  ocho.addEventListener("mousedown",function()
    {
      ocho.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "8";
          valorDisplay += "8";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "8";
            valorDisplay = "8";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar en pantalla el numero 9
  nueve.addEventListener("mousedown",function()
    {
      nueve.setAttribute("style","transform:scale(0.9)")
      validarDigitos();
      if ((valorDisplay != "") && (ochoDigitos))
        {
          document.getElementById("display").innerHTML += "9";
          valorDisplay += "9";
        }
        else if (valorDisplay == "")
          {
            document.getElementById("display").innerHTML = "9";
            valorDisplay = "9";
          }
    });

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y colocar el punto en la pantalla
  punto.addEventListener("mousedown", function()
    {
      punto.setAttribute("style","transform:scale(0.9)")
      addPunto();
    });

    function borrarPantalla()
      {
        document.getElementById("display").innerHTML = "0";
        iniciacion();
        num2 = "";
      }

//Funcion que reduce el tamano de la tecla al hacer click con el mouse y borra la pantalla
  on.addEventListener("mousedown", function()
    {
      on.setAttribute("style", "transform:scale(0.9)")
      borrarPantalla();
    });

//Funcion que reduce el tamano de la tecla en pantalla al hacer click con el mouse y cambia el signo del numero que aparezca en pantalla
  sign.addEventListener("mousedown", function()
    {
      sign.setAttribute("style", "transform:scale(0.9)")
      cambiarSigno();
    });

//Funcion que reduce el tamano de la tecla en pantalla al hacer click con el mouse
  raiz.addEventListener("mousedown",function()
    {
      raiz.setAttribute("style", "transform:scale(0.9)")
    });

//Funcion que reduce el tamano de la tecla en pantalla al hacer click con el mouse y coloca la pantalla en blanco indicando que esta haciendo una operacion
  mas.addEventListener("mousedown",function()
    {
      mas.setAttribute("style", "transform:scale(0.9)")
      guardarValor1();
      document.getElementById("display").innerHTML = "";
      iniciacion();
      operador = "suma";
      total = "";
    });

//Funcion que reduce el tamano de la tecla en pantalla al hacer click con el mouse y coloca la pantalla en blanco indicando que esta haciendo una operacion
  menos.addEventListener("mousedown",function()
    {
      menos.setAttribute("style", "transform:scale(0.9)")
      guardarValor1();
      document.getElementById("display").innerHTML = "";
      iniciacion();
      operador = "resta";
      total = "";
    });

//Funcion que reduce el tamano de la tecla en pantalla al hacer click con el mouse y coloca la pantalla en blanco indicando que esta haciendo una operacion
  div.addEventListener("mousedown",function()
    {
      div.setAttribute("style", "transform:scale(0.9)")
      guardarValor1();
      document.getElementById("display").innerHTML = "";
      iniciacion();
      operador = "divide";
      total = "";
    });

//Funcion que reduce el tamano de la tecla en pantalla al hacer click con el mouse y coloca la pantalla en blanco indicando que esta haciendo una operacion
  por.addEventListener("mousedown",function()
    {
      por.setAttribute("style", "transform:scale(0.9)")
      guardarValor1();
      document.getElementById("display").innerHTML = "";
      iniciacion();
      operador = "producto";
      total = "";
    });

//Funcion que reduce el tamano de la tecla en pantalla al hacer click con el mouse y realiza la operacion matematica
  igual.addEventListener("mousedown",function()
    {
      igual.setAttribute("style", "transform:scale(0.9)");
      if (total == "")
        {
          num2 = parseFloat(valorDisplay);
        }

      if ((num1 != "") && (operador == "suma"))
        {
          total = Calculadora(num1,num2).sumar();
        }
        else if ((num1 != "") && (operador == "resta"))
          {
            total = Calculadora(num1,num2).restar();
          }
          else if ((num1 != "") && (operador == "producto"))
            {
              total = Calculadora(num1,num2).multiplicar();
            }
            else if((num1 != "") && (operador == "divide"))
              {
                total = Calculadora(num1,num2).dividir();
              }
      valorDisplay = total.toString();
      imprimirOchoDigitos();
      hayPunto = "0";
      ochoDigitos = "";
      num1 = parseFloat(valorDisplay);
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
