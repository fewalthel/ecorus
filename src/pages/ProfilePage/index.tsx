// import styles from './index.module.scss'
import {FC} from "react";
import {UserCard} from "./UserCard";
import {SidePanel} from "./SidePanel";
import {useAppContext} from "../../AppContext";
import {NotFoundPage} from "@pages/NotFoundPage";
import styles from './index.module.scss'

export const ProfilePage: FC = () => {

    const {isAuthenticated} = useAppContext()


    return (isAuthenticated ?
        (
            <div className={styles.containerPage}>
                <h1>Личный кабинет</h1>
                <div className={styles.container}>
                    <UserCard/>
                    <SidePanel/>
                </div>
            </div>
        ) : <NotFoundPage/>)
}