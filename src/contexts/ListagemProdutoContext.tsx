/* eslint-disable camelcase */
import { createContext, Dispatch, useContext, useState } from 'react'

interface ListagemProdutosProviderProps {
  children: React.ReactNode
}

interface ListagemProdutosContextData {
  categoria_id: number
  subcategoria_id: number
  setCategoria_id: Dispatch<(prevState: number) => undefined>
  setSubcategoria_id: Dispatch<(prevState: number) => undefined>
  nome: string
  setNome: Dispatch<(prevState: string) => undefined>
}

const ListagemProdutosContext = createContext({} as ListagemProdutosContextData)

export function ListagemProdutosProvider({
  children
}: ListagemProdutosProviderProps): JSX.Element {
  const [categoria_id, setCategoria_id] = useState<number>()
  const [subcategoria_id, setSubcategoria_id] = useState<number>()
  const [nome, setNome] = useState<string>('')

  return (
    <ListagemProdutosContext.Provider
      value={{
        categoria_id,
        subcategoria_id,
        setCategoria_id,
        setSubcategoria_id,
        nome,
        setNome
      }}
    >
      {children}
    </ListagemProdutosContext.Provider>
  )
}

export const useListagemProdutos = () => useContext(ListagemProdutosContext)
