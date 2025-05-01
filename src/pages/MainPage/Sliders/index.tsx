import styles from './index.module.scss'
import {Link} from "react-router-dom";
import {useRef} from "react";

export const Sliders = () => {


    const containerRef = useRef<HTMLDivElement>(null);

    const handleRef = (vw: number) => {
        if (containerRef.current) {
            const px = (vw * window.innerWidth) / 100;
            containerRef.current.scrollBy({left: px, behavior: 'smooth'});
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_for_scroll_buttons}>
                <button onClick={() => handleRef(-79.628)}>
                    <img src='/icons/arrow-left.svg'/>
                </button>
                <button onClick={() => handleRef(79.628)}>
                    <img src='/icons/arrow-right.svg'/>
                </button>
            </div>
            <div className={styles.sliders_container} ref={containerRef}>

                <div className={styles.first_slider}>
                    <div className={styles.slider_info}>
                        <h1>Сделаем мир чище</h1>
                        <h2>Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных
                            материалов</h2>
                        <Link to='/' className={styles.button}>Условия сервиса</Link>
                    </div>
                    <div className={styles.image}>
                        <img src='/recycling-concept-flat-lay%202%202.png'/>
                    </div>
                </div>

                <div className={styles.yellow_slider}>
                    <div className={styles.slider_info}>
                        <h1>А вы знали...</h1>
                        <h2>что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а
                            полиэтиленовых пакетов — от 100 до 200 лет? </h2>
                        <Link to='/' className={styles.button}>Узнать больше</Link>
                    </div>
                    <div className={styles.image}>
                        <img src='/слайд2%201.png'/>
                    </div>
                </div>

                <div className={styles.green_slider}>
                    <div className={styles.slider_info_second}>
                        <h1>Что с масками?</h1>
                        <h2>Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на
                            переработку.</h2>

                        <Link to='/' className={styles.button}>Пункты сбора масок</Link>
                    </div>
                    <div className={styles.image}>
                        <img src='/слайд3%201.png'/>
                    </div>
                </div>
            </div>

        </div>
    )
}