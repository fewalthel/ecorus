import styles from './index.module.scss'
import {FeatureCard} from "./FeatureCard";

export const FeaturesCardsContainer = () => {
    return (
        <div className={styles.cardsContainer}>
            <FeatureCard title={'Пункты сбора'}
                         description={'Посмотри, где в твоем городе можно сдать вторсырье на переработку'}
                         link={'/collectionPoints'} imagePath={'/vector_map.svg'}/>

            <FeatureCard title={'ЭкоМаркет '}
                         description={'Используй заработанные экокоины для покупки товаров из переработанных материалов'}
                         link={'/ecoMarket'} imagePath={'/ecomarket-img.svg'}/>
        </div>
    )
}