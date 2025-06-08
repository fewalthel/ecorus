import styles from './index.module.scss'

interface Props {
    sortBy: string
    setSortBy: (sortCritery: string) => void
}

export const SortsButtonsPanel = ({sortBy, setSortBy}: Props) => {
    return (
        <div className={styles.sortButtonsContainer}>
            <button onClick={() => setSortBy('popularity')}
                    className={sortBy == 'popularity' ? styles.active : styles.default}>По популярности
            </button>
            <button onClick={() => setSortBy('price')}
                    className={sortBy == 'price' ? styles.active : styles.default}>По цене
            </button>
            <button onClick={() => setSortBy('new')}
                    className={sortBy == 'new' ? styles.active : styles.default}>По новизне
            </button>
        </div>
    )
}
