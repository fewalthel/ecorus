import {Link, NavLink} from "react-router-dom"
import styles from './index.module.scss'
import {FC, useEffect, useState} from "react";
import {useAppContext} from "../../AppContext.tsx";
import axiosConfig from "../../axiosConfig";
import {CitiesEntity} from "../../app/models/generated";

interface Props {
    setShowModal: (newValue: boolean) => void
}

export const Header: FC<Props> = ({setShowModal}: Props) => {
    const {isAuthenticated, user, setCity, city} = useAppContext()

    const [citiesList, setCitiesList] = useState<CitiesEntity[]>([])

    const fetchCities = async () => {
        try {
            const response = await axiosConfig.get('/api/cities')
            setCitiesList(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        (async () => fetchCities())()
    }, [])

    return <header className={styles.header}>
        <img src='/ecorus_logo.svg' className={styles.ecorus_logo}/>
        <nav className={styles.nav}>
            <NavLink to='/' className={({isActive}) => isActive ? styles.active : styles.default}>Главная</NavLink>
            <NavLink to='/collectionPoints' className={({isActive}) => isActive ? styles.active : styles.default}>Пункты
                сбора</NavLink>
            <NavLink to='/ecoMarket'
                     className={({isActive}) => isActive ? styles.active : styles.default}>ЭкоМаркет</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? styles.active : styles.default}>О
                сервисе</NavLink>
        </nav>

        <div className={styles.linksContainer}>
            <div className={styles.city}>
                <img src='/icons/Pin.svg'/>
                <select onChange={(e) => {
                    const selectedCity: CitiesEntity | undefined = citiesList.find(city => city.name === e.target.value);
                    selectedCity ? setCity(selectedCity) : null;
                }}>
                    {citiesList.map((city) => (
                        <option key={city.id} value={city.name}>
                            {city.name}
                        </option>
                    ))}
                </select>
            </div>
            {isAuthenticated ?
                <>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src="/icons/coin.svg"/>
                        1000
                    </div>
                    <Link to="/profile">
                        <img src='/avatar.jpg' className={styles.avatar}/>
                        {user.firstName}</Link>
                </>
                : <button className={styles.sign_in_button} onClick={() => setShowModal(true)}>
                    <img src='/icons/Login.svg'/>
                    Войти
                </button>
            }
        </div>
    </header>
}