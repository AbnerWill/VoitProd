/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { CustomCheckbox } from '../../../components/CustomCheckbox'
import { WhatsappContact } from '../../../components/WhatsappContact'
import Styles from './styles.module.scss'

interface AtributosResponse {
  atributo_grupo_id: number
  nome: string
  atributo_grupo: {
    atributo_grupo_valor_id: number
    nome: string
  }[]
}

type atributos_grupo = {
  atributo_grupo_id: string
}

type atributos_grupo_valor = {
  atributo_grupo_id: string
  atributo_grupo_valor_id: string
}

interface FiltroProdutosProps {
  atributos: AtributosResponse[]
  atributosFiltro?: atributos_grupo[] | atributos_grupo_valor[]
  setAtributosFiltro?: (
    value: atributos_grupo[] | atributos_grupo_valor[]
  ) => void
}

export function FiltroProdutos({
  atributos,
  atributosFiltro,
  setAtributosFiltro
}: FiltroProdutosProps): JSX.Element {
  const [filtros, setFiltros] = useState([])

  function removerFiltro(filtro, atributoFiltro) {
    const newFiltros = [...filtros]
    const newAtributosFiltro = [...atributosFiltro]

    const indexFiltro = newFiltros.findIndex(f => f === filtro)
    const indexAtributoFiltro = newAtributosFiltro.findIndex(
      f => f === atributoFiltro
    )

    newFiltros.splice(indexFiltro, 1)
    newAtributosFiltro.splice(indexAtributoFiltro, 1)

    setFiltros(newFiltros)
    setAtributosFiltro(newAtributosFiltro)
  }

  function adicionarFiltro(filtro) {
    const newFiltros = [...filtros, filtro]

    setFiltros(newFiltros)
  }

  function toggleFiltro(filtro, atributoFiltro) {
    filtros.find(f => f === filtro)
      ? removerFiltro(filtro, atributoFiltro)
      : adicionarFiltro(filtro)
  }

  function hasFiltro(filtro) {
    return !!filtros.find(f => f === filtro)
  }

  return (
    <aside className={Styles.container}>
      {filtros.length > 0 && (
        <div className={Styles.filtersSelected}>
          <h1>Filtros:</h1>
          {filtros.map((filtro, index) => (
            <div key={index}>
              <span>{filtro}</span>
              <span className={Styles.separator}></span>
              <button type="button" onClick={() => removerFiltro(filtro)}>
                &#10006;
              </button>
            </div>
          ))}
        </div>
      )}
      {atributos?.map(atributo => (
        <div key={atributo.atributo_grupo_id}>
          <h1>{atributo.nome}:</h1>
          {atributo.atributo_grupo.map(atributo_valor => (
            <CustomCheckbox
              key={atributo_valor.atributo_grupo_valor_id}
              name={atributo_valor.nome}
              onChange={() => {
                toggleFiltro(atributo_valor.nome)
              }}
              checked={hasFiltro(atributo_valor.nome)}
            />
          ))}
        </div>
      ))}
      <div className={Styles.whatsappContact}>
        <img src="/img-padrao.svg" alt="Default img" />
        <h1>Na dúvida chame nossos especialistas</h1>
        <WhatsappContact />
      </div>
    </aside>
  )
}
