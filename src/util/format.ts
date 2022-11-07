export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});



export const cleanString =  (value: string) => {
  return value?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}