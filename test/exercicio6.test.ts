import { calculadora, executarSoma } from '../src/exercicio6';

describe('executarSoma', () => {
  it('chama calculadora.somar com os parâmetros corretos', () => {
    const somarSpy = jest.spyOn(calculadora, 'somar');

    executarSoma(2, 3);

    expect(somarSpy).toHaveBeenCalledWith(2, 3);

    somarSpy.mockRestore();
  });
});
