type Usuario = {
  nome: string;
  idade: number;
};

export function criarUsuario(nome: string, idade: number): Usuario {
  if (!nome) {
    throw new Error("Nome obrigatório");
  }

  if (idade < 0) {
    throw new Error("Idade inválida");
  }

  return { nome, idade };
}
