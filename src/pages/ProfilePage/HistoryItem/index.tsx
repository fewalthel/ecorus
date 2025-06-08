import {FC} from "react";
import styles from './index.module.scss'

interface Item {
    address: string
    date: string
    material: string[]
}

interface Props {
    item: Item
}

export const HistoryItem: FC<Props> = ({item}: Props) => {
    return (
        <div className={styles.container}>
            <p>Адрес: {item.address}</p>
            <p>Материал: {item.material}</p>
            <p>Дата: {item.date}</p>
        </div>
    )
}