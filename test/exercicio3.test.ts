import { dobro } from '../src/exercicio3';

describe('dobro', () => {
  it('retorna o dobro de um número positivo', async () => {
    await expect(dobro(2)).resolves.toBe(4);
  });

  it('retorna zero quando o valor for zero', async () => {
    await expect(dobro(0)).resolves.toBe(0);
  });

  it('lança erro para número negativo', async () => {
    await expect(dobro(-1)).rejects.toThrow('Número inválido');
  });
});
