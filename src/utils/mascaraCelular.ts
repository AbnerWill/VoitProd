export const mascaraCelular = numero => {
  numero = numero.replace(/\D/g, '')

  numero = numero.replace(/^(\d{2})(\d)/g, '($1)$2')

  numero = numero.replace(/(\d)(\d{4})$/, '$1-$2')

  return numero
}
