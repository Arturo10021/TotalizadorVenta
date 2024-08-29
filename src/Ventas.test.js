import mostrarItemsCant from './Venta';

describe('Ventas', () => {
    it("Mostrar  Cantidad de Items", () => {
        expect(mostrarItemsCant(50)).toEqual(50);
      });
});