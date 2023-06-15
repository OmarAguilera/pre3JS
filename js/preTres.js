function calcularHoraDormir() {
    let horaDespertar = document.getElementById("horaDespertar").value;
    let horaDespertarObj = new Date();
    let partesHora = horaDespertar.split(":");
    horaDespertarObj.setHours(partesHora[0]);
    horaDespertarObj.setMinutes(partesHora[1]);
  
    let horaDormirObj;
    let resultado = "";
  
    resultado += "Para dormir 3 ciclos, duérmete a las " + (horaDormirObj = new Date(horaDespertarObj.getTime() - 3 * 90 * 60000)).toLocaleTimeString() + "\n";
    resultado += "Para dormir 4 ciclos, duérmete a las " + (horaDormirObj = new Date(horaDespertarObj.getTime() - 4 * 90 * 60000)).toLocaleTimeString() + "\n";
    resultado += "Para dormir 5 ciclos, duérmete a las " + (horaDormirObj = new Date(horaDespertarObj.getTime() - 5 * 90 * 60000)).toLocaleTimeString() + "\n";
    resultado += "Para dormir 6 ciclos, duérmete a las " + (horaDormirObj = new Date(horaDespertarObj.getTime() - 6 * 90 * 60000)).toLocaleTimeString();
  
    // Almacenar resultado en el almacenamiento local
    localStorage.setItem("resultado", resultado);
  
    document.getElementById("resultado").textContent = resultado;
  }
  
  // Recuperar datos almacenados al cargar la página
  window.addEventListener("load", function() {
    let resultadoAlmacenado = localStorage.getItem("resultado");
    if (resultadoAlmacenado) {
      document.getElementById("resultado").textContent = resultadoAlmacenado;
    }
  });
  