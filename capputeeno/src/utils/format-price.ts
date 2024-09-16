export function formatPrice(valueInCents: number) {
  const valorEmReais = valueInCents / 100
  return valorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}