import { useField } from 'formik'
import { InputHTMLAttributes } from 'react'

import Styles from './styles.module.scss'

interface CustomFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  dirty?: boolean
}

export function CustomField(props: CustomFieldProps): JSX.Element {
  const [inputProps, meta] = useField(props)

  return (
    <label className={Styles.customInput}>
      <h2>{props.label}</h2>
      <input
        {...inputProps}
        {...props}
        id={props.name}
        className={props.dirty && meta.error && meta.touched ? Styles.erro : ''}
      />
      {props.dirty && meta.error && meta.touched && (
        <strong>{meta.error}</strong>
      )}
    </label>
  )
}
