import {Link} from "react-router-dom";
import {FC} from "react";
import styles from './index.module.scss'

interface Props {
    primaryText: string
    secondaryText: string
    buttonText: string
    pathToImage: string
    classname: string
}

export const Slider: FC<Props> = ({primaryText, secondaryText, buttonText, pathToImage, classname}: Props) => {
    return (
        <div className={styles[classname]}>
            <div className={styles.slider_info}>
                <div className={styles.text_container}>
                    <strong className={styles.h1}>{primaryText}</strong>
                    <p className={styles.h2}>{secondaryText}</p>
                </div>
                <Link to='/' className={styles.button}>{buttonText}</Link>
            </div>
            <div className={styles.image}>
                <img src={pathToImage}/>
            </div>
        </div>
    )
}