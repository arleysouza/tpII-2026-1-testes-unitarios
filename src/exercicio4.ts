export function calcularFrete(
  obterTaxaFrete: (cep: string) => number,
  cep: string,
  valorPedido: number,
): number {
  const taxa = obterTaxaFrete(cep);
  return valorPedido + taxa;
}
