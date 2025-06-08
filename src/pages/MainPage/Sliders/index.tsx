import styles from './index.module.scss'
import {useRef} from "react";
import {Slider} from "./Slider";

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
                <button onClick={() => handleRef(-75.05)}>
                    <img src='/icons/arrow-left.svg'/>
                </button>
                <button onClick={() => handleRef(75.05)}>
                    <img src='/icons/arrow-right.svg'/>
                </button>
            </div>
            <div className={styles.sliders_container} ref={containerRef}>

                <Slider primaryText={'Сделаем мир чище'}
                        secondaryText={'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов'}
                        buttonText={'Условия сервиса'} pathToImage={'/recycling-concept-flat-lay%202%202.png'}
                        classname={'first_slider'}/>


                <Slider primaryText={'А вы знали...'}
                        secondaryText={'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?'}
                        buttonText={'Узнать больше'} pathToImage={'/слайд2%201.png'} classname={'yellow_slider'}/>


                <Slider primaryText={'Что с масками?'}
                        secondaryText={'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку'}
                        buttonText={'Пункты сбора масок'} pathToImage={'/слайд3%201.png'} classname={'green_slider'}/>
            </div>
        </div>
    )
}