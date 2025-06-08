import {FC} from "react";
import {Product} from "..";
import styles from './index.module.scss'

interface Props {
    product: Product
}

export const ProductCard: FC<Props> = ({product}: Props) => {

    return (
        <div className={styles.productContainer}>
            <img src='/image%202.png'/>
            <div className={styles.info}>
                <p>{product.name}</p>
                <p>{product.type}</p>
                <p className={styles.price}><img src='/icons/coin.svg'/>{product.price}</p>
            </div>
        </div>
    )
}