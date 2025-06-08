import styles from './index.module.scss'
import {useAppContext} from "../../../AppContext";

export const UserCard = () => {
    const {user} = useAppContext()

    return <div className={styles.card}>
        <img className={styles.avatar} src="/avatar.jpg" alt="avatar"/>
        <p className={styles.name}>Светлана Бережная {user.firstName} {user.lastName}</p>
        <p className={styles.phoneNumber}>+7 (917) 888 88 88 {user.phoneNumber}</p>
        <p className={styles.email}>{user.email}</p>
        <button className={styles.editBtn}>Редактировать</button>
    </div>
}