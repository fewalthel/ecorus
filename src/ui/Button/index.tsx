import {FC} from 'react'
import styles from './index.module.scss'

interface Props {
    text: string
}

export const Button: FC<Props> = ({text}: Props) => {
    return (
        <button className={styles.button}>
            {text}
        </button>
    )
}