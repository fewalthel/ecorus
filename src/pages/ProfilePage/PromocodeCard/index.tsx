import styles from "./index.module.scss";
import {FC} from "react";

export interface Promocode {
    date: string
    cost: number
    productLink: string
}

interface Props {
    promocode: Promocode
}

export const PromocodeCard: FC<Props> = ({promocode}: Props) => {
    return <div className={styles.promocodeCard}>
        <img src='/promocode_card.svg'/>
        <div className={styles.info}>
            <p className={styles.dateLabel}>Дата создания:</p>
            <p className={styles.date}>{promocode.date}</p>
            <p className={styles.linkLabel}>Ссылка на товар:</p>
            <a className={styles.link}>{promocode.productLink}</a>
        </div>
        <button className={styles.showQRButton}>Показать qr-код</button>
    </div>
}