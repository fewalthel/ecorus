import {Link} from "react-router-dom";
import {FC} from "react";
import styles from './index.module.scss'

interface Props {
    title: string
    description: string
    link: string
    imagePath: string
}

export const FeatureCard: FC<Props> = ({title, description, link, imagePath}: Props) => {
    return (
        <div className={styles.featureCard}>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <Link to={link} className={styles.buttonLink}>
                    <img src='/icons/full-arrow-right.svg'/>
                </Link>
            </div>
            <img className={styles.featureImage}
                src={imagePath}/>
        </div>
    )
}