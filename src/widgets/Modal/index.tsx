import styles from "./index.module.scss";
import {FC, useState} from "react";
import {SignInModal} from "./SignInModal";
import {SignUpModal} from "./SignUpModal";

interface Props {
    showModal: boolean
    setShowModal: (newValue: boolean) => void
}

export const Modal: FC<Props> = ({showModal, setShowModal}) => {
    const [currentModal, setCurrentModal] = useState<'Вход' | 'Регистрация'>('Вход');

    if (showModal)
        return (
            <div className={styles.overlay}>
                {currentModal === 'Вход' ? (
                    <SignInModal showModal={showModal} setShowModal={setShowModal} setCurrentModal={setCurrentModal}/>
                ) : (
                    <SignUpModal showModal={showModal} setShowModal={setShowModal} setCurrentModal={setCurrentModal}/>
                )}
            </div>
        )
}