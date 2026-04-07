import { calcularFrete } from '../src/exercicio4';

describe('calcularFrete', () => {
  it('calcula o valor final do pedido com a taxa de frete retornada pela dependência', () => {
    const obterTaxaFrete = jest.fn().mockReturnValue(20);

    const resultado = calcularFrete(obterTaxaFrete, '12345-678', 100);

    expect(resultado).toBe(120);
  });
});
