import { calcularMedia } from "../src/exercicio1";

describe("calcularMedia", () => {
  it("calcula a média de valores inteiros", () => {
    expect(calcularMedia([10, 8, 6])).toBe(8);
  });

  it("calcula a média com valores decimais", () => {
    expect(calcularMedia([7.5, 8.5])).toBeCloseTo(8);
  });

  it("retorna o único valor da lista", () => {
    expect(calcularMedia([10])).toBe(10);
  });

  it("calcula a média de uma lista com zeros", () => {
    expect(calcularMedia([0, 0, 0])).toBe(0);
  });

  it("lança erro para lista vazia", () => {
    expect(() => calcularMedia([])).toThrow("Lista de notas vazia");
  });
});
