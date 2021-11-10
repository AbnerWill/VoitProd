/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import { useField } from 'formik'

import Styles from './styles.module.scss'

interface CustomDropdownProps {
  label: string
  name: string
  initialValue?: string
  array?: string[]
  contenttype:
    | 'strings'
    | 'categorias'
    | 'sub_categorias'
    | 'atributos'
    | 'cor'
    | 'tamanho'
  categorias?: {
    categoria_id: number
    nome: string
    descricao: string
  }[]
  sub_categorias?: {
    subcategoria_id: string
    nome: string
    descricao: string
  }[]
  atributos?: {
    atributo_grupo_id: number
    nome: string
    data_adicionado: string
    atributo_grupo: {
      atributo_grupo_valor_id: number
      data_adicionado: string
      nome: string
    }[]
  }[]
  cor?: {
    cor_id: number
    data_adicionado: string
    nome: string
    ordem: number
  }[]
  tamanho?: {
    tamanho_id: number
    nome: string
    ordem: number
    data_adicionado: string
  }[]
}

export function CustomDropdown(props: CustomDropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [name, setName] = useState<string>(props.initialValue || 'Selecione')
  const [dropdownProps, meta, helpers] = useField(props)

  function toggleIsOpen() {
    setIsOpen(!isOpen)
  }

  function switchOptions(type) {
    switch (type) {
      case 'strings':
        return props.array.map((item, index) => (
          <div
            className={Styles.options}
            key={index}
            onClick={() => {
              setName(item)
              helpers.setValue(item)
            }}
          >
            {item}
          </div>
        ))
      case 'categorias':
        return props.categorias.map(categoria => (
          <div
            className={Styles.options}
            key={categoria.categoria_id}
            onClick={() => {
              setName(categoria.nome)
              helpers.setValue(categoria.categoria_id)
            }}
          >
            {categoria.nome}
          </div>
        ))
      case 'sub_categorias':
        return props.sub_categorias.map(subcategoria => (
          <div
            className={Styles.options}
            key={subcategoria.subcategoria_id}
            onClick={() => {
              setName(subcategoria.nome)
              helpers.setValue(subcategoria.subcategoria_id)
            }}
          >
            {subcategoria.nome}
          </div>
        ))
      case 'atributos':
        return props.atributos.map(atributo => (
          <div key={atributo.atributo_grupo_id} className={Styles.optionGroup}>
            <strong>{atributo.nome}</strong>
            {atributo.atributo_grupo.map(valor_grupo => (
              <div
                key={valor_grupo.atributo_grupo_valor_id}
                onClick={() => {
                  setName(valor_grupo.nome)
                  helpers.setValue({
                    nome: valor_grupo.nome,
                    atributo_grupo_valor_id: valor_grupo.atributo_grupo_valor_id
                  })
                }}
              >
                {valor_grupo.nome}
              </div>
            ))}
          </div>
        ))
      case 'cor':
        return props.cor.map(cor => (
          <div
            className={Styles.options}
            key={cor.cor_id}
            onClick={() => {
              setName(cor.nome)
              helpers.setValue(cor.cor_id)
            }}
          >
            {cor.nome}
          </div>
        ))
      case 'tamanho':
        return props.tamanho.map(tamanho => (
          <div
            className={Styles.options}
            key={tamanho.tamanho_id}
            onClick={() => {
              setName(tamanho.nome)
              helpers.setValue(tamanho.tamanho_id)
            }}
          >
            {tamanho.nome}
          </div>
        ))
    }
  }

  return (
    <label className={Styles.customDropdown} {...props} {...dropdownProps}>
      <h2>{props.label}</h2>
      <div
        className={Styles.buttonDropdown}
        onClick={toggleIsOpen}
        style={{
          overflow: isOpen ? 'visible' : 'hidden',
          borderRadius: isOpen ? '18px 18px 0 0' : '18px'
        }}
      >
        <h2>
          {name}
          <img
            src="/arrowdown.svg"
            alt="Seta"
            className={Styles.arrow}
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(360deg)' }}
          />
        </h2>
        <div
          className={Styles.optionsContainer}
          style={{
            display: isOpen ? 'flex' : 'none'
          }}
        >
          <div className={Styles.optionsContent}>
            {switchOptions(props.contenttype)}
          </div>
        </div>
      </div>
    </label>
  )
}
