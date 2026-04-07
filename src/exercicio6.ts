export const calculadora = {
  somar(a: number, b: number): number {
    return a + b;
  },
};

export function executarSoma(a: number, b: number): number {
  return calculadora.somar(a, b);
}

