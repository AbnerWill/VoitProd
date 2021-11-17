export const mascaraCep = cep => {
  cep = cep.replace(/\D/g, '')

  cep = cep.replace(/(\d{5})(\d{2})/, '$1-$2')

  return cep
}
