import { InputHTMLAttributes } from 'react'
import Styles from './styles.module.scss'

interface CustomCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
}

export function CustomCheckbox(props: CustomCheckboxProps): JSX.Element {
  return (
    <div className={Styles.checkboxContainer}>
      <label className={Styles.checkbox}>
        <input type="checkbox" {...props} />
        <span className={Styles.checkmark}></span>
      </label>
      {props.name && <span className={Styles.label}>{props.name}</span>}
    </div>
  )
}
