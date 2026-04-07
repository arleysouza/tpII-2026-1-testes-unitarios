export async function dobro(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Número inválido");
  }

  return n * 2;
}
