import { criarUsuario } from '../src/exercicio2';

describe('criarUsuario', () => {
  it('cria um usuário válido', () => {
    expect(criarUsuario('Ana', 20)).toEqual({ nome: 'Ana', idade: 20 });
  });

  it('lança erro quando o nome estiver vazio', () => {
    expect(() => criarUsuario('', 20)).toThrow('Nome obrigatório');
  });

  it('lança erro quando a idade for negativa', () => {
    expect(() => criarUsuario('Ana', -1)).toThrow('Idade inválida');
  });

  it('cria um usuário com nome contendo espaços', () => {
    expect(criarUsuario('João Silva', 20)).toEqual({
      nome: 'João Silva',
      idade: 20
    });
  });
});
