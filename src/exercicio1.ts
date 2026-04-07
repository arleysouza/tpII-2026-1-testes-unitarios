export function calcularMedia(notas: number[]): number {
  if (notas.length === 0) {
    throw new Error("Lista de notas vazia");
  }

  const soma = notas.reduce((acc, n) => acc + n, 0);
  return soma / notas.length;
}
