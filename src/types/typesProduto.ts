/* eslint-disable camelcase */

export interface Produto {
  produto_estoque_id: number
  data_adicionado: string
  estoque: string
  produto_id: number
  cor_id: number
  tamanho_id: number
}

export interface DadosProduto {
  produto_id: number
  data_adicionado: string
  codigo_produto: string
  nome: string
  descricao: string
  largura: string
  comprimento: string
  peso: string
  altura: string
  foto: string
  valor: number
  valor_com_desconto: number
  categoria_id: number
  subcategoria_id: number
  usuario_id: number
  loja_id: number
  produto_atributo: Array<{
    produto_atributo_id: number
    valor: string
  }>
}

export interface AtributosProduto {
  atributo_grupo_id: number
  data_adicionado: string
  nome: string
  categoria: {
    categoria_id: number
    nome: string
    descricao: string
  }
  subcategoria: {
    subcategoria_id: number
    nome: string
    descricao: string
  }
}

export interface DadosPublicosProduto {
  produto_id: number
  data_adicionado: string
  codigo_produto: string
  nome: string
  descricao: string
  altura: string
  largura: string
  comprimento: string
  peso: string
  foto: string
  valor: number
  valor_com_desconto: number
  categoria_id: number
  subcategoria_id: number
  usuario_id: number
  loja_id: number
}
