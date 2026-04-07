# Testes Unitários com Jest

Este projeto foi preparado para servir como base de estudo de testes unitários com `Jest` em `TypeScript`.

O objetivo é mostrar, de forma progressiva, como testar:

- funções síncronas
- retorno de objetos
- lançamento de erros
- funções assíncronas
- dependências simuladas com `mock`
- chamadas monitoradas com `spy`

## O que é um teste unitário?

Um teste unitário verifica o comportamento de uma unidade pequena do sistema, normalmente uma função.

A ideia é responder perguntas como:

- se eu passar determinada entrada, qual deve ser a saída?
- se eu passar um valor inválido, a função deve lançar erro?
- a função chamou uma dependência externa da forma esperada?

Em vez de testar a aplicação inteira de uma vez, testamos partes menores isoladamente. Isso facilita encontrar erros e dá mais segurança ao refatorar o código.

## Estrutura do projeto

```text
src/
  exercicio1.ts
  exercicio2.ts
  exercicio3.ts
  exercicio4.ts
  exercicio5.ts
  exercicio6.ts

test/
  exercicio1.test.ts
  exercicio2.test.ts
  exercicio3.test.ts
  exercicio4.test.ts
  exercicio5.test.ts
  exercicio6.test.ts
```

- `src/`: arquivos com o código a ser testado
- `test/`: arquivos com os testes unitários

## Como executar

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npm test
```

Execute em modo de observação:

```bash
npm run test:watch
```

Compilar o projeto TypeScript:

```bash
npm run build
```

## Estrutura básica de um teste

Um teste com Jest normalmente usa três elementos:

- `describe`: agrupa testes de uma mesma função ou cenário
- `it`: define um caso de teste específico
- `expect`: faz a verificação do resultado

Exemplo:

```ts
describe('soma', () => {
  it('deve somar dois valores', () => {
    expect(2 + 3).toBe(5);
  });
});
```

## Matchers mais usados neste projeto

Matchers são os métodos usados após o `expect(...)` para verificar o comportamento esperado.

### `toBe`

Usado para comparar valores primitivos, como números, strings e booleanos.

```ts
expect(calcularMedia([10])).toBe(10);
```

### `toEqual`

Usado para comparar objetos e arrays por conteúdo.

```ts
expect(criarUsuario('Ana', 20)).toEqual({ nome: 'Ana', idade: 20 });
```

### `toBeCloseTo`

Usado para comparar números decimais, evitando problemas de precisão.

```ts
expect(calcularMedia([7.5, 8.5])).toBeCloseTo(8);
```

### `toThrow`

Usado para verificar se uma função lança erro.

Importante: a função deve ser passada dentro de outra função.

```ts
expect(() => criarUsuario('', 20)).toThrow('Nome obrigatório');
```

## Testando funções assíncronas

Quando uma função retorna `Promise`, o teste também precisa tratar esse comportamento.

Neste projeto isso aparece no `exercicio3.ts`.

### `resolves`

Verifica o valor resolvido por uma `Promise`.

```ts
await expect(dobro(2)).resolves.toBe(4);
```

### `rejects`

Verifica se a `Promise` foi rejeitada com erro.

```ts
await expect(dobro(-1)).rejects.toThrow('Número inválido');
```

## Mocks com `jest.fn()`

Mock é uma versão simulada de uma dependência.

Isso é útil quando uma função depende de outra função externa, mas você quer testar apenas a lógica principal.

No `exercicio4.ts`, a função recebe uma dependência chamada `obterTaxaFrete`.

Em vez de usar uma implementação real, usamos:

```ts
const obterTaxaFrete = jest.fn().mockReturnValue(20);
```

Esse código diz:

- crie uma função simulada
- quando ela for chamada, retorne `20`

Depois disso, o teste valida o resultado final:

```ts
expect(resultado).toBe(120);
```

## Verificando chamadas com `toHaveBeenCalledWith`

Às vezes o mais importante não é o retorno da função, mas sim verificar se ela chamou outra função corretamente.

No `exercicio5.ts`, a função `registrarLog` deve repassar a mensagem para `salvarLog`.

O teste usa:

```ts
expect(salvarLog).toHaveBeenCalledWith('Usuário autenticado');
```

Isso significa:

- a dependência foi chamada
- os argumentos usados foram exatamente os esperados

## Spies com `jest.spyOn()`

Um `spy` observa um método real de um objeto.

Ele é útil quando você quer confirmar que um método foi chamado, sem necessariamente substituir toda a implementação manualmente.

No `exercicio6.ts`, usamos:

```ts
const somarSpy = jest.spyOn(calculadora, 'somar');
```

Depois executamos:

```ts
executarSoma(2, 3);
```

E verificamos:

```ts
expect(somarSpy).toHaveBeenCalledWith(2, 3);
```

No final, restauramos o método original:

```ts
somarSpy.mockRestore();
```

## O que cada exercício ensina

### Exercício 1

Arquivo: [src/exercicio1.ts](/mnt/d/pessoal/fatec/jacarei/DSM/Técnicas%20de%20programação%20II/exemplo/aula8-jest/app/src/exercicio1.ts)

Conceitos:

- testes com números inteiros e decimais
- comparação com `toBe`
- comparação com `toBeCloseTo`
- validação de erro com `toThrow`

### Exercício 2

Arquivo: [src/exercicio2.ts](/mnt/d/pessoal/fatec/jacarei/DSM/Técnicas%20de%20programação%20II/exemplo/aula8-jest/app/src/exercicio2.ts)

Conceitos:

- teste de retorno de objeto
- uso de `toEqual`
- validação de regras de negócio com erro

### Exercício 3

Arquivo: [src/exercicio3.ts](/mnt/d/pessoal/fatec/jacarei/DSM/Técnicas%20de%20programação%20II/exemplo/aula8-jest/app/src/exercicio3.ts)

Conceitos:

- testes assíncronos
- `Promise`
- `resolves`
- `rejects`

### Exercício 4

Arquivo: [src/exercicio4.ts](/mnt/d/pessoal/fatec/jacarei/DSM/Técnicas%20de%20programação%20II/exemplo/aula8-jest/app/src/exercicio4.ts)

Conceitos:

- isolamento de dependências
- `jest.fn()`
- `mockReturnValue`

### Exercício 5

Arquivo: [src/exercicio5.ts](/mnt/d/pessoal/fatec/jacarei/DSM/Técnicas%20de%20programação%20II/exemplo/aula8-jest/app/src/exercicio5.ts)

Conceitos:

- verificação de chamada de dependência
- `toHaveBeenCalledWith`

### Exercício 6

Arquivo: [src/exercicio6.ts](/mnt/d/pessoal/fatec/jacarei/DSM/Técnicas%20de%20programação%20II/exemplo/aula8-jest/app/src/exercicio6.ts)

Conceitos:

- observação de método real
- `jest.spyOn()`
- restauração com `mockRestore()`

## Boas práticas para os alunos

- crie um teste para cada comportamento importante
- use nomes descritivos nos blocos `it(...)`
- teste casos válidos e inválidos
- não misture muitos comportamentos diferentes no mesmo teste
- prefira testar a regra de negócio, não detalhes irrelevantes da implementação

## Resumo

Ao final deste material, o aluno terá contato com os principais fundamentos de testes unitários com Jest:

- organização de testes com `describe` e `it`
- verificações com `expect`
- comparação de valores e objetos
- tratamento de erros
- testes assíncronos
- criação de mocks
- uso de spies

Este repositório pode ser usado como base para novos exercícios, ampliando os cenários e introduzindo novos recursos do Jest conforme a disciplina evoluir.
