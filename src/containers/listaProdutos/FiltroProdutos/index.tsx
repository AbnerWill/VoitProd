import { useState } from 'react'
import { CustomCheckbox } from '../../../components/CustomCheckbox'
import { WhatsappContact } from '../../../components/WhatsappContact'
import Styles from './styles.module.scss'

type Filtros =
  | 'Masculino'
  | 'Feminino'
  | 'Infantil'
  | 'Absorçao'
  | 'Impacto'
  | 'Leve'
  | 'Mizuno'
  | 'Nike'
  | 'Adidas'
  | '0-500'
  | '500-1500'
  | '1500'
  | 'Todas'
  | 'Descontaço'
  | 'Usado'
  | 'Preto'
  | 'Branco'
  | 'Azul'
  | 'Rosa'
  | 'Amarelo'
  | 'Vermelho'
  | 'Tecido'
  | 'Couro'
  | 'Camurça'
  | 'Lona'
  | 'Nobuk'
  | 'Verniz'

export function FiltroProdutos(): JSX.Element {
  const [filtros, setFiltros] = useState<Filtros[]>([])

  function removerFiltro(filtro: Filtros) {
    const newFiltros = [...filtros]

    const indexFiltro = newFiltros.findIndex(f => f === filtro)

    newFiltros.splice(indexFiltro, 1)

    setFiltros(newFiltros)
  }

  function adicionarFiltro(filtro: Filtros) {
    const newFiltros = [...filtros, filtro]

    console.log(newFiltros)

    setFiltros(newFiltros)
  }

  function toggleFiltro(filtro: Filtros) {
    filtros.find(f => f === filtro)
      ? removerFiltro(filtro)
      : adicionarFiltro(filtro)
  }

  function hasFiltro(filtro: Filtros) {
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
      <div>
        <h1>Gênero:</h1>
        <CustomCheckbox
          name="Masculino"
          onChange={() => toggleFiltro('Masculino')}
          checked={hasFiltro('Masculino')}
        />
        <CustomCheckbox
          name="Feminino"
          onChange={() => toggleFiltro('Feminino')}
          checked={hasFiltro('Feminino')}
        />
        <CustomCheckbox
          name="Infantil"
          onChange={() => toggleFiltro('Infantil')}
          checked={hasFiltro('Infantil')}
        />
      </div>
      <div>
        <h1>Característica:</h1>
        <CustomCheckbox
          name="Absorção"
          onChange={() => toggleFiltro('Absorçao')}
          checked={hasFiltro('Absorçao')}
        />
        <CustomCheckbox
          name="Impacto"
          onChange={() => toggleFiltro('Impacto')}
          checked={hasFiltro('Impacto')}
        />
        <CustomCheckbox
          name="Leve"
          onChange={() => toggleFiltro('Leve')}
          checked={hasFiltro('Leve')}
        />
      </div>
      <div>
        <h1>Marcas:</h1>
        <CustomCheckbox
          name="Mizuno"
          onChange={() => toggleFiltro('Mizuno')}
          checked={hasFiltro('Mizuno')}
        />
        <CustomCheckbox
          name="Nike"
          onChange={() => toggleFiltro('Nike')}
          checked={hasFiltro('Nike')}
        />
        <CustomCheckbox
          name="Adidas"
          onChange={() => toggleFiltro('Adidas')}
          checked={hasFiltro('Adidas')}
        />
      </div>
      <div>
        <h1>Preço:</h1>
        <CustomCheckbox
          name="R$0 ---- R$500"
          onChange={() => toggleFiltro('0-500')}
          checked={hasFiltro('0-500')}
        />
        <CustomCheckbox
          name="R$500 ---- R$1500"
          onChange={() => toggleFiltro('500-1500')}
          checked={hasFiltro('500-1500')}
        />
        <CustomCheckbox
          name="+ de R$1500"
          onChange={() => toggleFiltro('1500')}
          checked={hasFiltro('1500')}
        />
      </div>
      <div>
        <h1>Tags:</h1>
        <CustomCheckbox
          name="Todas"
          onChange={() => toggleFiltro('Todas')}
          checked={hasFiltro('Todas')}
        />
        <CustomCheckbox
          name="Descontaaaço"
          onChange={() => toggleFiltro('Descontaço')}
          checked={hasFiltro('Descontaço')}
        />
        <CustomCheckbox
          name="Usado"
          onChange={() => toggleFiltro('Usado')}
          checked={hasFiltro('Usado')}
        />
      </div>
      <div>
        <h1>Cor:</h1>
        <div className={Styles.grid}>
          <CustomCheckbox
            name="Preto"
            onChange={() => toggleFiltro('Preto')}
            checked={hasFiltro('Preto')}
          />
          <CustomCheckbox
            name="Branco"
            onChange={() => toggleFiltro('Branco')}
            checked={hasFiltro('Branco')}
          />
          <CustomCheckbox
            name="Azul"
            onChange={() => toggleFiltro('Azul')}
            checked={hasFiltro('Azul')}
          />
          <CustomCheckbox
            name="Rosa"
            onChange={() => toggleFiltro('Rosa')}
            checked={hasFiltro('Rosa')}
          />
          <CustomCheckbox
            name="Amarelo"
            onChange={() => toggleFiltro('Amarelo')}
            checked={hasFiltro('Amarelo')}
          />
          <CustomCheckbox
            name="Vermelho"
            onChange={() => toggleFiltro('Vermelho')}
            checked={hasFiltro('Vermelho')}
          />
        </div>
      </div>
      <div>
        <h1>Material:</h1>
        <div className={Styles.grid}>
          <CustomCheckbox
            name="Tecido"
            onChange={() => toggleFiltro('Tecido')}
            checked={hasFiltro('Tecido')}
          />
          <CustomCheckbox
            name="Couro"
            onChange={() => toggleFiltro('Couro')}
            checked={hasFiltro('Couro')}
          />
          <CustomCheckbox
            name="Camurça"
            onChange={() => toggleFiltro('Camurça')}
            checked={hasFiltro('Camurça')}
          />
          <CustomCheckbox
            name="Lona"
            onChange={() => toggleFiltro('Lona')}
            checked={hasFiltro('Lona')}
          />
          <CustomCheckbox
            name="Nobuk"
            onChange={() => toggleFiltro('Nobuk')}
            checked={hasFiltro('Nobuk')}
          />
          <CustomCheckbox
            name="Verniz"
            onChange={() => toggleFiltro('Verniz')}
            checked={hasFiltro('Verniz')}
          />
        </div>
      </div>
      <div className={Styles.whatsappContact}>
        <img src="/img-padrao.svg" alt="Default img" />
        <h1>Na dúvida chame nossos especialistas</h1>
        <WhatsappContact />
      </div>
    </aside>
  )
}
