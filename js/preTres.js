function calcularHoraDormir() {
    let horaDespertar = document.getElementById("horaDespertar").value;
    let horaDespertarObj = new Date();
    let partesHora = horaDespertar.split(":");
    horaDespertarObj.setHours(partesHora[0]);
    horaDespertarObj.setMinutes(partesHora[1]);

    let ciclosDeseados = Math.floor(horaDespertarObj.getHours() * 60 / 90);

    let horaDormirObj = new Date(horaDespertarObj.getTime() - ciclosDeseados * 90 * 60000);
    let horaDormir = horaDormirObj.toLocaleTimeString();

    let resultado = "Para despertarte a las " + horaDespertar + " debes dormirte a las: " + horaDormir + ". Así dormirás " + ciclosDeseados + " ciclos REM.";

    document.getElementById("resultado").textContent = resultado;
  }