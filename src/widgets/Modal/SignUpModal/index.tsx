import {useForm} from "react-hook-form";
import styles from './index.module.scss';
import {handleRegister} from "@api/auth.ts";
import {CreateUserDto, LanguageEnum} from "../../../app/models/generated";
import {Button} from "@ui/Button";
import {FC} from "react";

interface Props {
    showModal: boolean
    setShowModal: (newValue: boolean) => void
    setCurrentModal: (newValue: string) => void
}

export const SignUpModal: FC<Props> = ({showModal, setShowModal, setCurrentModal}: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm<CreateUserDto>();

    const onSubmit = (data: CreateUserDto) => {
        handleRegister({...data, language: LanguageEnum.RU});
    };

    return (
        showModal && (
            <div className={styles.signUpModal}>

                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '3vw'}}>
                    <strong>Регистрация</strong>
                    <button className={styles.closeButton} onClick={() => {
                        setShowModal(false)
                        setCurrentModal('Вход')
                    }}/>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Email"
                           {...register("email")}
                    />
                    {errors.email && <span>{errors.email.message}</span>}

                    <input type="password" placeholder="Пароль"
                           {...register("password")}
                    />
                    {errors.password && <span>{errors.password.message}</span>}

                    <Button text={'Зарегистрироваться'}/>
                </form>
            </div>

        )
    )
}