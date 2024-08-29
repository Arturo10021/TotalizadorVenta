import {mostrarItemsCant, mostrarPrecio} from './Venta';

describe('Ventas', () => {
    it("Mostrar  Cantidad de Items", () => {
        expect(mostrarItemsCant(50)).toEqual(50);
      });
    it("Mostrar Precio", () => {
        expect(mostrarPrecio(100)).toEqual(100);
      });
});