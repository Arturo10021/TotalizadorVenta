import {mostrarItemsCant, mostrarPrecio} from "./Venta";


const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const form = document.querySelector("#form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const NumeroCantidad = Number.parseInt(cantidad.value);
  const NumeroPrecio = Number.parseInt(precio.value);

  div.innerHTML = "<p> La cantidad de items es: " + mostrarItemsCant(NumeroCantidad) + "</p><br>";
  div.innerHTML = "<p> El precio del item es: " + mostrarPrecio(NumeroPrecio) + "</p>";
});
