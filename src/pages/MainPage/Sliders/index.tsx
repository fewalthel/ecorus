import styles from './index.module.scss'
import {Link} from "react-router-dom";

export const Sliders = () => {
    return (<>
            <button>влево</button>
            <button>вправо</button>
            <div className={styles.sliders_container}>
                <div className={styles.yellow_slider}>
                    <div style={{marginTop:"2.75vw", marginLeft:'4vw', height:'13vw'}}>
                        <h1>А вы знали...</h1>
                        <h2>что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а
                            полиэтиленовых пакетов — от 100 до 200 лет? </h2>
                        <Link to='/' className={styles.button}>Узнать больше</Link>
                    </div>
                    <img src='/слайд2%201.png'/>
                </div>
            </div>
        </>
    )
}