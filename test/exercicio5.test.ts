import { registrarLog } from '../src/exercicio5';

describe('registrarLog', () => {
  it('chama salvarLog com a mensagem informada', () => {
    const salvarLog = jest.fn();

    registrarLog(salvarLog, 'Usuário autenticado');

    expect(salvarLog).toHaveBeenCalledWith('Usuário autenticado');
  });
});
