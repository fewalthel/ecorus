import {Link} from "react-router-dom";
import styles from './index.module.scss'

export const Header = () => {
    return <header className={styles.header}>
        <img src='/ecorus_logo.svg' className={styles.ecorus_logo}/>
        <nav className={styles.nav}>
            <Link to='/'>Главная</Link>
            <Link to='/collectionPoints'>Пункты сбора</Link>
            <Link to='/ecoMarket'>ЭкоМаркет</Link>
            <Link to='/about'>О сервисе</Link>
        </nav>
        <div className={styles.city}>
            <img src='/icons/Pin.svg'/>
            Казань
        </div>
        <Link to='signIn' className={styles.sign_in_button}>
            <img src='/icons/Login.svg'/>
            Войти
        </Link>
    </header>
}