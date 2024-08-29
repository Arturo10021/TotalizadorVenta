import mostrarItemsCant from './Venta';

describe('Ventas', () => {
    //HOLIIIIIII
    it("Mostrar  Cantidad de Items", () => {
        expect(mostrarItemsCant(50)).toEqual(50);
      });
});