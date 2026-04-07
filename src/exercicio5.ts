export function registrarLog(
  salvarLog: (mensagem: string) => void,
  mensagem: string,
): void {
  salvarLog(mensagem);
}
