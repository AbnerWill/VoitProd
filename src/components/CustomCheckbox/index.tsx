import { InputHTMLAttributes } from 'react'
import Styles from './styles.module.scss'

interface CustomCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
}

export function CustomCheckbox({
  name,
  ...rest
}: CustomCheckboxProps): JSX.Element {
  return (
    <div className={Styles.checkboxContainer}>
      <label className={Styles.checkbox}>
        <input type="checkbox" {...rest} />
        <span className={Styles.checkmark}></span>
      </label>
      {name && <span className={Styles.label}>{name}</span>}
    </div>
  )
}
