import mostrarItemsCant from "./Venta";


const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const NumeroCantidad = Number.parseInt(cantidad.value);

  div.innerHTML = "<p> La cantidad de items es: " + mostrarItemsCant(NumeroCantidad) + "</p>";
});
