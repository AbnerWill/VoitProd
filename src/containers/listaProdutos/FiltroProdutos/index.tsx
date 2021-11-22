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

interface FiltroProdutosProps {
  atributos: AtributosResponse[]
}

export function FiltroProdutos({
  atributos
}: FiltroProdutosProps): JSX.Element {
  const [filtros, setFiltros] = useState([])

  function removerFiltro(filtro) {
    const newFiltros = [...filtros]

    const indexFiltro = newFiltros.findIndex(f => f === filtro)

    newFiltros.splice(indexFiltro, 1)

    setFiltros(newFiltros)
  }

  function adicionarFiltro(filtro) {
    const newFiltros = [...filtros, filtro]

    setFiltros(newFiltros)
  }

  function toggleFiltro(filtro) {
    filtros.find(f => f === filtro)
      ? removerFiltro(filtro)
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
