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
}

export function CustomDropdown(props: CustomDropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [name, setName] = useState<string>(props.initialValue || 'Selecione')
  const [dropdownProps, meta, helpers] = useField(props)

  function toggleIsOpen() {
    setIsOpen(!isOpen)
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
          className={Styles.options}
          style={{
            display: isOpen ? 'flex' : 'none'
          }}
        >
          {props.array
            ? props.array.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setName(item)
                    helpers.setValue(item)
                  }}
                >
                  {item}
                </div>
              ))
            : props.categorias
            ? props.categorias.map(categoria => (
                <div
                  key={categoria.categoria_id}
                  onClick={() => {
                    setName(categoria.nome)
                    helpers.setValue(categoria.categoria_id)
                  }}
                >
                  {categoria.nome}
                </div>
              ))
            : props.sub_categorias.map(subcategoria => (
                <div
                  key={subcategoria.subcategoria_id}
                  onClick={() => {
                    setName(subcategoria.nome)
                    helpers.setValue(subcategoria.subcategoria_id)
                  }}
                >
                  {subcategoria.nome}
                </div>
              ))}
        </div>
      </div>
    </label>
  )
}
