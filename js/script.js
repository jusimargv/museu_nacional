const btnVisita = document.getElementById("btn-visita");
const buttons = document.querySelectorAll("button");
btnVisita.addEventListener("click", () => {
  let buscar;
  for (const button of buttons) {
    if (button.checked === true) {
      buscar = button.value;
      break;
    }
  }
  output.innerText = buscar ? `Você selecionou ${buscar}` : "Nenhum campo  preenchido";
  console.log(buscar);
});